import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
    width="100%"
    height="50px"
    position="fixed"
    bottom="0"
    sx={{
      background:"#021D15",
      color:"#fff",
    }}>
        <Typography sx={{
          fontSize:"16px",
          fontFamily:"Josefin Sans",
          fontWeight:"300",
          pt:"16px",
          pl:"40px"
        }}>
          Hecho por Camila Arias para el Bootcamp de React de Código Facilito. Enero 2023.
        </Typography>
    </Box>
  )
}

export default Footer