import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Search"
        name="query"
        onChange={e => setKeyword(e.target.value)}
      />
      <button type="submit">
        <i className="fal fa-search"></i>
      </button>
    </form>
  );
}

export default SearchBox;
