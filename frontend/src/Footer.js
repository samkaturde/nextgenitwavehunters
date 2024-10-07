// Footer.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" style={{ top: 'auto', bottom: 0, background: '#333' }}>
      <Toolbar>
        <Typography variant="body1" style={{ color: '#fff', width: '100%', textAlign: 'center' }}>
          © 2024 Company Name. All rights reserved.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
