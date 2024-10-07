// AboutUs.js
import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

// Custom styles
const HeroSection = styled(Box)({
  backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "60vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#fff",
  textShadow: "1px 1px 4px rgba(0, 0, 0, 0.6)",
});

const services = [
  {
    title: "Web Development",
    description:
      "We offer cutting-edge web development solutions that are tailored to your business needs, utilizing the latest technologies to ensure your online presence is robust and effective.",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    title: "Mobile Application",
    description:
      "Our expertise in mobile application development allows us to create responsive and high-performing apps that deliver seamless experiences across all devices.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    title: "UI/UX Design",
    description:
      "We design visually appealing and user-friendly interfaces that ensure intuitive user experiences, making your digital products both attractive and easy to use.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const About = () => {
  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Typography variant="h2" component="h1" sx={{ fontWeight: "bold" }}>
          About Us
        </Typography>
      </HeroSection>

      {/* Mission Statement Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", py: 6 }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={4}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: "bold" }}>
              Our Mission
            </Typography>
            <Divider
              sx={{
                width: "100px",
                mx: "auto",
                mt: 2,
                mb: 4,
                height: "4px",
                backgroundColor: "#ff4081",
              }}
            />
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#555" }}>
              Our mission is to revolutionize the tech industry with innovative
              solutions and unparalleled customer service. We believe in
              creating products that not only meet our clients' needs but also
              exceed their expectations. Our team is dedicated to pushing
              boundaries, fostering a culture of creativity, and making a
              positive impact on the world.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* What We Do Section */}
      <Box sx={{ py: 8, backgroundColor: "#e0f7fa" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ fontWeight: "bold", mb: 6 }}
          >
            What We Do
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    textAlign: "center",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 16px 24px rgba(0,0,0,0.2)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={service.image}
                    alt={service.title}
                    sx={{ height: 200 }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Company Values Section */}
      <Box sx={{ backgroundColor: "#fff", py: 6 }}>
        <Container maxWidth="md">
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              Our Values
            </Typography>
            <Divider
              sx={{
                width: "100px",
                mx: "auto",
                height: "4px",
                backgroundColor: "#ff4081",
                mb: 4,
              }}
            />
            <Typography variant="body1" sx={{ lineHeight: 1.7, color: "#555" }}>
              We believe in integrity, innovation, and inclusivity. Our team
              operates with transparency and strives to build a welcoming
              environment where everyone’s ideas are valued. We are committed to
              continuous growth and always aim to set new standards in the tech
              world.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
