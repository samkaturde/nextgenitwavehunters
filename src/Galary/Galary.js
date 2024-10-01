import React, { useState } from "react";
import { Container, Tabs, Tab, Grid, Box, Typography } from "@mui/material";
import { CameraAlt, Face, Style, NaturePeople, Work } from '@mui/icons-material';  // MUI icons

const imageCategories = {
  all: [
    { src: "https://picsum.photos/seed/all1/300/200", title: "Image 1" },
    { src: "https://picsum.photos/seed/all2/300/200", title: "Image 2" },
    { src: "https://picsum.photos/seed/all3/300/200", title: "Image 3" },
    { src: "https://picsum.photos/seed/all4/300/200", title: "Image 4" },
    { src: "https://picsum.photos/seed/all5/300/200", title: "Image 5" }
  ],
  portrait: [
    { src: "https://picsum.photos/seed/portrait1/300/200", title: "Portrait 1" },
    { src: "https://picsum.photos/seed/portrait2/300/200", title: "Portrait 2" },
    { src: "https://picsum.photos/seed/portrait3/300/200", title: "Portrait 3" }
  ],
  fashion: [
    { src: "https://picsum.photos/seed/fashion1/300/200", title: "Fashion 1" },
    { src: "https://picsum.photos/seed/fashion2/300/200", title: "Fashion 2" },
    { src: "https://picsum.photos/seed/fashion3/300/200", title: "Fashion 3" },
    { src: "https://picsum.photos/seed/fashion1/300/200", title: "Fashion 4" },
    { src: "https://picsum.photos/seed/fashion2/300/200", title: "Fashion 5" },
    { src: "https://picsum.photos/seed/fashion3/300/200", title: "Fashion 6" }
  ],
  life: [
    { src: "https://picsum.photos/seed/life1/300/200", title: "Life 1" },
    { src: "https://picsum.photos/seed/life2/300/200", title: "Life 2" },
    { src: "https://picsum.photos/seed/life1/300/200", title: "Life 3" },
    { src: "https://picsum.photos/seed/life2/300/200", title: "Life 4" }
  ],
  experience: [
    { src: "https://picsum.photos/seed/experience1/300/200", title: "Experience 1" },
    { src: "https://picsum.photos/seed/experience2/300/200", title: "Experience 2" },
    { src: "https://picsum.photos/seed/experience3/300/200", title: "Experience 3" },
    { src: "https://picsum.photos/seed/experience1/300/200", title: "Experience 4" },
    { src: "https://picsum.photos/seed/experience2/300/200", title: "Experience 5" },
    { src: "https://picsum.photos/seed/experience3/300/200", title: "Experience 6" }
  ]
};

const Galary = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: "#e0f7fa", // Same background as the Contact component
        paddingBottom: '2rem',
      }}
    >
      <Container maxWidth="md" sx={{ marginTop: '4rem', paddingTop: '4rem', marginBottom: '0rem', textAlign: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, marginBottom: '2rem' }}>
          Photography Portfolio
        </Typography>

        {/* Styled Tabs */}
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          centered
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              fontSize: "1rem",
              color: "#444",
              padding: "12px",
              "&.Mui-selected": {
                color: "#ff4081",  // Match button color from Contact page
              },
              "&:hover": {
                color: "#555",
              },
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#ff4081",  // Line under selected tab to match contact button
            }
          }}
        >
          <Tab icon={<CameraAlt />} iconPosition="start" label="All Photos" value="all" />
          <Tab icon={<Face />} iconPosition="start" label="Portrait" value="portrait" />
          <Tab icon={<Style />} iconPosition="start" label="Fashion" value="fashion" />
          <Tab icon={<NaturePeople />} iconPosition="start" label="Life" value="life" />
          <Tab icon={<Work />} iconPosition="start" label="Experience" value="experience" />
        </Tabs>

        <Box mt={4}>
          <Grid container spacing={2}>
            {imageCategories[selectedTab].map((image, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <img
                  src={image.src}
                  alt={image.title}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Galary;
