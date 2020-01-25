import React from 'react';

function Search({ usaNews, ENNews, healthNews }) {
    const goHome = ()=>{
        window.location = '/'
    }
 return (
  <div className="search">
   <div className="link" onClick={goHome}>Headlines</div>

   <div className="link" onClick={usaNews}>
    US Politics
   </div>
   <div className="link" onClick={ENNews}>
    Entertainment
   </div>
   <div className="link" onClick={healthNews}>
    Health
   </div>
  </div>
 );
}

export default Search;
