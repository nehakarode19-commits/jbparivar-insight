import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  // Placeholder for gallery images
  const galleryImages = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Memory ${i + 1}`,
    description: "A precious moment from Maharaj Saheb's life",
  }));

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Photo Gallery
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precious moments and memories from the life of Jambuvijayji Maharaj Saheb
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-warm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square bg-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-500"></div>
                  <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                    📸
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {image.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Note */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-6 bg-muted/50">
              <p className="text-foreground/70 italic">
                Gallery images will be added from the family archives. Please contact us to contribute photographs.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
