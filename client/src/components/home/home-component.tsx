import { useState } from "react";

import Navbar from "../navbar/header";
import Footer from "../footer/footer";
import { HeroSection } from "./hero-section";
import { UrlInput } from "./url-input";
import { LinkResult } from "./result-link";
import { RecentLinks } from "./recent-link";

export default function HomePageComponent() {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const handleShorten = () => {
    // later connect API
    setShortenedUrl("shrt.ly/demo123");
    setUrl("");
  };

  return (
    <div className="mx-auto space-y-10">
      <Navbar userImage="/api/placeholder/40/40" />

      <HeroSection />

      <UrlInput url={url} setUrl={setUrl} onShorten={handleShorten} />

      {shortenedUrl && <LinkResult url={shortenedUrl} />}

      <div className="space-y-4">
        <h3 className="text-xl font-bold px-2">Recent Links</h3>
        <RecentLinks />
      </div>

      <Footer />
    </div>
  );
}
