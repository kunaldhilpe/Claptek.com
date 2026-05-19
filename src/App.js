import React, { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createAppTheme } from "./theme/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SolutionsPage from "./pages/SolutionsPage";
import ProductsPage from "./pages/ProductsPage";
import TeamPage from "./pages/TeamPage";
import IndustriesPage from "./pages/IndustriesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactPage from "./pages/ContactPage";
import SponsorLogos from "./pages/SponsorLogos";
import ScrollProgressBar from "./components/ScrollProgressBar"

export default function App() {
  const [mode, setMode] = useState("light");
  const theme = useMemo(() => createAppTheme(mode), [mode]);
  const toggleTheme = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollProgressBar /> {/* Add progress bar here */}
        <ScrollToTop />
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
          <Navbar toggleTheme={toggleTheme} mode={mode} />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Box>
          <SponsorLogos />
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}