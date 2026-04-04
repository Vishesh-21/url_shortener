import { useState } from "react";
import { shortenUrlApi } from "../services/url.services";
import { toast } from "sonner";

export const useShortenURL = () => {
  const [url, setUrl] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("hello world");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleShorten = async () => {
    if (!url) {
      setError("Please enter a valid URL");
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const data = await shortenUrlApi(url);
      setShortenedUrl(data.shortLink);
      toast.success("URL shortened successfully!");
      setUrl("");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return { url, shortenedUrl, loading, error, handleShorten, setUrl };
};
