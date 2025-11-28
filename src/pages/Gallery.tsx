import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo5 from "@/assets/gallery/photo-5.jpg";
import photo6 from "@/assets/gallery/photo-6.jpg";
import photo7 from "@/assets/gallery/photo-7.jpg";
import photo8 from "@/assets/gallery/photo-8.jpg";
import photo9 from "@/assets/gallery/photo-9.jpg";
import photo10 from "@/assets/gallery/photo-10.jpg";
import photo11 from "@/assets/gallery/photo-11.jpg";
import photo12 from "@/assets/gallery/photo-12.jpg";
import photo13 from "@/assets/gallery/photo-13.jpg";
import photo14 from "@/assets/gallery/photo-14.jpg";
import photo15 from "@/assets/gallery/photo-15.jpg";
import photo16 from "@/assets/gallery/photo-16.jpg";
import photo17 from "@/assets/gallery/photo-17.jpg";
import photo18 from "@/assets/gallery/photo-18.jpg";
import photo19 from "@/assets/gallery/photo-19.jpg";
import photo20 from "@/assets/gallery/photo-20.jpg";
import photo21 from "@/assets/gallery/photo-21.jpg";
import photo22 from "@/assets/gallery/photo-22.jpg";
import photo23 from "@/assets/gallery/photo-23.jpg";
import photo24 from "@/assets/gallery/photo-24.jpg";

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
      description: "Several monks dressed in white robes gathered around Pujya Bapu, creating a scene of reverence.",
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
      description: "Maharaj Saheb at a table, collaboratively analyzing papers and manuscripts.",
    },
    {
      id: 5,
      src: photo5,
      title: "Sacred Moment",
      description: "A precious moment from Maharaj Saheb's spiritual journey.",
    },
    {
      id: 6,
      src: photo6,
      title: "Teaching Session",
      description: "Maharaj Saheb sharing wisdom with his disciples.",
    },
    {
      id: 7,
      src: photo7,
      title: "Peaceful Meditation",
      description: "Captured in a moment of deep meditation and spiritual reflection.",
    },
    {
      id: 8,
      src: photo8,
      title: "Community Service",
      description: "Engaging with the community in spiritual discourse.",
    },
    {
      id: 9,
      src: photo9,
      title: "Blessed Gathering",
      description: "A gathering blessed by the presence of Maharaj Saheb.",
    },
    {
      id: 10,
      src: photo10,
      title: "Spiritual Discourse",
      description: "Delivering spiritual teachings to devoted followers.",
    },
    {
      id: 11,
      src: photo11,
      title: "Contemplation",
      description: "Deep in thought during a spiritual retreat.",
    },
    {
      id: 12,
      src: photo12,
      title: "Sacred Text Study",
      description: "Studying and preserving ancient sacred texts.",
    },
    {
      id: 13,
      src: photo13,
      title: "Blessing Ceremony",
      description: "Blessing devotees during a special ceremony.",
    },
    {
      id: 14,
      src: photo14,
      title: "Prayer Session",
      description: "Leading a prayer session with disciples.",
    },
    {
      id: 15,
      src: photo15,
      title: "Monastic Life",
      description: "Daily life as a Jain monk dedicated to spiritual pursuits.",
    },
    {
      id: 16,
      src: photo16,
      title: "Teaching Moment",
      description: "Sharing ancient wisdom with the next generation.",
    },
    {
      id: 17,
      src: photo17,
      title: "Spiritual Gathering",
      description: "Community gathered for spiritual enlightenment.",
    },
    {
      id: 18,
      src: photo18,
      title: "Manuscript Preservation",
      description: "Working on preserving precious ancient manuscripts.",
    },
    {
      id: 19,
      src: photo19,
      title: "Sacred Ritual",
      description: "Performing sacred Jain rituals and ceremonies.",
    },
    {
      id: 20,
      src: photo20,
      title: "Peaceful Moment",
      description: "A moment of peace and serenity in monastic life.",
    },
    {
      id: 21,
      src: photo21,
      title: "Scholarly Discussion",
      description: "Engaging in deep scholarly discussions on Jain philosophy.",
    },
    {
      id: 22,
      src: photo22,
      title: "Community Blessing",
      description: "Blessing the community during a special gathering.",
    },
    {
      id: 23,
      src: photo23,
      title: "Meditation Practice",
      description: "Demonstrating proper meditation techniques to disciples.",
    },
    {
      id: 24,
      src: photo24,
      title: "Wisdom Sharing",
      description: "Sharing timeless wisdom with devoted followers.",
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up max-w-7xl mx-auto mb-20">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                className="group overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-warm"
                style={{ animationDelay: `${index * 0.03}s` }}
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
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Video Gallery
              </h2>
              <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-muted-foreground">
                Watch videos and recordings from commemorative events and celebrations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 hover:shadow-warm transition-all">
                <h3 className="text-xl font-serif font-bold mb-4">
                  Jambu Vijayji Maharaj Saheb ni 12 mi Tithi
                </h3>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=eANDEpHmPJc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors font-semibold"
                  >
                    ▶ Watch on YouTube
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  12th Anniversary Memorial • By Purnarakshit Vijay
                </p>
              </Card>

              <Card className="p-6 hover:shadow-warm transition-all">
                <h3 className="text-xl font-serif font-bold mb-4">
                  Jambu Vijayji Janm Shatabdi Mahotshav
                </h3>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=GQVx45r5Wag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors font-semibold"
                  >
                    ▶ Watch on YouTube
                  </a>
                </div>
                <p className="text-sm text-muted-foreground">
                  Birth Centenary Celebration (100th Anniversary) • By Jambu Parivar
                </p>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Card className="inline-block p-6 bg-muted/50">
                <p className="text-foreground/70 mb-4">
                  For more videos and recordings, visit our YouTube channel
                </p>
                <a
                  href="https://www.youtube.com/@JambuParivar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 spiritual-gradient text-white font-semibold rounded-lg shadow-warm hover:scale-105 transition-transform"
                >
                  Visit YouTube Channel
                </a>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
