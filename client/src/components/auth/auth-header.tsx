import { Link2 } from "lucide-react";
import { Link } from "react-router";

interface Props {
  title: string;
  subtitle?: string;
}

const AuthHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <Link
        to="/"
        className="flex items-center justify-center hover:scale-105 transition-all w-12 h-12 mb-4 rounded-full bg-primary/10 text-primary"
      >
        <Link2 className="w-6 h-6" />
      </Link>
      <h1 className="text-3xl font-bold tracking-tight text-foreground text-center">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
      )}
    </div>
  );
};

export default AuthHeader;
