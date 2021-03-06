import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
// import SmallerCards from "../SmallerCards";
// import { getAPIData } from "./getAPIData";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import CountryCard from "./CountryCard";
import Divider from '@mui/material/Divider';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';
import { CardActionArea } from '@mui/material';

const DetailedNews = () => {
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
   <h1 style={{fontWeight:'800'}}>EXPLAINER: Why Did Russia Invade Ukraine?</h1>
   {/* <br></br> */}
   <p>Experts say the cause of the military conflict can be tied to a complicated history, Russia’s tensions with NATO and the ambitions of Vladimir Putin.</p>
   <p>By Elliott Davis Jr.</p>
   {/* <Divider orientation="vertical"flexItem />   */}
   <p>
Feb. 24, 2022, at 2:52 p.m.</p> 
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "20%"}}> 
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "30%"}}><SaveAltIcon/> save</span>
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "15%"}}><FacebookIcon style={{color:'blue'}}/></span>
<span style={{ display: "flex",
  justifyContent: "spaceBetween",
  width: "15%"}}><TwitterIcon style={{color:'lightblue'}}/></span>
</span> 
<br></br>


<Divider  flexItem />  
<br></br>
<Grid container spacing={3}>
  <Grid item xs={6} md={8}>
    <Card>
       <CardActionArea>
         <CardMedia
          component="img"
          height="500"
          image="https://www.usnews.com/dims4/USNEWS/db95dec/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F24%2F29%2F1ed405494b7abf70fbd94c284aa7%2Fgettyimages-1238720016.jpg"
          alt="green iguana"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            BEST COUNTRIES
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          A man sits outside his destroyed building after bombings on the eastern Ukraine town of Chuguiv, on Feb. 24.(ARIS MESSINIS/AFP VIA GETTY IMAGES)
           
          </Typography>
        

        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    <br></br>
    <Divider  flexItem /> 
    <br></br> 
    <p>Predictions of a full-scale Russian invasion of Ukraine came true in the early morning hours of Feb. 24.</p>
    <p>Russia had amassed up to 190,000 troops – according to reports from the U.S. – on Ukraine’s borders over the course of many months. The buildup of forces around Russia's neighbor and former Soviet Union state started in late 2021 and escalated earlier this year.</p>
   <p>Prior to the invasion, Russian President Vladimir Putin recognized the Russian-backed breakaway regions of Donetsk and Luhansk, both located in the disputed Donbas area, as “independent” people’s republics and ordered so-called “peacekeeping” troops into those areas.</p>
   <p>What started as a situation that was concerning but surrounded by hopes for dialogue and diplomacy has evolved into what the Ukrainian foreign minister described as the “most blatant act of aggression in Europe since” World War II.</p>
 
   <Grid container spacing={3}>
  <Grid item xs={6} md={8}>
    <Card>
       <CardActionArea>
         <CardMedia
          component="img"
          height="500"
          image="data:image/jpeg;base64,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"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'800'}}>
            Photos : War in Ukraine
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
          A man sits outside his destroyed building after bombings on the eastern Ukraine town of Chuguiv, on Feb. 24.(ARIS MESSINIS/AFP VIA GETTY IMAGES)
           
          </Typography> */}
        

        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
 
    </div>
  );
};

export default DetailedNews;
