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

const ElectionDetailed = () => {
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
        <Typography color="text.primary">Elections</Typography>
      </Breadcrumbs>
      <br />
   <h1 style={{fontWeight:'800'}}>Michelle Wu’s Win in Boston Caps a Night of Historic Firsts</h1>
   {/* <br></br> */}
   <p>Boston’s mayoral race was just one of the country’s history-making contests during Tuesday’s off-year elections.</p>
   <p>By Lauren Camera
</p>
   {/* <Divider orientation="vertical"flexItem />   */}
   <p>
   
Nov. 3, 2021, at 9:49 a.m.</p> 
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
          image="https://www.usnews.com/dims4/USNEWS/e942e51/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F8f%2F0a%2Fce6457d54c9cae0c543553513426%2F211103electionsboston-editorial.jpg"
          alt="green iguana"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            BEST COUNTRIES
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          Boston Mayor-elect Michelle Wu greets supporters at her election night party, Tuesday Nov. 2, 2021, in Boston. 
           
          </Typography>
        

        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    <br></br>
    <Divider  flexItem /> 
    <br></br> 
    <p>In Boston – a city notorious for sending white men to city hall – voters found in Michelle Wu their first woman mayor, their first mayor of color and their first mayor who is also a mother, elevating her to the city's highest post Tuesday in a landslide victory.</p>

    <p>The election was set to make history regardless of who won, with Wu facing her fellow at-large city councilor Annissa Essaibi George, also a woman of color and also a mother. Kim Janey, who succeeded Mayor Marty Walsh earlier this year when he joined the Biden administration as labor secretary, became the first Black person and the first woman to serve as acting mayor.</p>

   <p>Wu, the more progressive candidate, secured an endorsement from the Bay State's progressive darling Rep. Ayanna Pressley in the weeks leading up to Election Day. She trounced Essaibi George, a more moderate and traditional candidate for Boston. Essaibi George grew up in neighboring Dorchester and was endorsed by Walsh. Essaibi George conceded late Tuesday after Wu had garnered 64% of the vote to her own 36%.</p>

   <p>"On this day, Boston elected your mom because from every corner of our city, Boston has spoken," Wu said in a victory speech, describing to throngs of supporters what she told her son when he asked whether boys can be elected mayors, too. "We are ready to meet this moment. We are ready to become a Boston for everyone. We are ready to become a Boston that doesn't push people out but welcomes all who call our city home."</p>
 
   {/* <Grid container spacing={3}>
  <Grid item xs={6} md={8}>
    <Card>
       <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{fontWeight:'800'}}>
            Photos : War in Ukraine
          </Typography>
          <Typography variant="body2" color="text.secondary">
          A man sits outside his destroyed building after bombings on the eastern Ukraine town of Chuguiv, on Feb. 24.(ARIS MESSINIS/AFP VIA GETTY IMAGES)
           
          </Typography>
        

        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
  */}
    </div>
  );
};

export default ElectionDetailed;
