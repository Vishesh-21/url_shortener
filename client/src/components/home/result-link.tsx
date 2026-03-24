import { Copy } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";

interface LinkResultProps {
  url: string;
}

export const LinkResult = ({ url }: LinkResultProps) => (
  <Card className="bg-white/10 border-white/20 p-8 rounded-[2rem] backdrop-blur-sm">
    <p className="text-xs font-bold uppercase tracking-widest text-blue-100 mb-4 opacity-70">
      Ready to Share
    </p>
    <div className="flex items-center justify-between bg-white/20 p-5 rounded-2xl">
      <span className="text-2xl font-bold truncate mr-4">{url}</span>
      <Button variant="ghost" size="icon" className="shrink-0 hover:bg-white/20 text-white rounded-xl">
        <Copy className="h-6 w-6" />
      </Button>
    </div>
  </Card>
);