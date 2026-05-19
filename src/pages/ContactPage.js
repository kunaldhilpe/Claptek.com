import React, { useState } from "react";
import {
  Box, Container, Typography, Card, CardContent,
  useTheme, Chip, TextField, Button, Stack, Alert, Snackbar,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import { contactData } from "../data/siteData";
import heroBackgroundImage from "../Images/HomePage.jfif"
export default function ContactPage() {
  const theme = useTheme();
  const [form, setForm] = useState({ name: "", email: "", organisation: "", topic: "General enquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", organisation: "", topic: "General enquiry", message: "" });
  };

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
        <Box sx={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 30% 50%, rgba(232,112,26,0.1) 0%, transparent 50%)" }} />
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
          <Chip label="Contact" sx={{ mb: 2, background: "rgba(232,112,26,0.15)", color: "#f0924a", border: "1px solid rgba(232,112,26,0.3)", fontWeight: 700 }} />
          <Typography variant="h2" sx={{ color: "#fff", fontWeight: 800, mb: 2, fontSize: { xs: "2rem", md: "3rem" } }}>
            Get in Touch with Claptek
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.7)", maxWidth: 580, lineHeight: 1.8, fontSize: "1.05rem" }}>
            Speak with our consulting and solution specialists for demos, assessments, and implementation support.
          </Typography>
        </Container>
      </Box>

      {/* Content */}
      <Box sx={{ py: 10, background: theme.palette.background.default }}>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: 'repeat(2, 1fr)' },
            gap: { xs: 4, md: 6 },
          }}>
            {/* Left Column - Info */}
            <Box sx={{ lg: { gridColumn: 'span 5' } }}>
              <Typography variant="h5" fontWeight={700} mb={4}>Claptek Offices</Typography>

              {/* Offices */}
              {contactData.offices.map((o, i) => (
                <Card key={i} sx={{ mb: 3 }}>
                  <CardContent sx={{ p: 3, display: "flex", gap: 2, alignItems: "flex-start" }}>
                    <LocationOnIcon sx={{ color: "#e8701a", mt: 0.3, flexShrink: 0 }} />
                    <Box>
                      <Typography fontWeight={700} mb={0.5}>{o.location}</Typography>
                      <Typography variant="body2" color="text.secondary" lineHeight={1.7}>{o.address}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}

              {/* Contact Details */}
              <Card sx={{ mb: 3 }}>
                <CardContent sx={{ p: 3 }}>
                  <Typography fontWeight={700} mb={2}>Contact Details</Typography>
                  <Stack spacing={2}>
                    {contactData.emails.map((e, i) => (
                      <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <EmailIcon sx={{ color: "#e8701a", fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" color="text.secondary" display="block">{e.purpose}</Typography>
                          <Typography variant="body2" fontWeight={500}>{e.email}</Typography>
                        </Box>
                      </Box>
                    ))}
                    {contactData.phones.map((p, i) => (
                      <Box key={i} sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                        <PhoneIcon sx={{ color: "#e8701a", fontSize: 20 }} />
                        <Box>
                          <Typography variant="caption" color="text.secondary" display="block">{p.location}</Typography>
                          <Typography variant="body2" fontWeight={500}>{p.number}</Typography>
                        </Box>
                      </Box>
                    ))}
                    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                      <AccessTimeIcon sx={{ color: "#e8701a", fontSize: 20 }} />
                      <Typography variant="body2" fontWeight={500}>{contactData.hours}</Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>

            {/* Right Column - Form */}
            <Box sx={{ lg: { gridColumn: 'span 7' } }}>
              <Card>
                <CardContent sx={{ p: { xs: 2, sm: 3, md: 5 } }}>
                  <Typography variant="h5" fontWeight={700} mb={1}>Send a Message</Typography>
                  <Typography variant="body2" color="text.secondary" mb={4}>
                    Tell us your priority and we will route your enquiry to the right team.
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit}>
                    <Box sx={{
                      display: 'grid',
                      gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                      gap: { xs: 2, sm: 3 },
                    }}>
                      {/* First row - 2 fields on tablet/desktop, 1 on mobile */}
                      <Box>
                        <TextField
                          label="Full Name"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          fullWidth
                          required
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Box>
                        <TextField
                          label="Work Email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          fullWidth
                          required
                          variant="outlined"
                          size="small"
                        />
                      </Box>

                      {/* Second row - 2 fields on tablet/desktop, 1 on mobile */}
                      <Box>
                        <TextField
                          label="Organisation"
                          name="organisation"
                          value={form.organisation}
                          onChange={handleChange}
                          placeholder="Company name"
                          fullWidth
                          required
                          variant="outlined"
                          size="small"
                        />
                      </Box>
                      <Box>
                        <TextField
                          label="Topic"
                          name="topic"
                          value={form.topic}
                          onChange={handleChange}
                          select
                          fullWidth
                          variant="outlined"
                          SelectProps={{ native: true }}
                          size="small"
                        >
                          {["General enquiry", "Product demo", "Implementation support", "Partnerships", "Careers"].map((o) => (
                            <option key={o} value={o}>{o}</option>
                          ))}
                        </TextField>
                      </Box>

                      {/* Message field - spans full width */}
                      <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
                        <TextField
                          label="Message"
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="How can we help?"
                          fullWidth
                          required
                          multiline
                          rows={5}
                          variant="outlined"
                        />
                      </Box>

                      {/* Button - spans full width */}
                      <Box sx={{ gridColumn: { xs: 'span 1', sm: 'span 2' } }}>
                        <Button
                          type="submit"
                          variant="contained"
                          color="secondary"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            px: { xs: 3, sm: 5 },
                            py: { xs: 1, sm: 1.5 },
                            width: { xs: '100%', sm: 'auto' }
                          }}
                        >
                          Send Message
                        </Button>
                        <Typography variant="caption" color="text.secondary" display="block" mt={1.5}>
                          Your details are emailed to our team at info@claptek.com.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Container>
      </Box>

      <Snackbar open={submitted} autoHideDuration={5000} onClose={() => setSubmitted(false)} anchorOrigin={{ vertical: "bottom", horizontal: "center" }}>
        <Alert onClose={() => setSubmitted(false)} severity="success" sx={{ width: "100%" }}>
          Message sent! Our team will get back to you shortly.
        </Alert>
      </Snackbar>
    </Box>
  );
}