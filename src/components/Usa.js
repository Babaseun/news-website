import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNewsUSA } from '../Redux/rest/usa';

function Usa() {
 const articles = useSelector((state) => state.US.headlinesUSA);

 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(fetchNewsUSA());
 }, [dispatch]);

 return (
  <div className="headlines">
   <h1 className="title header-headlines">Usa News</h1>

   <div>
    <div className="section-container">
     {articles.map((article, index) => (
      <div key={index} className="section">
       <div className="img-section">
        <img
         className="url-img"
         src={article.urlToImage}
         alt={article.urlToImage}
        />
       </div>
       <div className="section-title">
        <h1 className="title">{article.title}</h1>
        <hr />
       </div>
       <div className="section-description">
        <p>
         {article.description} <Link to="">Read More</Link>
        </p>
        <hr />
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default Usa;
