import React from "react";
import {
  Box, Container, Typography, Card, CardContent,
  useTheme, Stack, Chip, Avatar, Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SectionHeader from "../components/SectionHeader";
import { aboutData } from "../data/siteData";
// import heroBackgroundImage from "../Images/About.jfif"
import heroBackgroundImage from "../Images/HomePage.jfif"


export default function AboutPage() {
  const theme = useTheme();

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
          backgroundImage: "radial-gradient(circle at 70% 50%, rgba(212,160,23,0.1) 0%, transparent 50%)" 
        }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Chip 
            label="About Claptek" 
            sx={{ 
              mb: 2, 
              background: "rgba(212,160,23,0.15)", 
              color: "#f0924a", 
              border: "1px solid rgba(212,160,23,0.3)", 
              fontWeight: 700, 
              fontSize: "0.75rem" 
            }} 
          />
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
            Trusted Governance, Risk &<br />Business Excellence Advisory
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.8 }}>
            Claptek partners with organisations to strengthen governance, improve risk visibility, and enable sustainable performance through practical, technology-enabled frameworks.
          </Typography>

          {/* Stats */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mt: 5
          }}>
            {aboutData.stats.map((s, i) => (
              <Box key={i}>
                <Box sx={{ 
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.1)", 
                  borderRadius: 3, 
                  p: 3, 
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    background: "rgba(255,255,255,0.08)",
                  }
                }}>
                  <Typography sx={{ color: "#f0924a", fontWeight: 800, fontSize: "2.2rem", lineHeight: 1 }}>
                    {s.value}
                  </Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", mt: 1 }}>
                    {s.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Key Points */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 6,
            alignItems: 'center'
          }}>
            {/* Left Column */}
            <Box>
              <SectionHeader chip="What defines us" title="Why enterprises trust Claptek" align="left" />
              <Stack spacing={2}>
                {aboutData.keyPoints.map((pt, i) => (
                  <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <CheckCircleIcon sx={{ color: "#f0924a", fontSize: 22, flexShrink: 0 }} />
                    <Typography variant="body1" fontWeight={500}>{pt}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Right Column - Nested Cards Grid */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 2,
            }}>
              {aboutData.brandSections.map((s, i) => (
                <Box key={i}>
                  <Card sx={{
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-4px)",
                    }
                  }}>
                    <CardContent sx={{ p: 3 }}>
                      <Typography variant="h6" fontWeight={700} sx={{ color: "#f0924a" }} mb={1}>
                        {s.heading}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.8}>
                        {s.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Vision & Mission */}
      <Box sx={{ py: 10, background: theme.palette.custom.sectionAlt }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 4,
          }}>
            <Box>
              <Card sx={{ 
                height: "100%", 
                background: "linear-gradient(135deg, #1a1408, #2c2008)", 
                color: "#fff",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                }
              }}>
                <CardContent sx={{ p: 5 }}>
                  <Typography variant="overline" sx={{ color: "#f0924a", fontWeight: 700, letterSpacing: "0.1em" }}>
                    Our Vision
                  </Typography>
                  <Typography variant="h5" fontWeight={700} mt={1} mb={2} color="#fff">
                    Where we're heading
                  </Typography>
                  <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 2 }} />
                  <Typography color="rgba(255,255,255,0.75)" lineHeight={1.8}>
                    {aboutData.vision}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
            <Box>
              <Card sx={{ 
                height: "100%", 
                background: "linear-gradient(135deg, #f0924a, #e8a317)", 
                color: "#1a1a1a",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                }
              }}>
                <CardContent sx={{ p: 5 }}>
                  <Typography variant="overline" sx={{ color: "rgba(26,26,26,0.8)", fontWeight: 700, letterSpacing: "0.1em" }}>
                    Our Mission
                  </Typography>
                  <Typography variant="h5" fontWeight={700} mt={1} mb={2} color="#1a1a1a">
                    How we get there
                  </Typography>
                  <Divider sx={{ borderColor: "rgba(26,26,26,0.2)", mb: 2 }} />
                  <Typography color="rgba(26,26,26,0.85)" lineHeight={1.8}>
                    {aboutData.mission}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Brand Evolution */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
            justifyContent: 'center'
          }}>
            {aboutData.brandEvolution.aspects.map((a, i) => (
              <Box key={i}>
                <Card sx={{ 
                  height: "100%", 
                  textAlign: "center",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  }
                }}>
                  <CardContent sx={{ p: 4 }}>
                    <Avatar sx={{ 
                      background: "linear-gradient(135deg, #f0924a, #f0924a)", 
                      width: 56, 
                      height: 56, 
                      mx: "auto", 
                      mb: 2, 
                      fontSize: "1.4rem", 
                      fontWeight: 800,
                      color: "#1a1a1a"
                    }}>
                      {i + 1}
                    </Avatar>
                    <Typography variant="h6" fontWeight={700} mb={1.5}>{a.title}</Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{a.description}</Typography>
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