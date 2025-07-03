import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { layoutDashboard } from "lucide-react"; 

const Header = () => {
  return (
    <div className='fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md z-50 border-b shadow-md p-4 flex justify-between items-center'>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="welth logo" 
            height={60} 
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div>
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline" className="border px-4 py-2 rounded hover:bg-gray-100">
                <span>Dashboard</span>
             </Button>
            </Link>
          </SignedIn>

        <SignedOut>
          <SignInButton forcedRedirectUrl="/dashboard">
            <Button variant="outline" className="border px-4 py-2 rounded hover:bg-gray-100">
              Login
          </Button>
          </SignInButton>
        </SignedOut>

        <SignedIn> 
          <UserButton />
        </SignedIn>
        </div>
      </nav>
    </div>
  );
};

export default Header;
