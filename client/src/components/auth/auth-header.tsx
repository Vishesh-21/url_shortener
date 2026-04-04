import { Logo } from "../common/logo";

interface Props {
  title: string;
  subtitle?: string;
}

const AuthHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-center mb-8">
      {/* logo  */}
      <Logo />

      <h1 className="text-3xl font-bold tracking-tight text-gradient text-center">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-muted-foreground mt-2">{subtitle}</p>
      )}
    </div>
  );
};

export default AuthHeader;
