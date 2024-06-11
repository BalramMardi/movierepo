import { Typography } from "@mui/material";
import React from "react";
import Layout from "../layout/Layout";
import Trending from "../components/Trending";

const HomePage = () => {
  return (
    <Layout>
      <Typography sx={{ color: "text.primary" }}>
        <Trending />
      </Typography>
    </Layout>
  );
};

export default HomePage;
