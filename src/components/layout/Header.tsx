import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Início",
    href: "/",
  },
  {
    title: "Pesquisadores",
    href: "/pesquisadores",
  },
  {
    title: "Bolsistas",
    href: "/bolsistas",
  },
  {
    title: "Projetos",
    href: "/projetos",
  },
];

const externalLinks = [
  // Links externos UFRPE e PPGIA removidos conforme solicitado
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="relative z-50 w-full flex justify-center py-4">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="bg-primary rounded-full shadow-lg flex items-center h-16 px-6 backdrop-blur-sm bg-opacity-90 border border-primary/20">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/img/logo gpticam.png" 
              alt="GPTICAM Logo" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    <Link to={item.href}>
                      <NavigationMenuLink
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "bg-transparent text-white hover:bg-white/10 hover:text-white",
                          location.pathname === item.href && "bg-white/20"
                        )}
                      >
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden lg:flex lg:items-center space-x-2 ml-auto">
            {externalLinks.map((link) => (
              <Button
                key={link.title}
                variant={link.variant === "default" ? "default" : "link"}
                asChild
                className={link.variant === "default" ? "bg-secondary hover:bg-secondary/80 text-white rounded-full" : "text-white hover:text-blue-200"}
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="ml-auto lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="text-left flex items-center">
                    <img 
                      src="/img/logo gpticam.png" 
                      alt="GPTICAM Logo" 
                      className="h-8 w-auto mr-2" 
                    />
                    GPTICAM
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 py-4">
                  {/* Opções de navegação */}
                  <div className="flex flex-col space-y-2">
                    {menuItems.map((item) => (
                      <Button
                        key={item.title}
                        variant="ghost"
                        asChild
                        className={cn(
                          "justify-start",
                          location.pathname === item.href && "bg-accent"
                        )}
                      >
                        <Link to={item.href}>{item.title}</Link>
                      </Button>
                    ))}
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    {externalLinks.map((link) => (
                      <Button
                        key={link.title}
                        variant={link.variant === "default" ? "default" : "outline"}
                        asChild
                        className={link.variant === "default" ? "bg-secondary hover:bg-secondary/80 rounded-full" : ""}
                      >
                        <a href={link.url} target="_blank" rel="noopener noreferrer">
                          {link.title}
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
