import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

const TEST = [
  { id: 1, title: 'aaa' },
  { id: 2, title: 'bbb' },
];

function App() {
  const [books, setBooks] = useState(TEST); // []

  const random = Math.round(Math.random() * 99999);

  const createBook = (title) => {   // receives title from BookCreate.js (it is called 'word' there)
    
    // console.log('Title/word from CREATE:', title)
    
    const updatedBooksArrayState = [...books, { id: random, title: title }];
    setBooks(updatedBooksArrayState);
  };

  const deleteBookByID = (idToRemove) => {
    // console.log(idToRemove)
    const updatedBooks = books.filter((booksArrayElement, index) => { //index not needed here
      return booksArrayElement.id !== idToRemove;
    });
    setBooks(updatedBooks);
  };

  // console.log(books);

  return (
    <div className="app">
      {/* books.length: {books.length} */}
      <BookList books={books} onDelete={deleteBookByID} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
