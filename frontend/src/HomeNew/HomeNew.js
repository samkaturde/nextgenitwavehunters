import React from 'react';
import { Container, Typography, Button, Box, TextField, CardMedia, Divider, AppBar, Card, CardContent, MenuItem, FormControl, Select, Link, InputLabel, Toolbar, IconButton, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import FooterNew from "./../FooterNew";
import HeaderNew from "./../HeaderNew";
import { LinkedIn, Facebook, Twitter, Instagram } from '@mui/icons-material';
import OurExcellence from "./../Slider/OurExcellence";

// Sample Image URL for illustration purposes (use your images)
const sampleImage = "https://picsum.photos/1920/600";

// Component for the Home Page
const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: '#e0f7fa', minHeight: '100vh', marginTop: { xs: '56px', md: '65px' }, paddingBottom: '2rem' }}>
      {/* Main Banner */}
      <Box sx={{ textAlign: 'center', marginBottom: '2rem', position: 'relative' }}>
        <img
          src={sampleImage}
          alt="Banner"
          style={{
            width: '100vw', // Full screen width
            height: 'auto',
            borderRadius: '0', // Remove border radius for a full-width effect
            marginLeft: 'calc(-50vw + 50%)', // Center the image for full-width appearance
            maxWidth: 'none',
          }}
          // onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          // onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff', // White text color for contrast
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', // Shadow for text readability
            textAlign: 'center',
            padding: '0 10px', // Padding for text to avoid overlap on small screens
          }}
        >
          <Typography variant={{ xs: 'h5', md: 'h4' }} sx={{ fontWeight: 'bold' }}>
            Your Overlay Text Here
          </Typography>
          <Typography variant="body1">
            Subtitle or additional information
          </Typography>
        </Box>
      </Box>

      {/* Stay Connected Section */}
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background-color 0.3s',
          '&:hover': { backgroundColor: '#e0f7fa' },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: '#3f51b5',
            textTransform: 'uppercase',
          }}
        >
          Stay Connected
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap', // Allows wrapping on smaller screens
          }}
        >
          {[LinkedIn, Facebook, Twitter, Instagram].map((Icon, index) => (
            <IconButton
              key={index}
              color="primary"
              sx={{
                '&:hover': {
                  transform: 'scale(1.2)',
                  transition: 'transform 0.3s',
                  color: '#00796b',
                },
                padding: '1rem',
                backgroundColor: '#e8f0fe',
                borderRadius: '50%',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                width: '56px',
                height: '56px',
              }}
            >
              <Icon fontSize="large" />
            </IconButton>
          ))}
        </Box>
      </Box>

      {/* Text Section */}
      <Container maxWidth="md">
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, marginBottom: '2rem', textAlign: 'center', lineHeight: '1.5', fontSize: { xs: '1rem', md: '1.2rem' } }}
        >
          NextGen IT Wave Hunters specializes in connecting top IT talent with industry leaders. We provide the best solutions for your recruitment needs.
        </Typography>
      </Container>

      {/* Our Excellence Section */}
      <OurExcellence />

      {/* Final Image with Text */}
      <Box sx={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem', position: 'relative' }}>
        <img
          src={sampleImage}
          alt="Banner"
          style={{
            width: '100vw', // Full screen width
            height: 'auto',
            borderRadius: '0', // Remove border radius for a full-width effect
            marginLeft: 'calc(-50vw + 50%)', // Center the image for full-width appearance
            maxWidth: 'none',
          }}
          // onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          // onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#fff',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            textAlign: 'center',
            padding: '0 10px',
          }}
        >
          <Typography variant={{ xs: 'h5', md: 'h4' }} sx={{ fontWeight: 'bold' }}>
            Your Overlay Text Here
          </Typography>
          <Typography variant="body1">
            Subtitle or additional information
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

// Main Home Component
const Home = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: "#e0f7fa" }}>
      {/* Header */}
      {/* <HeaderNew /> */}

      {/* Home Page Content */}
      <HomePage />

      {/* Footer (Uncomment if you have Footer component) */}
      {/* <FooterNew /> */}
    </Box>
  );
};

export default Home;
