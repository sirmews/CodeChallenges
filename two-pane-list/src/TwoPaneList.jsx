import { ListPanel } from "./ListPanel";
import { PreviewPanel } from "./PreviewPanel";

export const TwoPaneList = ({ data }) => {
  /**
   * A function to handle the click event on a title
   * @param {number} index
   * @returns {void}
   */
  const handleTitleClick = (index) => {
    console.log("Title clicked:", data[index].title);
    // update state or perform other actions as needed
  };
  return (
    <div className="columns">
      <div className="column is-one-third">
        <ListPanel data={data} onClickHandler={handleTitleClick} />
      </div>
      <div className="column">
        <PreviewPanel content={data[0]?.content} />
      </div>
    </div>
  );
};
