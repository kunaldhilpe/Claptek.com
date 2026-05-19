import React, { useState } from 'react';
import {
  Box,
  useTheme,
  Fade,
  Typography,
  Container
} from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import AuFinance from "../Images/Sponsors/AuFinance.png"
import Aviva from "../Images/Sponsors/Aviva.png"
import AxisLogo from "../Images/Sponsors/AxisLogo.png"
import Bajaj from "../Images/Sponsors/Bajaj.png"
import bankofmaharashtra from "../Images/Sponsors/bankofmaharashtra.png"
import BOI from "../Images/Sponsors/BOI.png"
import dena from "../Images/Sponsors/dena.png"
import feedalbank from "../Images/Sponsors/feedalbank.png"
import icici from "../Images/Sponsors/icici.png"
import ing from "../Images/Sponsors/ing.png"
import karnataka from "../Images/Sponsors/karnataka.png"
import lic from "../Images/Sponsors/lic.png"
import Oriental from "../Images/Sponsors/Oriental.png"
import RBI from "../Images/Sponsors/RBI.png"
import sbilife from "../Images/Sponsors/sbi-life.png"
import shriram from "../Images/Sponsors/shriram.png"
import Siemens from "../Images/Sponsors/Siemens.png"

// Sponsor data with imported images
const sponsors = [
  {
    id: 1,
    name: 'AU Finance',
    logo: AuFinance,
    alt: 'AU Finance logo',
  },
  {
    id: 2,
    name: 'Aviva',
    logo: Aviva,
    alt: 'Aviva logo',
  },
  {
    id: 3,
    name: 'Axis Bank',
    logo: AxisLogo,
    alt: 'Axis Bank logo',
  },
  {
    id: 4,
    name: 'Bajaj',
    logo: Bajaj,
    alt: 'Bajaj logo',
  },
  {
    id: 5,
    name: 'Bank of Maharashtra',
    logo: bankofmaharashtra,
    alt: 'Bank of Maharashtra logo',
  },
  {
    id: 6,
    name: 'Bank of India',
    logo: BOI,
    alt: 'Bank of India logo',
  },
  {
    id: 7,
    name: 'Dena Bank',
    logo: dena,
    alt: 'Dena Bank logo',
  },
  {
    id: 8,
    name: 'Federal Bank',
    logo: feedalbank,
    alt: 'Federal Bank logo',
  },
  {
    id: 9,
    name: 'ICICI Bank',
    logo: icici,
    alt: 'ICICI Bank logo',
  },
  {
    id: 10,
    name: 'ING',
    logo: ing,
    alt: 'ING logo',
  },
  {
    id: 11,
    name: 'Karnataka Bank',
    logo: karnataka,
    alt: 'Karnataka Bank logo',
  },
  {
    id: 12,
    name: 'LIC',
    logo: lic,
    alt: 'LIC logo',
  },
  {
    id: 13,
    name: 'Oriental Bank',
    logo: Oriental,
    alt: 'Oriental Bank logo',
  },
  {
    id: 14,
    name: 'RBI',
    logo: RBI,
    alt: 'RBI logo',
  },
  {
    id: 15,
    name: 'SBI Life',
    logo: sbilife,
    alt: 'SBI Life logo',
  },
  {
    id: 16,
    name: 'Shriram',
    logo: shriram,
    alt: 'Shriram logo',
  },
  {
    id: 17,
    name: 'Siemens',
    logo: Siemens,
    alt: 'Siemens logo',
  },
];

// Animation keyframes for marquee
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollReverse = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

const SponsorLogo = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  height: 'auto',
  maxHeight: '80px',
  objectFit: 'contain',
  transition: 'all 0.3s ease',
  filter: theme.palette.mode === 'dark' ? 'brightness(0.9) contrast(1.1)' : 'none',
  '&:hover': {
    filter: theme.palette.mode === 'dark' ? 'brightness(1.1) contrast(1.2)' : 'brightness(1.05)',
  },
}));

const MarqueeContainer = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  padding: theme.spacing(2, 0),
  maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
  WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
}));

const MarqueeTrack = styled(Box)(({ speed = '30s', direction = 'normal' }) => ({
  display: 'flex',
  animation: `${direction === 'reverse' ? scrollReverse : scroll} ${speed} linear infinite`,
  width: 'fit-content',
  '&:hover': {
    animationPlayState: 'paused',
  },
}));

const LogoItem = styled(Box)(({ theme }) => ({
  margin: theme.spacing(0, 1.5),
  padding: theme.spacing(1.5, 3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  minWidth: '180px',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.mode === 'light' 
    ? 'rgba(255, 255, 255, 0.6)' 
    : 'rgba(17, 24, 39, 0.6)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.mode === 'light' 
    ? 'rgba(0, 0, 0, 0.05)' 
    : 'rgba(255, 255, 255, 0.05)'}`,
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: theme.palette.mode === 'light' 
      ? 'rgba(255, 255, 255, 0.9)' 
      : 'rgba(26, 40, 64, 0.8)',
    border: `1px solid ${theme.palette.mode === 'light' 
      ? theme.palette.primary.light 
      : theme.palette.primary.main}`,
  },
}));

const MarqueeSlider = ({ sponsors: sponsorList, speed = '30s', direction = 'normal' }) => {
  const doubledSponsors = [...sponsorList, ...sponsorList];

  return (
    <MarqueeContainer>
      <MarqueeTrack speed={speed} direction={direction}>
        {doubledSponsors.map((sponsor, index) => (
          <LogoItem key={`${sponsor.id}-${index}`}>
            <SponsorLogo src={sponsor.logo} alt={sponsor.alt} />
          </LogoItem>
        ))}
      </MarqueeTrack>
    </MarqueeContainer>
  );
};

// Main Component
const SponsorLogos = () => {
  const [viewMode, setViewMode] = useState('marquee');
  const theme = useTheme();

  return (
    <Box sx={{ 
      width: '100%', 
      py: { xs: 4, md: 6 },
      // bgcolor: 'background.default',
    }}>
      <Container maxWidth="xl">
        {/* Header Section */}
        <Fade in timeout={800}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
                letterSpacing: 2,
                fontSize: '1rem',
              }}
            >
              Trusted By Industry Leaders
            </Typography>
            
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' }
              }}
            >
              Our Global Partners
            </Typography>
            
            <Typography
              variant="h6"
              align="center"
              sx={{ 
                mb: 4, 
                maxWidth: '700px', 
                mx: 'auto',
                color: 'text.secondary'
              }}
            >
              We are proud to collaborate with industry leaders worldwide,
              delivering excellence through strategic partnerships
            </Typography>
          </Box>
        </Fade>

        {/* Marquee Sliders */}
        <Box sx={{ mt: 4 }}>
          <MarqueeSlider sponsors={sponsors} speed="45s" direction="normal" />
          <MarqueeSlider sponsors={sponsors} speed="50s" direction="reverse" />
        </Box>

        {/* Footer Note */}
        <Box sx={{ 
          textAlign: 'center', 
          mt: 6, 
          pt: 4, 
          borderTop: 1, 
          borderColor: 'divider' 
        }}>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            And many more partners worldwide • Join our growing family of partners
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default SponsorLogos;