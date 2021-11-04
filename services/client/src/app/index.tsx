import React from "react";
import { Grid, useTheme } from "@mui/material";
import MainAppBar from "../components/organisms/main-app-bar";

const App: React.FC = () => {
  const theme = useTheme();
  return (
    <Grid container direction="column" minWidth={theme.breakpoints.values.sm}>
      <MainAppBar />
      <div>toolbar</div>
      <div>table</div>
    </Grid>
  );
};

export default App;
