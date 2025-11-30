import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 animate-fade-in">
            <img src={logo} alt="Moris Enterprises" className="h-14 w-14" />
            <span className="text-xl font-display font-bold text-foreground">
              Moris Enterprises
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary-dark text-primary-foreground"
            >
              Request Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-primary hover:bg-primary-dark text-primary-foreground w-full"
              >
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
