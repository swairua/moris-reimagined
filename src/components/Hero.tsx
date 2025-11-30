import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-lab.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Laboratory equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl animate-slide-up">
          <div className="inline-block bg-primary/20 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-6">
            <p className="text-primary-foreground text-sm font-medium">
              Trusted Since 2010
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Quality Laboratory Solutions for Your Business
          </h1>
          
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Leading supplier of laboratory chemicals, medical instruments, and biotechnology equipment in Kenya. 
            Quality products and services that put you first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 text-lg px-8 py-6"
            >
              Explore Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-8 text-primary-foreground/90">
            <div>
              <p className="text-sm font-medium mb-1">Business Hours</p>
              <p className="text-lg font-semibold">Mon-Sat, 8AM to 10PM</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-1">Call Us Now</p>
              <p className="text-lg font-semibold">+254 733 137 332</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};
