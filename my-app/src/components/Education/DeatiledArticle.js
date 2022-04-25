import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
// import SmallerCards from "../SmallerCards";
// import { getAPIData } from "./getAPIData";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
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
import { getEducationArticleAPIData } from "../pages/getAPIData";

const DetailedArticle = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getEducationArticleAPIData().then((data)=>{
      setArticle(data.results[0]);

    })

  }, []);

  console.log(article);

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
        <Typography color="text.primary">Education</Typography>
      </Breadcrumbs>
      <br />
   <h1 style={{fontWeight:'800'}}>
   {article.title}
</h1>
   {/* <br></br> */}
   <p>{article.description}</p>
   <p>By {article.creator} 
</p>
   {/* <Divider orientation="vertical"flexItem />   */}
   <p>
   {article.pubDate}</p> 
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
          image={article.image_url}
          alt="green iguana"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            BEST COUNTRIES
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          {article.description}
           
          </Typography>
        

        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    <br></br>
    <Divider  flexItem /> 
    <br></br> 
    <p>{article.content}</p>

   <Grid container spacing={3}>
  <Grid item xs={6} md={8}>
    <Card>
       <CardActionArea>
         <CardMedia
          component="img"
          height="500"
          image="https://www.usnews.com/dims4/USNEWS/19effde/2147483647/crop/1800x1200%2B0%2B1/resize/303x202/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F40%2F6e%2Ff539cb224e88a30f8e17d7088103%2F210409-basisorovalley2-submitted.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'800'}}>
            Photos : Public High Schools
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

export default DetailedArticle;
