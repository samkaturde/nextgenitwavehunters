import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText } from '@mui/material';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

// Enhanced email validation regex pattern
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Yup validation schema with advanced email validation
const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .matches(emailRegex, 'Please enter a valid email address')  // Enhanced email regex validation
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Phone number is required'),
  message: Yup.string(), // No validation as it's not mandatory
});

const Contact = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('http://localhost:5002/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();
        
        // Set popup message to display from API response
        setPopupMessage(data.message);
        setPopupOpen(true);  // Show the popup message
        setTimeout(() => {
          setPopupOpen(false);  // Close the popup after 5 seconds
        }, 5000);
        resetForm();  // Reset the form fields after successful submission
      } catch (error) {
        console.error('Error submitting the form:', error);
        setPopupMessage('There was an error sending your message. Please try again.');
        setPopupOpen(true);
        setTimeout(() => {
          setPopupOpen(false);  // Close the popup after 5 seconds
        }, 5000);
      }
    },
  });

  // Custom handleChange function for the phone field
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    const numericValue = value.replace(/[^0-9]/g, '');  // Remove non-numeric characters
    if (numericValue.length <= 10) {
      formik.setFieldValue('phone', numericValue);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `
          linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), 
          url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1650&q=80")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: '2rem',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          marginTop: '4rem',
          padding: '4rem 2rem',
          textAlign: 'center',
          // backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background for the form container
          borderRadius: '12px',
          // boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: 700, marginBottom: '2rem' }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '2rem' }}>
          We'd love to hear from you! Please fill out the form below.
        </Typography>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          onSubmit={formik.handleSubmit}
        >
          <TextField
            label="Your Name"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '1rem', borderRadius: '4px' }}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            sx={{ marginBottom: '1rem', borderRadius: '4px' }}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            label="Phone Number"
            variant="outlined"
            required
            fullWidth
            sx={{ marginBottom: '1rem', borderRadius: '4px' }}
            name="phone"
            value={formik.values.phone}
            onChange={handlePhoneChange}  // Custom change handler for phone field
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            inputProps={{
              inputMode: 'numeric',  // Display numeric keypad on mobile
              maxLength: 10,  // Limit input to 10 characters
            }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            sx={{ marginBottom: '2rem', borderRadius: '4px' }}
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={!formik.isValid || !formik.dirty}  // Disable button unless form is valid and touched
            sx={{
              backgroundColor: !formik.isValid || !formik.dirty ? '#ccc' : '#ff4081',
              color: 'white',
              padding: '12px 24px',
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '30px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                backgroundColor: !formik.isValid || !formik.dirty ? '#ccc' : '#ff6f91',
                transform: 'scale(1.05)',  // Slight zoom-in effect on hover
              },
            }}
          >
            Send Message
          </Button>
        </Box>

        {/* Success Popup */}
        <Dialog
          open={popupOpen}
          onClose={() => setPopupOpen(false)}  // Close on outside click or manually
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          sx={{
            '& .MuiDialog-paper': {
              padding: '2rem',
              borderRadius: '15px',
              backgroundColor: '#f0fff0',
              boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
              textAlign: 'center',
            },
          }}
        >
          <DialogTitle id="alert-dialog-title" sx={{ color: '#4caf50', fontWeight: 'bold' }}>
            Success!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description" sx={{ color: '#4caf50' }}>
              {popupMessage}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Contact;
