import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import './LatestNews.css'

export default function LatestNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    let { data } = await axios.get(
      "https://newsapi.org/v2/everything?q=Apple&from=2022-07-27&sortBy=popularity&apiKey=bb346e7a6bd04cf78c6d6c51d46cc5be"
    );
    setNews(data.articles);
  };

  const someNews = news.slice(3, 7);

  return (
    <>
      <div className="container py-2 mb-5">
      <h2 className="text-center my-5 dark-text">Latest News</h2>
        <div className="row align-items-stretch">
          {someNews.map((article, index) => (
            <div key={index} className="col-md-6 col-xl-3 my-2 d-flex align-items-stretch">
            <Card>
              <figure style={{ height: "200px" }}>
                <Card.Img
                  variant="top"
                  className="w-100 h-100"
                  src={article.urlToImage}
                />
              </figure>
              <Card.Body>
                <Card.Title>
                  <h4 className="dark-text mt-0">{article.title.substring(0, 35) + " ..."}</h4>
                </Card.Title>
                <Card.Text className="green-text">
                  {article.content.substring(0, 150) + "..."}
                </Card.Text>

                <Link
                  className="text-decoration-none"
                  to={`/allNews/${article.title}`}
                  state={{ singleNews: article }}
                  
                >
                  <Button
                    className=" shadow-none mx-auto d-block card-btn"
                    variant="primary"
                  >
                    Show Details
                  </Button>
                </Link>
              </Card.Body>
            </Card>
            </div>
          ))}
        </div>

        <Link className="text-decoration-none" to="/allNews">
          <Button
            className="d-block m-auto mt-3 px-4 py-2 home-btn"
            style={{
              boxShadow: "none",
              backgroundColor: "#08A045",
              border: "#628B48",
            }}
            variant="primary"
          >
            See More
          </Button>
        </Link>
      </div>
    </>
  );
}
