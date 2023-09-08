const Quotes = ({ author, content, tag }) => {
  return (
    <blockquote>
      {content}
      <div className="author">
        &mdash;
        <cite> {author} </cite>
      </div>
    </blockquote>
  );
};

export default Quotes;
