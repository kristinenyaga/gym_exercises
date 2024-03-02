import React from 'react'
import {
  Stack, Typography
} from '@mui/material'
import Icon from '../assets/icons/fitness.png'
const BodyPart = ({data,bodyPart,setBodyPart}) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === data ? "4px solid #f59a2c" : "",
        backgroundColor: "black",
        borderBottomLeftRadius: "40px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(data);
        window.scrollTo({ top: 1800, behavior: "smooth", left: 100 });
      }}
    >
      <img src={Icon} style={{ width: "50px", height: "50px" }} alt="" />
      <Typography
        sx={{
          color: "#fff",
          fontWeight: "bold",
          textTransform: "capitalize",
          fontSize: "20px",
        }}
      >
        {data}
      </Typography>
    </Stack>
  );
}

export default BodyPart