import "./globals.css";

export const metadata = {
  title: "DevEmmy — Systems-first software developer",
  description: "Premium portfolio for DevEmmy, a software developer building SaaS platforms, backend APIs, dashboards, automations, CRM workflows, and security-aware systems.",
  icons: { icon: "/appLogo.png", shortcut: "/appLogo.png", apple: "/appLogo.png" },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
