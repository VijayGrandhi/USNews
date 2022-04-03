import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
// import SmallerCards from "../SmallerCards";
// import { getAPIData } from "./getAPIData";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CountryCard from "./CountryCard";

const CountryMainPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // getAPIData("business").then((data) => {
    //   console.log(data);
    //   setArticles(data.articles);
    // });
  }, []);

  console.log(articles);

  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        {/* <Link
          underline="hover"
          color="inherit"
          href="/getting-started/installation/"
        >
          Core
        </Link> */}
        <Typography color="text.primary">Best Countries</Typography>
      </Breadcrumbs>
      <br />
      <CountryCard/>
      {/* <MainCard title="HOME" subtitle="This is the homepage" /> */}
      <br />
      {/* <SmallerCards />
        <br />
        <SmallerCards /> */}

      {/* {articles.map((article) => (
        <SmallerCards key={article.title} article={article} />
        
      ))} */}
    </div>
  );
};

export default CountryMainPage;
