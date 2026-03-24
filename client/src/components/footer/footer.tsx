import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { RiGlobalFill } from "react-icons/ri";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface SocialLink {
  name: string;
  icon: React.ElementType;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: FaGithubAlt,
    href: "https://github.com/Vishesh-21",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://linkedin.com/in/visheshvermaa",
  },
  {
    name: "Portfolio",
    icon: RiGlobalFill,
    href: "https://visheshverma.vercel.app",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-14 ">
      {/* Decorative divider to match the UI style */}
      <div className="max-w-2xl mx-auto h-px bg-white/10 mb-8" />

      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side: Copyright & Brand */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-muted-foreground text-sm font-medium">
            © {currentYear} Shorten. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
              Systems Operational
            </span>
          </div>
        </div>

        {/* Right side: Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link : SocialLink ) => (
            <FooterIcon key={link.name} {...link}/>
          ))}
        </div>
      </div>
    </footer>
  );
};

// Sub-component for clean, reusable icons
const FooterIcon = ({
  name,
  icon,
  href,
}: SocialLink) => (
  <Tooltip>
    <TooltipTrigger>
      <a
        href={href}
        target="_blank"
        className="p-2 rounded-xl text-muted-foreground hover:text-foreground  transition-all duration-200"
      >
        {React.createElement(icon, { className: "h-5 w-5" })}
      </a>
    </TooltipTrigger>
    <TooltipContent>{name}</TooltipContent>
  </Tooltip>
);

export default Footer;
