import { Link } from "react-router";

interface Props {
  text: string;
  linkText: string;
  to: string;
}

const AuthFooter = ({ text, linkText, to }: Props) => {
  return (
    <p className="text-center text-sm text-muted-foreground">
      {text}{" "}
      <Link
        to={to}
        className="font-medium underline hover:text-primary transition-colors"
      >
        {linkText}
      </Link>
    </p>
  );
};

export default AuthFooter;
