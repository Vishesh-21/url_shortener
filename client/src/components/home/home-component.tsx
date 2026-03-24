import { useState } from 'react';


import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { LinkResult } from './result-link';
import { RecentLinks } from './recent-link';
import Navbar from '../navbar/header';
import Footer from '../footer/footer';

export default function HomePageComponent() {
  const [url, setUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('shrt.ly/k8x9p2');

  return (
    <>
      <div className="max-w-2xl mx-auto space-y-10">
        
        {/* Header/Navbar Section */}
        <Navbar userImage="/api/placeholder/40/40" />

        {/* Hero Section */}
        <header className="space-y-4">
          <span className="bg-white/20 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Shorten URLs
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Make links<br />manageable
          </h1>
          <p className="text-blue-100 text-lg opacity-90">
            Paste your long URL below to create a clean, shareable link.
          </p>
        </header>

        {/* Input Section */}
        <div className="relative group">
          <Input 
            type="text" 
            placeholder="https://example.com/very-long-path..." 
            className="h-16 pl-6 pr-32 bg-white/20 border-white/30 text-white placeholder:text-blue-100 rounded-3xl focus-visible:ring-offset-0 focus-visible:ring-white/50 text-lg"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button variant={'default'} className="absolute cursor-pointer right-2 top-2 h-12 px-8 rounded-2xl font-bold transition-all">
            Shorten
          </Button>
        </div>

        {/* Result Section (Conditional) */}
        {shortenedUrl && <LinkResult url={shortenedUrl} />}

        {/* Recent Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold px-2">Recent Links</h3>
          <RecentLinks />
        </div>
        
        <Footer/>
      </div>
    </>
  );
}
