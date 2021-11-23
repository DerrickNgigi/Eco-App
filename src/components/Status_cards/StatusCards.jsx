import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardHeader } from '@mui/material';


export default function StatusCard() {

  return (
    <Card sx = {{maxWidth:345}}>

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" >
            :)
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
        }
        title="CardHeader Example"
        subheader="A flexbox with avatar, title, subtitle and action"
      />

<CardContent>
        <Typography 
        gutterBottom 
        variant="h6" 
        component="div">
          Description:
        </Typography>
        <Typography 
        gutterBottom 
        variant="h6" 
        component="div">
          Day: 
        </Typography>
        <Typography 
        gutterBottom 
        variant="h6" 
        component="div">
          Temperature: 
        </Typography>
        <Typography 
        gutterBottom 
        variant="h6" 
        component="div">
          Humidity
        </Typography>
      </CardContent>


    </Card>
  );
}
