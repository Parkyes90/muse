import React from "react";
import { Container, Grid, useTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import MainAppBar from "../components/organisms/main-app-bar";
import MainPage from "../pages/main-page";

const App: React.FC = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      direction="column"
      minWidth={theme.breakpoints.values.sm}
      sx={{
        height: "100vh",
      }}
    >
      <MainAppBar sx={{ marginBottom: theme.typography.pxToRem(48) }} />
      <Container sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/games/create" element={<div>Test</div>} />
        </Routes>
      </Container>
    </Grid>
  );
};

export default App;
