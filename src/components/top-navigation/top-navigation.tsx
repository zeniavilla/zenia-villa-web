import { useState } from 'react';
import { NavLink } from 'react-router';
import { cn } from '@/lib/utils.ts';
import Logo from '@/components/logo/logo.tsx';
import { Menu, X } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/mode-toggle/mode-toggle.tsx';

const navLinks = [
  { title: 'Home', path: '/home' },
  { title: 'Resume', path: '/resume' },
  { title: 'Projects', path: '/projects' }
];

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="md:hidden px-4 py-6">
      <div className="flex items-center justify-between">
        <Logo className="text-foreground" width={32} height={32} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-muted rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="mt-6 flex flex-col gap-4">
          {navLinks.map(link => (
            <NavLink
              key={link.title}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({isActive}) => cn(
                "px-4 py-3 rounded-md transition-colors",
                isActive
                  ? "font-normal text-foreground dark:text-white bg-muted"
                  : "font-light text-muted-foreground dark:text-gray-400 hover:text-foreground hover:bg-muted/50"
              )}
            >
              {link.title}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

const DesktopNav = () => {
  return (
    <header className="hidden md:flex flex-row pt-12 pb-8 px-12 md:px-10 lg:px-12 w-full">
      <NavigationMenu className="w-full max-w-full">
        <Logo className="text-foreground" />
        <div className="ml-auto">
          <NavigationMenuList className="flex gap-8">
            {
              navLinks.map(link => (
                <NavigationMenuItem key={link.title}>
                  <NavLink to={link.path}>
                    {({isActive}) => (
                      <NavigationMenuLink className={cn(
                        "font-light text-muted-foreground dark:text-gray-400 hover:text-foreground",
                        isActive && "font-normal text-foreground dark:text-white"
                      )}>
                        {link.title}
                      </NavigationMenuLink>
                    )}
                  </NavLink>
                </NavigationMenuItem>
              ))
            }
            <ModeToggle />
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </header>
  );
};

const TopNavigation = () => {
  return (
    <>
      <MobileNav />
      <DesktopNav />
    </>
  );
}

export default TopNavigation;
