"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger icon
import CloseIcon from "@mui/icons-material/Close"; // X icon
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Check if the route is active
  const isActive = (route) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        py: { xs: "10px", md: "20px" },
        px: { xs: "20px", md: "50px" },
        backgroundColor: "#fffbf6",
        zIndex: 1000,
        opacity: 0,
        transform: "translateY(-100%)",
        animation: "dropIn 0.8s ease-out forwards",
        '@keyframes dropIn': {
          '0%': { transform: "translateY(-100%)", opacity: 0 },
          '100%': { transform: "translateY(0)", opacity: 1 },
        },
      }}
    >
      {/* Mobile Header with Hamburger */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          display: { xs: "flex", md: "none" }, // Only show on mobile
        }}
      >
        <Image src="/appLogo.png" alt="applogo" width={50} height={50}/>
        <Box onClick={toggleMenu} sx={{ cursor: "pointer" }}>
          {isOpen ? (
            <CloseIcon sx={{ fontSize: "24px" }} />
          ) : (
            <MenuIcon sx={{ fontSize: "24px" }} />
          )}
        </Box>
      </Box>

      {/* Navigation Links */}
      <Box
        sx={{
          display: { xs: isOpen ? "flex" : "none", md: "flex" }, // Show when open on mobile
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: "15px", md: "10px" },
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          mt: { xs: "20px", md: 0 }, // Margin top for mobile dropdown
          position: { xs: "absolute", md: "static" },
          top: "60px",
          left: 0,
          width: "100%",
          backgroundColor: { xs: "#fffbf6", md: "transparent" },
          py: { xs: "20px", md: 0 },
          transition: "all 0.3s ease-in-out",
        }}
      >
        {[
          { label: "Work", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "mailto:emmanuelugochukwu2000@gmail.com" },
        ].map(({ label, href }) => (
          <Typography
            key={href}
            variant="body1"
            component={Link}
            href={href}
            onClick={() => setIsOpen(false)} // Close menu on link click
            sx={{
              textDecoration: "none",
              color: "#656270",
              fontSize: { xs: "16px", md: "18px" },
              fontFamily: "Inter",
              ...(isActive(href) && {
                textDecoration: "underline",
                textDecorationColor: "#dfd7fd",
                textDecorationThickness: "4px",
                textUnderlineOffset: "4px",
              }),
            }}
          >
            {label}
          </Typography>
        ))}

        {/* Social Icons (moved inside dropdown on mobile) */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "30px", md: "45px" },
            mt: { xs: "20px", md: 0 },
          }}
        >
          <Typography
            variant="body1"
            component="a"
            href="https://github.com/Dev-Emmyy"
            sx={{ textDecoration: "none", color: "#656270" }}
          >
            <GitHubIcon sx={{ fontSize: { xs: "20px", md: "24px" }, color: "#000" }} />
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="https://www.linkedin.com/in/emmanuel-ugochukwu-ba798a25a"
            sx={{ textDecoration: "none", color: "#656270" }}
          >
            <LinkedInIcon sx={{ fontSize: { xs: "20px", md: "24px" }, color: "#000" }} />
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="https://x.com/perrylayyy"
            sx={{ textDecoration: "none", color: "#656270" }}
          >
            <XIcon sx={{ fontSize: { xs: "20px", md: "24px" }, color: "#000" }} />
          </Typography>
        </Box>
      </Box>

      {/* Desktop Social Icons (separate from mobile dropdown) */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" }, // Only show on desktop
          gap: "45px",
          position: "absolute",
          right: "50px",
          top: "20px",
        }}
      >
        <Typography
          variant="body1"
          component="a"
          href="https://github.com/Dev-Emmyy"
          sx={{ textDecoration: "none", color: "#656270" }}
        >
          <GitHubIcon sx={{ fontSize: "24px", color: "#000" }} />
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="https://www.linkedin.com/in/emmanuel-ugochukwu-ba798a25a"
          sx={{ textDecoration: "none", color: "#656270" }}
        >
          <LinkedInIcon sx={{ fontSize: "24px", color: "#000" }} />
        </Typography>
        <Typography
          variant="body1"
          component="a"
          href="https://x.com/perrylayyy"
          sx={{ textDecoration: "none", color: "#656270" }}
        >
          <XIcon sx={{ fontSize: "24px", color: "#000" }} />
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
