import { Link } from "react-router";
import { ArrowLeft, Home } from "lucide-react";

export const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-background px-6 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/3 h-100 w-100 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl opacity-40" />
      </div>

      <div className="flex flex-col items-center text-center max-w-md w-full">
        
        {/* 404 Number */}
        <h1 className="text-8xl font-extrabold tracking-tight bg-linear-to-b from-foreground to-muted-foreground bg-clip-text text-transparent">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold text-foreground">
          Page not found
        </h2>

        {/* Description */}
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.  
          Let’s get you back on track.
        </p>

       <div className="mt-8 flex items-center gap-6">
          
          {/* Go Home */}
          <Link
            to="/"
            className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-white/5 hover:bg-white/10 transition-all"
          >
            <Home className="h-5 w-5 text-foreground" />
            
            {/* Tooltip */}
            <span className="absolute -bottom-8 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition">
              Home
            </span>
          </Link>

          {/* Go Back */}
          <button
            onClick={() => window.history.back()}
            className="group relative flex items-center justify-center h-12 w-12 rounded-full bg-white/5 hover:bg-white/10 transition-all"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />

            {/* Tooltip */}
            <span className="absolute -bottom-8 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition">
              Back
            </span>
          </button>
        </div>


        {/* Subtle Footer Hint */}
        <p className="mt-8 text-xs text-muted-foreground/70">
          Error code: 404 • Resource not found
        </p>
      </div>
    </div>
  );
};
