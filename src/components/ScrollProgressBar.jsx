import React, { useState, useEffect } from "react";
import { Box, Typography, Fade } from "@mui/material";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPercentage, setShowPercentage] = useState(false);

  useEffect(() => {
    let ticking = false;

    const calculateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(scrolled);
      setShowPercentage(scrollTop > 200);
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(calculateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    calculateScrollProgress();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Progress Bar at top */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "3px",
          zIndex: 9999,
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        }}
      >
        <Box
          sx={{
            width: `${scrollProgress}%`,
            height: "100%",
            background: (theme) => 
              `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            transition: "width 0.15s ease-out",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              right: 0,
              top: "-4px",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: (theme) => theme.palette.secondary.main,
              boxShadow: "0 0 8px rgba(0,0,0,0.2)",
            },
          }}
        />
      </Box>

    
    </>
  );
};

export default ScrollProgressBar;