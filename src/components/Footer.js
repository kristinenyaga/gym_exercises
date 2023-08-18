import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/fitnesslogo.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#fff">
    <Stack
      gap="20px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img src={Logo} alt="logo" style={{ width: "100px", height: "100px" }} />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="15px"
      textAlign="center"
      pb="40px"
      color="#F86F03"
    >
      Made by Kristine Nyaga <br />
      (254) 7-344-120-54 <br />
      &copy;fitnessPro, 2023
    </Typography>
  </Box>
);
export default Footer;