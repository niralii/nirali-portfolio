import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"; // 1. Import this

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Your Portfolio",
  description: "Master’s student in ML @ Georgia Tech",
};

export default function RootLayout({ children }) {
  return (
    // 2. Add suppressHydrationWarning to html to stop the flicker warning
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* 3. Wrap children in ThemeProvider. attribute="data-theme" matches your CSS logic. */}
        <ThemeProvider attribute="data-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}