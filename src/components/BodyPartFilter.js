import React from 'react';
import {Stack, Typography } from '@mui/material';

const BodyPartFilter = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="button"
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            backgroundColor: bodyPart === item ? '#0B9854': '#1A614C',
            borderRadius: "16px",
            width: "100%",
            height: "40px",
            cursor: "pointer",
            px:"10px"
        }}
        onClick={() => {
            setBodyPart(item);
        }}
        >
            <Typography noWrap
            fontSize="16px"
            fontWeight="500"
            fontFamily="Josefin Sans"
            textTransform="uppercase">
            {item}
            </Typography>
    </Stack>
  )
}

export default BodyPartFilter