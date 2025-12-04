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
        <Logo className="text-gray-900" width={32} height={32} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 hover:bg-gray-100 rounded-md transition-colors"
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
                  ? "font-normal text-gray-900 bg-gray-100"
                  : "font-light text-gray-500 hover:text-gray-900 hover:bg-gray-50"
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
    <header className="hidden md:flex flex-row pt-12 pb-8 px-4 md:px-8 w-full">
      <NavigationMenu className="w-full max-w-full">
        <Logo className="text-gray-900" />
        <div className="ml-auto">
          <NavigationMenuList className="flex gap-8">
            {
              navLinks.map(link => (
                <NavigationMenuItem key={link.title}>
                  <NavLink to={link.path}>
                    {({isActive}) => (
                      <NavigationMenuLink className={cn(
                        "font-light text-gray-500 hover:text-gray-900",
                        isActive && "font-normal text-gray-900"
                      )}>
                        {link.title}
                      </NavigationMenuLink>
                    )}
                  </NavLink>
                </NavigationMenuItem>
              ))
            }
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
