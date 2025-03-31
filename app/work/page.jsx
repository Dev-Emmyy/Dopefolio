import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const WorkPage = () => {
    return (
        <Box 
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                padding: 4,
                mt: 10,
                backgroundColor: '#fffbf6',
            }}>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                position: 'relative',
                py: 3,
                px: 10,
            }}
            >
            {/* Memoji Image - Drops from Top */}
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
                animation: 'dropIn 1s ease-out forwards, bounce 1s infinite 1s', // Drop then bounce
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

            {/* h1 - Title - Slides Up from Bottom */}
            <Typography
                variant="h1"
                sx={{
                color: '#000',
                fontFamily: 'Pacifico, cursive', // Keeping your new chill font
                fontStyle: 'normal',
                fontSize: '6rem',
                fontWeight: 500,
                margin: '0 0 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                letterSpacing: '0.05em',
                textTransform: 'none', // Pacifico looks better natural
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

            {/* h4 - Description - Slides Up from Bottom */}
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
            </Box>
        </Box>
    );
};

export default WorkPage;