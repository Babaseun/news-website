import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNewsNG } from "../Redux/rest/index";

function Headlines() {
  const articles = useSelector((state) => state.NG.headlinesNG);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNewsNG());
  }, [dispatch]);
  console.log(articles);

  return (
    <div className="headlines">
      <h1 className="title header-headlines">Headlines</h1>

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
                  <Link to={`/headlines/${index}`}>Read More</Link>
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

export default Headlines;
