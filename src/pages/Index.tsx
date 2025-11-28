import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, BookOpen, Calendar, Image as ImageIcon, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-4 leading-tight">
                  आगमप्रज्ञ पू. मुनिराज श्री जम्बू विजयजी महाराज साहेब
                </h1>
                <div className="w-24 h-1 spiritual-gradient rounded-full mb-6"></div>
                <p className="text-2xl md:text-3xl text-foreground/80 font-light">
                  Jambuvijayji Maharaj Saheb
                </p>
                <p className="text-xl text-muted-foreground mt-2">
                  1923 - 2009
                </p>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-xl">
                A revered Jain monk and scholar dedicated to preserving ancient
                wisdom and spreading the light of spiritual knowledge. His life
                exemplified the highest ideals of non-violence, truth, and
                devotion.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="spiritual-gradient text-white font-semibold shadow-warm hover:scale-105 transition-transform"
                >
                  <a href="/about">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-semibold border-2 hover:bg-primary hover:text-primary-foreground"
                >
                  <a href="/gallery">View Gallery</a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 spiritual-gradient opacity-20 rounded-3xl blur-3xl"></div>
              <img
                src={heroImage}
                alt="Jambuvijayji Maharaj Saheb in meditation"
                className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              About Maharaj Saheb
            </h2>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
          </div>
          <Card className="max-w-4xl mx-auto p-8 md:p-12 shadow-soft animate-fade-in-up">
            <p className="text-lg leading-relaxed text-foreground/80 mb-6">
              Jambuvijayji Maharaj Saheb (1923–2009) was a monk belonging to
              the Tapa Gaccha order of Shwetambar sect of Jainism. Born as
              Chunilal Bhogilal Joitram in Mandal, Gujarat, he dedicated his
              life to the study, preservation, and propagation of Jain
              philosophy and ancient texts.
            </p>
            <p className="text-lg leading-relaxed text-foreground/80 mb-8">
              His scholarly work and spiritual guidance touched countless lives,
              and his contributions to Jain literature and manuscript
              preservation remain invaluable to this day.
            </p>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="spiritual-gradient text-white font-semibold shadow-warm hover:scale-105 transition-transform"
              >
                <a href="/about">Read Full Biography</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 group cursor-pointer animate-fade-in">
                <a href="/gallery" className="block">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
                    <ImageIcon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                    Photo Gallery
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Precious moments from Maharaj Saheb's life
                  </p>
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 group cursor-pointer animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <a href="/books" className="block">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                    Books
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Literary works and publications
                  </p>
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 group cursor-pointer animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <a href="/events" className="block">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                    Events
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Commemorations and gatherings
                  </p>
                </a>
              </Card>

              <Card className="p-6 text-center hover:shadow-warm transition-all duration-300 group cursor-pointer animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <a href="/contact" className="block">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center shadow-warm group-hover:scale-110 transition-transform">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-2 text-primary">
                    Contact
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Get in touch with us
                  </p>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-12 md:p-16 text-center shadow-soft border-primary/20 animate-fade-in">
            <div className="text-6xl text-primary mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">
              The path of truth and non-violence leads to eternal peace and
              liberation
            </blockquote>
            <div className="text-6xl text-primary mb-6 rotate-180">"</div>
            <p className="text-muted-foreground">
              — Teachings of Jambuvijayji Maharaj Saheb
            </p>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
