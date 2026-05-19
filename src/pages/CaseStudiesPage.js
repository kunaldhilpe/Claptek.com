import React from "react";
import {
  Box, Container, Typography, Card, CardContent,
  useTheme, Chip, List, ListItem, ListItemIcon, ListItemText,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SectionHeader from "../components/SectionHeader";
import { caseStudiesData } from "../data/siteData";
import heroBackgroundImage from "../Images/HomePage.jfif"

const cardAccents = [
  "linear-gradient(135deg,#1a3a5c,#2d6aa0)",
  "linear-gradient(135deg,#e8701a,#f0924a)",
  "linear-gradient(135deg,#0d6e5c,#1a9e80)",
];

export default function CaseStudiesPage() {
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
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 70% 30%, rgba(74,158,221,0.12) 0%, transparent 50%)" }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Chip label="Insights" sx={{ mb: 2, background: "rgba(232,112,26,0.15)", color: "#f0924a", border: "1px solid rgba(232,112,26,0.3)", fontWeight: 700 }} />
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
            Success stories from the field
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 640, lineHeight: 1.8, fontSize: "1.05rem" }}>
            Examples of scale and outcomes from Claptek programmes—continuous controls, revenue assurance, audit platforms, and third-party risk.
          </Typography>
        </Container>
      </Box>

      {/* Case Studies */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <SectionHeader chip="Case Studies" title="Featured client engagements" />
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 5,
          }}>
            {caseStudiesData.studies.map((cs, i) => (
              <Box key={i}>
                <Card>
                  <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                    <Box sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', md: 'repeat(12, 1fr)' },
                      gap: 4,
                    }}>
                      {/* Left Column - Client Info */}
                      <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 5' } }}>
                        <Box sx={{ height: 5, width: 60, background: cardAccents[i], borderRadius: 2, mb: 2.5 }} />
                        <Chip label={cs.client} size="small" sx={{ mb: 2, background: theme.palette.custom.chipBg, color: theme.palette.custom.chipText, fontWeight: 700 }} />
                        <Typography variant="h5" fontWeight={700} mb={1.5} lineHeight={1.3}>{cs.title}</Typography>
                        <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{cs.overview}</Typography>
                      </Box>

                      {/* Middle Column - Scale & Reach */}
                      <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
                        <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: "0.08em", color: "text.secondary", display: "block", mb: 1.5 }}>
                          Scale & Reach
                        </Typography>
                        <List dense disablePadding>
                          {cs.scale.map((item, j) => (
                            <ListItem key={j} disableGutters sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 28 }}>
                                <CheckCircleOutlineIcon sx={{ fontSize: 18, color: "#e8701a" }} />
                              </ListItemIcon>
                              <ListItemText primary={item} primaryTypographyProps={{ fontSize: "0.85rem", color: "text.secondary", lineHeight: 1.6 }} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>

                      {/* Right Column - Outcomes */}
                      <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 3' } }}>
                        <Box sx={{ background: theme.palette.custom.sectionAlt, borderRadius: 2, p: 2.5, height: "100%" }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
                            <EmojiEventsIcon sx={{ color: "#e8701a", fontSize: 20 }} />
                            <Typography variant="overline" sx={{ fontWeight: 700, letterSpacing: "0.08em", color: "text.secondary" }}>Outcomes</Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary" lineHeight={1.8} fontSize="0.85rem">{cs.outcomes}</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ py: 8, background: theme.palette.custom.sectionAlt, textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h5" fontWeight={700} mb={1.5}>Request a detailed walkthrough under NDA</Typography>
          <Typography color="text.secondary">For a use case close to yours.</Typography>
        </Container>
      </Box>
    </Box>
  );
}