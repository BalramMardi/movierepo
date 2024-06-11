import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { movies } from "../data/Moviesdata";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function MediaCard({ id, Title, Plot, Poster }) {
  const navigate = useNavigate();
  return (
    <Card
      key={id}
      sx={{ maxWidth: 345, cursor: "pointer", bgcolor: "#0C1925" }}
      onClick={() => navigate(`/description/${id}`)}
    >
      <CardMedia sx={{ height: 300 }} image={Poster} title={Title} />
      <CardContent>
        <Box sx={{ height: "6em", overflow: "hidden" }}>
          <Typography gutterBottom variant="h5" component="div">
            {Title}
          </Typography>
        </Box>
        <Box sx={{ height: "100px", overflow: "hidden" }}>
          <Typography variant="body2" color="text.secondary">
            {Plot}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
