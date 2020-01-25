import React from 'react';

function Search({ usaNews, ENNews, healthNews }) {
 return (
  <div className="search">
   <div className="link" onClick={usaNews}>
    US Politics
   </div>
   <div className="link" onClick={ENNews}>
    Entertainment
   </div>
   <div className="link" onClick={healthNews}>
    Health
   </div>
   <div className="link">Technology</div>
  </div>
 );
}

export default Search;
