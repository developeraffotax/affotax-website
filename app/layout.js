import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

export const metadata = {
  title: "The Affotax Accountants",
  description: "The Affotax Accountants | Making Tax Affordable",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        
    </html>
  );
}
