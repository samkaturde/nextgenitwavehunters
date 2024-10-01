import React from 'react';
import { AppBar, Toolbar, Typography, Box, Container, Button, IconButton } from '@mui/material';
import { LinkedIn, Facebook, Twitter, Instagram } from '@mui/icons-material';
import OurExcellence from "./../Slider/OurExcellence";

// Sample Image URL for illustration purposes (use your images)
const sampleImage = "https://picsum.photos/900/300";

const HomePage = () => {
  return (
    <Box sx={{ backgroundColor: '#e0f7fa', minHeight: '100vh', paddingBottom: '2rem' }}>
      {/* Main Banner */}
      <>
        {/* Tagline Section */}
        <Box sx={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem', position: 'relative' }}>
          <img
            src={sampleImage}
            alt="Banner"
            style={{
              width: '80%',
              borderRadius: '12px',
              boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
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
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
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
            '&:hover': { backgroundColor: '#e0f7fa' }, // Hover effect
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
            alignItems: 'center', // Center items vertically
            gap: '1.5rem',
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
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)', // Added shadow to buttons
                width: '56px', // Fixed width for icons to align
                height: '56px', // Fixed height for icons to align
              }}
            >
              <Icon fontSize="large" />
            </IconButton>
          ))}
        </Box>
    </Box>

      </>

      {/* Text Section */}
      <Container maxWidth="md">
        <Typography variant="h6" sx={{ fontWeight: 600, marginBottom: '2rem', textAlign: 'center', lineHeight: '1.5' }}>
          NextGen IT Wave Hunters specializes in connecting top IT talent with industry leaders. We provide the best solutions for your recruitment needs.
        </Typography>
      </Container>

      {/* Our Excellence Section */}
      <OurExcellence />

      {/* Final Image with Text */}
      <Box sx={{ textAlign: 'center', marginTop: '4rem' }}>
        <img src={sampleImage} alt="Final Section Image" style={{ width: '80%', borderRadius: '12px', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }} />
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '1rem', color: '#3f51b5' }}>
          Empowering Businesses with the Best Talent
        </Typography>
      </Box>
    </Box>
  );
};

export default HomePage;
