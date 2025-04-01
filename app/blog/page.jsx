import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const BlogPage = () => {
  const blogPosts = [
    {
      title: 'How to get started in a tech career',
      description: 'Getting started in a tech career can be challenging, but it’s also incredibly rewarding. Here are some tips to help you on your journey.',
      image: '/techCareer.jpeg',
      link: 'https://medium.com/@emmanuelugochukwu2000/how-to-get-started-in-a-tech-career-a687de4236f0',
      bgColor: '#FFD1DC', // Pastel pink
    },
    {
      title: 'Emerging Technologies to watch in 2024',
      description: 'These technologies have the potential to revolutionize many aspects of our lives, and it will be exciting to see how they develop and are used in the years to come.',
      image: '/techEmerge.jpeg',
      link: 'https://medium.com/@emmanuelugochukwu2000/emerging-technologies-to-watch-in-2023-926d3f15c8a8',
      bgColor: '#D4A5FF', // Pastel purple
    },
    {
      title: 'The future of work in a tech-driven world',
      description: 'The rise of automation and AI is already leading to changes in the workforce. For example, many jobs in manufacturing and customer service are being automated. This trend is likely to continue, and it will be important for workers to adapt to these changes.',
      image: '/techFuture.jpeg',
      link: 'https://medium.com/@emmanuelugochukwu2000/the-future-of-work-in-a-tech-driven-world-7e4fda9ec730',
      bgColor: '#A5D7E8', // Pastel blue
    },
    {
      title: 'The impact of technology on society',
      description: 'The impact of technology on society is complex and constantly evolving. As technology continues to develop, we will need to continue to assess its impacts and make adjustments as needed to ensure that it is used in a way that benefits everyone.',
      image: '/techImpact.jpeg',
      link: 'https://medium.com/@emmanuelugochukwu2000/the-impact-of-technology-on-society-207ccd25f090',
      bgColor: '#F5E050', // Pastel yellow
    },
  ];

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#fffbf6',
        pb: { xs: 2, md: 4 },
        px: { xs: 2, md: 0 }, // Add padding on mobile to prevent edge clipping
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(180deg, #fffbf6 25%, #fdf2d9 75%)',
          py: { xs: 15, md: 27 }, // Reduced padding on mobile
          px: { xs: 2, md: 4 },
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Animated White Boxes */}
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '30px', md: '50px' }, // Smaller on mobile
            height: { xs: '30px', md: '50px' },
            backgroundColor: '#ffffff',
            opacity: 0.7,
            borderRadius: '4px',
            animation: 'floatUp 5s infinite ease-in-out',
            left: { xs: '10%', md: '20%' }, // Adjusted for mobile
            '@keyframes floatUp': {
              '0%': { transform: 'translateY(100vh)', opacity: 0 },
              '50%': { opacity: 0.7 },
              '100%': { transform: 'translateY(-100vh)', opacity: 0 },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '25px', md: '40px' },
            height: { xs: '25px', md: '40px' },
            backgroundColor: '#ffffff',
            opacity: 0.7,
            borderRadius: '4px',
            animation: 'floatUp 6s infinite ease-in-out',
            left: { xs: '30%', md: '40%' },
            animationDelay: '1s',
            '@keyframes floatUp': {
              '0%': { transform: 'translateY(100vh)', opacity: 0 },
              '50%': { opacity: 0.7 },
              '100%': { transform: 'translateY(-100vh)', opacity: 0 },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '20px', md: '35px' },
            height: { xs: '20px', md: '35px' },
            backgroundColor: '#ffffff',
            opacity: 0.7,
            borderRadius: '4px',
            animation: 'floatUp 4s infinite ease-in-out',
            left: { xs: '50%', md: '60%' },
            animationDelay: '0.5s',
            '@keyframes floatUp': {
              '0%': { transform: 'translateY(100vh)', opacity: 0 },
              '50%': { opacity: 0.7 },
              '100%': { transform: 'translateY(-100vh)', opacity: 0 },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: { xs: '15px', md: '25px' },
            height: { xs: '15px', md: '25px' },
            backgroundColor: '#ffffff',
            opacity: 0.7,
            borderRadius: '4px',
            animation: 'floatUp 7s infinite ease-in-out',
            left: { xs: '70%', md: '80%' },
            animationDelay: '2s',
            '@keyframes floatUp': {
              '0%': { transform: 'translateY(100vh)', opacity: 0 },
              '50%': { opacity: 0.7 },
              '100%': { transform: 'translateY(-100vh)', opacity: 0 },
            },
          }}
        />

        {/* Header Text */}
        <Typography
          variant="h1"
          sx={{
            color: '#000',
            fontFamily: 'Pacifico, cursive',
            fontStyle: 'normal',
            fontSize: { xs: '3rem', md: '6rem' }, // Smaller on mobile
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
          Notes & Thoughts
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Inter, Helvetica, Arial, sans-serif',
            color: '#656270',
            fontSize: { xs: '1rem', md: '1.125rem' }, // Smaller on mobile
            lineHeight: 1.5,
            width: { xs: '100%', md: '800px' }, // Full width on mobile
            textAlign: 'center',
            margin: '0 auto',
            animation: 'slideUp 1s ease-out forwards',
            animationDelay: '0.75s',
            '@keyframes slideUp': {
              '0%': { transform: 'translateY(100vh)', opacity: 0 },
              '100%': { transform: 'translateY(0)', opacity: 1 },
            },
          }}
        >
          A space where I publish designs I make in my free time, notes about frontend development, and updates about my personal life.
        </Typography>
      </Box>

      {/* Blog Posts Section */}
      <Box
        sx={{
          maxWidth: { xs: '100%', md: '1200px' }, // Full width on mobile
          margin: '0 auto',
          py: { xs: 2, md: 4 }, // Reduced padding on mobile
          px: { xs: 1, md: 2 },
        }}
      >
        {blogPosts.map((post, index) => (
          <Link
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Stack on mobile
                alignItems: 'center',
                backgroundColor: post.bgColor,
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                mb: { xs: 3, md: 4 }, // Reduced margin on mobile
                p: { xs: 2, md: 3 }, // Reduced padding on mobile
                opacity: 0,
                transform: 'translateY(50px)',
                animation: 'slideUpCard 0.8s ease-out forwards',
                animationDelay: `${index * 0.2}s`,
                '@keyframes slideUpCard': {
                  '0%': { opacity: 0, transform: 'translateY(50px)' },
                  '100%': { opacity: 1, transform: 'translateY(0)' },
                },
                cursor: 'pointer',
                '&:hover': {
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(-5px)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              {/* Blog Image */}
              <Box
                sx={{
                  flex: '0 0 auto',
                  width: { xs: '100%', md: '300px' },
                  height: { xs: '150px', md: '200px' }, // Reduced height on mobile
                  borderRadius: '8px',
                  overflow: 'hidden',
                  mb: { xs: 2, md: 0 },
                  mr: { md: 3 },
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </Box>

              {/* Blog Description */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: 'Libre Baskerville, cursive',
                    fontSize: { xs: '1.25rem', md: '1.5rem' }, // Smaller on mobile
                    color: '#000',
                    mb: 1,
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: 'Inter, Helvetica, Arial, sans-serif',
                    fontSize: { xs: '0.875rem', md: '1rem' }, // Smaller on mobile
                    color: '#656270',
                  }}
                >
                  {post.description}
                </Typography>
              </Box>
            </Box>
          </Link>
        ))}
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
              fontSize: { xs: '9px', md: '0.875rem' },
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

export default BlogPage;