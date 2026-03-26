// components/home/url-input.tsx

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

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
        className="h-16 pl-6 pr-32 bg-white/20 border-white/30 text-white placeholder:text-blue-100 rounded-3xl text-lg"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button
        onClick={onShorten}
        className="absolute right-2 top-2 h-12 px-8 rounded-2xl font-bold cursor-pointer"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="mr-1 h-4 w-4 animate-spin" />
            Shortening...
          </>
        ) : (
          "Shorten"
        )}
      </Button>

      {error && <p className="text-red-500 mt-2 text-sm ml-2">(*{error})</p>}
    </div>
  );
};
