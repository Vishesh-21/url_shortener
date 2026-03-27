import { CopyButton } from "../common/copy-text";

export const RecentLinks = () => {
  const history = [
    {
      short: "shrt.ly/m2b4v",
      original: "https://figma.com/file/xY9Z.../Design-System-V2",
    },
    {
      short: "shrt.ly/p9q1m",
      original: "https://github.com/facebook/react/issues/2456",
    },
    {
      short: "shrt.ly/w5r7c",
      original: "https://dribbble.com/shots/1234567-Dashboard-UI-Kit",
    },
  ];

  return (
    <div className="space-y-3">
      {history.map((link, idx) => (
        <div
          key={idx}
          className="group flex items-center justify-between p-5 rounded-3xl border border-white/20 bg-transparent hover:bg-white/5 transition-colors"
        >
          <div className="space-y-1 overflow-hidden">
            <h4 className="font-bold text-lg">{link.short}</h4>
            <p className="text-sm text-blue-100/60 truncate max-w-xs md:max-w-md">
              {link.original}
            </p>
          </div>
          <CopyButton value={link.short} />
        </div>
      ))}
    </div>
  );
};
