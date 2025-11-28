import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Contact Us
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with the Siddhi Jambu Parivar community
            </p>
          </div>

          {/* Google Map */}
          <div className="mb-12 animate-fade-in">
            <Card className="overflow-hidden shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9876543210123!2d72.5687!3d23.0225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAdani%20Shantigram%20Jain%20Temple!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Adani Shantigram Jain Temple Location"
              ></iframe>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 animate-fade-in-up">
            {/* Address */}
            <Card className="p-8 text-center shadow-soft hover:shadow-warm transition-shadow">
              <div className="w-16 h-16 rounded-full spiritual-gradient flex items-center justify-center mx-auto mb-4 shadow-warm">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Address</h3>
              <p className="text-muted-foreground">
                Adani Shantigram Jain Temple,<br />
                Ahmedabad
              </p>
            </Card>

            {/* Email */}
            <Card className="p-8 text-center shadow-soft hover:shadow-warm transition-shadow">
              <div className="w-16 h-16 rounded-full spiritual-gradient flex items-center justify-center mx-auto mb-4 shadow-warm">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Mail</h3>
              <a 
                href="mailto:Support@siddhijambuparivar.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Support@siddhijambuparivar.com
              </a>
            </Card>

            {/* Hours */}
            <Card className="p-8 text-center shadow-soft hover:shadow-warm transition-shadow">
              <div className="w-16 h-16 rounded-full spiritual-gradient flex items-center justify-center mx-auto mb-4 shadow-warm">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-primary">Hours</h3>
              <p className="text-muted-foreground">
                Monday - Saturday<br />
                9:00 AM - 6:00 PM
              </p>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto animate-fade-in-up">
            {/* Contact Form */}
            <Card className="p-8 shadow-soft">
              <h2 className="text-2xl font-serif font-bold mb-6 text-primary text-center">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    placeholder="What is this regarding?"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    required
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full spiritual-gradient text-white font-semibold shadow-warm hover:scale-105 transition-transform"
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
