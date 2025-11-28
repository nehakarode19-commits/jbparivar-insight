import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { booksData } from "@/data/booksData";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = booksData.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Book Not Found</h1>
          <Button onClick={() => navigate("/books")}>Back to Books</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/books")}
            className="mb-8 hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Books
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 animate-fade-in">
            {/* Book Image */}
            <div className="flex justify-center">
              <Card className="overflow-hidden shadow-soft max-w-md w-full">
                <div className="aspect-[3/4] bg-muted">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </div>

            {/* Book Details */}
            <div className="space-y-6 animate-fade-in-up">
              <div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                  {book.title}
                </h1>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {book.category}
                  </span>
                </div>
              </div>

              <Card className="p-6 bg-muted/30">
                <div className="space-y-3 text-foreground/80">
                  {book.author && (
                    <div>
                      <span className="font-semibold text-foreground">
                        Author:
                      </span>{" "}
                      {book.author}
                    </div>
                  )}
                  {book.publisher && (
                    <div>
                      <span className="font-semibold text-foreground">
                        Publisher:
                      </span>{" "}
                      {book.publisher}
                    </div>
                  )}
                  <div>
                    <span className="font-semibold text-foreground">
                      Category:
                    </span>{" "}
                    {book.category}
                  </div>
                  {book.productId && (
                    <div>
                      <span className="font-semibold text-foreground">
                        Product ID:
                      </span>{" "}
                      {book.productId}
                    </div>
                  )}
                </div>
              </Card>

              {book.downloadUrl && (
                <Button
                  className="w-full spiritual-gradient text-white font-semibold shadow-warm hover:scale-105 transition-transform"
                  size="lg"
                  asChild
                >
                  <a 
                    href={book.downloadUrl} 
                    download={`${book.title}.pdf`}
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </a>
                </Button>
              )}

              {/* Description */}
              {book.description && (
                <Card className="p-6">
                  <h2 className="text-2xl font-serif font-bold mb-4 text-primary">
                    Description
                  </h2>
                  <p className="text-foreground/80 leading-relaxed">
                    {book.description}
                  </p>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookDetail;
