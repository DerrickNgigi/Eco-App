import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { IconButton, Typography } from '@mui/material';
import { Autorenew } from '@material-ui/icons';
import { Box } from '@mui/system';

export default function StatusCard() {

  return (
    <Card elevation={4} sx = {{maxWidth:345, }}>
        <CardHeader
        action={
          <IconButton>
            <Autorenew/>
          </IconButton>
        }
        title = "Weather"
        subheader = "Muranga"
          />

<CardContent>

<Box sx={{ display: 'flex', flexDirection: 'row' }}>
<Typography
variant="h6"
noWrap
component="div"
sx={{ flexGrow: 1, alignSelf: 'flex-end'}}> 
 13th March 2021
</Typography>
<Typography
variant="h6"
noWrap
component="div"
sx={{ flexGrow: 1, alignSelf: 'flex-end', marginLeft: 2}}>
 Sunny
</Typography>
  </Box>
  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
<Typography
variant="h6"
noWrap
component="div"
sx={{ flexGrow: 1, alignSelf: 'flex-end'}}> 
 Temp: 35°C 
</Typography>
<Typography
variant="h6"
noWrap
component="div"
sx={{ flexGrow: 1, alignSelf: 'flex-end', marginLeft: 2}}>
 Humidity: 49%
</Typography>
  </Box>
  <Box sx={{ display: 'flex', flexDirection: 'row' }}>
<Typography
variant="h6"
noWrap
component="div"
sx={{ flexGrow: 1, alignSelf: 'flex-end'}}> 
 Alt: 1000mtrs
</Typography>

  </Box>
         
          </CardContent>
    </Card>
  );
}
