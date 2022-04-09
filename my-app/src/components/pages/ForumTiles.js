import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ForumTile() {
  return (
      <>
      <br />
    <Card sx={ {marginLeft:0,marginRight:0} }>
      <CardActionArea href="forums"> 
        <CardMedia
          component="img"
          height="140"
          image="https://sia.psu.edu/sites/default/files/styles/content_header/public/nyc_skyline.jpg?itok=XMbtXjcS"
          alt="news banner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            News Forum
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Engage with the USNews Community in the News Forum Section!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br />
    <Card sx={ {marginLeft:0,marginRight:0} }>
      <CardActionArea href="forums">
        <CardMedia
          component="img"
          height="140"
          image="https://www.dpr.com/uploads/project-hero/_1200x630_crop_center-center_82_none/bumct-new-hospital-7.jpg?mtime=1602011384"
          alt="education banner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Education Forum
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Engage with the USNews Community in the Education Forum Section!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br/>
    <Card sx={ {marginLeft:0,marginRight:0} }>
      <CardActionArea href="forums">
        <CardMedia
          component="img"
          height="140"
          image="https://www.swg.com/usa/wp-content/uploads/sites/34/2019/04/Hospital-Case-Study-Banner-Daniel.png"
          alt="health banner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Health Forum
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Engage with the USNews Community in the Health Forum Section!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <br />
    <Card sx={ {marginLeft:0,marginRight:0} }>
      <CardActionArea href="forums">
        <CardMedia
          component="img"
          height="140"
          image="https://cyberlock.com/wp-content/uploads/2018/07/airport-banner.jpg"
          alt="travel banner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Travel Forum
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Engage with the USNews Community in the Travel Forum Section!
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
    </>
  );
}