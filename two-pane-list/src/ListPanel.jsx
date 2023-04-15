export const ListPanel = ({ data, onClickHandler }) => {
  return (
    <div className="panel is-primary">
      <p className="panel-heading">Titles</p>
      <div className="panel-block">
        <ul className="menu-list">
          {data.map((item, index) => (
            <li key={index}>
              <button
                className="button is-text"
                onClick={() => onClickHandler(index)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
