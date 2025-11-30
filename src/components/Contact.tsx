import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Request a Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Place your enquiry online! Our sales resource will get to you within 24 hours. We value our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Our Address</h3>
                  <p className="text-muted-foreground">
                    Juja road, Nairobi, Kenya
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground">info@morisentreprise.com</p>
                  <p className="text-muted-foreground">morisoneadmin@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground">+254 733 137 332</p>
                  <p className="text-muted-foreground">+254 741 404 094</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-primary text-primary-foreground">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-semibold mb-2">Business Hours</h3>
                  <p className="text-primary-foreground/90">Monday - Saturday</p>
                  <p className="text-primary-foreground/90 font-semibold">8AM to 10PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
