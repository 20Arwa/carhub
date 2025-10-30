import { Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/Footer";

// Google Font
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Hub | Search and Discover Cars",
  description: "Discover and explore the latest car models and specifications. Car Hub helps you find the perfect car through smart search and filters.",
  keywords: ["Car Hub", "Car Showcase", "Car Search", "Car Filter", "Car Finder", "Car Models", "Vehicle Gallery",],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="en" suppressHydrationWarning>      
    <body className={`${manrope.variable} antialiased dark:bg-[var(--color-bg-dark)]`}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


