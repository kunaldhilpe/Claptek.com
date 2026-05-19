import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function SectionHeader({ chip, title, subtitle, align = "center", light = false }) {
  const theme = useTheme();
  return (
    <Box sx={{ textAlign: align, mb: 6 }}>
      {chip && (
        <Chip
          label={chip}
          size="small"
          sx={{
            mb: 2,
            fontWeight: 700,
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            background: light ? "rgba(232,112,26,0.15)" : theme.palette.custom.chipBg,
            color: light ? "#e8701a" : theme.palette.custom.chipText,
            border: `1px solid ${light ? "rgba(232,112,26,0.3)" : theme.palette.divider}`,
          }}
        />
      )}
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          fontSize: { xs: "1.9rem", md: "2.5rem" },
          color: light ? "#ffffff" : theme.palette.text.primary,
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: light ? "rgba(255,255,255,0.7)" : theme.palette.text.secondary,
            maxWidth: 680,
            mx: align === "center" ? "auto" : 0,
            lineHeight: 1.7,
            fontSize: "1.05rem",
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
