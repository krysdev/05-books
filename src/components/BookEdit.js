import { useState } from 'react';

function BookEdit({ bookTitle }) {
  const [updatedTitle, setUpdatedTitle] = useState(bookTitle);

  const handleChange = (e) => {
    setUpdatedTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(updatedTitle);
  };

  return (
    <form className='book-edit' onSubmit={onSubmit}>
      <input className='input' value={updatedTitle} onChange={handleChange} type="text" />
      <button className='button' onClick={onSubmit}>Save</button>
    </form>
  );
}

export default BookEdit;
