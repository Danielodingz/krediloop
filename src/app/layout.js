import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "KrediLoop - Digitizing the future of Ajo",
  description: "Modernizing Africa's Savings and Credit System. Join the future of saving.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrumentSerif.variable} min-h-screen bg-white`}>
        {children}
      </body>
    </html>
  );
}
