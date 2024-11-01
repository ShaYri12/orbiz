import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Orbiz",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <title>{metadata.title}</title>
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}