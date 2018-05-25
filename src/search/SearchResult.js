import React from 'react';

const SearchResult = (props) => {
  return <button onClick={() => props.onReviewSelection(props.review)}>{props.review.display_title}</button>
}

export default SearchResult;