import logo from "./logo.svg";
import "./App.css";
import { Box, ThemeProvider } from "@mui/material";
import { darkTheme, whiteTheme } from "./theme/Theme";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Description from "./pages/Description";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box className="App" sx={{ bgcolor: "background.default" }}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/description/:id" element={<Description />}></Route>
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
