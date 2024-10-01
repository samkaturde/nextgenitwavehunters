import React from 'react';
import { Container, Typography, Button, Box, TextField, CardMedia, Divider, AppBar, Card, CardContent, MenuItem, FormControl, Select, Link, InputLabel, Toolbar, IconButton, Grid } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

const categories = [
  {
    title: 'Jungle Plants',
    image: 'https://via.placeholder.com/400', // Replace with actual image
  },
  {
    title: 'Outdoor Plants',
    image: 'https://via.placeholder.com/400', // Replace with actual image
  },
  {
    title: 'Bedroom Plants',
    image: 'https://via.placeholder.com/400', // Replace with actual image
  },
];

const currencies = [
  { value: 'EUR', label: 'EUR' },
  { value: 'USD', label: 'USD' },
  { value: 'GBP', label: 'GBP' },
];

const Footer = () => {
  const [currency, setCurrency] = React.useState('EUR');

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Box sx={{ background: 'linear-gradient(to bottom right, #e0f7fa, #00695c)', color: 'white', padding: '3rem 0', marginTop: '4rem' }}>
      <Container maxWidth="lg">
        {/* Newsletter Section */}
        <Box textAlign="center" mb={8}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', letterSpacing: '1px' }}>
            Get 15% Off Your Next Order
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Subscribe to our newsletter for exclusive offers and updates!
          </Typography>
          <Box display="flex" justifyContent="center">
            <TextField
              variant="outlined"
              placeholder="Enter your email here"
              sx={{
                width: '60%',
                backgroundColor: '#ffffff',
                borderRadius: '4px 0 0 4px',
                '& fieldset': { borderColor: 'transparent' }, // Remove default border
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ff4081',
                color: 'white',
                borderRadius: '0 4px 4px 0',
                padding: '10px 20px',
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
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
              Rad Plants
            </Typography>
            {/* Currency Selector */}
            <FormControl fullWidth>
              <InputLabel id="currency-label" sx={{ color: 'white' }}>Currency</InputLabel>
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
          <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={3}>
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
          <Grid item xs={12} sm={3}>
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
      </Container>
    </Box>
  );
};

const CategorySection = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: '4rem', marginBottom: '4rem' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Categories
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)', borderRadius: '16px' }}>
              <CardMedia
                component="img"
                alt={category.title}
                height="300"
                image={category.image} // Replace with actual image source
                sx={{ borderRadius: '16px 16px 0 0' }}
              />
              <CardContent>
                <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
                  {category.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const Home = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #d9f7be, #b7eb8f)', // Gradient background for the whole page
        paddingBottom: '2rem',
      }}
    >
      {/* Header */}
      <AppBar position="fixed" sx={{ background: 'linear-gradient(to bottom right, #e0f7fa, #00695c)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '2rem' }}>
          <Typography variant="h4" component="div" sx={{ fontWeight: 700, color: 'white' }}>
            Rad Plants
          </Typography>
          <Box>
            <Button color="inherit" sx={{ margin: '0 10px', fontWeight: 500, color: 'white' }} href="#">Home</Button>
            <Button color="inherit" sx={{ margin: '0 10px', fontWeight: 500, color: 'white' }} href="#">Catalogue</Button>
            <Button color="inherit" sx={{ margin: '0 10px', fontWeight: 500, color: 'white' }} href="#">Contact</Button>
          </Box>
          <Box>
            <IconButton sx={{ color: 'white', marginRight: '10px' }}>
              <SearchIcon />
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Apply padding to prevent content from being hidden under the fixed header */}
      <Toolbar />

      {/* Hero Section */}
      <Container maxWidth="md" sx={{ textAlign: 'center', marginBottom: '4rem', marginTop: '4rem' }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, letterSpacing: '2px', fontSize: { xs: '2rem', md: '3.5rem' }, lineHeight: '1.5', marginBottom: '20px' }}
        >
          Find the Perfect Plants for Your Home
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph sx={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Beautiful plants that encourage you to get creative.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{
            padding: '12px 24px',
            fontSize: '1.2rem',
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            '&:hover': { backgroundColor: '#4caf50' }, // Hover effect
          }}
        >
          Shop Now
        </Button>
      </Container>

      {/* Image Section */}
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <CardMedia
            component="img"
            height="500"
            image="https://via.placeholder.com/1000" // Replace with actual image URL
            alt="Outdoor Plant Decor"
            sx={{
              borderRadius: '16px', // Rounded corners
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)', // Image shadow
              maxWidth: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Container>

      <CategorySection />

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default Home;
