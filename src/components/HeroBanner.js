import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import video from '../assets/images/exercise.mp4'
import finger from '../assets/images/hand-finger-pointing-down (1).png'

const HeroSection = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));


const HeroText = styled("div")(({ theme }) => ({
  marginRight: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    marginRight: 0,
    marginBottom: theme.spacing(4),
  },
}));

const HeroBanner = () => {
  return (
    <>
      <Box
        component="div"
        position="relative"
        width="100%" // Full viewport width
        height="50vh" // Full viewport height
        overflow="hidden" // Hide any overflow
      >
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover", // Maintain aspect ratio and cover the container
            zIndex: -1, // Put the video behind other content
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Add an overlay with 50% opacity
            zIndex: 0, // Put the overlay behind other content
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width:'80%',
              transform: "translate(-50%, -60%)",
              zIndex: 1, // Put the text above the video and overlay
              textAlign: "center",
              color: "white", // Text color
            }}
          >
            <Typography
              variant="h1"
              sx={{
                width:'100%',
                fontSize: {
                  xs: "45px",
                  md: "40px",
                  lg: "60px",
                },
              }}
            >
              #Healthy body healthy mind
            </Typography>
          </div>
        </div>
      </Box>
      <HeroSection>
        <HeroText>
          <Typography
            variant="h2"
            sx={{
              textAlign: "center",
              color: "#f59a2c",
              fontSize: {
                xs:'44px'
              }
            }}
            gutterBottom
          >
            Start your fitness journey today
          </Typography>
          <Typography sx={{ textAlign: "center",fontSize:'20px'}} variant="body1">
            You can find exercises you can do at home or in the gym<img  alt="finger pointing down" src={finger } />
          </Typography>
        </HeroText>
      </HeroSection>
    </>
  );
};

export default HeroBanner;
