import BookShow from './BookShow';

function BookList({ books, onDelete }) {
  const renderedBooks = books.map((el) => {
    return <BookShow key={el.id} book={el} onDelete={onDelete}/>;
  });

  return <div className='book-list'>{renderedBooks}</div>;
}

export default BookList;
