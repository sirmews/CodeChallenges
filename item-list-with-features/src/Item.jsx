export const Item = ({ text, onDelete }) => {

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div className="columns mb-2">
      <div className="column is-10">
          <p>{text}</p>
      </div>
      <div className="column is-2">
          <div className="buttons is-right">
            <button className="button is-small is-warning mr-1">
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