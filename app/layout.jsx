// app/layout.jsx
import './globals.css';
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

export const metadata = {
  title: "My Dopefolio",  
  description: "A showcase of my work and skills",
  icons: {
    icon: "/appLogo.png", // Path to your favicon
    shortcut: "/appLogo.png", // Shortcut icon for browsers
    apple: "/appLogo.png", // Apple touch icon
  },
  manifest: "/manifest.json", // Path to your manifest file
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Box>
          <Navbar />
          {children}
        </Box>
      </body>
    </html>
  );
}