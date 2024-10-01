import React from "react";
import { Box, Typography, Grid, Button, TextField, Paper, Avatar } from "@mui/material";

// Define color theme
const primaryColor = "#3f51b5";
const secondaryColor = "#ff4081";

// Our Products Data
const products = [
  { title: "New Product", description: "Check while it's in stock!" },
  { title: "Cool New Blog", description: "Read news from our company" },
  { title: "Our People", description: "Meet our amazing team" },
];

// Testimonials Data
const testimonials = [
  { text: "This product brings so much value. I LOVE IT!", author: "Alex Turner", rating: 5 },
  { text: "This product was sent from Heaven!", author: "Dolly Parton", rating: 5 },
  { text: "100% happiness.", author: "James Blake", rating: 5 },
];

// Blog Data
const blogPosts = [
  { title: "What's up company!", description: "Company News", date: "Feb 4th" },
  { title: "How to bake cake", description: "Everyone will love it", date: "May 3rd" },
];

const Home = () => {
  return (
    <Box sx={{ padding: "40px", textAlign: "center", backgroundColor: "#f5f5f5" }}>
      {/* Product Section */}
      <Box sx={{ marginBottom: "60px" }}>
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            height: "400px",
            background: `linear-gradient(120deg, ${primaryColor}, ${secondaryColor})`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            borderRadius: "20px",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            Product
          </Typography>
        </Paper>
        <Typography variant="h5" sx={{ marginTop: "20px", fontWeight: "500" }}>
          Brand new product
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "20px",
            backgroundColor: primaryColor,
            borderRadius: "50px",
            padding: "10px 20px",
            fontWeight: "bold",
            '&:hover': {
              backgroundColor: secondaryColor,
            },
          }}
        >
          Learn More
        </Button>
      </Box>

      {/* Our Products Section */}
      <Box sx={{ marginBottom: "60px" }}>
        <Typography variant="h4" component="h2" sx={{ marginBottom: "40px", fontWeight: "600" }}>
          Our Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  height: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  transition: "transform 0.3s",
                  '&:hover': {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "500" }}>
                  {product.title}
                </Typography>
              </Paper>
              <Typography variant="body2" sx={{ marginTop: "10px" }}>
                {product.description}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Click Here Section */}
      <Box
        sx={{
          width: "100%",
          height: "300px",
          backgroundColor: "#e0e0e0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          marginBottom: "60px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "700", color: primaryColor }}>
          Click Here
        </Typography>
      </Box>

      {/* Newsletter Section */}
      <Box sx={{ marginBottom: "60px" }}>
        <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "600" }}>
          Newsletter
        </Typography>
        <Typography sx={{ marginBottom: "20px" }}>
          Stay in loop with our company news. Sign up to our newsletter and receive the freshest info.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: secondaryColor,
            borderRadius: "50px",
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Sign Up
        </Button>
      </Box>

      {/* Careers Section */}
      <Box sx={{ display: "flex", justifyContent: "space-between", marginBottom: "60px" }}>
        <Box sx={{ textAlign: "left", maxWidth: "500px" }}>
          <Typography variant="h4" sx={{ fontWeight: "600" }}>
            Careers
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            Join our ambitious team and help us reach the sky! Because sky is the limit, otherwise we would go further.
          </Typography>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
              borderColor: primaryColor,
              color: primaryColor,
              '&:hover': {
                backgroundColor: primaryColor,
                color: "#fff",
              },
            }}
          >
            Check Out
          </Button>
        </Box>
        <Box
          sx={{
            width: "400px",
            height: "400px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "20px",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Typography>Image Placeholder</Typography>
        </Box>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ marginBottom: "60px" }}>
        <Typography variant="h4" sx={{ fontWeight: "600", marginBottom: "40px" }}>
          Testimonials
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Paper
                elevation={4}
                sx={{
                  padding: "20px",
                  textAlign: "left",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <Typography variant="body1" sx={{ fontStyle: "italic", marginBottom: "10px" }}>
                  "{testimonial.text}"
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {testimonial.author}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                  {[...Array(5)].map((_, i) => (
                    <Avatar
                      key={i}
                      sx={{
                        backgroundColor: i < testimonial.rating ? "#ffc107" : "#e0e0e0",
                        width: 20,
                        height: 20,
                        marginRight: "5px",
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Blog Section */}
      <Box sx={{ marginBottom: "60px" }}>
        <Typography variant="h4" sx={{ fontWeight: "600", marginBottom: "40px" }}>
          Blog
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Paper
                elevation={4}
                sx={{
                  padding: "20px",
                  textAlign: "left",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s",
                  '&:hover': {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "500", marginBottom: "10px" }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" sx={{ marginBottom: "10px" }}>
                  {post.description}
                </Typography>
                <Typography variant="caption">{post.date}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Newsletter Input Section */}
      <Box sx={{ marginBottom: "40px", textAlign: "center" }}>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          Newsletter
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <TextField
            variant="outlined"
            placeholder="Input email"
            sx={{
              marginRight: "10px",
              '& .MuiOutlinedInput-root': {
                borderRadius: "50px",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: primaryColor,
              borderRadius: "50px",
              padding: "10px 20px",
              fontWeight: "bold",
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
