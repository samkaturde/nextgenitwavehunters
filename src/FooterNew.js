import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  Divider,
  Grid,
  FormControl,
  Select,
  Link,
  MenuItem,
  InputLabel,
} from '@mui/material';
import WhatsAppChat from "./WhatsAppChat/WhatsAppChat";

const currencies = [
  { value: 'EUR', label: 'EUR' },
  { value: 'USD', label: 'USD' },
  { value: 'GBP', label: 'GBP' },
];

const FooterNew = () => {
  const [currency, setCurrency] = React.useState('EUR');

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(to bottom right, #e0f7fa, #00695c)',
        color: 'white',
        padding: '3rem 0',
        // marginTop: '2rem',
        textAlign: { xs: 'center', md: 'left' }, // Center text on small screens
      }}
    >
      <Container maxWidth="lg">
        {/* Newsletter Section */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: '1px' }}>
            Get 15% Off Your Next Order
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, marginBottom: '1.5rem' }}>
            Subscribe to our newsletter for exclusive offers and updates!
          </Typography>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              variant="outlined"
              placeholder="Enter your email here"
              sx={{
                width: { xs: '70%', sm: '50%', md: '40%' }, // Responsive width for different screen sizes
                backgroundColor: '#ffffff',
                borderRadius: '4px 0 0 4px',
                '& fieldset': { borderColor: 'transparent' }, // Remove default border
              }}
            />
            <Button
              variant="contained"
              sx={{
                height: '56px', // Match the height of the TextField for alignment
                backgroundColor: '#ff4081',
                color: 'white',
                borderRadius: '0 4px 4px 0',
                padding: { xs: '10px 14px', sm: '10px 20px' }, // Responsive padding
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#ff6f91' },
              }}
            >
              SUBSCRIBE
            </Button>
          </Box>
        </Box>

        {/* Footer Links */}
        <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', marginBottom: '3rem' }} />
        <Grid container spacing={6} justifyContent={{ xs: 'center', md: 'space-between' }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Rad Plants
            </Typography>
            {/* Currency Selector */}
            <FormControl fullWidth>
              <InputLabel id="currency-label" sx={{ color: 'white' }}>
                Currency
              </InputLabel>
              <Select
                labelId="currency-label"
                id="currency"
                value={currency}
                label="Currency"
                onChange={handleCurrencyChange}
                sx={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  '& .MuiSvgIcon-root': { color: 'white' },
                }}
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* Social Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Connect
            </Typography>
            {['Instagram', 'Facebook', 'Pinterest', 'YouTube'].map((social, index) => (
              <Typography key={index}>
                <Link href="#" color="inherit" underline="hover" sx={{ '&:hover': { color: '#ff6f91' } }}>
                  {social}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* Resources Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Resources
            </Typography>
            {['Return Policy', 'Track An Order', 'FAQs', 'Privacy Policy'].map((resource, index) => (
              <Typography key={index}>
                <Link href="#" color="inherit" underline="hover" sx={{ '&:hover': { color: '#ff6f91' } }}>
                  {resource}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* About Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              About
            </Typography>
            {['Our Story', 'Careers', 'Press'].map((about, index) => (
              <Typography key={index}>
                <Link href="#" color="inherit" underline="hover" sx={{ '&:hover': { color: '#ff6f91' } }}>
                  {about}
                </Link>
              </Typography>
            ))}
          </Grid>
        </Grid>

        {/* Footer Credits */}
        <Box textAlign="center" mt={6}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            Designed by Radoslav Bali
          </Typography>
        </Box>
        <div>
          <WhatsAppChat />
        </div>
      </Container>
    </Box>
  );
};

export default FooterNew;
