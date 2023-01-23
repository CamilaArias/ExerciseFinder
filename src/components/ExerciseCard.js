import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box, Stack, Typography} from '@mui/material';

const ExerciseCard = ( exercise ) => {
  return (
    <Box
    sx={{
        background: "#fff",
        p:"20px",
        justifyContent:"space-between",
        borderRadius:"20px",
        boxShadow:"10"
    }}
    >
    <Link 
    className='exercise-card' 
    to={`/exercise/${exercise.exercise.id}`}
    direction='column'
    > 
        <Stack
        direction="row"
        position="absolute"
        justifyContent="space-between"
        >
            <Box 
            position="relative"
            sx={{
                color:"#fff",
                background:"#cd2343",
                fontSize:"14px",
                borderRadius:"20px",
                textTransform:"capitalize",
                cursor:"default",
                p:"10px",
                px:"12px",
            }}>
                {exercise.exercise.bodyPart}
            </Box>
            <Box 
            sx={{
                ml:"20px",
                color:"#fff",
                background:"#cd6643",
                fontSize:"14px",
                borderRadius:"20px",
                textTransform:"capitalize",
                cursor:"default",
                p:"10px",
                px:"12px"
            }}>
                {exercise.exercise.target}
            </Box>
        </Stack>
        <img src={exercise.exercise.gifUrl}
        alt={exercise.exercise.name}
        loading="lazy"
        width="260px"
        />
        <Typography
        sx={{
            fontSize:"18px",
            fontWeight:"500",
            fontFamily:"Josefin Sans",
            color:"#000",
            textTransform:"capitalize"
        }}>
            {exercise.exercise.name}
        </Typography>
    </Link>
    </Box>
  )
}

export default ExerciseCard