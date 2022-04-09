import React, { useEffect, useState } from "react";

export const Sample = () => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    fetch("/sample")
      .then((res) => res.json())
      .then((articles) => setArticle(articles));
  },[]);

  console.log(articles) 
  return <div>This is a sample</div>;
};
