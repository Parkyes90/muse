import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { AppBarProps } from "@mui/material/AppBar/AppBar";

const MainAppBar: React.FC<AppBarProps> = (props) => {
  return (
    <AppBar position="static" {...props}>
      <Toolbar>
        <LibraryMusicIcon />
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Muse
        </Typography>
        <Typography sx={{ flexGrow: 1 }}>
          반주를 듣고 노래를 맞춰보세요!
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
