import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Layout from "../layout/Layout";

const Description = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/api/v1/movie/movies/${id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error}</Typography>;

  return (
    <Layout>
      <Grid container spacing={2} marginTop={4}>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          display="flex"
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems="center"
        >
          <div>{movie && <img src={movie.Poster} alt={movie.Title} />}</div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          display="flex"
          flexDirection="column"
          justifyContent={{ xs: "flex-end", md: "center" }}
          alignItems={{ xs: "center", md: "center", lg: "flex-start" }}
        >
          <Box>
            {movie && (
              <>
                <Typography
                  fontWeight="bold"
                  variant="h3"
                  sx={{ color: "text.primary", marginLeft: 4 }}
                >
                  {movie.Title}
                </Typography>
                <Typography
                  sx={{ color: "text.secondary", marginLeft: 4, width: "80%" }}
                >
                  {movie.Plot}
                </Typography>
                <Typography sx={{ color: "text.primary", marginLeft: 4 }}>
                  <strong>Genre:</strong> {movie.Genre}
                </Typography>
                <Typography sx={{ color: "text.primary", marginLeft: 4 }}>
                  <strong>Director:</strong> {movie.Director}
                </Typography>
                <Typography sx={{ color: "text.primary", marginLeft: 4 }}>
                  <strong>Year:</strong> {movie.Year}
                </Typography>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Description;
