import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface Props {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AuthInput = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}: Props) => {
  return (
    <div className="grid gap-2">
      <Label
        htmlFor={id}
        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground ml-1"
      >
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-12 bg-transparent border-zinc-800 focus-visible:ring-primary/20 rounded-none"
      />
    </div>
  );
};

export default AuthInput;
