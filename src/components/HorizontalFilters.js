import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import BodyPartFilter from './BodyPartFilter';

const HorizontalFilters = ({dataBodyParts, bodyPart, setBodyPart}) => {
  return (
    <Stack
    direction="row"
    flexWrap="wrap"
    width="100%"
    sx={{
        columnGap: "32px",
        rowGap:"12px"
    }}
    >
        {Array.isArray(dataBodyParts)
        ? dataBodyParts.map((item) => (
            <Box
            justifyContent="space-between"
            mb="0px"
            mt="10px"
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            >
                <BodyPartFilter item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        ))
        : null
        }
    </Stack>
  )
}

export default HorizontalFilters