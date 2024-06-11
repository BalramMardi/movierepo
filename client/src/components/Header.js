import { Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography
        fontWeight={"bold"}
        variant="h2"
        sx={{ color: "text.primary" }}
      >
        Movix
      </Typography>
    </div>
  );
};

export default Header;
