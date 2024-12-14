"use client"
import { Sun, Moon, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme-provider";

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-16 border-b">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-green-500" />
          <span className="text-xl font-bold">B-POS</span>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {theme === "light" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="font-medium">Syed Mahmud</div>
              <div className="text-sm text-muted-foreground">Admin</div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
