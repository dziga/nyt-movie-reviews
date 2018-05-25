import React from 'react';
import './SearchInput.css';

const SearchInput = (props) => {
  return <div> <input className="searchInput" onChange={props.handler} placeholder="search..."/> </div>
}

export default SearchInput;