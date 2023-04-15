export const PreviewPanel = ({ data }) => {
  const {content} = data
  return (
    <div className="panel">
      <div className="panel-heading">Content</div>
      <div className="panel-block">
        <div className="content">
          {content.length > 0 ? (
              content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>Please select a title</p>
            )}
        </div>
      </div>
    </div>
  );
};
