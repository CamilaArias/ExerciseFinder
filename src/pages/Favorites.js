import React from "react";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Favorites = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      gap="22px"
      sx={{
        p: "40px",
      }}
    >
      <h1>Nothing to see here.</h1>
      <Link to="/" style={{textDecoration: 'none'}}>
        <Box
          p="20px"
          sx={{
            background: "#044f55",
          }}
        >Take me back!</Box>
      </Link>
    </Stack>
  );
};

export default Favorites;
