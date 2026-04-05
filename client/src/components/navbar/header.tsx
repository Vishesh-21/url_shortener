import { useState } from "react";
import { Logo } from "../common/logo";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Link } from "react-router";
import { LogIn, UserPlus, LogOut } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

/* -------------------- Types -------------------- */
type User = {
  name: string;
};

/* -------------------- Reusable Icon Link -------------------- */
const IconLink = ({
  to,
  title,
  children,
}: {
  to: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <TooltipProvider delayDuration={150}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            to={to}
            className="
              relative flex items-center justify-center
              h-10 w-10
              rounded-full
              text-white/80
              hover:text-white
              hover:bg-white/10
              border border-zinc-200/10
              hover:scale-105
              active:scale-95
              transition-all duration-200 ease-in-out
            "
          >
            {children}
          </Link>
        </TooltipTrigger>

        <TooltipContent>{title}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

/* -------------------- Auth Actions (Logged Out) -------------------- */
const AuthActions = () => (
  <div className="flex  gap-2 mt-2">
    <IconLink to="/sign-in" title="Login">
      <LogIn className="h-5 w-5 text-white" />
    </IconLink>

    <IconLink to="/sign-up" title="Signup">
      <UserPlus className="h-5 w-5 text-white" />
    </IconLink>
  </div>
);

/* -------------------- Auth Actions (logout In) -------------------- */
const LogoutButton = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={onLogout}
          className=" relative flex items-center justify-center
              h-10 w-10
              rounded-full
              text-white/80
              hover:text-white
              hover:bg-white/10
              border border-zinc-200/10
              hover:scale-105
              active:scale-95
              cursor-pointer
              transition-all duration-200 ease-in-out"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </TooltipTrigger>

      <TooltipContent>Logout</TooltipContent>
    </Tooltip>
  );
};

/* -------------------- User Menu (Logged In) -------------------- */
const UserMenu = ({ user, onLogout }: { user: User; onLogout: () => void }) => (
  <div className="flex items-center gap-2">
    <Avatar className="h-9 w-9 ">
      <AvatarFallback className="bg-zinc-800 text-white">
        {user.name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>

    <LogoutButton onLogout={onLogout} />
  </div>
);

/* -------------------- Main Navbar -------------------- */
const Navbar = () => {
  const [user, setUser] = useState<User | null>({ name: "Alice" });

  return (
    <nav className="flex items-start justify-between py-2">
      <Logo />

      <div className="flex items-center gap-4">
        {!user ? (
          <AuthActions />
        ) : (
          <UserMenu user={user} onLogout={() => setUser(null)} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
