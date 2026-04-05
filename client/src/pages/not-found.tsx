import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "../components/ui/tooltip";

import { Link, useNavigate } from "react-router";
import { ArrowLeft, Home } from "lucide-react";
import { TooltipProvider } from "../components/ui/tooltip";

interface IconButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  onClick?: () => void;
  href?: string;
  asChild?: boolean;
  className?: string;
}

export const NotFoundPage = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl opacity-40" />
      </div>

      <div className="flex flex-col items-center text-center max-w-md w-full">
        <h1 className="text-8xl font-extrabold text-gradient">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-foreground text-gradient">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        <TooltipProvider>
          <div className="mt-8 flex items-center gap-6">
            {/* Home */}
            <Link to="/">
              <IconButton
                icon={<Home className="h-5 w-5 text-foreground" />}
                tooltip="Home"
              />
            </Link>

            {/* Back */}
            <IconButton
              icon={<ArrowLeft className="h-5 w-5 text-foreground" />}
              tooltip="Back"
              onClick={goBack}
            />
          </div>
        </TooltipProvider>

        <p className="mt-8 text-xs text-muted-foreground/70">
          Error code: 404 • Resource not found
        </p>
      </div>
    </div>
  );
};

export const IconButton = ({
  icon,
  tooltip,
  onClick,
  href,
  asChild = false,
  className = "",
}: IconButtonProps) => {
  const baseStyle =
    "flex items-center justify-center h-12 w-12 rounded-full icon-gradient";

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {href ? (
          <a href={href} className={`${baseStyle} ${className}`}>
            {icon}
          </a>
        ) : (
          <button
            onClick={onClick}
            className={`${baseStyle} cursor-pointer ${className}`}
          >
            {icon}
          </button>
        )}
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
};
