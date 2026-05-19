import React, { useState } from "react";
import {
  Box, Container, Typography, Card, CardContent,
  useTheme, Chip, List, ListItem, ListItemIcon, ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SectionHeader from "../components/SectionHeader";
import { solutionsData } from "../data/siteData";
// import heroBackgroundImage from "../Images/Solutions.jfif"
import heroBackgroundImage from "../Images/HomePage.jfif"

const solutionColors = [
  "linear-gradient(135deg,#d4a017,#f0924a)", // Updated to yellow theme
  "linear-gradient(135deg,#e8a317,#ffcc00)",
  "linear-gradient(135deg,#0d6e5c,#1a9e80)",
  "linear-gradient(135deg,#5c1a5c,#9e1a9e)",
  "linear-gradient(135deg,#5c3a1a,#9e6a2d)",
  "linear-gradient(135deg,#1a2e5c,#2d4aa0)",
];

export default function SolutionsPage() {
  const theme = useTheme();
  const [hovered, setHovered] = useState(null);

  // Add your background image URL here

  return (
    <Box>
      {/* Hero with Background Image */}
      <Box sx={{ 
        background: `linear-gradient(135deg, rgba(13,32,53,0.85) 0%, rgba(26,58,92,0.85) 50%, rgba(45,106,160,0.85) 100%), url(${heroBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        pt: 16, 
        pb: 10, 
        position: "relative", 
        overflow: "hidden" 
      }}>
        <Box sx={{ 
          position: "absolute", 
          inset: 0, 
          backgroundImage: "radial-gradient(circle at 30% 60%, rgba(232,112,26,0.1) 0%, transparent 50%)" 
        }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Chip 
            label="What We Offer" 
            sx={{ 
              mb: 2, 
              background: "rgba(212,160,23,0.15)", 
              color: "#f0924a", 
              border: "1px solid rgba(212,160,23,0.3)", 
              fontWeight: 700 
            }} 
          />
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
            {solutionsData.header.subtitle}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 640, lineHeight: 1.8, fontSize: "1.05rem" }}>
            {solutionsData.header.description}
          </Typography>
        </Container>
      </Box>

      {/* Solutions Grid */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <SectionHeader chip="Solutions" title="Our complete solution suite" />
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
          }}>
            {solutionsData.solutions.map((s, i) => (
              <Box key={i}>
                <Card
                  sx={{ 
                    height: "100%", 
                    cursor: "pointer", 
                    transition: "all 0.3s", 
                    border: hovered === i ? `2px solid #d4a017` : `2px solid transparent`,
                    '&:hover': {
                      transform: "translateY(-4px)",
                      boxShadow: "0 12px 40px rgba(0,0,0,0.12)"
                    }
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ width: 48, height: 4, background: solutionColors[i], borderRadius: 2, mb: 3 }} />
                    <Typography variant="h6" fontWeight={700} mb={1.5} lineHeight={1.3}>{s.name}</Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8} mb={3}>{s.description}</Typography>
                    <List dense disablePadding>
                      {s.keyFeatures.map((f, j) => (
                        <ListItem key={j} disableGutters sx={{ py: 0.4 }}>
                          <ListItemIcon sx={{ minWidth: 28 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 18, color: "#d4a017" }} />
                          </ListItemIcon>
                          <ListItemText primary={f} primaryTypographyProps={{ fontSize: "0.85rem", color: "text.secondary", lineHeight: 1.6 }} />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Impact */}
      <Box sx={{ py: 10, background: theme.palette.custom.sectionAlt }}>
        <Container maxWidth="xl">
          <SectionHeader chip="Our Impact" title="Claptek's contribution — at a glance" subtitle="Illustrative reach from live programmes across India and South East Asia." />
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
          }}>
            {solutionsData.impact.map((item, i) => (
              <Box key={i}>
                <Card>
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                      <Box sx={{
                        width: 10, height: 10, borderRadius: "50%", mt: 1, flexShrink: 0,
                        background: solutionColors[i],
                      }} />
                      <Box>
                        <Typography variant="h6" fontWeight={700} mb={1}>{item.area}</Typography>
                        <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{item.details}</Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Governance Focus */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <SectionHeader chip="Governance Focus" title="Governance in focus" subtitle="Supervisory and industry dialogue increasingly emphasises technology-enabled assurance and robust governance structures." />
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
          }}>
            {[
              { sector: "Audit & Assurance", challenge: "Manual assessment alone is insufficient at scale—organisations need repeatable, analytics-backed audit workflows.", solution: "Data-driven audit & VUEFRAME" },
              { sector: "Banking & NBFC", challenge: "Robust governance, compliance protocols, and internal audit discipline underpin sustainable performance for banks and non-banks.", solution: "Continuous controls monitoring · Risk-based audits" },
              { sector: "Insurance Conduct", challenge: "Boards are expected to keep policyholder interests central—with transparent processes and controls.", solution: "Revenue assurance" },
              { sector: "Markets & Listed Entities", challenge: "Clearer disclosures and stronger governance at listed companies continue to drive reform agendas.", solution: "Integrated risk management" },
            ].map((item, i) => (
              <Box key={i}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Chip 
                      label={item.sector} 
                      size="small" 
                      sx={{ 
                        mb: 2, 
                        background: theme.palette.custom.chipBg, 
                        color: theme.palette.custom.chipText, 
                        fontWeight: 700, 
                        fontSize: "0.72rem" 
                      }} 
                    />
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8} mb={2}>{item.challenge}</Typography>
                    <Box sx={{ 
                      p: 1.5, 
                      borderRadius: 2, 
                      background: "rgba(212,160,23,0.08)", 
                      border: "1px solid rgba(212,160,23,0.15)" 
                    }}>
                      <Typography variant="caption" sx={{ color: "#d4a017", fontWeight: 700 }}>Solution: </Typography>
                      <Typography variant="caption" color="text.secondary">{item.solution}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}