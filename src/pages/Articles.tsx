import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "The Path of Non-Violence in Modern Times",
      author: "Various Contributors",
      date: "2023",
      excerpt:
        "Exploring how Maharaj Saheb's teachings on ahimsa (non-violence) remain relevant in contemporary society and can guide us toward peaceful coexistence.",
    },
    {
      id: 2,
      title: "Preserving Ancient Wisdom: A Scholar's Journey",
      author: "Academic Tribute",
      date: "2022",
      excerpt:
        "An in-depth look at Maharaj Saheb's methodical approach to manuscript preservation and his contributions to keeping Jain literature alive.",
    },
    {
      id: 3,
      title: "Teachings on Spiritual Discipline",
      author: "Devotee Reflections",
      date: "2021",
      excerpt:
        "Personal accounts and reflections on Maharaj Saheb's guidance regarding meditation, self-control, and the pursuit of spiritual liberation.",
    },
    {
      id: 4,
      title: "The Legacy of Tapa Gaccha Tradition",
      author: "Historical Study",
      date: "2020",
      excerpt:
        "Understanding Maharaj Saheb's place within the Tapa Gaccha order and his contributions to upholding its traditions and values.",
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
              Essays, tributes, and reflections on the life and teachings of Maharaj Saheb
            </p>
          </div>

          {/* Articles List */}
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            {articles.map((article, index) => (
              <Card
                key={article.id}
                className="p-6 md:p-8 hover:shadow-warm transition-all duration-300 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                      {article.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Submit Article CTA */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 max-w-2xl">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Share Your Tribute
              </h3>
              <p className="text-foreground/80 mb-6">
                If you would like to contribute an article, essay, or personal
                reflection about Maharaj Saheb's influence on your life, we
                welcome your submissions.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 spiritual-gradient text-white font-semibold rounded-lg shadow-warm hover:scale-105 transition-transform"
              >
                Submit Your Article
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
