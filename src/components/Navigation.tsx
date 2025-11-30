import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown, HeartPulse, Microscope, Beaker, FlaskConical, Droplet, TestTube, Shield, Waves, Pipette, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    }, 100);
  };

  const productCategories = [
    { name: "Medical Equipment", path: "/products/medical-equipment", icon: HeartPulse },
    { name: "Microbiology and Biotechnology", path: "/products/microbiology-biotechnology", icon: Microscope },
    { name: "Glassware", path: "/products/glassware", icon: Beaker },
    { name: "Laboratory Chemicals and Reagents", path: "/products/laboratory-chemicals", icon: FlaskConical },
    { name: "Water Analysis Instruments and Water Treatment", path: "/products/water-analysis", icon: Droplet },
    { name: "Laboratory and Material Testing", path: "/products/laboratory-testing", icon: TestTube },
    { name: "Safety Products", path: "/products/safety-products", icon: Shield },
    { name: "Waste Water, Pool and Spa Filtration", path: "/products/waste-water-filtration", icon: Waves },
    { name: "Palintest Kits", path: "/products/palintest-kits", icon: Pipette },
    { name: "Lab Equipment", path: "/products/lab-equipment", icon: Settings },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 backdrop-blur-md shadow-lg" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 animate-fade-in cursor-pointer"
          >
            <img
              src={logo}
              alt="Moris Enterprises - Laboratory Chemicals & Medical Equipment Supplier"
              className="h-24 w-24"
              loading="eager"
              decoding="async"
            />
            <span className="text-2xl font-display font-bold text-foreground">
              Moris Enterprises
            </span>
          </button>

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
              onClick={() => navigate("/gallery")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Gallery
            </button>

            {/* Products Dropdown */}
            <div
              onMouseEnter={() => setIsProductsDropdownOpen(true)}
              onMouseLeave={() => setIsProductsDropdownOpen(false)}
            >
              <DropdownMenu open={isProductsDropdownOpen} onOpenChange={setIsProductsDropdownOpen}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium focus:outline-none">
                  Biomedical Products
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isProductsDropdownOpen ? 'rotate-180' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-screen max-w-2xl bg-background border-border z-[100] p-6">
                  <div className="grid grid-cols-3 gap-4">
                    {productCategories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.path}
                          onClick={() => {
                            navigate(category.path);
                            setIsProductsDropdownOpen(false);
                          }}
                          className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-accent transition-all duration-200 group cursor-pointer text-center"
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {category.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <button
              onClick={() => navigate("/products/automobile-supplies")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Automobile Supplies
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
                onClick={() => {
                  navigate("/gallery");
                  setIsMobileMenuOpen(false);
                }}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Gallery
              </button>

              {/* Mobile Products Menu */}
              <div className="border-t border-border pt-2">
                <p className="text-sm font-semibold text-muted-foreground mb-3">Biomedical Products</p>
                <div className="grid grid-cols-2 gap-2">
                  {productCategories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.path}
                        onClick={() => {
                          navigate(category.path);
                          setIsMobileMenuOpen(false);
                        }}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-accent transition-colors"
                      >
                        <IconComponent className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground hover:text-primary transition-colors line-clamp-2">
                          {category.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={() => navigate("/products/automobile-supplies")}
                className="text-foreground hover:text-primary transition-colors font-medium text-left"
              >
                Automobile Supplies
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
