import {useState} from 'react'
import {Item} from './Item'

export const ItemList = ({ data }) => {
  const [items, setItems] = useState([]);
  const [newItemText, setNewItemText] = useState("");

  /**
   * Handle new item being added
   * @param {React.FormEvent} e 
   */
  const handleNewItemSubmit = (e) => {
    // stop default
    e.preventDefault();
    setItems([...items, newItemText]);
    // set to empty string again
    setNewItemText("");
  };

  /**
   * Handle deleting an item
   * @param {*} index 
   */
  const handleItemDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  /**
   * Handle editing an item
   * @param {number} index
   * @param {string} text
   */
  const handleItemEdit = (index, text) => {
    const newItems = [...items];
    newItems[index] = text;
    setItems(newItems);
  };

  /**
   * Handle text change
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const handleTextChange = (e) => {
    setNewItemText(e.target.value)
  }

  return (
    <div className="container mt-5">
      {items.length > 0 && items.map((item, index) => (
        <Item key={index} index={index} text={item} onDelete={handleItemDelete} onEdit={handleItemEdit} />
      ))}
      <hr/>
      <form onSubmit={handleNewItemSubmit}>
        <div className="field is-grouped">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="Enter new item"
              value={newItemText}
              required={true}
              onChange={handleTextChange}
            />
          </div>
          <div className="control">
            <button className="button is-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  );
}
