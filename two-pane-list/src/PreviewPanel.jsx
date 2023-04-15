export const PreviewPanel = ({ data }) => {
  const {content} = data
  return (
    <div className="panel">
      <div className="panel-heading">Content</div>
      <div className="panel-block">
        {content.length > 0 ? <p>{content.join('\n')}</p> : <p>Please select a title</p>}
      </div>
    </div>
  );
};
