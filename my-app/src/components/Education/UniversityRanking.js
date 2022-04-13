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
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';

const UniversityRanking = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    // getAPIData("business").then((data) => {
    //   console.log(data);
    //   setArticles(data.articles);
    // });
  }, []);

  console.log(articles);
  const handleClickOfEducation= e => {
    console.log('in hanlde click of education')
      e.preventDefault();
  //  alert('hello in handle click of news')
  navigate('/detailedArticle');

     // do something here
    }
    const handleClickOfRanking= e => {
        e.preventDefault();
    //  alert('hello in handle click of news')
    navigate('/educationRankingList');

       // do something here
      }
  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
       
        <Typography color="text.primary">Ranking</Typography>
      </Breadcrumbs>
      <br />
    <Grid container spacing={3}>
  
    <Grid item sm={12} md={12}>
    <div onClick={handleClickOfEducation}>
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
            <Typography component="h1" variant="h3" color="inherit" style={{fontWeight:'900'}}gutterBottom>
            U.S. News Education Rankings
            </Typography>
            <br></br>
            <Typography variant="h9" color="inherit" paragraph>
            Choosing a college or university to attend is a major life decision, but it's not one that you have to make alone. Let our rankings take the stress off of school research.
            </Typography>
            {/* <Link style={{color:'white'}}variant="subtitle1" href="#">
            Schools and parents can work together to help kids recover from COVID-related instructional loss.

            </Link> */}
            <br></br>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
    >
      {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <MenuIcon />
      </IconButton> */}
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Best Collages"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      {/* <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
        <DirectionsIcon />
      </IconButton> */}
    </Paper>

          </Box>
        </Grid>
      </Grid>
    </Paper>
</div>
    <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
            U.S. News College Compass
            </Typography>
            <br></br>
            <Typography variant="subtitle1" color="text.secondary">
            Unlock our comprehensive data, rankings and interactive tools to help you and your child choose the right college.           </Typography>
           <br></br>
            <Button style={{backgroundColor:'#CE2927'}}variant="contained">Unlock with College Compass</Button>

          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 220, display: { xs: 'none', sm: 'block' } }}
            image="https://www.usnews.com/static-atlas/assets/img/news/best-countries/logos/best-countries.svg"
            alt=""
          />
        </Card>
      </CardActionArea>
    </Grid>
   
    <Divider />
    <Grid item  sm={6} md={3}>
    <Card >
      {/* <CardMedia
        component="img"
        height="140"
        image="https://www.usnews.com/dims4/USNEWS/acad3ba/2147483647/crop/0x0%2B0%2B0/resize/303x202/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fed%2Fe1%2Fbd8f1c3b437ba3c40bbd7a604a18%2F220225bc.ukraine.history_01.JPG"
        alt="green iguana"
      /> */}
       <Typography style={{textAlign:'center'}}sx={{ fontSize: 1 }} gutterBottom>
       <h7 style={{fontWeight:'900'}}>EDUCATION NEWS</h7>
        </Typography>
        <Divider/>
       
      <CardContent>
 
   

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/e67fcb9/2147483647/crop/3271x2182%2B2%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F7a%2Fe2%2Fd0c79cd143ce9182db63cce4bd5c%2Fgettyimages-1318330841.jpg' style={{marginLeft:"2%",
float:"left",
height:"45px",
width:"45px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h8>Finding the Right School
</h8>
	
	</div>
  <br></br>
    <Divider/>
        <br></br>

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/88ba28e/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fa7%2Fbe%2F7a170df246f09bf6b093ecf5b7ee%2F160304-libraryboy-stock.jpg' style={{marginLeft:"2%",
float:"left",
height:"45px",
width:"45px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h8>Apply to College
</h8>
	
	</div>
  <br></br>
    <Divider/>
        <br></br>

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/bc6be14/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F8c%2Fb2%2Fa41e9e75490582b2a582f8cf71d1%2Fgettyimages-1318879382.jpg' style={{marginLeft:"2%",
float:"left",
height:"45px",
width:"45px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h8>Paying for College</h8>
	
	</div>
  <br></br>
    <Divider />
        <br></br>

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/a87d253/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F83%2F70%2F063184fc4fbd806c988ea99e32de%2Fgettyimages-1152187821.jpg' style={{marginLeft:"2%",
float:"left",
height:"45px",
width:"45px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h7>College Test Prep</h7>
	
	</div>
  <br></br>
  <Divider />
        <br></br>

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/4984b27/2147483647/crop/2119x1413%2B0%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fca%2Fe9%2F15061a5e4df6b79e44dcc5da9697%2Fgettyimages-651138488.jpg' style={{marginLeft:"2%",
float:"left",
height:"45px",
width:"45px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h7>Studying in the United States
</h7>
	
	</div>
        
        </CardContent>

    </Card>

    
    </Grid>
   
    <Grid item sm={6} md={6}>
  
   <Paper
      sx={{
        height:'100%',
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("https://www.princeton.edu/sites/default/files/styles/half_2x/public/images/2021/08/20210825_GS_Orientation_DJA_035_3000x1945.jpg?itok=CVTKT8gj")`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="https://www.usnews.com/static/img/best-colleges-badge.svg" alt="abcde"/>}
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
            <Typography component="h1" variant="h3" color="inherit" style={{fontWeight:'900'}}gutterBottom>
           2022 Best College Ranking
            </Typography>
            <br></br>
           
            <Link style={{color:'white'}}variant="subtitle1" href="#">
            See the Ranking >>

            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
    </Grid>
   
   
    <Grid item  sm={6} md={3}>
    
    <Card style={{border:'black'}} sx={{ minWidth: 200 }}>
      <CardContent>
      <CardMedia
          component="img"
          height="auto"
          style={{width:"33%",display:'block',marginLeft:'auto',marginRight:'auto'}}
          image="https://www.usnews.com/static/img/badge-best-gold.svg"
          alt="green iguana"
        />
      
        <Typography style={{textAlign:'center'}}sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
       <b>College Rankings</b>
        </Typography>
        <Typography style={{textAlign:'center'}}sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Life's Decisions Made Here</Typography>
        <Divider />
      
        <br />
     
     

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
           National Universities
        </Typography>
        {/* <br /> */}
        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
           Liberal Art Collage
        </Typography>

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
       Regional Universities
        </Typography>

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
       Regional Collages
        </Typography>

       
        <Button variant="contained">See all College Ranking</Button>
      </CardContent>


      
     
    </Card>
    </Grid>
    </Grid>
    </div>
  );
};

export default UniversityRanking;
