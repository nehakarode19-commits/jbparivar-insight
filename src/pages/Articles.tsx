import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FileText, Heart, Pen } from "lucide-react";

const Articles = () => {
  const tributeCategories = [
    {
      id: 1,
      icon: Heart,
      title: "Personal Tributes",
      description:
        "Heartfelt personal accounts from devotees whose lives were touched by Maharaj Saheb's teachings. Stories of spiritual transformation, guidance received, and the lasting impact of his wisdom on their spiritual journey.",
    },
    {
      id: 2,
      icon: FileText,
      title: "Scholarly Articles",
      description:
        "Academic papers and research articles analyzing Maharaj Saheb's contributions to Jain literature, manuscript preservation, and his unique approach to making ancient texts accessible to modern scholars and seekers.",
    },
    {
      id: 3,
      icon: Pen,
      title: "Commemorative Essays",
      description:
        "Essays written in honor of Maharaj Saheb's legacy, exploring various aspects of his life - from his early years in Mandal, his initiation into monastic life, to his decades of dedicated scholarship and spiritual service.",
    },
  ];

  const sampleTributes = [
    {
      id: 1,
      title: "A Life Dedicated to Dharma",
      excerpt:
        "Jambuvijayji Maharaj Saheb's unwavering commitment to the principles of Jainism - non-violence, truth, and spiritual discipline - served as a beacon of light for countless seekers. His simple lifestyle and profound wisdom demonstrated that the highest spiritual attainment comes from living these principles authentically.",
      category: "Personal Reflection",
    },
    {
      id: 2,
      title: "The Scholar-Monk Tradition",
      excerpt:
        "In the grand tradition of Jain scholar-monks, Maharaj Saheb embodied the perfect balance of textual scholarship and lived spirituality. His work in preserving and editing ancient manuscripts was not merely academic - it was an act of devotion, ensuring that future generations would have access to the wisdom of the ages.",
      category: "Scholarly Analysis",
    },
    {
      id: 3,
      title: "Teachings on Manuscript Preservation",
      excerpt:
        "Maharaj Saheb's methodical approach to manuscript preservation set new standards in the field. His dedication to maintaining textual accuracy while making texts accessible to contemporary readers was remarkable. He understood that preserving knowledge is a sacred responsibility.",
      category: "Academic Tribute",
    },
    {
      id: 4,
      title: "Impact on Jain Studies",
      excerpt:
        "The influence of Jambuvijayji Maharaj Saheb on modern Jain studies cannot be overstated. His editions of classical texts have become standard references in universities worldwide. His work bridges the gap between traditional monastic scholarship and modern academic research.",
      category: "Legacy Assessment",
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
              Tribute & Articles
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Honoring the life, teachings, and legacy of Jambuvijayji Maharaj Saheb through heartfelt tributes and scholarly reflections
            </p>
          </div>

          {/* Tribute Categories */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20 animate-fade-in-up">
            {tributeCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card
                  key={category.id}
                  className="p-8 text-center hover:shadow-warm transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full spiritual-gradient flex items-center justify-center shadow-warm">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                    {category.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {category.description}
                  </p>
                </Card>
              );
            })}
          </div>

          {/* Sample Tributes */}
          <div className="max-w-4xl mx-auto space-y-6 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                Featured Reflections
              </h2>
              <p className="text-muted-foreground">
                Selected tributes and essays honoring Maharaj Saheb's legacy
              </p>
            </div>

            {sampleTributes.map((tribute, index) => (
              <Card
                key={tribute.id}
                className="p-6 md:p-8 hover:shadow-warm transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {tribute.category}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                  {tribute.title}
                </h3>
                <p className="text-foreground/80 leading-relaxed italic">
                  "{tribute.excerpt}"
                </p>
              </Card>
            ))}
          </div>

          {/* Core Teachings Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">
                Core Teachings & Philosophy
              </h2>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    Ahimsa (Non-Violence)
                  </h3>
                  <p>
                    Maharaj Saheb taught that ahimsa extends beyond physical non-violence to encompass thoughts, words, and actions. True non-violence means having compassion for all living beings and avoiding harm in every aspect of life.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    Anekantavada (Many-Sided Reality)
                  </h3>
                  <p>
                    He emphasized the Jain principle that reality is complex and multi-faceted. Understanding this leads to intellectual humility and respect for different viewpoints, essential for both scholarly work and spiritual growth.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    Aparigraha (Non-Possession)
                  </h3>
                  <p>
                    His life exemplified complete detachment from material possessions. He taught that true freedom comes from letting go of attachments and living with the bare minimum necessary for spiritual practice and service.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-foreground">
                    Knowledge as Service
                  </h3>
                  <p>
                    Maharaj Saheb believed that preserving and sharing knowledge is a form of spiritual service. His work on manuscripts was not just scholarship but a sacred duty to future generations of seekers.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Submit Article CTA */}
          <div className="text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 max-w-2xl">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Share Your Tribute
              </h3>
              <p className="text-foreground/80 mb-6">
                If you would like to contribute an article, essay, or personal
                reflection about Maharaj Saheb's influence on your spiritual journey or academic work, we welcome your submissions.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 spiritual-gradient text-white font-semibold rounded-lg shadow-warm hover:scale-105 transition-transform"
              >
                Submit Your Tribute
              </a>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
