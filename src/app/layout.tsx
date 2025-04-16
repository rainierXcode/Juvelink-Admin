import type { Metadata } from "next";
import { Jost, Poppins, Geist  } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: 'variable',
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['100','300','400', '500' ,'600', '700']
})

const geist = Geist({
  variable: "--font-geist",
  subsets: ['latin'],
  weight: 'variable'
})

export const metadata: Metadata = {
  title: "Juvelink",
  description: "Juvelink Client",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${poppins.variable} ${geist.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
