import React from "react";
import { Grid, useTheme } from "@mui/material";
import MainAppBar from "../components/organisms/main-app-bar";
import MainContent from "../components/organisms/main-content";

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
      <MainContent />
    </Grid>
  );
};

export default App;
