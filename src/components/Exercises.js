import { Pagination } from '@mui/material';
import React, {useEffect, useState} from 'react';
import { Box, Stack, Typography } from "@mui/material";

import ExerciseCard from './ExerciseCard';
import { exerciseOptions, fetchData } from '../utils/fetchData';

const Exercises = ({ setExercises, exercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchExerciseData = async () => {
      let exercisesData = [];

      if(bodyPart === 'all') {
        exercisesData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises', 
          exerciseOptions);
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, 
          exerciseOptions);
      }

      setExercises(exercisesData);
    }

    fetchExerciseData();
  }, [bodyPart]);

  const itemsPerPage = 8;
  
  const indexLastExercise = currentPage * itemsPerPage;
  const indexFirstExercise = indexLastExercise - itemsPerPage;
  const currentExercises = exercises.slice(indexFirstExercise, indexLastExercise);

  const paginate = (e, value) => (
    setCurrentPage(value),
    window.scrollTo({top: 0, behaviour:"smooth"})
  );

  return (
    <Box 
      id="exercises"
      sx={{
        mt: { lg :"20px"}
      }}
      mt="10px"
      p="20px"
      mx="20px"
    >
      <Stack
        direction="row"
        sx={{
          gap:"24px"
        }}
        flexWrap="wrap"
        justifyContent="flex-start"
      >
        {Array.isArray(currentExercises)
        ? currentExercises.map((exercise, index) => (
          <ExerciseCard
          key={index}
          exercise={exercise}
          />
        ))
        : null
        }
      </Stack>
      <Stack
      mt="80px"
      alignItems="center"
      >
        {Array.isArray(exercises) ? (
        exercises.length > itemsPerPage && (
          <Pagination 
          className="pagination"
          count={Math.ceil(exercises.length / itemsPerPage)}
          color="primary"
          defaultPage={1}
          page={currentPage}
          onChange={paginate}
          />
        ))
        : null}
      </Stack>
    </Box>
  )
}

export default Exercises