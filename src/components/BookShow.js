import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onDelete }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
    // console.log(showEdit)
  };
  return (
    <div className="book-show">
      {/* {book.id} -  */}
      {showEdit ? <BookEdit bookTitle={book.title}/> : <h3>{book.title}</h3>}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit (managed by css)
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          X (managed by css)
        </button>
      </div>
    </div>
  );
}

export default BookShow;
