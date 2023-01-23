import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'

import { exerciseOptions, fetchData} from '../utils/fetchData'
import Info from '../components/Info'

const ExerciseInfo = () => {
  const [exerciseInfo, setExerciseInfo] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDBUrl = 'https://exercisedb.p.rapidapi.com';
    
    const exerciseInfoData = await fetchData(`${exerciseDBUrl}/exercises/exercise/${id}`, exerciseOptions);
    setExerciseInfo(exerciseInfoData);
    }

    fetchExercisesData();
  }, {id});
  

  return (
    <Box>
      <Info exerciseInfo={exerciseInfo}/>
    </Box>
  )
}

export default ExerciseInfo