// Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="fixed" style={{ backgroundColor: '#f5f5f5', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1, color: '#333', fontWeight: 'bold' }}>
          Company Name
        </Typography>
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button color="inherit" style={{ marginRight: '15px', fontWeight: 'bold', color: '#333' }}>Home</Button>
          </Link>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <Button color="inherit" style={{ marginRight: '15px', fontWeight: 'bold', color: '#333' }}>About</Button>
          </Link>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <Button color="inherit" style={{ marginRight: '15px', fontWeight: 'bold', color: '#333' }}>Contact</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
