import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import logo from "../assets/images/weightlifting.png";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navbarLinks = {
    fontSize: "1.2em",
    letterSpacing: "0.03rem",
    fontWeight: "400",
    lineHeight: "50px",
    cursor: "pointer",
    color: '#fff',
    fontFamily: 'inherit',
  };

  return (
    <AppBar position="static" sx={{
      backgroundColor: 'transparent',
    }
    }>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
          }}
        >
          <img
            src={logo}
            alt="logo"
            style={{ width: "50px", height: "50px", objectFit: "cover" }}
          ></img>
          <Typography variant="h3" sx={logo}>
            Gym
          </Typography>
          <Typography
            sx={{
              color: "#f59a2c",
              fontSize: "2.2em",
              letterSpacing: "0.03rem",
              fontWeight: "bold",
              fontFamily:'inherit'
            }}
          >
            Pro
          </Typography>
        </Box>

        {/* Links on Larger Screens */}
        <Box
          sx={{
            display: {  md: "flex" }, // Hide on small screens, show on medium and larger screens
            alignItems: "center",
            gap: "2em",
          }}
        >
          <Typography sx={navbarLinks} component={Link} to="/">
            Home
          </Typography>
          {/* <Typography sx={navbarLinks} component={Link} to="/tips">
            Tips & Tricks
          </Typography>
          <Typography sx={navbarLinks} component={Link} to="/exercises">
            Exercises
          </Typography>
          <Typography sx={navbarLinks} component={Link} to="/feedback">
            Feedback
          </Typography> */}
        </Box>


      </Toolbar>

      {/* Drawer for Mobile */}
      {/* <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        sx={{ display: { xs: "block", md: "none" } }} // Hide on medium and larger screens
      >
        <List onClick={toggleDrawer}>
          <ListItem button component={Link} to="/">
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/tips">
            <ListItemText primary="Tips & Tricks" />
          </ListItem>
          <ListItem button component={Link} to="/exercises">
            <ListItemText primary="Exercises" />
          </ListItem>
          <ListItem button component={Link} to="/feedback">
            <ListItemText primary="Feedback" />
          </ListItem>
        </List>
      </Drawer> */}
    </AppBar>
  );
};

export default Navbar;
