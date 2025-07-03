import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Headers from "../components/ui/header";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
export const metadata = {
  title: "Welth",
  description: "one stop solution for all your financial needs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider> 
    <html lang="en">
      <body
        className={'${inter.className} '}
      >
        {/*header*/}
        <Headers/>
        <main className ="min-h-screen">{children}</main>
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Welth</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div>
          <p>&copy; 2023 Welth. All rights reserved.</p>
         
         </div>
        </footer>
        </header>
        {/*main content*/}
        </body>
    </html>
    </ClerkProvider>
  );
}
