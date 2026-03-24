import React from "react";
import { cn } from "../lib/utils";
import { TooltipProvider } from "./ui/tooltip";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("min-h-screen  p-4 md:p-8 font-sans", className)}>
      <TooltipProvider>{children}</TooltipProvider>
    </div>
  );
};
