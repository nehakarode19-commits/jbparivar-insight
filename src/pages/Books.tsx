import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Grid3x3, List, Download } from "lucide-react";
import { booksData } from "@/data/booksData";

const Books = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const totalBooks = booksData.length;

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Books & Publications
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Literary contributions and scholarly works by Jambuvijayji Maharaj Saheb
            </p>
          </div>

          {/* View Controls */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 max-w-6xl mx-auto animate-fade-in">
            <div className="text-foreground/70">
              Showing <span className="font-semibold text-foreground">1-{totalBooks}</span> of{" "}
              <span className="font-semibold text-foreground">{totalBooks}</span> Books
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
                className={viewMode === "grid" ? "spiritual-gradient text-white" : ""}
              >
                <Grid3x3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
                className={viewMode === "list" ? "spiritual-gradient text-white" : ""}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Books Display */}
          <div className={`max-w-6xl mx-auto animate-fade-in-up mb-16 ${
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "space-y-6"
          }`}>
            {booksData.map((book, index) => (
              <Card
                key={book.id}
                className={`overflow-hidden hover:shadow-warm transition-all duration-300 group ${
                  viewMode === "list" ? "flex flex-col sm:flex-row" : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Link 
                  to={`/books/${book.id}`}
                  className={viewMode === "grid" ? "block" : "flex-shrink-0"}
                >
                  <div className={`overflow-hidden bg-muted ${
                    viewMode === "grid" 
                      ? "aspect-[3/4]" 
                      : "w-full sm:w-48 h-48 sm:h-full"
                  }`}>
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </Link>
                <div className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                  <div>
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {book.category}
                      </span>
                    </div>
                    <Link to={`/books/${book.id}`}>
                      <h3 className="text-xl font-serif font-bold mb-3 text-foreground hover:text-primary transition-colors">
                        {book.title}
                      </h3>
                    </Link>
                    {viewMode === "list" && book.author && (
                      <p className="text-sm text-muted-foreground mb-2">
                        Author: {book.author}
                      </p>
                    )}
                    <p className="text-foreground/70 leading-relaxed line-clamp-3">
                      {book.description}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button
                      asChild
                      className="flex-1 spiritual-gradient text-white hover:scale-105 transition-transform"
                    >
                      <Link to={`/books/${book.id}`}>
                        View Details
                      </Link>
                    </Button>
                    {book.downloadUrl && (
                      <Button
                        variant="outline"
                        size="icon"
                        asChild
                        title="Download PDF"
                      >
                        <a 
                          href={book.downloadUrl} 
                          download={`${book.title}.pdf`}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Download className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h2 className="text-2xl font-serif font-bold mb-4 text-primary">
                About the Publications
              </h2>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                Jambuvijayji Maharaj Saheb dedicated his life to the preservation and dissemination of ancient Jain and Sanskrit knowledge. 
                His scholarly works span decades of meticulous research and continue to serve as invaluable resources for students, 
                researchers, and spiritual seekers worldwide.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 spiritual-gradient text-white font-semibold rounded-lg shadow-warm hover:scale-105 transition-transform"
              >
                Contact Us for More Information
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
