import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
import SmallerCards from "../SmallerCards";
import { getAPIData } from "./getAPIData";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAPIData("business").then((data) => {
      console.log(data);
      setArticles(data.articles);
    });
  }, []);

  console.log(articles);

  return (
    <div>
      <br />
      <MainCard title="TRENDING NEWS" subtitle="Find your trending news on our homepage" />
      <br />
      {/* <SmallerCards />
        <br />
        <SmallerCards /> */}

      {articles.map((article) => (
        <SmallerCards key={article.title} article={article} />
        
      ))}
    </div>
  );
};

export default Home;
