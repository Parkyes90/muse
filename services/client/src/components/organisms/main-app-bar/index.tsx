import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { AppBarProps } from "@mui/material/AppBar/AppBar";
import { Link } from "react-router-dom";

const MainAppBar: React.FC<AppBarProps> = (props) => {
  return (
    <AppBar position="static" {...props}>
      <Toolbar>
        <Link to="/">
          <Typography
            variant="h6"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <LibraryMusicIcon />
            Muse
          </Typography>
        </Link>
        <Typography sx={{ marginLeft: "auto" }}>
          반주를 듣고 노래를 맞춰보세요!
        </Typography>
        <Button color="inherit" sx={{ marginLeft: "auto" }}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
