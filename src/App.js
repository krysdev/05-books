import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const random = Math.round(Math.random() * 99999)

  const createBook = (title) => {    // receives title from BookCreate.js (it is called 'word' there)
    // console.log('Title/word from CREATE:', title)
    const updatedBooksArrayState = [
      ...books,
      { id: random, title: title },
    ];
    setBooks(updatedBooksArrayState);
  };

  console.log(books);
  
  return (
    <div>
      books.length: {books.length}
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
