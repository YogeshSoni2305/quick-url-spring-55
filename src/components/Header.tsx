
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("w-full py-6 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <div className="h-8 w-8 rounded-md bg-primary/90 flex items-center justify-center">
            <span className="text-white font-medium text-sm">QS</span>
          </div>
          <h1 className="text-xl font-medium tracking-tight ml-1">QuickShorten</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            About
          </a>
          <a href="#" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            API
          </a>
          <a 
            href="#" 
            className="text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 rounded-full transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}
