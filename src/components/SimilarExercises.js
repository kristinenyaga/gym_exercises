import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollBar from './HorizontalScrollBar';
import Loader from './loader';

const SimilarExercises = ({ EquipmentExe, targetMuscleExe }) => {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {targetMuscleExe.length ? (
          <HorizontalScrollBar data={targetMuscleExe} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction="row"
        sx={{
          p: "2",
          position: "relative",
        }}
      >
        {EquipmentExe.length ? (
          <HorizontalScrollBar data={EquipmentExe} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises