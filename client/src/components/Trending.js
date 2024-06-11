import { Box, Typography } from "@mui/material";
import React from "react";
import MediaCard from "./MediaCard";
import Carousel from "./Carousel";

const Trending = () => {
  return (
    <div>
      <Typography sx={{ color: "text.secondary" }}>
        <Box>
          <Box>
            <Typography
              variant="h4"
              fontWeight={"bold"}
              sx={{ color: "text.secondary", marginLeft: 15, marginBottom: 2 }}
            >
              Trending
            </Typography>
          </Box>
          <div>
            <Carousel />
          </div>
        </Box>
      </Typography>
    </div>
  );
};

export default Trending;
