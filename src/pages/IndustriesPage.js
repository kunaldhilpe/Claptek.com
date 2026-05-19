import React from "react";
import {
  Box, Container, Typography, Card, CardContent,
  useTheme, Chip, Avatar, Stack,
} from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import { industriesData } from "../data/siteData";
import heroBackgroundImage from "../Images/HomePage.jfif"

const sectorGradients = [
  "linear-gradient(135deg,#1a3a5c,#2d6aa0)",
  "linear-gradient(135deg,#e8701a,#f0924a)",
  "linear-gradient(135deg,#0d6e5c,#1a9e80)",
  "linear-gradient(135deg,#5c1a5c,#9e1a9e)",
  "linear-gradient(135deg,#5c3a1a,#9e6a2d)",
  "linear-gradient(135deg,#1a2e5c,#4a6aa0)",
];

export default function IndustriesPage() {
  const theme = useTheme();

  return (
    <Box>
      {/* Hero */}
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
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 40% 70%, rgba(74,158,221,0.12) 0%, transparent 50%)" }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Chip label="Industries" sx={{ mb: 2, background: "rgba(232,112,26,0.15)", color: "#f0924a", border: "1px solid rgba(232,112,26,0.3)", fontWeight: 700 }} />
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
            Frameworks proven where regulation and complexity meet
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 640, lineHeight: 1.8, fontSize: "1.05rem" }}>
            For over two decades, Claptek has pioneered proprietary approaches across sectors—tailored to Indian and South East Asian market realities.
          </Typography>

          {/* Stats */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 3,
            mt: 4
          }}>
            {industriesData.stats.map((s, i) => (
              <Box key={i}>
                <Box sx={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 3, p: 3, textAlign: "center" }}>
                  <Typography sx={{ color: "#e8701a", fontWeight: 800, fontSize: "2rem" }}>{s.value}</Typography>
                  <Typography sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", mt: 0.5 }}>{s.label}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Sectors */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <SectionHeader chip="Core Sectors" title="Industry specialisations" subtitle="Tailored governance and risk playbooks for each sector we serve." />
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}>
            {industriesData.sectors.map((s, i) => (
              <Box key={i}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Avatar sx={{ background: sectorGradients[i], width: 56, height: 56, mb: 2.5, fontSize: "1.5rem", fontWeight: 800 }}>
                      {s.sector[0]}
                    </Avatar>
                    <Typography variant="h6" fontWeight={700} mb={1.5}>{s.sector}</Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8} mb={2.5}>{s.description}</Typography>
                    <Stack spacing={1}>
                      {s.keyFeatures.map((f, j) => (
                        <Box key={j} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                          <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#e8701a", flexShrink: 0 }} />
                          <Typography variant="caption" color="text.secondary" fontWeight={500}>{f}</Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Delivery Approach */}
      <Box sx={{ py: 10, background: theme.palette.custom.sectionAlt }}>
        <Container maxWidth="xl">
          <SectionHeader chip="Delivery Model" title="Structured execution from discovery to measurable outcomes" subtitle="A four-stage engagement model keeps execution predictable and outcome-oriented." />
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}>
            {industriesData.stages.map((stage, i) => (
              <Box key={i}>
                <Card sx={{ textAlign: "center", height: "100%" }}>
                  <CardContent sx={{ p: 4 }}>
                    <Typography sx={{ fontSize: "3rem", fontWeight: 800, background: sectorGradients[i], WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1.1, mb: 1 }}>
                      {stage.stage}
                    </Typography>
                    <Typography variant="h6" fontWeight={700} mb={1.5}>{stage.name}</Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{stage.description}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 10, background: "linear-gradient(135deg, #0d2035, #1a3a5c, #e8701a)", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: "#fff", fontWeight: 800, mb: 2 }}>Ready to discuss industry-specific reference architectures?</Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 4 }}>Let's explore how Claptek's playbooks fit your sector.</Typography>
        </Container>
      </Box>
    </Box>
  );
}