import { useState } from "react";
import { NavLink } from "@/components/NavLink";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Events", path: "/events" },
    { name: "Books", path: "/books" },
    { name: "Articles", path: "/articles" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-full spiritual-gradient flex items-center justify-center text-white font-bold text-xl shadow-warm transition-transform group-hover:scale-105">
              ॐ
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-serif font-bold text-primary">
                Siddhi Jambu Parivar
              </h1>
              <p className="text-xs text-muted-foreground">
                In Memory of Jambuvijayji Maharaj Saheb
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="px-4 py-2 rounded-lg text-foreground font-medium transition-all duration-200 hover:bg-muted"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-foreground font-medium transition-all duration-200 hover:bg-muted"
                  activeClassName="bg-primary text-primary-foreground"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
