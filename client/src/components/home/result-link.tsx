import { Card } from "../ui/card";
import { CopyButton } from "../common/copy-text";
import { Link } from "react-router";
import { LucideLink } from "lucide-react";

interface LinkResultProps {
  url: string;
}

export const LinkResult = ({ url }: LinkResultProps) => (
  <Card className="bg-white/10 border-white/20 p-6 rounded-none bg-red- backdrop-blur-sm">
    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground  opacity-70">
      Ready to Share
    </p>
    <div className="flex items-center justify-between bg-white/20 p-4 rounded-none">
      <span className="text-xl font-bold truncate mr-4">{url}</span>
      <CopyButton value={url} />
      <Link to={"#"}>
        <LucideLink />
      </Link>
    </div>
  </Card>
);
