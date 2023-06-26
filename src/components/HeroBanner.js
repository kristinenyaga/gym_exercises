import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Button, Typography } from "@mui/material";
import BannerImage from '../assets/images/image 1 (2).png'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const heroText = {
  fontSize: '9rem',
  fontWeight: 800,
  zindex: 1000,
  marginBottom: 0,
  lineHeight:'10rem'
}

const rightGrid = {
  maxWidth: "140px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: 1,
  borderColor: "#25AB75",
  padding: ".3em 1.3em",
  borderRadius: "4px",
  marginTop:'15%'
};
const rightGridTop = {
  color: "#25AB75",
  fontWeight: "bold",
  fontSize: "20px",
};
const HeroBanner = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "5rem", position: "relative" }}>
      <Grid container spacing={2}>
        <Grid xs={4}>
          <Grid container spacing={2} direction="column">
            <Grid xs={6} md={8}>
              <Box
                sx={{
                  display: "flex",
                  gap: "2px",
                }}
              >
                <Typography
                  sx={{
                    width: "50px",
                    backgroundColor: "#25AB75",
                    padding: ".3em 2.7em .3em .7em",
                    borderRadius: "20px",
                    fontWeight: 600,
                  }}
                >
                  New
                </Typography>
                <Typography
                  sx={{
                    marginTop: "5px",
                    fontWeight: 600,
                  }}
                >
                  High intensity workout to burn calories
                </Typography>
              </Box>
            </Grid>
            <Grid xs={6} md={6}>
              <Typography sx={heroText}>Cardio</Typography>
              <Typography sx={heroText}>Exercise</Typography>
            </Grid>
            <Grid xs={6} md={4}>
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "15px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Grid>
            <Grid xs={6} md={8}>
              <Box>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#25AB75",
                    marginRight: "2em",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    color: "#25AB75",
                    borderColor: "#25AB75",
                    fontWeight: "600",
                  }}
                >
                  Preview
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          xs={4}
          sx={{
            zIndex: -1,
            marginTop: "-7%",
            // marginLeft: "-8%",
          }}
        >
          <img sx={{}} alt="The house from the offer." src={`${BannerImage}`} />
        </Grid>
        <Grid xs={4}>
          <Grid container spacing={1} direction="column">
            <Grid xs={4}>
              <Box
                sx={rightGrid}
              >
                <Typography
                  sx={rightGridTop}
                >
                  38:14
                </Typography>
                <Typography sx={{ color: "white",fontWeight:'bold' }}>time</Typography>
              </Box>
            </Grid>
            <Grid xs={4}>
              <Box sx={rightGrid}>
                <Typography sx={rightGridTop}>
                  165
                </Typography>
                <Typography>est calories</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroBanner;
