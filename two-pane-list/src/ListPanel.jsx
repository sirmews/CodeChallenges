export const ListPanel = ({ data, onClickHandler }) => {
  return (
    <div className="panel is-primary" data-testid="list-panel">
      <p className="panel-heading">Titles</p>
      <div className="panel-block">
        <ul className="menu-list" style={{ width: "100%" }}>
          {data.map((item, index) => (
            <li key={index}>
              <button
                className="button is-text is-fullwidth is-justify-content-flex-start"
                onClick={() => onClickHandler(index)}
                data-testid="title-button"
              >
                <span className='is-clipped' style={{textOverflow: "ellipsis"}}>{item.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
