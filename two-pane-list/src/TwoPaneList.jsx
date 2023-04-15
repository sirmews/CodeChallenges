import {useState} from "react"
import { ListPanel } from "./ListPanel";
import { PreviewPanel } from "./PreviewPanel";

export const TwoPaneList = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  /**
   * A function to handle the click event on a title
   * @param {number} index
   * @returns {void}
   */
  const handleTitleClick = (index) => {
    setSelectedItem(index);
  };
  
  return (
    <div className="columns">
      <div className="column is-one-third">
        <ListPanel data={data} onClickHandler={handleTitleClick} />
      </div>
      <div className="column">
        <PreviewPanel data={data[selectedItem]} />
      </div>
    </div>
  );
};
