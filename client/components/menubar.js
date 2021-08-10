import { useState, useContext } from 'react';
import { ListItemText } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

import { UserContext } from '../providers/user.provider'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));
  
  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

const Menubar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };
  return(
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
          <MenuIcon />
          </IconButton>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            >
            <StyledMenuItem>
              <Link href="/"><ListItemText primary="Home" onClick={handleClose}/></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link href="/new-incident"><ListItemText primary="Create New Incident" onClick={handleClose}/></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <Link href="/incidents"><ListItemText primary="List of Incidents" onClick={handleClose}/></Link>
            </StyledMenuItem>
            <StyledMenuItem>
                <a href="https://github.com/radian-digital/radian-challenge" target="_blank" onClick={handleClose}>
                    <ListItemText primary="About Project Scope" />
                </a>
            </StyledMenuItem>
          </StyledMenu>
          <Typography variant="h6" className={classes.title}>
            <a
            href="https://github.com/radian-digital/radian-challenge"
            target="_blank"
            rel="noopener noreferrer"
            >
            Radian Technology Challenge
            </a>
          </Typography>
          <Link href="/"><Button color="inherit" style={{marginRight: "20px"}}>Home</Button></Link>
          {currentUser
          ? <div>
            <span>Hello {currentUser}!</span>
            <Link href="/incidents"><Button color="inherit" style={{ marginLeft: "20px" }} onClick={() => setCurrentUser(null)}>Logout</Button></Link>
          </div>
          :<div>
            <Link href="/new-user"><Button color="inherit"><PersonAddIcon/>Create Account</Button></Link>
            <Link href="/incidents"><Button color="inherit"><AccountCircleIcon/>Login</Button></Link>
          </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Menubar