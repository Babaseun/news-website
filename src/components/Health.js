import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Health() {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    const API_KEY = "e6221e72e0ef4e0cb0b75aba9dbf4426";
    const API = `https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API_KEY}`;

    axios
      .get(API)
      .then((response) => {
        setarticles(response.data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="headlines">
      <h1 className="title header-headlines">Health</h1>

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
                  {article.description}{" "}
                  <Link to={`/health/${index}`}>Read More</Link>
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

export default Health;
