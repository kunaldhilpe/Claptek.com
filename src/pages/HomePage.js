import React, { useState, useEffect, useRef } from "react";
import {
  Box, Container, Grid, Typography, Button, Card, CardContent,
  Chip, Stack, useTheme, Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import VerifiedIcon from "@mui/icons-material/Verified";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import GroupsIcon from "@mui/icons-material/Groups";
import SectionHeader from "../components/SectionHeader";
import { homepageData } from "../data/siteData";
import heroBackgroundImage from "../Images/HomePage.jfif"
import SponsorLogos from "./SponsorLogos";

const categoryColors = {
  GOVERNANCE: { bg: "#1a3a5c", text: "#fff" },
  AUDIT: { bg: "#e8701a", text: "#fff" },
};

// CountUp Animation Component
const CountUpMetric = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let endValue = typeof end === 'string'
      ? parseFloat(end.replace(/[+,]/g, ''))
      : end;

    const startValue = 0;
    const increment = endValue / (duration / 16);
    let current = startValue;

    const timer = setInterval(() => {
      current += increment;
      if (current >= endValue) {
        setCount(endValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  const formattedCount = () => {
    const isMetricWithPlus = typeof end === 'string' && end.includes('+');
    const countValue = Math.floor(count);
    const formattedNumber = countValue.toLocaleString();
    return isMetricWithPlus ? `${formattedNumber}+` : formattedNumber;
  };

  return <span ref={elementRef}>{formattedCount()}</span>;
};

export default function HomePage() {
  const theme = useTheme();

  // Optional: Add your background image URL here
  // const heroBackgroundImage = "../Images/HomePage.jfif"; // Change this to your image path

  return (
    <Box>
      {/* Hero with Background Image */}
      <Box
        sx={{
          background: `linear-gradient(135deg, rgba(13,32,53,0.85) 0%, rgba(26,58,92,0.85) 50%, rgba(45,106,160,0.85) 100%), url(${heroBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern overlay */}
        <Box
          sx={{
            position: "absolute", inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(232,112,26,0.08) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(74,158,221,0.1) 0%, transparent 40%)`,
          }}
        />
        <Box sx={{
          position: "absolute", top: "10%", right: "5%", width: 500, height: 500,
          borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)",
        }} />
        <Box sx={{
          position: "absolute", top: "20%", right: "10%", width: 300, height: 300,
          borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)",
        }} />

        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1, pt: 14, pb: 10 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip
                label="Trusted by 100+ BFSI Enterprises"
                icon={<VerifiedIcon sx={{ fontSize: "14px !important" }} />}
                sx={{
                  mb: 3, background: "rgba(232,112,26,0.15)", color: "#f0924a",
                  border: "1px solid rgba(232,112,26,0.3)", fontWeight: 700,
                  fontSize: "0.75rem", letterSpacing: "0.05em",
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  color: "#fff", fontSize: { xs: "2.2rem", md: "3.4rem", lg: "4rem" },
                  fontWeight: 800, lineHeight: 1.1, mb: 3,
                }}
              >
                {homepageData.hero.title}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.7)", fontSize: { xs: "1rem", md: "1.15rem" },
                  lineHeight: 1.8, mb: 4, maxWidth: 560,
                }}
              >
                {homepageData.hero.description}
              </Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained" color="secondary" size="large"
                  component={Link} to="/solutions"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ px: 4, py: 1.5, fontSize: "1rem" }}
                >
                  Explore Solutions
                </Button>
                <Button
                  variant="outlined" size="large" component={Link} to="/contact"
                  sx={{
                    px: 4, py: 1.5, fontSize: "1rem",
                    color: "#fff", borderColor: "rgba(255,255,255,0.4)",
                    "&:hover": { borderColor: "#fff", background: "rgba(255,255,255,0.05)" },
                  }}
                >
                  Talk to Expert
                </Button>
              </Stack>
            </Grid>

            {/* Stats Grid with Animation */}
            <Grid item xs={12} md={5}>
              <Grid container spacing={2}>
                {homepageData.keyMetrics.map((m, i) => (
                  <Grid item xs={6} key={i}>
                    <Box
                      sx={{
                        background: "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 3,
                        p: 3,
                        textAlign: "center",
                        transition: "transform 0.3s ease-in-out, background 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          background: "rgba(255,255,255,0.08)",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          color: "#e8701a",
                          fontWeight: 800,
                          fontSize: { xs: "1.5rem", sm: "2rem" },
                          lineHeight: 1,
                          fontFamily: "monospace",
                        }}
                      >
                        <CountUpMetric end={m.metric} duration={1500} />
                      </Typography>
                      <Typography
                        sx={{
                          color: "rgba(255,255,255,0.65)",
                          fontSize: { xs: "0.7rem", sm: "0.8rem" },
                          mt: 1,
                          lineHeight: 1.4
                        }}
                      >
                        {m.description}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Claptek */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <SectionHeader
            chip="Why Claptek"
            title="Built for governance-first enterprises"
            subtitle="We combine domain intelligence, technology delivery, and customer collaboration to create real business outcomes."
          />
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 4,
            '@media (min-width: 600px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
            '@media (min-width: 900px)': {
              gridTemplateColumns: 'repeat(2, 1fr)',
            },
          }}>
            {homepageData.impactAreas.map((area, i) => {
              const icons = [<VerifiedIcon />, <TrendingUpIcon />, <GroupsIcon />];
              return (
                <Box key={i}>
                  <Card sx={{ height: "100%", p: 1 }}>
                    <CardContent sx={{ p: 3 }}>
                      <Avatar sx={{ background: "linear-gradient(135deg, #1a3a5c, #2d6aa0)", mb: 2.5, width: 48, height: 48 }}>
                        {icons[i]}
                      </Avatar>
                      <Typography variant="h6" fontWeight={700} mb={1.5}>{area.title}</Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{area.description}</Typography>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* Products */}
      <Box sx={{ py: 10, background: theme.palette.custom.sectionAlt }}>
        <Container maxWidth="xl">
          <SectionHeader
            chip="Our Products"
            title="Governance & Audit Platforms"
            subtitle="Purpose-built solutions for risk officers, compliance leaders, and internal audit teams."
          />
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}>
            {homepageData.products.map((p, i) => (
              <Box key={i}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Chip
                      label={p.category}
                      size="small"
                      sx={{
                        mb: 2, fontWeight: 700, fontSize: "0.7rem",
                        background: categoryColors[p.category]?.bg || "#1a3a5c",
                        color: categoryColors[p.category]?.text || "#fff",
                      }}
                    />
                    <Typography variant="h6" fontWeight={700} mb={1.5} fontSize="1rem">{p.name}</Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.8}>{p.description}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
          <Box textAlign="center" mt={5}>
            <Button variant="contained" color="primary" size="large" component={Link} to="/products" endIcon={<ArrowForwardIcon />} sx={{ px: 5 }}>
              View All Products
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Industries */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <SectionHeader
            chip="Industries"
            title="Sectors we serve"
            subtitle="Deep specialization across regulated industries in India and South East Asia."
          />
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}>
            {homepageData?.industries.map((industry, i) => (
              <Box key={i}>
                <Card sx={{ height: "100%", textAlign: "center", p: 1, cursor: "pointer" }}>
                  <CardContent>
                    <Box sx={{
                      width: 56, height: 56, borderRadius: "50%",
                      background: `linear-gradient(135deg, #1a3a5c${i % 2 === 0 ? "" : "cc"}, #e8701a${i % 2 === 0 ? "cc" : ""})`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      mx: "auto", mb: 2,
                    }}>
                      <Typography sx={{ color: "#fff", fontWeight: 800, fontSize: "1.3rem" }}>
                        {industry.name[0]}
                      </Typography>
                    </Box>
                    <Typography variant="h6" fontWeight={700} fontSize="1rem" mb={1.5}>
                      {industry.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
                      {industry.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Blog */}
      <Box sx={{ py: 10, background: theme.palette.custom.sectionAlt }}>
        <Container maxWidth="xl">
          <SectionHeader chip="Insights" title="Thought leadership & blogs" />
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}>
            {homepageData.blogPosts.map((b, i) => (
              <Box key={i}>
                <Card sx={{ height: "100%" }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{
                      width: "100%",
                      height: 4,
                      background: "linear-gradient(90deg, #1a3a5c, #e8701a)",
                      borderRadius: 2,
                      mb: 2.5
                    }} />
                    <Typography variant="subtitle1" fontWeight={700} mb={1.5} lineHeight={1.4} fontSize="0.95rem">
                      {b.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" lineHeight={1.7} fontSize="0.85rem">
                      {b.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* <SponsorLogos /> */}

      {/* CTA Banner */}
      <Box sx={{ py: 10, background: "linear-gradient(135deg, #0d2035 0%, #1a3a5c 60%, #e8701a 100%)", textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: "#fff", fontWeight: 800, mb: 2, fontSize: { xs: "1.8rem", md: "2.5rem" } }}>
            Ready to transform your governance ecosystem?
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.75)", mb: 4, fontSize: "1.05rem" }}>
            Discuss scope, timelines, and a pilot aligned to your priorities.
          </Typography>
          <Button variant="contained" color="secondary" size="large" component={Link} to="/contact" sx={{ px: 5, py: 1.5, fontSize: "1rem" }}>
            Book a Demo
          </Button>
        </Container>
      </Box>
    </Box>
  );
}