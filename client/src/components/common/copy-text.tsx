import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface CopyButtonProps {
  value: string;
  className?: string;
}

// copy button to show alert
export const CopyButton = ({ value, className }: CopyButtonProps) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success("Copied to clipboard!");
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleCopy}
      className={`shrink-0 hover:bg-white/40  text-white rounded-none cursor-pointer ${className}`}
    >
      <Copy className="h-5 w-5" />
    </Button>
  );
};
