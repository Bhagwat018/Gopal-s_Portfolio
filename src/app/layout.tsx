import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_DATA } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PERSONAL_DATA.profile.name} | ${PERSONAL_DATA.profile.title}`,
  description: PERSONAL_DATA.profile.shortSummary,
  keywords: [
    "React Native Developer",
    "Mobile Engineer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "Turbo Modules",
    "Kotlin",
    "Swift",
    "Gopal Bhagwat",
    "Indore",
  ],
  authors: [{ name: PERSONAL_DATA.profile.name, url: PERSONAL_DATA.profile.github }],
  openGraph: {
    title: `${PERSONAL_DATA.profile.name} | ${PERSONAL_DATA.profile.title}`,
    description: PERSONAL_DATA.profile.shortSummary,
    type: "website",
    locale: "en_US",
    siteName: `${PERSONAL_DATA.profile.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_DATA.profile.name} | ${PERSONAL_DATA.profile.title}`,
    description: PERSONAL_DATA.profile.shortSummary,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased selection:bg-accent selection:text-ink">
        {children}
      </body>
    </html>
  );
}
