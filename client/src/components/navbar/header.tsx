
import { ArrowRight } from 'lucide-react';
import { 
  Avatar, 
  AvatarFallback, 
  AvatarImage 
} from "../ui/avatar";
import { Button } from '../ui/button';
interface NavbarProps {
  userImage?: string;
}


const Navbar = ({ userImage }: NavbarProps) => {
  return (
    <nav className="flex items-center justify-between py-2 ">
      {/* User Profile / Avatar */}
      <div className="relative group cursor-pointer">
        <Avatar className="h-12 w-12 border-2 border-white/20 transition-transform hover:scale-105">
          <AvatarImage src={userImage} alt="User Profile" />
          {/* Fallback initials if image fails to load */}
          <AvatarFallback className="bg-white/20 text-white">JD</AvatarFallback>
        </Avatar>
      </div>

      {/* Action Button (The arrow icon from your design) */}
      <Button 
        variant="ghost" 
        size="icon" 
        className="text-white hover:bg-white/10 rounded-full transition-all"
      >
        <ArrowRight className="h-6 w-6 stroke-[2.5px]" />
      </Button>
    </nav>
  );
};

export default Navbar;