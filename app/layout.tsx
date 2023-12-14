import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn, SignedIn, SignedOut } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rental Car site",
  description: "Rent a car on your next Trip in the City of Light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <Navbar />
            {children}
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </body>
      </html>
    </ClerkProvider>
  );
}
