import React, { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { options,fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'
const SearchExercises = ({bodyPart,setBodyPart,exercises,setExercises}) => {
  const [search, setSearch] = useState()
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        options
      );
      console.log(bodyPartsData)
      setBodyParts(['all',...bodyPartsData])
    }
    fetchExercisesData()
    
  },[])
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",options
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)
    }
  }
  return (
    <Stack p="20px" alignItems="center" mt="37px" justifyContent="center">
      <Box position="relative"  mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "2px",
              color: "black",
            },
            width: {
              lg: "800px",
              md: "650px",
              xs: "350px",
            },
            backgroundColor: "#fff",
            borderRadius: "4px",
          }}
          height="76px"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            color: "#F86F03",
            border: 1,
            borderLeft: "none",
            borderColor: "#F86F03",
            bgcolor: "black",
            textTransform: "uppercase",
            width: {
              lg: "175px",
              md: "100px",
              xs: "80px",
            },
            fontSize: {
              lg: "16px",
              xs: "14px",
            },
            height: "56px",
            position: "absolute",
            right: 0,
            marginLeft:'10px'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          padding: "20px",
          position: "relative",
          width: "100%",
        }}
      >
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
}

export default SearchExercises