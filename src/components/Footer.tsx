import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground mt-16 animate-fade-in">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              Siddhi Jambu Parivar
            </h3>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              A memorial dedicated to the life and teachings of Jambuvijayji
              Maharaj Saheb (1923-2009), a revered Jain monk and scholar who
              dedicated his life to spiritual wisdom and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/about"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  About Maharaj Saheb
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Photo Gallery
                </a>
              </li>
              <li>
                <a
                  href="/books"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Books & Publications
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="text-accent-foreground/80 hover:text-accent-foreground transition-colors"
                >
                  Events & Commemorations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-accent-foreground/80">
                  info@siddhijambuparivar.org
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-accent-foreground/80">
                  +91 XXX XXX XXXX
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm text-accent-foreground/60">
          <p>
            © {new Date().getFullYear()} Siddhi Jambu Parivar. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
