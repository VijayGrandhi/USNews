import React from "react";
import { useState, useEffect } from "react";
import MainCard from "../MainCard";
// import SmallerCards from "../SmallerCards";
// import { getAPIData } from "./getAPIData";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
const TravelGuides = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // getAPIData("business").then((data) => {
    //   console.log(data);
    //   setArticles(data.articles);
    // });
  }, []);

  console.log(articles);
  

  const handleClickOfNews= e => {
        e.preventDefault();
    //  alert('hello in handle click of news')
    navigate('/detailedNews');

       // do something here
      }
      const handleClickOfRanking= e => {
            e.preventDefault();
        //  alert('hello in handle click of news')
        navigate('/rankingList');
  
           // do something here
          }
  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
       
        <Typography color="text.primary">Travel Guide</Typography>
      </Breadcrumbs>
      <br />
    
      <Grid container spacing={2}>
  <Grid item xs={12} md={12}>
   
       <Paper
   
   sx={{
     height:'550px',
     position: 'relative',
     backgroundColor: 'grey.800',
     color: '#fff',
     mb: 4,
     backgroundSize: 'cover',
     backgroundRepeat: 'no-repeat',
     backgroundPosition: 'center',
     backgroundImage: `url("data:image/jpeg;base64,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")`,
   }}
 >
   {/* Increase the priority of the hero background image */}
   {/* {<img style={{ display: 'none' }} src="https://www.usnews.com/static/img/badge-best-gold.svg" alt=""/>} */}
   <Box
     sx={{
       position: 'absolute',
       top: 0,
       bottom: 0,
       right: 0,
       left: 0,
       backgroundColor: 'rgba(0,0,0,.3)',
     }}
   />
   <Grid container>
     <Grid item md={6}>
       <Box
         sx={{
           position: 'relative',
           p: { xs: 3, md: 6 },
           pr: { md: 0 },
         }}
       >
         
           {/* <img src='https://health.usnews.com/static-atlas/assets/img/health/adult-hospitals.png' style={{
            display:'block',marginLeft:'auto',
            height:"150px",
            width:"150px",marginLeft:'89%'}}/> */}
<br></br>
<br></br>


         <Typography component="h1" variant="h3" color="inherit" style={{fontWeight:'700',textAlign:'center'}}gutterBottom>
         WorldWide Travel Guides
         </Typography>
         <br></br>
       
         {/* <Link style={{color:'white'}}variant="subtitle1" href="#">
         Schools and parents can work together to help kids recover from COVID-related instructional loss.

         </Link> */}
  
    
       </Box>
     </Grid>
   </Grid>
 </Paper>
    </Grid>
   <Grid item  sm={12} md={12}>
   <Typography component="h1" variant="h5" color="inherit" style={{fontWeight:'700'}}gutterBottom>
         All Travel Guides
         </Typography>

   </Grid>
   <Grid item  sm={12} md={12}>
   <Typography component="h1" variant="h5" color="inherit" style={{fontWeight:'700'}}gutterBottom>
         USA
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Acadia National Park
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Des Moines
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Long Beach, CA
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Rocky Mountain National Park
         </Typography>

   </Grid>

   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Adirondacks
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Destin
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Los Angeles
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Sacramento
         </Typography>

   </Grid>

   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Albuquerque
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Detroit
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Louisville         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Salt Lake City
         </Typography>

   </Grid>





   <Grid item  sm={12} md={12}>
   <Typography component="h1" variant="h5" color="inherit" style={{fontWeight:'700'}}gutterBottom>
         Canada
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Banff
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Montreal         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Quebec City
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Victoria & Vancouver Island
         </Typography>

   </Grid>

   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Calgary
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Niagara Falls 
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Saint John, New Brunswick         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Whistler
         </Typography>

   </Grid>

   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Albuquerque
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Detroit
         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Louisville         </Typography>

   </Grid>
   <Grid item  sm={6} md={3}>
   <Typography component="h3" variant="h6" color="inherit" gutterBottom>
   Salt Lake City
         </Typography>

   </Grid>
 

  
  </Grid>
    
    </div>
  );
};

export default TravelGuides;
