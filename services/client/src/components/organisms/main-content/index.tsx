import { Box, BoxProps, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import GameList from "../game-list";

const MainContent: React.FC<BoxProps> = (props) => {
  return (
    <Box {...props} sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ marginLeft: "auto" }}>
        <Link to="games/create">
          <Button type="button" variant="outlined" color="success">
            게임 만들기
          </Button>
        </Link>
      </Box>
      <GameList />
    </Box>
  );
};

export default MainContent;
