import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData, options,youtubeOptions } from '../utils/fetchData'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [youtubeExercises, setYoutubeExercises] = useState([])
  const [targetMuscleExe, settargetMuscleExe] = useState([]);
  const [EquipmentExe, setEquipmentExe] = useState([]);

  
  const { id } = useParams()
  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";
      
      const exerciseDetailData = await fetchData(
            `${exerciseDbUrl}/exercises/exercise/${id}`,
            options
          );
      setExerciseDetail(exerciseDetailData)
      console.log(exerciseDetailData)
      // fetch youtube videos based on the exercise name
      const ExerciseVideosData = await fetchData(
        `
      ${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      
      setYoutubeExercises(ExerciseVideosData.contents)
// Fetch exercises related to the target muscle
      const targetMuscleExercises = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, options
      );
      settargetMuscleExe(targetMuscleExercises)
// fetch exercises related to the equpment used
      const EquipmentExercises = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        options
      );
      
      setEquipmentExe(EquipmentExercises)
      console.log(EquipmentExercises);

    }

    fetchExercisesData()
  },[id])
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        name={exerciseDetail.name}
        youtubeExercises={youtubeExercises}
      />
      <SimilarExercises
        targetMuscleExe={targetMuscleExe}
        EquipmentExe={EquipmentExe}
      />
    </Box>
  );
}

export default ExerciseDetail