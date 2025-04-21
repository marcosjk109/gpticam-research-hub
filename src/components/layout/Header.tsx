
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Início", path: "/" },
    { name: "Pesquisadores", path: "/pesquisadores" },
    { name: "Bolsistas", path: "/bolsistas" },
    { name: "Projetos", path: "/projetos" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold">GPTICAM</Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-white hover:text-blue-200 transition-colors ${
                  location.pathname === item.path ? "font-bold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-white" 
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path}
                className={`text-white hover:text-blue-200 transition-colors ${
                  location.pathname === item.path ? "font-bold" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
