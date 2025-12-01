import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes"; 

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Update these props here: */}
        <ThemeProvider 
          attribute="data-theme" 
          defaultTheme="light" 
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}