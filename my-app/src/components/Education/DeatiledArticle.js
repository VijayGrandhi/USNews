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

const DetailedArticle = () => {
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
        <Typography color="text.primary">Education</Typography>
      </Breadcrumbs>
      <br />
   <h1 style={{fontWeight:'800'}}>Helping Students Catch Up on Unfinished Learning
</h1>
   {/* <br></br> */}
   <p>Schools and parents can work together to help kids recover from COVID-related instructional loss.</p>
   <p>By Maureen Ojiambo and Katherine Reynolds Lewis
</p>
   {/* <Divider orientation="vertical"flexItem />   */}
   <p>
   March 17, 2022, at 11:31 a.m.</p> 
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
          image="https://www.usnews.com/dims4/USNEWS/d107612/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F9c%2Fa2%2F0683f4314d99a2c58f1190867e2b%2Fgettyimages-1138450332.jpg"
          alt="green iguana"
        />
        <CardContent>
          {/* <Typography gutterBottom variant="h5" component="div">
            BEST COUNTRIES
          </Typography> */}
          <Typography variant="body2" color="text.secondary">
          While schools face the monumental challenge of making up for months of unfinished learning, parents have a role to play at home as well
           
          </Typography>
        

        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    <br></br>
    <Divider  flexItem /> 
    <br></br> 
    <p>Two years into the pandemic, public schools are struggling to help students recover from the extensive academic disruptions caused by COVID-19. While many students are lagging academically, suffering from what some educators call "unfinished learning," experts say there are steps teachers and parents can take to help kids catch up, and to minimize the impact on the rest of their academic journey.</p>

    <p>“We should all feel an extreme sense of urgency around getting kids back on academic track,” says Dan Goldhaber, director of the Center for Analysis of Longitudinal Data in Education Research at the American Institutes for Research. “Not everybody is off track, but the great majority of kids are behind where they would have been had we not had a pandemic.”</p>


   <p>Though some have used the term "COVID learning loss," most students did not actually slide backward in their learning during the pandemic. But research shows the majority did not make the gains expected in a typical year, and that achievement gaps have widened.

</p>


   <p>Students at high-poverty schools experienced the biggest setbacks, which have continued in the past year, says Megan Kuhfeld, a senior research scientist at the Collaborative for Student Growth at NWEA.</p>
 <p>An analysis by the consulting group McKinsey & Company found that, on average, students finished the 2020-21 school year five months behind in math and four months behind in reading — but at low-income schools, those gaps grew to seven months in math and six months in reading. Students at schools where a majority of students are Black or Hispanic also fell further behind, by six months in both math and reading for majority-Black schools and six months in math and five in reading for majority-Hispanic schools.

</p>
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
