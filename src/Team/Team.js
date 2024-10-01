// EnhancedTeamMembers.js
import React from "react";
import { Container, Grid, Card, CardContent, CardMedia, Typography, Box, Avatar, IconButton, Paper, Divider } from "@mui/material";
import { LinkedIn, Twitter, GitHub, Email } from "@mui/icons-material";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Michael Brown",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
    email: "#",
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Specialist",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    linkedin: "#",
    twitter: "#",
    github: "#",
    email: "#",
  },
];

const TeamPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f0f4f8",
        py: 5,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography
          variant="h3"
          component="h1"
          align="center"
          sx={{ fontWeight: 700, color: "#333", mb: 5, textShadow: "1px 1px 5px rgba(0, 0, 0, 0.2)" }}
        >
          Meet Our Amazing Team
        </Typography>

        {/* Subtitle Divider */}
        <Divider sx={{ width: "200px", mx: "auto", borderBottomWidth: 3, mb: 5, backgroundColor: "#ff4081" }} />

        {/* Grid Layout */}
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              {/* Card Container */}
              <Paper
                elevation={6}
                sx={{
                  overflow: "hidden",
                  borderRadius: "16px",
                  background: "linear-gradient(145deg, #ffffff, #e0e0e0)",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0 20px 30px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Card
                  sx={{
                    textAlign: "center",
                    position: "relative",
                    backgroundColor: "#ffffff",
                  }}
                >
                  {/* Card Media with Hover Effect */}
                  <CardMedia
                    sx={{
                      pt: "56.25%",
                      position: "relative",
                      overflow: "hidden",
                      "&:after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)",
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                      },
                      "&:hover:after": {
                        opacity: 1,
                      },
                    }}
                    image={member.image}
                    title={member.name}
                  />
                  
                  {/* Overlay Avatar */}
                  <Avatar
                    alt={member.name}
                    src={member.image}
                    sx={{
                      width: 120,
                      height: 120,
                      mx: "auto",
                      mt: -8,
                      zIndex: 1,
                      border: "4px solid white",
                      boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                    }}
                  />

                  {/* Card Content */}
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontStyle: "italic", color: "#ff4081", mb: 2 }}>
                      {member.role}
                    </Typography>
                    
                    {/* Social Media Icons */}
                    <Box>
                      <IconButton aria-label="LinkedIn" href={member.linkedin} target="_blank">
                        <LinkedIn sx={{ color: "#0e76a8" }} />
                      </IconButton>
                      <IconButton aria-label="Twitter" href={member.twitter} target="_blank">
                        <Twitter sx={{ color: "#00acee" }} />
                      </IconButton>
                      <IconButton aria-label="GitHub" href={member.github} target="_blank">
                        <GitHub sx={{ color: "#333" }} />
                      </IconButton>
                      <IconButton aria-label="Email" href={`mailto:${member.email}`}>
                        <Email sx={{ color: "#ea4335" }} />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamPage;
