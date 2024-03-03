import React from 'react';
import '../styles/searchresults.css';

const SearchResults = ({ results }) => {
  let id = 0;
  if(!results.length) {
    return <p>No results</p>
  } else {
    return (
      <>
        {results.map((result, index) => {
          return <img className='search-result-image' src={result} alt={`search result: ${index}`} data-testid='search-result-image' key={id++} />
        })}
      </>
    );
  }
}

export default SearchResults;