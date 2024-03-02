import React from 'react'
import {
  useEffect, useState
} from 'react'
import { Pagination } from '@mui/material/'
import { Stack, Box, Typography } from '@mui/material'

import {options,fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({ exercises, bodyPart, setExercises }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = []
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          options
        );
      }
      else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          options
        );
      }
      setExercises(exercisesData)
    }

    fetchExercisesData()
  },[bodyPart])

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  return (
    <Box
      id="exercises"
      sx={{
        mt: {
          lg: "110px",
          mt: "50px",
          padding: "20px",
        },
      }}
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center" sx={{ backgroundColor: "#f59a2c" }}>
        {exercises.length > 9 && (
          <Pagination
            color="secondary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
          />
        )}
      </Stack>
    </Box>
  );
}

export default Exercises