import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const Books = () => {
  const books = [
    {
      id: 1,
      title: "Ancient Jain Manuscripts Collection",
      category: "Edited Works",
      description:
        "A comprehensive collection of rare and ancient Jain texts carefully edited and preserved by Maharaj Saheb.",
    },
    {
      id: 2,
      title: "Commentaries on Agamic Literature",
      category: "Scholarly Works",
      description:
        "Detailed commentaries and interpretations of classical Jain Agamic texts, making them accessible to modern readers.",
    },
    {
      id: 3,
      title: "Philosophical Discourses",
      category: "Teachings",
      description:
        "Collection of spiritual discourses and philosophical insights on Jain principles and practices.",
    },
    {
      id: 4,
      title: "Research Papers and Articles",
      category: "Academic",
      description:
        "Scholarly articles on various aspects of Jainism, history, and manuscript preservation.",
    },
    {
      id: 5,
      title: "Translation Works",
      category: "Translations",
      description:
        "Translations of important Jain texts from Prakrit and Sanskrit to make them accessible to wider audiences.",
    },
    {
      id: 6,
      title: "Biographical Studies",
      category: "Historical",
      description:
        "Studies on the lives of great Jain acharyas and their contributions to Jain philosophy.",
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
              Books & Publications
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Literary contributions and scholarly works by Jambuvijayji Maharaj Saheb
            </p>
          </div>

          {/* Books Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in-up">
            {books.map((book, index) => (
              <Card
                key={book.id}
                className="p-6 hover:shadow-warm transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 rounded-lg spiritual-gradient flex items-center justify-center flex-shrink-0 shadow-warm group-hover:scale-110 transition-transform">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                        {book.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-serif font-bold mb-3 text-foreground">
                      {book.title}
                    </h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {book.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-muted/50">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">
                About the Publications
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Jambuvijayji Maharaj Saheb dedicated his life to the
                  preservation and dissemination of Jain knowledge. His
                  scholarly works span decades of research and are considered
                  invaluable resources for students and researchers of Jain
                  philosophy.
                </p>
                <p>
                  His meticulous work in editing ancient manuscripts has helped
                  preserve rare texts that might otherwise have been lost to
                  time. Many of his publications continue to be reference works
                  in academic institutions worldwide.
                </p>
              </div>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <p className="text-foreground/80 mb-4">
                For information about obtaining these publications:
              </p>
              <a
                href="/contact"
                className="inline-block px-6 py-2 spiritual-gradient text-white font-semibold rounded-lg shadow-warm hover:scale-105 transition-transform"
              >
                Contact Us
              </a>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Books;
