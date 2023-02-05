function BookShow({ book, onDelete }) {
  const handleClick = () => {
    onDelete(book.id);
  };
  return (
    <div className="book-show">
      {/* {book.id} -  */}
      {book.title}
      <div className="actions">
        <button className="delete" onClick={handleClick}>X (css)</button>
      </div>
    </div>
  );
}

export default BookShow;
