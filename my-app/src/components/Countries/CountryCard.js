import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
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


  
export default function CountryCard() {
    const navigate = useNavigate();


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
    <Grid container spacing={3}>
  <Grid item xs={6} md={8}>
    <Card onClick={handleClickOfNews}>
       <CardActionArea>
         <CardMedia
          component="img"
          height="500"
          image="https://www.usnews.com/dims4/USNEWS/db95dec/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F24%2F29%2F1ed405494b7abf70fbd94c284aa7%2Fgettyimages-1238720016.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BEST COUNTRIES
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    
    
   
    <Grid item xs={6} md={4}>
    <Card style={{border:'black'}} sx={{ minWidth: 200 }}>
      <CardContent>
      <CardMedia
          component="img"
          height="auto"
          style={{width:"28%",display:'block',marginLeft:'auto',marginRight:'auto'}}
          image="https://www.usnews.com/static-atlas/assets/img/news/best-countries/logos/best-countries.svg"
          alt="green iguana"
        />
      
        <Typography style={{textAlign:'center'}}sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
       <b>2021 Best Countries</b>
        </Typography>
        <Divider />
        <Typography style={{lineHeight:'35px'}}variant="h5" component="div">
        <Divider />
 
        <b>Rankings</b>
        </Typography>

        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
             <StarIcon style={{fontSize:'medium'}}/>   #1    Canada
        </Typography>
        {/* <br /> */}
        <Typography style={{lineHeight:'35px'}}variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     #2 Japan
        </Typography>

        <Typography style={{lineHeight:'35px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     #2 Germany
        </Typography>

        <Typography style={{lineHeight:'35px'}} variant="h10" component="div">
        <StarIcon style={{fontSize:'medium'}}/>     #2 Switzerland
        </Typography>
       
        <Button onClick={handleClickOfRanking}variant="contained">See Full Ranking List</Button>
        <br />
        <br />
        <Divider />
        <Typography style={{lineHeight:'35px'}} variant="h5" component="div">
        <Divider />
  
        <b>Subranking</b>
        </Typography>

        <Typography style={{lineHeight:'30px'}}variant="h10" component="div">
           Adventure
        </Typography>
        {/* <br /> */}
        <Typography style={{lineHeight:'30px'}}variant="h10" component="div">
           Agility
        </Typography>

        <Typography style={{lineHeight:'30px'}}variant="h10" component="div">
       Cultural Influence
        </Typography>

        <Typography style={{lineHeight:'30px'}}variant="h10" component="div">
       Heritage
        </Typography>

        <Typography style={{lineHeight:'25px'}}variant="h10" component="div">
       Movers
        </Typography>
      </CardContent>


      
     
    </Card>
   
    </Grid>
    
   <Grid item xs={12} md={12}>
   <h3 style={{fontWeight:'900'}}>FEATURED STORIES</h3>
   </Grid>


    <Grid item  sm={6} md={4}>
    <Card >
      <CardMedia
        component="img"
        height="140"
        image="https://www.usnews.com/dims4/USNEWS/acad3ba/2147483647/crop/0x0%2B0%2B0/resize/303x202/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fed%2Fe1%2Fbd8f1c3b437ba3c40bbd7a604a18%2F220225bc.ukraine.history_01.JPG"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Russia Invades Ukraine: A Timeline of the Crisis
        </Typography>
        <Typography variant="body2" color="text.secondary">
        How did the two countries, once tied together by the Soviet Union, get to this point?
        </Typography>
      </CardContent>
      <CardActions>
        <Typography>
     - Madeline Fitzgerald
        </Typography>
      </CardActions>
    </Card>
    </Grid>
    <Grid item sm={6} md={4}>
    <Card>
      <CardMedia
        component="img"
        height="140"
        image="https://www.usnews.com/dims4/USNEWS/41f75fc/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fbc%2Fea%2Fd23af9d349418e5eb781a220b143%2Fgettyimages-1238731351.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        International Law Says Putin’s War Against Ukraine is Illegal. Does That Matter?
        </Typography>
        <Typography variant="body2" color="text.secondary">
        As demonstrated by armed conflicts that occur around the world, enforcing international law is challenging.

        </Typography>
      </CardContent>
      <CardActions>
       <Typography> - The Conversation</Typography>
      </CardActions>
    </Card>
   
    </Grid>
    <Grid item  sm={6} md={4}>
    <Card >
      <CardMedia
        component="img"
        height="230"
        image="https://www.usnews.com/dims4/USNEWS/8c3156c/2147483647/thumbnail/970x647/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2F73%2Fba%2F289edf36496aa150bb5b4dcb62f3%2Fgettyimages-1238593729.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        3 Reasons Belarus Is Helping Russia Wage War Against Ukraine
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Belarus’ military ties to Russia have strengthened since 2020.
        </Typography>
      </CardContent>
      <CardActions>
        - The Conversation

       
      </CardActions>
    </Card>
    </Grid>
  </Grid>
    
    
  );
}
