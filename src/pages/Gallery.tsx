import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";

const Gallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: photo1,
      title: "Contemplative Moment",
      description: "Jambuvijayji Maharaj Saheb sits contemplatively at a table, exuding tranquility and wisdom.",
    },
    {
      id: 2,
      src: photo2,
      title: "With Devotees",
      description: "Several monks dressed in white robes gathered around Pujya Bapu, creating a scene of reverence and contemplation.",
    },
    {
      id: 3,
      src: photo3,
      title: "Community Gathering",
      description: "A collective of individuals in white robes, showcasing a spirit of togetherness and shared identity.",
    },
    {
      id: 4,
      src: photo4,
      title: "Scholarly Work",
      description: "Jambuvijayji Maharaj Saheb in white robes at a table, collaboratively analyzing papers and manuscripts.",
    },
  ];

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up max-w-6xl mx-auto">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-warm"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.description}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Video Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">
                Video Gallery
              </h2>
              <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-serif font-bold mb-4">
                  Jambu Vijayji Maharaj Saheb ni 12 mi Tithi
                </h3>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=eANDEpHmPJc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Watch on YouTube →
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  By Purnarakshit Vijay
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-serif font-bold mb-4">
                  Jambu Vijayji Janm Shatabdi Mahotshav
                </h3>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=GQVx45r5Wag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                  >
                    Watch on YouTube →
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Birth Centenary Celebration - By Jambu Parivar
                </p>
              </Card>
            </div>
          </div>

          {/* Note */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-6 bg-muted/50">
              <p className="text-foreground/70 italic">
                More photographs and videos are being added regularly. Please visit our YouTube channel for more content.
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
