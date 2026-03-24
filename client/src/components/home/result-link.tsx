import { Card } from "../ui/card";
import { CopyButton } from "../common/copy-text";

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
      <CopyButton value={url} />
    </div>
  </Card>
);