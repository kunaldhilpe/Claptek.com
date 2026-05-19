import React from "react";
import {
  Box, Container, Typography, Card, CardContent,
  useTheme, Chip, Avatar, List, ListItem, ListItemIcon, ListItemText,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import SectionHeader from "../components/SectionHeader";
import heroBackgroundImage from "../Images/HomePage.jfif"

// Import team member images directly
import chetanImage from "../Images/Team/chetan-maheshwari.webp";
import manjuImage from "../Images/Team/Manju-Mamtani.webp";
import ravindraImage from "../Images/Team/Ravindra-Karkarey.webp";
import shanmugaImage from "../Images/Team/Shanmuga-M.webp";

// Define team data with imported images
const teamMembers = [
  {
    name: "Chetan Maheshwari",
    title: "Founder & CEO",
    image: chetanImage,
    description: "As founder, Chetan leads strategy, marketing, solution development, and customer engagement. His deep association with clients and problem-solving approach has helped Claptek build unique IP-led offerings.",
    achievements: [
      "Awarded Most Promising Entrepreneur of India (Economic Times, ET Edge, 2019)",
      "Recognized as Most Promising SME Innovator (ICAI, 2018)",
      "Chartered Accountant (Merit Holder), M.Com, CISA, and CRISC certified",
      "Nature lover and avid trekker with successful 6000m Himalayan summits",
    ],
  },
  {
    name: "Manju Mamtani",
    title: "Vice President and Head of Insurance",
    image: manjuImage,
    description: "Manju brings over three decades of experience in the life insurance industry, with leadership exposure across LIC of India, ICICI Prudential Life, SBI Life, and SUD Life.",
    achievements: [
      "Subject matter expert in life insurance operations and transformation",
      "Leads Claptek's insurance vertical and drives successful project execution",
      "Known for collaborative leadership, strong client liaison, and delivery excellence",
    ],
  },
  {
    name: "Ravindra Karkarey",
    title: "Vice President (GRC Products)",
    image: ravindraImage,
    description: "Ravindra has 14+ years of experience and has contributed to 40+ implementations across private and public sector banks, NBFCs, small finance banks, insurance, telecom, manufacturing, and oil & gas.",
    achievements: [
      "Delivered solutions in audit management, vendor risk, and incident management",
      "Expertise in GRC delivery, data integration, analytics, and dashboarding",
      "Master's in Computer Applications from ITM University; certified in Data Science",
    ],
  },
  {
    name: "Shanmuga M",
    title: "Vice President & GRC Framework Expert",
    image: shanmugaImage,
    description: "Shanmuga is a Governance, Risk, and Compliance professional with 15+ years of experience implementing Audit Management and Enterprise Risk Management programs.",
    achievements: [
      "Strong technical foundation in SQL, PL/SQL, Python, web services, and Agile methodologies",
      "Experienced in handling enterprise customers with flexible, business-aligned delivery models",
      "Focuses on scalable GRC framework implementation and practical adoption outcomes",
    ],
  },
];

export default function TeamPage() {
  const theme = useTheme();

  // Handle image error - show initials if image fails to load
  const handleImageError = (e, name) => {
    e.target.style.display = 'none';
    // The fallback initials will show automatically
  };

  return (
    <Box>
      {/* Hero Section - same as before */}
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
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 60% 40%, rgba(232,112,26,0.1) 0%, transparent 50%)" }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Chip label="Leadership" sx={{ mb: 2, background: "rgba(232,112,26,0.15)", color: "#f0924a", border: "1px solid rgba(232,112,26,0.3)", fontWeight: 700 }} />
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "1rem" } }}>
            Leadership Team
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 640, lineHeight: 1.8, fontSize: "1.05rem" }}>
            Meet the experienced leaders driving innovation and excellence at Claptek
          </Typography>

          {/* Stats */}
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
            gap: 2,
            mt: 4
          }}>
            {["Senior domain leadership", "40+ enterprise implementations", "Strong GRC and risk capability"].map((stat, i) => (
              <Box key={i}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                  <StarIcon sx={{ color: "#e8701a", fontSize: 20 }} />
                  <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", fontWeight: 500 }}>{stat}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Team Members */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <SectionHeader chip="Our People" title="Leadership & practice leads" subtitle="Meet the leadership team driving Claptek's growth across strategy, insurance, governance, risk, and enterprise delivery." />
          <Box sx={{ 
            display: 'grid',
            gridTemplateColumns: '1fr', // Single column using fr unit
            gap: 4,
          }}>
            {teamMembers.map((member, i) => (
              <Card key={i} sx={{ height: "100%" }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: "flex", gap: 3, mb: 3, alignItems: "flex-start" }}>
                    <Avatar
                      src={member.image}
                      alt={member.name}
                      onError={(e) => handleImageError(e, member.name)}
                      sx={{
                        width: 80, 
                        height: 80, 
                        flexShrink: 0,
                        border: "3px solid #e8701a",
                        objectFit: "cover",
                      }}
                    >
                      {/* Fallback to initials */}
                      {member.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                    </Avatar>
                    <Box>
                      <Typography variant="h6" fontWeight={800} lineHeight={1.2}>{member.name}</Typography>
                      <Typography variant="body2" sx={{ color: "#e8701a", fontWeight: 600, mt: 0.5 }}>{member.title}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" lineHeight={1.8} mb={2.5}>{member.description}</Typography>
                  <Box sx={{ background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#f5f5f5', borderRadius: 2, p: 2 }}>
                    <Typography variant="caption" sx={{ fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: theme.palette.text.secondary, display: "block", mb: 1 }}>
                      Key Achievements
                    </Typography>
                    <List dense disablePadding>
                      {member.achievements.map((achievement, j) => (
                        <ListItem key={j} disableGutters sx={{ py: 0.3 }}>
                          <ListItemIcon sx={{ minWidth: 22 }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: "50%", background: "#e8701a" }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={achievement} 
                            primaryTypographyProps={{ fontSize: "0.82rem", color: "text.secondary", lineHeight: 1.6 }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA Section - same as before */}
      {/* <Box sx={{ py: 8, background: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : '#fafafa', textAlign: "center" }}>
        <Container maxWidth="md">
          <Typography variant="h5" fontWeight={700} mb={1.5}>Explore roles or introduce your organisation</Typography>
          <Typography color="text.secondary" mb={3}>Connect with our consulting and delivery teams.</Typography>
        </Container>
      </Box> */}
    </Box>
  );
}