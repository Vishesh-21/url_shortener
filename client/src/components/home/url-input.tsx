// components/home/url-input.tsx

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, Sparkles } from "lucide-react";

interface UrlInputProps {
  url: string;
  setUrl: (val: string) => void;
  onShorten: () => void;
  loading: boolean;
  error: string;
}

// Placeholder URL
const placeHolder = "https://example.com/very-long-path...";

export const UrlInput = ({
  url,
  setUrl,
  onShorten,
  loading,
  error,
}: UrlInputProps) => {
  return (
    <div className="relative group">
      <Input
        type="text"
        placeholder={placeHolder}
        className="h-16 pl-6 pr-32 bg-white/20 border-white/30 rounded-none text-white placeholder:text-blue-100 text-lg"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        onClick={onShorten}
        variant={'ghost'}
        className="absolute right-2 top-2 h-12 px-4 rounded-none font-bold cursor-pointer"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <Sparkles className="h-4 w-4" />
        )}
      </Button>

      {error && <p className="text-red-500 mt-2 text-sm ml-2">(*{error})</p>}
    </div>
  );
};
