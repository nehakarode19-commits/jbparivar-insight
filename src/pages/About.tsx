import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              About Jambuvijayji Maharaj Saheb
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              आगमप्रज्ञ पू. मुनिराज श्री जम्बू विजयजी महाराज साहेब
            </p>
          </div>

          {/* Biography Section */}
          <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <Card className="p-8 md:p-12 shadow-soft">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                Early Life
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                <p>
                  Jambuvijayji Maharaj Saheb (1923–2009), also known as Muni
                  Jambuvijayji Maharajsaheb, was a monk belonging to the Tapa
                  Gaccha order of Shwetambar sect of Jainism.
                </p>
                <p>
                  He was born as Chunilal Bhogilal Joitram in 1923 in the town
                  of Mandal, Gujarat. His father's name was Bhogilal Mohanlal
                  Joitram (1895–1959) and his mother's name was Aniben Popatlal
                  (1894–1995). He was born into a deeply religious family that
                  valued spiritual practice and learning.
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-12 shadow-soft">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                Spiritual Journey
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                <p>
                  From a young age, Chunilal showed exceptional devotion to
                  spiritual pursuits and deep interest in Jain scriptures. His
                  dedication to the path of non-violence, truth, and spiritual
                  enlightenment led him to embrace monastic life.
                </p>
                <p>
                  After taking diksha (initiation), he became known as
                  Jambuvijayji Maharaj Saheb, dedicating his entire life to the
                  study, preservation, and propagation of Jain philosophy and
                  ancient texts.
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-12 shadow-soft">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                Scholarly Contributions
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                <p>
                  Maharaj Saheb was renowned as a scholar and researcher of
                  ancient Jain manuscripts. He dedicated decades to studying,
                  editing, and publishing rare Jain texts, making invaluable
                  contributions to preserving the rich heritage of Jain
                  literature.
                </p>
                <p>
                  His work helped bridge the gap between ancient wisdom and
                  modern understanding, making these profound teachings
                  accessible to contemporary seekers.
                </p>
              </div>
            </Card>

            <Card className="p-8 md:p-12 shadow-soft">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                Legacy
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
                <p>
                  Jambuvijayji Maharaj Saheb left his mortal body in 2009, but
                  his teachings, writings, and spiritual influence continue to
                  inspire thousands of devotees and scholars worldwide.
                </p>
                <p>
                  His life exemplified the highest ideals of Jain monasticism:
                  complete non-violence, truth, non-possession, and unwavering
                  dedication to spiritual progress. The Siddhi Jambu Parivar was
                  established to honor his memory and continue his mission of
                  spreading spiritual wisdom.
                </p>
              </div>
            </Card>

            {/* Timeline */}
            <Card className="p-8 md:p-12 shadow-soft bg-muted/50">
              <h2 className="text-3xl font-serif font-bold mb-8 text-primary text-center">
                Life Timeline
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-2xl font-bold text-primary">1923</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Birth</h3>
                    <p className="text-foreground/80">
                      Born as Chunilal Bhogilal Joitram in Mandal, Gujarat
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-2xl font-bold text-primary">194X</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Diksha</h3>
                    <p className="text-foreground/80">
                      Took initiation into monastic life as a Jain monk
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-2xl font-bold text-primary">1950-2000</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">
                      Scholarly Works
                    </h3>
                    <p className="text-foreground/80">
                      Decades of research, editing ancient manuscripts, and
                      teaching
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-24 flex-shrink-0 text-right">
                    <span className="text-2xl font-bold text-primary">2009</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">Samadhi</h3>
                    <p className="text-foreground/80">
                      Left his mortal body, leaving behind a legacy of wisdom
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
