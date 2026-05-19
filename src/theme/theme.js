import { createTheme } from "@mui/material/styles";

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#1a3a5c", light: "#2d6aa0", dark: "#0d2035" },
          secondary: { main: "#e8701a", light: "#f0924a", dark: "#b54e0a" },
          background: { default: "#f5f7fa", paper: "#ffffff" },
          text: { primary: "#1a2332", secondary: "#4a5568" },
          divider: "#e2e8f0",
          custom: {
            accent: "#e8701a",
            cardBg: "#ffffff",
            navBg: "rgba(255,255,255,0.95)",
            heroGrad: "linear-gradient(135deg, #0d2035 0%, #1a3a5c 50%, #2d6aa0 100%)",
            sectionAlt: "#eef2f7",
            chipBg: "#e8f0f7",
            chipText: "#1a3a5c",
            footerBg: "#0d1f35",
            footerText: "#a0b4cc",
          },
        }
      : {
          primary: { main: "#4a9edd", light: "#6db5e8", dark: "#2d7ab8" },
          secondary: { main: "#f0924a", light: "#f5b07a", dark: "#c06820" },
          background: { default: "#0a0f1a", paper: "#111827" },
          text: { primary: "#e8edf5", secondary: "#8fa3b8" },
          divider: "#1e2d3d",
          custom: {
            accent: "#f0924a",
            cardBg: "#111827",
            navBg: "rgba(10,15,26,0.95)",
            heroGrad: "linear-gradient(135deg, #050810 0%, #0d1520 50%, #0f2030 100%)",
            sectionAlt: "#0d1520",
            chipBg: "#1a2840",
            chipText: "#4a9edd",
            footerBg: "#060c15",
            footerText: "#6a8aa5",
          },
        }),
  },
  typography: {
    fontFamily: '"Sora", "Segoe UI", sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.03em" },
    h2: { fontWeight: 700, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.01em" },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, letterSpacing: "0.02em" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontSize: "0.95rem",
          padding: "10px 24px",
        },
        containedPrimary: {
          background: mode === "light"
            ? "linear-gradient(135deg, #1a3a5c, #2d6aa0)"
            : "linear-gradient(135deg, #2d6aa0, #4a9edd)",
          "&:hover": {
            background: mode === "light"
              ? "linear-gradient(135deg, #0d2035, #1a3a5c)"
              : "linear-gradient(135deg, #1a4a7a, #2d7ab8)",
          },
        },
        containedSecondary: {
          background: "linear-gradient(135deg, #e8701a, #f0924a)",
          "&:hover": { background: "linear-gradient(135deg, #b54e0a, #c86820)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: mode === "light"
            ? "0 2px 20px rgba(0,0,0,0.06)"
            : "0 2px 20px rgba(0,0,0,0.3)",
          border: mode === "light" ? "1px solid #e8edf5" : "1px solid #1a2840",
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: mode === "light"
              ? "0 12px 40px rgba(0,0,0,0.12)"
              : "0 12px 40px rgba(0,0,0,0.5)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 600, fontSize: "0.75rem" },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: mode === "light" ? "1px solid #e8edf5" : "1px solid #1a2840",
        },
      },
    },
  },
});

export const createAppTheme = (mode) => createTheme(getDesignTokens(mode));
