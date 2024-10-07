import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';

const OurExcellence = () => {
  const services = [
    'Executive Search',
    'Leadership',
    'Contract',
    'RPO',
    'BFSI Onsite'
  ];

  return (
    <Container sx={{ padding: '3rem 0', borderRadius: '15px' }}>
      {/* Section Title */}
      <Typography
        variant="h3"
        sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '3rem', color: '#1976d2' }}
      >
        Our Excellence
      </Typography>

      {/* Swiper Slider Container */}
      <div style={{ position: 'relative' }}>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={false} // Removed pagination dots
          autoplay={{ delay: 4000 }} // Changed delay for autoplay
          loop={true}
          modules={[Navigation, Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 30 },
            960: { slidesPerView: 3, spaceBetween: 30 },
          }}
          style={{ padding: '1rem', marginBottom: '2rem' }} // Adjusted padding
        >

          {/* Render each service as a slide */}
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  backgroundColor: '#e3f2fd', // Light blue background for cards
                  borderRadius: '15px',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)', // Lift effect on hover
                    boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <img
                  src={`https://picsum.photos/seed/service${index}/300/200`}
                  alt={service}
                  style={{
                    borderRadius: '15px',
                    marginBottom: '1rem',
                    width: '100%',
                    height: 'auto',
                    transition: 'transform 0.3s',
                  }}
                />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#0d47a1' }}>
                  {service}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: '0.5rem', color: '#555' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="swiper-button-prev" style={{ position: 'absolute', left: '5%', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
          <WestIcon style={{ fontSize: '2rem', color: '#1976d2' }} />
        </div>
        <div className="swiper-button-next" style={{ position: 'absolute', right: '5%', top: '50%', transform: 'translateY(-50%)', zIndex: 10 }}>
          <EastIcon style={{ fontSize: '2rem', color: '#1976d2' }} />
        </div>
      </div>
    </Container>
  );
};

export default OurExcellence;
