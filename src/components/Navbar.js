import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Box, Button, IconButton, Drawer, List,
  ListItem, ListItemText, useTheme, useScrollTrigger, Container,
  Divider, Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../data/siteData";

export default function Navbar({ toggleTheme, mode }) {
  const theme = useTheme();
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 20 });

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: trigger
            ? theme.palette.custom.navBg
            : "transparent",
          backdropFilter: trigger ? "blur(12px)" : "none",
          transition: "all 0.3s ease",
          borderBottom: trigger
            ? `1px solid ${theme.palette.divider}`
            : "none",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1, px: { xs: 0 } }} disableGutters>
            <Box
              component={Link}
              to="/"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                flexGrow: { xs: 1, md: 0 },
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #1a3a5c, #e8701a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1.5,
                }}
              >
                <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>
                  C
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 800,
                  fontSize: "1.3rem",
                  color: trigger 
                    ? theme.palette.text.primary
                    : "#ffffff",
                  letterSpacing: "-0.02em",
                }}
              >
                Claptek
              </Typography>
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, ml: "auto", alignItems: "center", gap: 0.5 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={Link}
                  to={link.path}
                  sx={{
                    color:
                      location.pathname === link.path
                        ? theme.palette.secondary.main
                        : trigger 
                        ? theme.palette.text.primary
                        : "rgba(255,255,255,0.9)",
                    fontWeight: location.pathname === link.path ? 700 : 500,
                    fontSize: "0.85rem",
                    px: 1.5,
                    "&:hover": { color: theme.palette.secondary.main, background: "transparent" },
                  }}
                >
                  {link.label}
                </Button>
              ))}
              <IconButton onClick={toggleTheme} sx={{ ml: 1, color: trigger  ? theme.palette.text.primary : "#fff" }}>
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/contact"
                sx={{ ml: 1, borderRadius: 2 }}
              >
                Book a Demo
              </Button>
            </Box>

            <Box sx={{ display: { xs: "flex", md: "none" }, ml: "auto", alignItems: "center" }}>
              <IconButton onClick={toggleTheme} sx={{ color: trigger  ? theme.palette.text.primary : "#fff" }}>
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
              <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: trigger  ? theme.palette.text.primary : "#fff" }}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 280, background: theme.palette.background.paper } }}
      >
        <Box sx={{ p: 2, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography variant="h6" fontWeight={800}>Claptek</Typography>
          <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <Divider />
        <List>
          {navLinks.map((link) => (
            <ListItem
              key={link.path}
              component={Link}
              to={link.path}
              onClick={() => setDrawerOpen(false)}
              sx={{
                textDecoration: "none",
                color: location.pathname === link.path ? theme.palette.secondary.main : theme.palette.text.primary,
                fontWeight: location.pathname === link.path ? 700 : 400,
                borderRadius: 1,
                mx: 1,
                mb: 0.5,
              }}
            >
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <Button variant="contained" color="secondary" fullWidth component={Link} to="/contact" onClick={() => setDrawerOpen(false)}>
            Book a Demo
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
