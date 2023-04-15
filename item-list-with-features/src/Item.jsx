import {useState} from 'react'

export const Item = ({ index, text, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newItemText, setNewItemText] = useState(text);

  const handleDelete = () => {
    onDelete();
  };

  /**
   * Handle text change
   * @param {React.ChangeEvent<HTMLInputElement>} e 
   */
  const handleTextChange = (e) => {
      setNewItemText(e.target.value)
  }

  /**
   * Trigger displaying the form
   */
  const handleEdit = () => {
    setIsEditing(true);
  };
  
  /**
   * Send new text payload to parent 
   * @param {React.FormEvent} e
   */
  const handleSave = (e) => {
    e.preventDefault();
    onEdit(index, newItemText);
    setIsEditing(false);
  };


  return (
    <div className="columns mb-2">
      <div className="column is-10">
        {isEditing ? (
          <form onSubmit={handleSave}>
            <input
              className="input"
              type="text"
              value={newItemText}
              onChange={handleTextChange}
            />
          </form>
        ) : (
          <p>{text}</p>
        )}
      </div>
      <div className="column is-2">
          <div className="buttons is-right">
            <button className="button is-small is-warning mr-1" onClick={handleEdit}>
              Edit
            </button>
            <button className="button is-small is-danger" onClick={handleDelete}>
              Delete
            </button>
          </div>
      </div>
    </div>
  );
};