import React, { useState } from 'react'
import {Typography, Stack, Button, Box, IconButton} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

const Info = ({exerciseInfo}) => {
    const {bodyPart, gifUrl, name, target, equipment} = exerciseInfo;
    const [favorite, setFavorite] = useState('');

    const handleClick = () => {
        setFavorite(true);
        alert("This doesn't do anything yet :)");
    };

  return (
    <Stack
    sx={{
        flexDirection:'row',
        p:"18px",
        alignItems:"center",
        mt:"20px",
        ml:"20px",
        gap:"60px"
    }}>
        <Box sx={{
            p:"12px",
            background:"#fff",
            borderRadius:"20px"
        }}>
            <img src={gifUrl}
            alt={name}
            loading="lazy"
            width="260px"
            className="detail-image"
            />
        </Box>
        <Box>
        <Typography
        sx={{
            fontSize:"60px",
            textTransform:"capitalize",
            fontWeight:"500",
            fontFamily:"Josefin Sans",
        }}>
            {name}
        </Typography>
        <Typography
        sx={{
            fontSize:"24px",
            textTransform:"capitalize",
            fontWeight:"500",
            fontFamily:"Josefin Sans",
        }}>
            🎯 Target Muscle: {target}
        </Typography>
        <Typography sx={{
            fontSize:"24px",
            textTransform:"capitalize",
            fontWeight:"500",
            fontFamily:"Josefin Sans",
        }}>
            💪 Body Part: {bodyPart}
        </Typography>
        <Typography sx={{
            fontSize:"24px",
            textTransform:"capitalize",
            fontWeight:"500",
            fontFamily:"Josefin Sans",
        }}>
            🏋️‍♀️ Equipment Required: {equipment}
        </Typography>
        <Button 
        sx={{
            mt:"20px"
        }}
        background="primary"
        onClick={handleClick}
        color="warning" 
        variant="contained" 
        startIcon={<StarIcon/>}>
            Mark as Favorite
        </Button>
        </Box>
    </Stack>
  )
}

export default Info