import React from 'react';
import { Container, Typography, Button, Box, AppBar, Toolbar, IconButton, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const HeaderNew = () => {
  // Theme and media query for responsiveness
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Matches when screen size is small (sm) or less

  // State for managing mobile drawer menu
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  // Toggle drawer state
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Drawer Menu for Mobile
  const drawerMenu = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {['Home', 'About', 'Contact', 'Galary', 'Team'].map((text, index) => (
          <ListItem button key={text}>
            <Link to={text === 'Home' ? '/' : `/${text.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="fixed" sx={{ background: 'linear-gradient(to bottom right, #e0f7fa, #00695c)' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', paddingX: '1rem' }}>
        {/* Left Side: Brand Logo */}
        <Typography variant={isMobile ? 'h5' : 'h4'} component="div" sx={{ fontWeight: 700, color: 'white' }}>
          Rad Plants
        </Typography>

        {/* Middle: Navigation Links (hide on mobile) */}
        {!isMobile && (
          <Box sx={{ display: 'flex' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button color="inherit" sx={{ margin: '0 10px', fontWeight: 500, color: 'white' }}>Home</Button>
            </Link>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <Button color="inherit" sx={{ margin: '0 10px', fontWeight: 500, color: 'white' }}>About</Button>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Button color="inherit" sx={{ margin: '0 10px', fontWeight: 500, color: 'white' }}>Contact</Button>
            </Link>
            <Link to="/galary" style={{ textDecoration: 'none' }}>
              <Button color="inherit" sx={{ margin: '0 10px', fontWeight: 500, color: 'white' }}>Galary</Button>
            </Link>
            <Link to="/team" style={{ textDecoration: 'none' }}>
              <Button color="inherit" sx={{ margin: '0 10px', fontWeight: 500, color: 'white' }}>Team</Button>
            </Link>
          </Box>
        )}

        {/* Right Side: Icons & Drawer Menu Button */}
        <Box>
          {!isMobile && (
            <>
              <IconButton sx={{ color: 'white', marginRight: '10px' }}>
                <SearchIcon />
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <ShoppingCartIcon />
              </IconButton>
            </>
          )}

          {/* Show Menu Icon Button on Mobile */}
          {isMobile && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerMenu}
      </Drawer>
    </AppBar>
  );
};

export default HeaderNew;
