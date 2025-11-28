import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import book1 from "@/assets/books/book-1.jpg";
import book2 from "@/assets/books/book-2.jpg";
import book3 from "@/assets/books/book-3.jpg";
import book4 from "@/assets/books/book-4.jpg";

const Books = () => {
  const books = [
    {
      id: 1,
      title: "Hemchandrashabdanushasanam",
      category: "Grammar",
      description:
        "Shri Siddhahemachandra Shabdanushasanam - A comprehensive treatise on Sanskrit grammar by Acharya Hemachandra, carefully edited and annotated by Maharaj Saheb.",
      image: book1,
    },
    {
      id: 2,
      title: "Siddhhemchandrashabdanushasanam",
      category: "Grammar",
      description:
        "Siddhahemachandra Shabdanushasanam - Another volume of the masterwork on Sanskrit grammar and linguistics, preserving ancient grammatical knowledge.",
      image: book2,
    },
    {
      id: 3,
      title: "Vaisheshika Sutram",
      category: "Philosophy",
      description:
        "The foundational text of Vaisheshika philosophy, one of the six orthodox schools of Hindu philosophy, with detailed commentary and analysis.",
      image: book3,
    },
    {
      id: 4,
      title: "Dashvaikalik Sutra Vrutti Ane Dinag",
      category: "Jain Scripture",
      description:
        "Dashvaikalik Sutra with commentary (Vritti) and Dinaga - An important Jain canonical text with scholarly commentary, edited and published by Maharaj Saheb.",
      image: book4,
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in-up mb-16">
            {books.map((book, index) => (
              <Card
                key={book.id}
                className="overflow-hidden hover:shadow-warm transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden bg-muted">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {book.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">
                    {book.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {book.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Publications Info */}
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 md:p-12 bg-muted/50">
              <h2 className="text-3xl font-serif font-bold mb-6 text-primary text-center">
                About the Publications
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p>
                  Jambuvijayji Maharaj Saheb dedicated his life to the
                  preservation and dissemination of ancient Jain and Sanskrit knowledge. His
                  scholarly works span decades of meticulous research and are considered
                  invaluable resources for students and researchers of Jain
                  philosophy, Sanskrit grammar, and Indian philosophical traditions.
                </p>
                <p>
                  His work in editing ancient manuscripts has helped
                  preserve rare texts that might otherwise have been lost to
                  time. Many of his publications continue to be reference works
                  in academic institutions worldwide, serving scholars and spiritual seekers alike.
                </p>
                <p>
                  The books published under his guidance maintain the highest standards of
                  textual accuracy and scholarly rigor, making ancient wisdom accessible
                  to contemporary readers while preserving the authenticity of the original texts.
                </p>
              </div>
            </Card>

            {/* Other Works Section */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                Additional Scholarly Contributions
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                  <span>Numerous research papers on Jain philosophy and ancient texts</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                  <span>Critical editions of rare manuscripts from various libraries</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                  <span>Commentaries on classical Jain Agamic literature</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-primary" />
                  <span>Translations making ancient texts accessible to modern readers</span>
                </li>
              </ul>
            </Card>
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <Card className="inline-block p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <p className="text-foreground/80 mb-4">
                For information about obtaining these publications or to explore the complete catalog:
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
