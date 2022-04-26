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


const Hospitals = () => {
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
      const [value, setValue] = React.useState(0);

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };
  return (
    <div>
         <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
       
        <Typography color="text.primary">Hospitals</Typography>
      </Breadcrumbs>
      <br />
    <Grid container spacing={3}>
  
    <Grid item sm={12} md={12}>
    <div >
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
        backgroundImage: `url("https://media.beam.usnews.com/63/d0/b8e45446494b8af462d87c9aec12/210430-design.jpg")`,
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
            
              <img src='https://health.usnews.com/static-atlas/assets/img/health/adult-hospitals.png' style={{
display:'block',marginLeft:'auto',
height:"150px",
width:"150px"}}/>
<br></br>
<br></br>


            <Typography component="h1" variant="h3" color="inherit" style={{fontWeight:'700',textAlign:'center'}}gutterBottom>
            U.S. News Best Hospitals
            </Typography>
            <br></br>
            <Typography variant="h9" color="inherit" style={{textAlign:'center'}}paragraph>
            Helping patients and families find the best healthcare for more than 30 years.
            </Typography>
            {/* <Link style={{color:'white'}}variant="subtitle1" href="#">
            Schools and parents can work together to help kids recover from COVID-related instructional loss.

            </Link> */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {/* <Box sx={{ maxWidth: { xs: 220, sm: 380 }, bgcolor: 'background.paper' }}> */}
      {/* <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="All Hospitals" />
        <Tab label="Children's Hospitals" />
       
      </Tabs> */}
       {/* <TabContext value="1">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList  aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext> */}
        
    {/* </Box> */}
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

export default Hospitals;
