import React, { useEffect, useState } from "react";
import { Badge } from "react-bootstrap";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let apikey = "1371c644d9a3a092a40b03fb1acfdd7d";

    let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=in&max=10&apikey=${apikey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div className="text-center">
      <h2 className="text-center m-2">
        Latest <Badge className="bg-danger">News</Badge>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image}
            url={news.url}
          />
        );
      })}
    </div>
  );
};

export default NewsBoard;
