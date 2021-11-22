import React from "react";
import { Container, Grid, useTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import GameNewPage from "pages/game-new-page";
import MainAppBar from "../components/organisms/main-app-bar";
import MainPage from "../pages/main-page";
import GameDetailPage from "../pages/game-detail-page";

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
      <MainAppBar sx={{ marginBottom: theme.spacing(6) }} />
      <Container sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/games/new" element={<GameNewPage />} />
          <Route path="/games/:gameId" element={<GameDetailPage />} />
        </Routes>
      </Container>
    </Grid>
  );
};

export default App;
