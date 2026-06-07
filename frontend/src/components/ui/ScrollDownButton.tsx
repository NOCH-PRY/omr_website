import { ChevronDown } from "lucide-react";
import { Button } from "./button";

type ScrollDownButtonProps = {
  targetId?: string;
};

export default function ScrollDownButton({
  targetId = "signature-section",
}: ScrollDownButtonProps) {
  const handleScroll = () => {
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={handleScroll}
      aria-label="Scroll down"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full text-[#FAD795] hover:bg-white/10 hover:text-[#FAD795]"
    >
      <ChevronDown className="h-7 w-7" />
    </Button>
  );
}