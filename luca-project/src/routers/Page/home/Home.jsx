import React from "react";
import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <Card>
        <CardHeader title="Bem vindo" />
        <CardContent>
          <Box>
            <Typography>Minha aplicação React</Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default Home;
