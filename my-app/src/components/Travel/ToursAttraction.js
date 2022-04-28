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
const ToursAttraction = () => {
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
       
        <Typography color="text.primary">Tours And Attraction</Typography>
      </Breadcrumbs>
      <br />
    
      <Grid container spacing={3}>
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
     backgroundImage: `url("https://www.planetware.com/wpimages/2020/08/top-attractions-in-the-world-italy-rome-colosseum.jpg")`,
   }}
 >
   {/* Increase the priority of the hero background image */}
   {<img style={{ display: 'none' }} src="https://www.usnews.com/static/img/badge-best-gold.svg" alt=""/>}
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
         



         <Typography component="h1" variant="h3" color="inherit" style={{fontWeight:'700',textAlign:'center'}}gutterBottom>
         Tours and Attractions
         </Typography>
         <br></br>
  
        
         <br></br>
<br></br>
         
       </Box>
     </Grid>
 
   </Grid>
 </Paper>
    </Grid>
    
    
    <Grid item  sm={12} md={12}>
   <Typography component="h1" variant="h5" color="inherit" style={{fontWeight:'700'}}gutterBottom>
   FEATURED BEST THINGS TO DO

         </Typography>

   </Grid>

    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://travel.usnews.com/dims4/USNEWS/f5b1f49/2147483647/resize/600x400%3E!/quality/85/?url=https://travel.usnews.com/static-travel/images/destinations/289/borabora_445x280.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
      Bora Bora
        </Typography>
      
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://travel.usnews.com/dims4/USNEWS/3478e62/2147483647/resize/600x400%3E!/quality/85/?url=https://travel.usnews.com/static-travel/images/destinations/44/main_image_september_2013_cropped_445x280.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
       New York
        </Typography>
    
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://travel.usnews.com/dims4/USNEWS/d6c1a17/2147483647/resize/600x400%3E!/quality/85/?url=https://travel.usnews.com/static-travel/images/destinations/82/482151882_445x280.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
       London
        </Typography>
      
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://travel.usnews.com/dims4/USNEWS/a9fd306/2147483647/resize/600x400%3E!/quality/85/?url=https://travel.usnews.com/static-travel/images/destinations/86/gettyimages-532590277_445x280.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
       London
        </Typography>
      
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>


    <Grid item  sm={12} md={12}>
   <Typography component="h1" variant="h5" color="inherit" style={{fontWeight:'700'}}gutterBottom>
   FEATURED TOURS

         </Typography>

   </Grid>

    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://travel.usnews.com/dims4/USNEWS/8823e86/2147483647/resize/600x400%3E!/quality/85/?url=https://media.beam.usnews.com/db/2d/6cd21c774c01b7264ab4e4108f96/200224-chicago-stock.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
      The 14 best Chicago Tours
        </Typography>
      
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://travel.usnews.com/dims4/USNEWS/ad3cade/2147483647/resize/600x400%3E!/quality/85/?url=https://media.beam.usnews.com/63/c0/ecc91bf24105b779d1d20b8b2e92/565-central-park-sheep-meadow-courtesy-of-the-central-park-conservancy.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
     The 17 Best New York City Tours
        </Typography>
    
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://travel.usnews.com/dims4/USNEWS/68c9157/2147483647/resize/600x400%3E!/quality/85/?url=https://media.beam.usnews.com/76/5d/84e4e40449179bb56f323176de73/5.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
       The 21 best Paris Tours
        </Typography>
      
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
    <Grid item  sm={6} md={3}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://travel.usnews.com/dims4/USNEWS/5b3a6b9/2147483647/resize/600x400%3E!/quality/85/?url=https://media.beam.usnews.com/bb/c8/59c40cdd4cacbc74086e09589bff/1064-the-bay-lights-3-james-ewing.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
       The 19 best San Fransisco Tours
        </Typography>
      
      </CardContent>
      <CardActions>
       
      </CardActions>
    </Card>
    </Grid>
  </Grid>
    
    </div>
  );
};

export default ToursAttraction;
