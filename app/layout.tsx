import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AyurWings - India's First EdTech Platform Dedicated to Ayurveda",
  description: "Empowering ancient wisdom through modern education. Join thousands of students and practitioners in their journey to master the science of Ayurveda.",
  keywords: "Ayurveda, EdTech, Online Learning, Courses, Education, Ancient Medicine, Natural Healing",
  authors: [{ name: "AyurWings Team" }],
  openGraph: {
    title: "AyurWings - India's First EdTech Platform Dedicated to Ayurveda",
    description: "Empowering ancient wisdom through modern education",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AyurWings - India's First EdTech Platform Dedicated to Ayurveda",
    description: "Empowering ancient wisdom through modern education",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
