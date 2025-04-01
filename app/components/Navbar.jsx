"use client";
import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <Box
      sx={{
        position: 'fixed', // Locks it to the top
        top: 0,
        left: 0,
        width: '100%', // Full width across the screen
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: '30px',
        px: '50px',
        backgroundColor: '#fffbf6',
        zIndex: 1000, // Stays above other content
      }}
    >
      {/* Nav Links */}
      <Box sx={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <Typography
          variant="body1"
          component={Link}
          href="/"
          sx={{
            textDecoration: 'none',
            color: '#656270',
            fontSize: '18px',
            fontFamily: 'Inter',
            ...(pathname === '/' && {
              textDecoration: 'underline',
              textDecorationColor: '#dfd7fd',
              textDecorationThickness: '4px',
              textUnderlineOffset: '4px',
            }),
          }}
        >
          Work
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="#"
          sx={{
            textDecoration: 'none',
            color: '#656270',
            fontSize: '18px',
            fontFamily: 'Inter',
            '&:active': {
              textDecoration: 'underline',
              textDecorationColor: '#dfd7fd',
            },
          }}
        >
          Blog
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="#"
          sx={{
            textDecoration: 'none',
            color: '#656270',
            fontSize: '18px',
            fontFamily: 'Inter',
            '&:active': {
              textDecoration: 'underline',
              textDecorationColor: '#dfd7fd',
            },
          }}
        >
          About
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="#"
          sx={{
            textDecoration: 'none',
            color: '#656270',
            fontSize: '18px',
            fontFamily: 'Inter',
            '&:active': {
              textDecoration: 'underline',
              textDecorationColor: '#dfd7fd',
            },
          }}
        >
          Contact
        </Typography>
      </Box>

      {/* Social Icons */}
      <Box sx={{ display: 'flex', gap: '45px' }}>
        <Typography
          variant="body1"
          component="a"
          href="https://github.com/Dev-Emmyy"
          sx={{ textDecoration: 'none', color: '#656270' }}
        >
          <GitHubIcon sx={{ fontSize: '24px', color: '#000' }} />
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="https://www.linkedin.com/in/emmanuel-ugochukwu-ba798a25a"
          sx={{ textDecoration: 'none', color: '#656270' }}
        >
          <LinkedInIcon sx={{ fontSize: '24px', color: '#000' }} />
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="https://x.com/perrylayyy"
          sx={{ textDecoration: 'none', color: '#656270' }}
        >
          <XIcon sx={{ fontSize: '24px', color: '#000' }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;