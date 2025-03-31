// app/layout.jsx
import './globals.css';

export const metadata = {
  title: "My Portfolio",  
  description: "A showcase of my work and skills",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}