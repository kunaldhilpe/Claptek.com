import React from "react";
import {
  Box, Container, Typography, Card, CardContent,
  useTheme, Chip, Avatar,
} from "@mui/material";
import SectionHeader from "../components/SectionHeader";
import { productsData } from "../data/siteData";
import heroBackgroundImage from "../Images/HomePage.jfif"

const iconLetters = { Controls: "C", Audit: "A", Workflow: "W", Risk: "R", Pricing: "P", Revenue: "Rv", Performance: "Pf", Governance: "G" };
const gradients = [
  "linear-gradient(135deg,#1a3a5c,#2d6aa0)",
  "linear-gradient(135deg,#e8701a,#f0924a)",
  "linear-gradient(135deg,#0d6e5c,#1a9e80)",
  "linear-gradient(135deg,#5c1a5c,#9e1a9e)",
];

export default function ProductsPage() {
  const theme = useTheme();

  return (
    <Box >
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
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 80% 40%, rgba(232,112,26,0.1) 0%, transparent 50%)" }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Chip label="Our Products" sx={{ mb: 2, background: "rgba(232,112,26,0.15)", color: "#f0924a", border: "1px solid rgba(232,112,26,0.3)", fontWeight: 700 }} />
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
            Enterprise GRC, Risk Management & Revenue Assurance Software
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 640, lineHeight: 1.8, fontSize: "1.05rem" }}>
            Claptek builds business-ready digital products for Governance, Risk, and Compliance (GRC), Internal Audit Management, and Revenue Assurance Analytics.
          </Typography>
        </Container>
      </Box>

      {/* Product Categories */}
      {productsData.categories.map((cat, ci) => (
        <Box key={ci} sx={{ py: 10, background: ci % 2 === 0 ? theme.palette.background.default : theme.palette.custom.sectionAlt }}>
          <Container maxWidth="xl">
            <SectionHeader
              chip={`Category ${ci + 1}`}
              title={cat.categoryName}
              subtitle={cat.categoryDescription}
            />
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' },
              gap: 4,
            }}>
              {cat.products.map((p, pi) => (
                <Box key={pi}>
                  <Card sx={{ height: "100%" }}>
                    <CardContent sx={{ p: 3.5 }}>
                      <Avatar
                        sx={{
                          background: gradients[pi % 4],
                          width: 52, height: 52, mb: 2.5,
                          fontSize: "1rem", fontWeight: 800,
                        }}
                      >
                        {iconLetters[p.name] || p.name[0]}
                      </Avatar>
                      <Chip
                        label={p.name}
                        size="small"
                        sx={{ mb: 1.5, background: theme.palette.custom.chipBg, color: theme.palette.custom.chipText, fontWeight: 700, fontSize: "0.7rem" }}
                      />
                      <Typography variant="subtitle1" fontWeight={700} mb={1.5} lineHeight={1.3} fontSize="0.95rem">
                        {p.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.8} fontSize="0.85rem">
                        {p.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      ))}

      {/* CTA */}
      <Box sx={{ py: 10, background: "linear-gradient(135deg, #0d2035, #1a3a5c)", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ color: "#fff", fontWeight: 800, mb: 2 }}>
            Explore detailed features & deployment options
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", mb: 4 }}>
            Tailored to your governance, audit, and risk priorities.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}