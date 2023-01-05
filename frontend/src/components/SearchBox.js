import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBox() {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const submitHandler = e => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/search/${keyword}`);
    } else {
      navigate('/');
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
