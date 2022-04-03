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

import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
const EducationMainPage = () => {
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
       
        <Typography color="text.primary">Education</Typography>
      </Breadcrumbs>
      <br />
    <Grid container spacing={3}>
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
      <Typography sx={{ fontSize: 23 }} component="div" gutterBottom><b>Boost the Odds of MBA Acceptance</b></Typography>
        <Typography gutterBottom variant="h7" component="div">
        Experts advise that MBA applicants ask for recommendation letters as early as possible.
        </Typography>
     
     
        <Typography>
     - Ilana Kowarski March 15, 2022
        </Typography>
        <br></br>
        <Divider/>
        <br></br>
        <Typography sx={{ fontSize: 23 }} component="div" gutterBottom><b>What to Do When Your Child Is the Bully</b></Typography>
       
        <Typography gutterBottom variant="h7" component="div">
        Experts explain how to understand a child’s bullying behavior – and how to respond.
        </Typography>
        <Typography>
     - Gail Cornwall March 16, 2022
        </Typography>

        <br></br>
        <Divider/>
        <br></br>

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/2ef211f/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F2c%2F6e%2F8c8d4dd047af97090d6fc5947951%2Fgettyimages-1310989321.jpg' style={{marginLeft:"2%",
float:"left",
height:"40px",
width:"40px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h8>College Courses to Take Before Medical School</h8>
	
	</div>

    <Divider/>
        <br></br>

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/4984b27/2147483647/crop/2119x1413%2B0%2B0/resize/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fca%2Fe9%2F15061a5e4df6b79e44dcc5da9697%2Fgettyimages-651138488.jpg' style={{marginLeft:"2%",
float:"left",
height:"40px",
width:"40px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h8>5 U.S. College Admissions Mistakes International Students </h8>
	
	</div>

    <Divider/>
        <br></br>

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/bc6be14/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F8c%2Fb2%2Fa41e9e75490582b2a582f8cf71d1%2Fgettyimages-1318879382.jpg' style={{marginLeft:"2%",
float:"left",
height:"40px",
width:"40px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h8>How Colleges Are Addressing Food Insecurity</h8>
	
	</div>

    <Divider/>
        <br></br>

        <div>
			<img src='https://www.usnews.com/dims4/USNEWS/1ff7d2d/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F53%2F93%2F7690db8547e497ff86e4f862a53c%2Fgettyimages-484702178.jpg' style={{marginLeft:"2%",
float:"left",
height:"40px",
width:"40px"}}/>
		</div>	
	<div style={{marginLeft:"60px"}}>
	<h7>Improve Your Social Media for College Admissions</h7>
	
	</div>
        
        </CardContent>

    </Card>

    
    </Grid>
    <Grid item sm={6} md={6}>
    <div onClick={handleClickOfEducation}>
   <Paper
   
      sx={{
        height:'65%',
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url("https://www.usnews.com/dims4/USNEWS/d107612/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F9c%2Fa2%2F0683f4314d99a2c58f1190867e2b%2Fgettyimages-1138450332.jpg")`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src="" alt=""/>}
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
            <Typography component="h1" variant="h5" color="inherit" style={{fontWeight:'900'}}gutterBottom>
            Helping Students Catch Up on Unfinished Learning
            </Typography>
            <br></br>
            <Typography variant="h9" color="inherit" paragraph>
            By Maureen Ojiambo | March 17, 2022, at 11:31 a.m.
            </Typography>
            <Link style={{color:'white'}}variant="subtitle1" href="#">
            Schools and parents can work together to help kids recover from COVID-related instructional loss.

            </Link>
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
       <b>Education Rankings</b>
        </Typography>
        <Typography style={{textAlign:'center'}}sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>Life's Decisions Made Here</Typography>
        <Divider />
        <Typography style={{lineHeight:'35px'}}variant="h5" component="div">
        <Divider />
 
        <b>Best National Universities</b>
        </Typography>

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
             <StarIcon style={{fontSize:'medium'}}/>   #1    Princeton University
        </Typography>
        {/* <br /> */}
        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     #2 Columbia University
        </Typography>

        <Typography style={{lineHeight:'35px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     #2 Havard University
        </Typography>

        <Typography style={{lineHeight:'35px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     #2 Massachusetts Institute of Technology
        </Typography>
       
        <Button onClick={handleClickOfRanking} variant="contained">See Full Ranking List</Button>
        <br />
        <br />
        <Divider />
        <Typography style={{lineHeight:'35px'}} variant="h5" component="div">
        <Divider />
  
        <b>All Education Rankings</b>
        </Typography>

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
           Best Collages
        </Typography>
        {/* <br /> */}
        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
           Best Graduate School
        </Typography>

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
       Best Online Collage
        </Typography>

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
       Best Global University
        </Typography>

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
       High School
        </Typography>
        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
       K-8 school
        </Typography>
        <Button variant="contained">All Education Ranking Methodologies</Button>
      </CardContent>


      
     
    </Card>
    </Grid>
  
    <br></br>
    <Divider />
    <br></br>
    <br></br>
    <Grid item xs={12} md={12}>
   <h3 style={{fontWeight:'900'}}>BEST COLLAGES</h3>
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

export default EducationMainPage;
