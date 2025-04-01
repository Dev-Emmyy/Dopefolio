import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const WorkPage = () => {

    const projects = [
    {
      name: 'NeuroNotes AI',
      laptopScreenshot: '/laptop-screenshot.png',
      phoneScreenshot: '/phone-screenshot.jpg',
      bgColor: '#FFD1DC', // Pastel pink
      link: "https://ai-note-app-sepia.vercel.app/"
    },
    {
      name: 'Travel Agency',
      laptopScreenshot: '/laptop-screenshot-2.png',
      phoneScreenshot: '/phone-screenshot-2.jpg',
      bgColor: '#D4A5FF', // Pastel purple
      link: "https://travel-agency-iota-ivory.vercel.app/login"
    },
    {
      name: 'Betyield',
      laptopScreenshot: '/laptop-screenshot-3.png',
      phoneScreenshot: '/phone-screenshot-3.jpg',
      bgColor: '#A5D7E8', // Pastel blue
      link: "https://bet-yield.vercel.app/"
    },
    {
      name: 'Mr Beast memecoin website',
      laptopScreenshot: '/laptop-screenshot-4.png',
      phoneScreenshot: '/phone-screenshot-4.jpg',
      bgColor: '#F5E050', // Pastel yellow
      link: "https://mr-beastgames-memecoin.vercel.app/"
    },
    {
      name: 'ArtisanHub',
      laptopScreenshot: '/laptop-screenshot-5.png',
      phoneScreenshot: '/phone-screenshot-5.jpg',
      bgColor: '#FFB3B3', // Pastel coral
      link: "https://ai.app/"
    },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: 4,
        mt: 10,
        backgroundColor: '#fffbf6',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          py: 3,
          px: 10,
        }}
      >
        {/* Memoji Image */}
        <Typography
          component="div"
          sx={{
            alignSelf: 'flex-end',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#dfd7fd',
            borderRadius: '50%',
            height: '200px',
            width: '200px',
            animation: 'dropIn 1s ease-out forwards, bounce 1s infinite 1s',
            '@keyframes dropIn': {
              '0%': { transform: 'translateY(-100vh)', opacity: 0 },
              '100%': { transform: 'translateY(0)', opacity: 1 },
            },
            '@keyframes bounce': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-15px)' },
            },
          }}
        >
          <Image
            src="/memoji.png"
            alt="memoji"
            width={150}
            height={150}
            style={{ borderRadius: '50%' }}
          />
        </Typography>

        {/* h1 - Title */}
        <Typography
          variant="h1"
          sx={{
            color: '#000',
            fontFamily: 'Pacifico, cursive',
            fontStyle: 'normal',
            fontSize: '6rem',
            fontWeight: 500,
            margin: '0 0 1.5rem',
            display: 'flex',
            flexDirection: 'column',
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
          <span>I’m Emmanuel.</span>
          <span>Software Developer.</span>
        </Typography>

        {/* h4 - Description */}
        <Typography
          variant="h4"
          sx={{
            alignSelf: 'flex-end',
            color: '#656270',
            fontFamily: 'Inter, Helvetica, Arial, sans-serif',
            fontSize: '1.125rem',
            lineHeight: 1.5,
            maxWidth: '32.5rem',
            animation: 'slideUp 1s ease-out forwards',
            animationDelay: '0.75s',
            '@keyframes slideUp': {
              '0%': { transform: 'translateY(100vh)', opacity: 0 },
              '100%': { transform: 'translateY(0)', opacity: 1 },
            },
          }}
        >
          Here’s something about my work—building dope software that solves real problems.
        </Typography>

        {/* Floating Boxes */}
        <Box
          sx={{
            alignSelf: 'flex-start', // Below h4, aligned left
            position: 'relative',
            mt: 2,
            width: '150px', // Wider container for better float
            height: '100px',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              backgroundColor: '#FF2E63', // Pink
              borderRadius: '4px', // Smooth edges
              animation: 'float1 3s infinite ease-in-out',
              '@keyframes float1': {
                '0%': { transform: 'translate(0, 0)' },
                '50%': { transform: 'translate(40px, -30px)' },
                '100%': { transform: 'translate(0, 0)' },
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              left: '50px', // Offset start
              width: '60px',
              height: '60px',
              backgroundColor: '#00FFB9', // Teal
              borderRadius: '4px', // Smooth edges
              animation: 'float2 4s infinite ease-in-out',
              '@keyframes float2': {
                '0%': { transform: 'translate(0, 0)' },
                '50%': { transform: 'translate(-35px, 25px)' },
                '100%': { transform: 'translate(0, 0)' },
              },
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              left: '60px', // Offset start
              width: '35px',
              height: '35px',
              backgroundColor: '#dfd7fd', // Lavender
              borderRadius: '4px', // Smooth edges
              animation: 'float3 3.5s infinite ease-in-out',
              '@keyframes float3': {
                '0%': { transform: 'translate(0, 0)' },
                '50%': { transform: 'translate(20px, -35px)' },
                '100%': { transform: 'translate(0, 0)' },
              },
            }}
          />
        </Box>

        {/* Works Section */}
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
          <Box
            key={index}
            href={project.link}
            sx={{
              alignSelf: 'center',
              mt: 6,
              width: '100%',
              maxWidth: '1200px',
              p: 5,
              backgroundColor: project.bgColor, // Unique color per card
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              position: 'relative',
              opacity: 0, // Start hidden
              transform: 'translateY(50px)', // Start below
              animation: 'slideUpCard 0.8s ease-out forwards', // Animation
              animationDelay: `${index * 0.2}s`, // Staggered delay
              '@keyframes slideUpCard': {
                '0%': { opacity: 0, transform: 'translateY(50px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            {/* Project Name - Top Right */}
            <Typography
              variant="h3"
              sx={{
                position: 'absolute',
                top: 20,
                right: 16,
                fontFamily: 'Libre Baskerville, cursive',
                fontSize: '2rem',
                color: '#000',
                textTransform: 'uppercase',
              }}
            >
              {project.name}
            </Typography>

            {/* Device Templates */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                height: '450px',
                mt: 4,
              }}
            >
              {/* Background Gradient */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '80%',
                  height: '80%',
                  background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)',
                  borderRadius: '16px',
                  zIndex: 0,
                }}
              />

              {/* iPhone 12 Template (Left Side) */}
              <Box
                sx={{
                  position: 'absolute',
                  left: '30%',
                  transform: 'translateX(-50%)',
                  width: '160px',
                  height: '320px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '30px',
                  padding: '15px 10px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  zIndex: 2,
                  border: '2px solid #000',
                }}
              >
                {/* iPhone 12 Details */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '60px',
                    height: '5px',
                    backgroundColor: '#000',
                    borderRadius: '5px',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    left: '-2px',
                    top: '60px',
                    width: '2px',
                    height: '30px',
                    backgroundColor: '#000',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    right: '-2px',
                    top: '80px',
                    width: '2px',
                    height: '40px',
                    backgroundColor: '#000',
                  }}
                />
                {/* Screen */}
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#000',
                    borderRadius: '20px',
                    overflow: 'hidden',
                  }}
                >
                  <Image
                    src={project.phoneScreenshot}
                    alt={`${project.name} Phone Screenshot`}
                    width={140}
                    height={290}
                    style={{ objectFit: 'cover' }}
                  />
                </Box>
              </Box>

              {/* Laptop Template */}
              <Box
                sx={{
                  position: 'relative',
                  width: '620px',
                  height: '400px',
                  zIndex: 1,
                  transform: 'rotate(-5deg)',
                }}
              >
                {/* Screen Section */}
                <Box
                  sx={{
                    width: '100%',
                    height: '350px',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '10px 10px 0 0',
                    padding: '10px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      backgroundColor: '#000',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Image
                      src={project.laptopScreenshot}
                      alt={`${project.name} Laptop Screenshot`}
                      width={1200}
                      height={675}
                      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                    />
                  </Box>
                </Box>
                {/* Keyboard and Trackpad Section */}
                <Box
                  sx={{
                    width: '100%',
                    height: '50px',
                    backgroundColor: '#d0d0d0',
                    borderRadius: '0 0 10px 10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <Box
                    sx={{
                      width: '150px',
                      height: '30px',
                      backgroundColor: '#b0b0b0',
                      borderRadius: '5px',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          </Link>
        ))}

        {/* Footer */}
        <Box
          sx={{
            mt: 8,
          }}>

          {/* Top - Text */}
          <Box 
            sx={{display: 'flex', flexDirection: "column" , alignItems: 'center', justifyContent: 'center', gap: '20px', textAlign: 'center',  mb:20 , mt:10}}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: 'Pacifico, cursive',
                fontSize: '3.5rem',
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
                fontSize: '1.125rem',
                color: '#656270',
                mb: 2,
              }}
            >
              Occasionally I take on projects that I find interesting, send me over a message and let’s talk.
            </Typography>
          </Box>

          {/* Right Side - Social Icons */}
          <Box 
            sx={{ display: 'flex',alignItems: 'center' ,justifyContent: 'center', textAlign: 'center',}}>
                <Typography
                    variant="body2"
                    sx={{
                        fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                        fontSize: '0.875rem',
                        color: '#656270',
                    }}>
                    Site coded and developed with love by me. © 2025 Dev Emmy
                </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkPage;