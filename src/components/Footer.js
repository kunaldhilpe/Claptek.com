import React from "react";
import {
  Box, Container, Typography, Link as MuiLink, Divider,
  IconButton, Stack, useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footerData, navLinks } from "../data/siteData";

const navMap = {
  About: "/about",
  "Our Team": "/team",
  Blogs: "/case-studies",
  "Case Studies": "/case-studies",
  Contact: "/contact",
};

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        background: theme.palette.custom.footerBg,
        color: theme.palette.custom.footerText,
        pt: 8,
        pb: 4,
        mt: "auto",
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Grid */}
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
          gap: 5,
          mb: 6
        }}>
          {/* Brand Column */}
          <Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #1a3a5c, #e8701a)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mr: 1.5,
                }}
              >
                <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "1.2rem" }}>C</Typography>
              </Box>
              <Typography variant="h6" sx={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem" }}>
                Claptek
              </Typography>
            </Box>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.custom.footerText, lineHeight: 1.8, mb: 3, maxWidth: 340 }}
            >
              {footerData.description}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                sx={{
                  color: theme.palette.custom.footerText,
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": { color: "#fff", borderColor: "rgba(255,255,255,0.4)" },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton
                size="small"
                sx={{
                  color: theme.palette.custom.footerText,
                  border: "1px solid rgba(255,255,255,0.1)",
                  "&:hover": { color: "#fff", borderColor: "rgba(255,255,255,0.4)" },
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Box>

          {/* Solutions */}
          <Box>
            <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 700, mb: 2.5, fontSize: "0.95rem" }}>
              Solutions
            </Typography>
            <Stack spacing={1.2}>
              {footerData.solutions.map((s) => (
                <MuiLink
                  key={s}
                  component={Link}
                  to="/solutions"
                  underline="none"
                  sx={{
                    color: theme.palette.custom.footerText,
                    fontSize: "0.82rem",
                    lineHeight: 1.5,
                    "&:hover": { color: "#e8701a" },
                    transition: "color 0.2s",
                  }}
                >
                  {s}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Company */}
          <Box>
            <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 700, mb: 2.5, fontSize: "0.95rem" }}>
              Company
            </Typography>
            <Stack spacing={1.2}>
              {footerData.companyLinks.map((l) => (
                <MuiLink
                  key={l}
                  component={Link}
                  to={navMap[l] || "/"}
                  underline="none"
                  sx={{
                    color: theme.palette.custom.footerText,
                    fontSize: "0.85rem",
                    "&:hover": { color: "#e8701a" },
                    transition: "color 0.2s",
                  }}
                >
                  {l}
                </MuiLink>
              ))}
            </Stack>
          </Box>

          {/* Contact */}
          <Box>
            <Typography variant="subtitle1" sx={{ color: "#fff", fontWeight: 700, mb: 2.5, fontSize: "0.95rem" }}>
              Get in Touch
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
                <LocationOnIcon sx={{ fontSize: 18, color: "#e8701a", mt: 0.2, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: theme.palette.custom.footerText, fontSize: "0.82rem", lineHeight: 1.6 }}>
                  {footerData.contact.address}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <EmailIcon sx={{ fontSize: 18, color: "#e8701a", flexShrink: 0 }} />
                <MuiLink href={`mailto:${footerData.contact.email}`} underline="none"
                  sx={{ color: theme.palette.custom.footerText, fontSize: "0.85rem", "&:hover": { color: "#e8701a" } }}>
                  {footerData.contact.email}
                </MuiLink>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <PhoneIcon sx={{ fontSize: 18, color: "#e8701a", flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: theme.palette.custom.footerText, fontSize: "0.85rem" }}>
                  {footerData.contact.phone}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 1.5, alignItems: "center" }}>
                <AccessTimeIcon sx={{ fontSize: 18, color: "#e8701a", flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: theme.palette.custom.footerText, fontSize: "0.85rem" }}>
                  {footerData.contact.hours}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)", mb: 3 }} />

        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, justifyContent: "space-between", alignItems: "center", gap: 1 }}>
          <Typography variant="caption" sx={{ color: theme.palette.custom.footerText, fontSize: "0.78rem", textAlign: { xs: "center", sm: "left" } }}>
            {footerData.copyright}
          </Typography>
         
        </Box>
      </Container>
    </Box>
  );
}