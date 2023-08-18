import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img
        src={exercise.gifUrl}
        sx={{
          borderRadius: "100px",
        }}
        loading="lazy"
        alt="exercises"
      />
      <Stack direction="row" sx={{ mt: "20px" }}>
        <Button
          sx={{
            color: "#F86F03",
            bgcolor: "white",
            fontSize: "14px",
            textTransform: "capitalize",
            borderRadius: "20px",
            ml: "21px",
            fontWeight: 600,
            border: "none",
          }}
        >
          {exercise.target}
        </Button>
        <Button
          sx={{
            color: "#fff",
            bgcolor: "#F86F03",
            fontSize: "14px",
            textTransform: "capitalize",
            borderRadius: "20px",
            ml: "21px",
            fontWeight: 600,
          }}
        >
          {exercise.bodyPart}
        </Button>
      </Stack>
      <Typography
        sx={{
          ml: "21px",
          color: "#fff",
          fontWeight: "bold",
          textTransform: "capitalize",
          fontSize: "14px",
          mt: "11px",
          pb: "10px",
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
}

export default ExerciseCard