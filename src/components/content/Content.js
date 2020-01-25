import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Content({ match }) {
 const { contentID } = match.params;
 const [article, setarticles] = useState([]);

 useEffect(() => {
  const API_KEY = '5bfaf80040e24d87b38a79a85168ecf7';
  const API = `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}`;

  axios
   .get(API)
   .then((response) => {
    setarticles(response.data.articles[Number(contentID)]);
   })
   .catch((err) => console.log(err));
 }, [contentID]);

 return (
  <div className="details-container">
   <div className="details-content">
    <div>
     <h1 className="details-title">{article.title}</h1>
    </div>
    <div>
     <img src={article.urlToImage} alt={article.title} />
    </div>
    <div>
     <small>{article.author}</small>
    </div>
    <div>{article.content}</div>
   </div>
  </div>
 );
}

export default Content;
