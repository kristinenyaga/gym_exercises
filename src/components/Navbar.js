import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import logo from '../assets/images/Logo.png'
import { Box, Typography } from "@mui/material";
import { FitnessCenter } from '@mui/icons-material';
const navbarLinks = {
  fontSize: "1em",
  fontFamily: 'Poppins',
  letterSpacing: "0.03rem",
  fontWeight: 'lighter',
  lineHeight: "50px",
};
const navbar_logo = {
  fontSize: "2em",
  fontFamily: "fantasy",
  letterSpacing: "0.03rem",
  fontWeight: "bold",
};
const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
        }}
      >
        <FitnessCenter
          sx={{
            marginTop: "10px",
            fontSize: "2em",
            color: "#25AB75",
          }}
        />
        <Typography variant="h3" sx={navbar_logo}>
          Gym
        </Typography>
        <Typography
          sx={{
            color: "#25AB75",
            fontSize: "2.2em",
            fontFamily: "fantasy",
            letterSpacing: "0.03rem",
            fontWeight: "bold",
          }}
        >
          Pro
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "2em",
        }}
      >
        <Typography sx={navbarLinks}>Home</Typography>
        <Typography sx={navbarLinks}>Tips&Tricks</Typography>
        <Typography sx={navbarLinks}>Exercises</Typography>
        <Typography sx={navbarLinks}>Feedback</Typography>
      </Box>
    </Box>
  );
}

export default Navbar