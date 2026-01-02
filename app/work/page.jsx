import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const WorkPage = () => {
  const projects = [
    {
      name: 'Nigeria Crisis Map',
      laptopScreenshot: '/laptop-screenshot-10.png',
      phoneScreenshot: '/phone-screenshot-10.jpeg',
      bgColor: '#FFE5B4',
      link: 'https://nigeria-crisis-map-7zyk.vercel.app/',
    },
    {
      name: 'Schease Platform',
      laptopScreenshot: '/laptop-screenshot-9.png',
      phoneScreenshot: '/phone-screenshot-9.jpeg',
      bgColor: '#E6E6FA',
      link: 'https://www.schease.cognixtech.org/',
    },
    {
      name: 'Boost Grant',
      laptopScreenshot: '/laptop-screenshot-8.png',
      phoneScreenshot: '/phone-screenshot-8.jpeg',
      bgColor: '#B0E0E6',
      link: 'https://boost-grant.vercel.app/',
    },
    {
      name: 'Cognix Group',
      laptopScreenshot: '/laptop-screenshot-7.png',
      phoneScreenshot: '/phone-screenshot-7.jpeg',
      bgColor: '#FFDAB9',
      link: 'https://cognix-group.vercel.app/',
    },
    {
      name: 'Rangers International',
      laptopScreenshot: '/laptop-screenshot-6.png',
      phoneScreenshot: '/phone-screenshot-6.jpeg',
      bgColor: '#98FB98',
      link: 'https://rangersintl.com/',
    },
    {
      name: 'NeuroNotes AI',
      laptopScreenshot: '/laptop-screenshot.png',
      phoneScreenshot: '/phone-screenshot.jpg',
      bgColor: '#FFD1DC',
      link: 'https://ai-note-app-sepia.vercel.app/',
    },
    {
      name: 'Travel Agency',
      laptopScreenshot: '/laptop-screenshot-2.png',
      phoneScreenshot: '/phone-screenshot-2.jpg',
      bgColor: '#D4A5FF',
      link: 'https://travel-agency-iota-ivory.vercel.app/login',
    },
    {
      name: 'Betyield',
      laptopScreenshot: '/laptop-screenshot-3.png',
      phoneScreenshot: '/phone-screenshot-3.jpg',
      bgColor: '#A5D7E8',
      link: 'https://bet-yield.vercel.app/',
    },
    {
      name: 'Mr Beast Coin',
      laptopScreenshot: '/laptop-screenshot-4.png',
      phoneScreenshot: '/phone-screenshot-4.jpg',
      bgColor: '#F5E050',
      link: 'https://mr-beastgames-memecoin.vercel.app/',
    },
    {
      name: 'My Portfolio',
      laptopScreenshot: '/laptop-screenshot-5.png',
      phoneScreenshot: '/phone-screenshot-5.jpg',
      bgColor: '#FFB3B3',
      link: 'https://dopefolio-ten.vercel.app/',
    },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: { xs: 2, md: 4 }, mt: { xs: 8, md: 10 }, backgroundColor: '#fffbf6' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative', py: { xs: 2, md: 3 }, px: { xs: 2, md: 10 } }}>
        <Typography component="div" sx={{ alignSelf: 'flex-end', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#dfd7fd', borderRadius: '50%', height: { xs: '120px', md: '200px' }, width: { xs: '120px', md: '200px' }, animation: 'dropIn 1s ease-out forwards, bounce 1s infinite 1s', '@keyframes dropIn': { '0%': { transform: 'translateY(-100vh)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } }, '@keyframes bounce': { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-15px)' } } }}>
          <Image src="/memoji.png" alt="memoji" width={150} height={150} style={{ borderRadius: '50%', width: '75%', height: '75%' }} />
        </Typography>

        <Typography variant="h1" sx={{ color: '#000', fontFamily: 'Pacifico, cursive', fontStyle: 'normal', fontSize: { xs: '3rem', md: '6rem' }, fontWeight: 500, margin: '0 0 1.5rem', display: 'flex', flexDirection: 'column', letterSpacing: '0.05em', textTransform: 'none', animation: 'slideUp 1s ease-out forwards', animationDelay: '0.5s', '@keyframes slideUp': { '0%': { transform: 'translateY(100vh)', opacity: 0 }, '100%': { transform: 'translateY(0)', opacity: 1 } } }}>
          <span>I'm Emmanuel.</span>
          <span>Software Developer.</span>
        </Typography>

        <Typography variant="h4" sx={{ alignSelf: 'flex-end', color: '#656270', fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontSize: { xs: '1rem', md: '1.125rem' }, lineHeight: 1.5, maxWidth: { xs: '100%', md: '32.5rem' }, animation: 'slideUp 1s ease-out forwards', animationDelay: '0.75s' }}>
          Here's something about my work—building dope software that solves real problems.
        </Typography>

        <Box sx={{ alignSelf: 'flex-start', position: 'relative', mt: 2, width: { xs: '100px', md: '150px' }, height: { xs: '80px', md: '100px' } }}>
          <Box sx={{ position: 'absolute', width: { xs: '30px', md: '40px' }, height: { xs: '30px', md: '40px' }, backgroundColor: '#FF2E63', borderRadius: '4px', animation: 'float1 3s infinite ease-in-out', '@keyframes float1': { '0%': { transform: 'translate(0, 0)' }, '50%': { transform: 'translate(30px, -20px)' }, '100%': { transform: 'translate(0, 0)' } } }} />
          <Box sx={{ position: 'absolute', left: { xs: '40px', md: '50px' }, width: { xs: '40px', md: '60px' }, height: { xs: '40px', md: '60px' }, backgroundColor: '#00FFB9', borderRadius: '4px', animation: 'float2 4s infinite ease-in-out', '@keyframes float2': { '0%': { transform: 'translate(0, 0)' }, '50%': { transform: 'translate(-25px, 20px)' }, '100%': { transform: 'translate(0, 0)' } } }} />
          <Box sx={{ position: 'absolute', left: { xs: '50px', md: '60px' }, width: { xs: '25px', md: '35px' }, height: { xs: '25px', md: '35px' }, backgroundColor: '#dfd7fd', borderRadius: '4px', animation: 'float3 3.5s infinite ease-in-out', '@keyframes float3': { '0%': { transform: 'translate(0, 0)' }, '50%': { transform: 'translate(15px, -25px)' }, '100%': { transform: 'translate(0, 0)' } } }} />
        </Box>

        {projects.map((project, index) => (
          <Link key={index} href={project.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Box sx={{ alignSelf: 'center', mt: 6, width: '100%', maxWidth: { xs: '100%', md: '1200px' }, p: { xs: 3, md: 5 }, backgroundColor: project.bgColor, borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', position: 'relative', opacity: 0, transform: 'translateY(50px)', animation: 'slideUpCard 0.8s ease-out forwards', animationDelay: `${index * 0.2}s`, '@keyframes slideUpCard': { '0%': { opacity: 0, transform: 'translateY(50px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } } }}>
              <Typography variant="h3" sx={{ position: 'absolute', top: { xs: 10, md: 20 }, right: { xs: 10, md: 16 }, fontFamily: 'Libre Baskerville, cursive', fontSize: { xs: '1.5rem', md: '2rem' }, color: '#000', textTransform: 'uppercase' }}>
                {project.name}
              </Typography>

              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: { xs: '300px', md: '450px' }, mt: { xs: 8, md: 4 } }}>
                <Box sx={{ position: 'absolute', width: { xs: '90%', md: '80%' }, height: '80%', background: 'linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)', borderRadius: '16px', zIndex: 0 }} />

                <Box sx={{ position: 'absolute', left: { xs: '25%', md: '30%' }, transform: 'translateX(-50%)', width: { xs: '100px', md: '160px' }, height: { xs: '200px', md: '320px' }, backgroundColor: '#e0e0e0', borderRadius: '30px', padding: { xs: '10px 6px', md: '15px 10px' }, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', zIndex: 2, border: '2px solid #000' }}>
                  <Box sx={{ position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)', width: { xs: '40px', md: '60px' }, height: '5px', backgroundColor: '#000', borderRadius: '5px' }} />
                  <Box sx={{ position: 'absolute', left: '-2px', top: { xs: '40px', md: '60px' }, width: '2px', height: { xs: '20px', md: '30px' }, backgroundColor: '#000' }} />
                  <Box sx={{ position: 'absolute', right: '-2px', top: { xs: '60px', md: '80px' }, width: '2px', height: { xs: '30px', md: '40px' }, backgroundColor: '#000' }} />
                  <Box sx={{ width: '100%', height: '100%', backgroundColor: '#000', borderRadius: '20px', overflow: 'hidden' }}>
                    <Image src={project.phoneScreenshot} alt={`${project.name} Phone Screenshot`} width={140} height={290} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                  </Box>
                </Box>

                <Box sx={{ position: 'relative', width: { xs: '300px', md: '620px' }, height: { xs: '200px', md: '400px' }, zIndex: 1, transform: { xs: 'rotate(-3deg)', md: 'rotate(-5deg)' } }}>
                  <Box sx={{ width: '100%', height: { xs: '160px', md: '350px' }, backgroundColor: '#e0e0e0', borderRadius: '10px 10px 0 0', padding: { xs: '5px', md: '10px' }, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
                    <Box sx={{ width: '100%', height: '100%', backgroundColor: '#000', borderRadius: '4px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <Image src={project.laptopScreenshot} alt={`${project.name} Laptop Screenshot`} width={1200} height={675} style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
                    </Box>
                  </Box>
                  <Box sx={{ width: '100%', height: { xs: '40px', md: '50px' }, backgroundColor: '#d0d0d0', borderRadius: '0 0 10px 10px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}>
                    <Box sx={{ width: { xs: '80px', md: '150px' }, height: { xs: '20px', md: '30px' }, backgroundColor: '#b0b0b0', borderRadius: '5px' }} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Link>
        ))}

        <Box sx={{ mt: { xs: 6, md: 8 } }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', textAlign: 'center', mb: { xs: 10, md: 20 }, mt: { xs: 6, md: 10 } }}>
            <Typography variant="h1" sx={{ fontFamily: 'Pacifico, cursive', fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#000', mb: 1 }}>
              Interested in working together on a project?
            </Typography>
            <Typography variant="h4" sx={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontSize: { xs: '1rem', md: '1.125rem' }, color: '#656270', mb: 2, maxWidth: { xs: '90%', md: '100%' } }}>
              Occasionally I take on projects that I find interesting, send me over a message and let's talk.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <Typography variant="body2" sx={{ fontFamily: 'Inter, Helvetica, Arial, sans-serif', fontSize: { xs: '9px', md: '0.875rem' }, color: '#656270' }}>
              Site coded and developed with love by me. © 2025 Dev Emmy
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WorkPage;