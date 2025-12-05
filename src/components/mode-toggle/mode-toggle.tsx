import { Moon, Sun } from "lucide-react";

import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <Toggle
      aria-label="Toggle dark/light mode"
      className="cursor-pointer group"
      pressed={isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'scale-0 -rotate-90' : 'scale-100 rotate-0'} group-hover:rotate-30 duration-300 ease-in-out`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${isDark ? 'scale-100 rotate-0' : 'scale-0 rotate-90'} group-hover:rotate-30 duration-300 ease-in-out`} />
    </Toggle>
  )
}
