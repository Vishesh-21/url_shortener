import { useNavigate } from "react-router";
import { Home } from "lucide-react";

const HomeIconButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <button
      onClick={handleClick}
      className="p-3 rounded-full cursor-pointer transition absolute bottom-10 right-10 icon-gradient"
      aria-label="Go to home"
    >
      <Home className="w-5 h-5" />
    </button>
  );
};

export default HomeIconButton;
