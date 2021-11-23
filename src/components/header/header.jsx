import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 90,
  },
}));

export default function ProminentAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <IconButton
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <BubbleChartIcon />

            <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end', marginLeft: 2}}
          >
            Eco-App
          </Typography>
          </IconButton>

{/* 
          <Box sx={{ flexGrow: 1, alignSelf: 'flex-end', display: 'flex', alignItems: 'center', textAlign: 'center' }}> */}
                        <Typography sx={{flexGrow: 1, alignSelf: 'flex-end', display: 'flex', alignItems: 'center', textAlign: 'center',  minWidth: 100 }}>Home</Typography>
                        <Typography sx={{ flexGrow: 1, alignSelf: 'flex-end', display: 'flex', alignItems: 'center', textAlign: 'center', minWidth: 100 }}>About</Typography>
                        <Typography sx={{ flexGrow: 1, alignSelf: 'flex-end', display: 'flex', alignItems: 'center', textAlign: 'center', minWidth: 100 }}>Events</Typography>
            {/* </Box> */}
        
        
          <Button color="inherit">Login</Button>
          <Button color="inherit">Register</Button>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}
