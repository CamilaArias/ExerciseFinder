import React, {useEffect, useState} from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalFilters from './HorizontalFilters';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState('')
  const [msgError, setMsgError] = useState(false)

  useEffect(() => {
    const fetchExerciseData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions)

        setBodyParts(['all', ...bodyPartsData]);
    }
    
    fetchExerciseData();
  }, [])
  
  const handleSearch = async () => {
    if(search) {
       const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises', 
        exerciseOptions);

        const searchedExercises = exercisesData.filter(
          (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
        );

        setSearch('');
        setMsgError(false);
        setExercises(searchedExercises);

        if(searchedExercises == false) {
          setMsgError(true);
        }
    }
  }

  return (
    <Stack 
    mt="12px"
    p="20px"
    >
      <Box 
      alignItems="center"
      position="relative"
      mb="12px"
      ml="20px"
      sx={{
        justifyContent: "left"
      }}
      >
        <TextField 
          sx={{
            input:{
              fontWeight:'500', 
              border: 'none', 
              borderRadius: '4px',
              color: '#021D15',
              pl:'26px'
            },
            width:{ lg: '800px', md: '600px', xs: '400px'},
            backgroundColor: '#C7E2D9',
            borderRadius: '40px'
          }}
          height="48px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn"
          sx={{
            bgcolor: '#97AE0C',
            color: '#021D15',
            borderRadius: '40px',
            ml: '20px',
            textTransform: 'none',
            width: {lg: '175px', md: '120px', xs: '100px'},
            fontSize: {lg: '20px', md: '18px', xs: '16px'},
            height: '56px',
            position: 'relative',
            left: '0',
            fontWeight: '700'
          }}
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{
        position: 'relative',
        width: '100%',
        pl:"20px",
        pb: '0px'
        }}>
        <HorizontalFilters
          dataBodyParts={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
      {msgError ? <Typography
      sx={{
        mt:"20px",
        ml:"20px",
        fontSize:"24px"
      }}>
        No results found 😕
      </Typography>
      : null}
    </Stack>
  )
}

export default SearchExercises