import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fffbf6',
        padding: { xs: 2, md: 4 }, // Reduced padding on mobile
        pt: { xs: 10, md: 15 }, // Adjusted for fixed Navbar on mobile
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '1200px' }, // Full width on mobile
          margin: '0 auto',
          py: { xs: 2, md: 4 }, // Reduced padding on mobile
          px: { xs: 1, md: 2 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: 3, md: 4 }, // Adjusted gap
        }}
      >
        {/* Left Side - Text */}
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* h1 - Name, Location, Role, Experience */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Pacifico, cursive',
              fontStyle: 'normal',
              fontSize: { xs: '2rem', md: '3rem' }, // Smaller on mobile
              color: '#000',
              mb: 2,
              letterSpacing: '0.05em',
              textTransform: 'none',
              animation: 'slideUp 1s ease-out forwards',
              animationDelay: '0.5s',
              '@keyframes slideUp': {
                '0%': { transform: 'translateY(100vh)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              },
            }}
          >
            Emmanuel, Abuja, Nigeria, Full Stack, Three(3) Years Experience
          </Typography>

          {/* h4 - Journey */}
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: { xs: '1rem', md: '1.125rem' }, // Smaller on mobile
              color: '#656270',
              lineHeight: 1.6,
              maxWidth: { xs: '100%', md: '600px' }, // Full width on mobile
              margin: { xs: '0 auto', md: '0' },
              animation: 'slideUp 1s ease-out forwards',
              animationDelay: '0.75s',
              '@keyframes slideUp': {
                '0%': { transform: 'translateY(100vh)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              },
            }}
          >
            My journey in tech started three years ago when I wrote my first line of code. Since then, I’ve dived deep into full-stack development, building projects that solve real problems.
            <br />
            <br />
            From frontend designs in React and Next.js to backend systems with Node.js, I love creating seamless experiences.
            <br />
            <br />
            When I’m not coding, you can find me exploring Abuja, sketching new designs, or sharing my thoughts on my blog.
          </Typography>
        </Box>

        {/* Right Side - Picture */}
        <Box
          sx={{
            flex: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: { xs: '200px', md: '350px' }, // Smaller on mobile
              height: { xs: '200px', md: '350px' },
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
              opacity: 0,
              animation: 'dropIn 1s ease-out forwards',
              animationDelay: '0.5s',
              '@keyframes dropIn': {
                '0%': { transform: 'translateY(-100vh)', opacity: 0 },
                '100%': { transform: 'translateY(0)', opacity: 1 },
              },
            }}
          >
            <Image
              src="/emmanuel-photo.jpg" // Replace with your actual photo path
              alt="Emmanuel"
              width={350}
              height={350}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </Box>
        </Box>
      </Box>

      {/* Fun Facts Section */}
      <Box
        sx={{
          mt: { xs: 4, md: 5 }, // Adjusted margin
          p: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Pacifico, cursive',
            fontStyle: 'normal',
            fontSize: { xs: '1.25rem', md: '2rem' }, // Smaller on mobile
            fontWeight: 'bold',
            color: '#333',
            mb: { xs: 3, md: 5 },
            display: 'flex',
            justifyContent: {xs: 'center', md: 'flex-start'},
            alignItems: {xs: 'center', md: 'flex-start'},
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          Some Fun Facts About Me
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, // Single column on mobile
            gap: { xs: 3, md: 4 }, // Adjusted gap
          }}
        >
          {[
            'I built my first website in just two weeks.',
            'Dark mode is my best friend.',
            'I once debugged a bug for 8 hours straight.',
            'I drink coffee more than tea.',
            'My favorite framework is Next.js.',
            'I enjoy watching sci-fi movies.',
            'I’m learning backend development to go full stack.',
            'Music helps me code better.',
            'I love exploring minimalist UI design.',
            'I started coding with just a small laptop and no internet.',
          ].map((fact, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: {xs: 3, md: 2}}}>
              <Box
                sx={{
                  width: { xs: '20px', md: '50px' }, // Smaller on mobile
                  height: { xs: '20px', md: '50px' },
                  backgroundColor: '#000',
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: '50%',
                  fontWeight: 'bold',
                  fontSize: { xs: '13px', md: '2rem' }, // Smaller on mobile
                }}
              >
                {index + 1}
              </Box>
              <Typography
                sx={{
                  fontSize: { xs: '13px', md: '1.125rem' }, // Smaller on mobile
                  lineHeight: 1.5,
                  fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                  color: '#555',
                }}
              >
                {fact}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          mt: { xs: 6, md: 8 }, // Adjusted margin
        }}
      >
        {/* Top - Text */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            textAlign: 'center',
            mb: { xs: 10, md: 20 },
            mt: { xs: 6, md: 10 },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Pacifico, cursive',
              fontSize: { xs: '2.5rem', md: '3.5rem' }, // Smaller on mobile
              color: '#000',
              mb: 1,
            }}
          >
            Interested in working together on a project?
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: { xs: '1rem', md: '1.125rem' }, // Smaller on mobile
              color: '#656270',
              mb: 2,
              maxWidth: { xs: '90%', md: '100%' }, // Slightly narrower on mobile
            }}
          >
            Occasionally I take on projects that I find interesting, send me over a message and let’s talk.
          </Typography>
        </Box>

        {/* Right Side - Social Icons */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Inter, Helvetica, Arial, sans-serif',
              fontSize: { xs: '10px', md: '0.875rem' }, // Smaller on mobile
              color: '#656270',
            }}
          >
            Site coded and developed with love by me. © 2025 Dev Emmy
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;