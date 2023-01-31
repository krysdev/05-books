// import 'bulma/css/bulma.css';
import { useState } from 'react';
import BookCreate from './components/BookCreate';

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {  // receives title from BookCreate.js
    console.log('Title from CREATE:', title)

  };

  return (
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  );
}

export default App;
