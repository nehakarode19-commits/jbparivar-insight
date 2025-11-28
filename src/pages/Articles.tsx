import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";
import { tributesData, documentsData } from "@/data/tributesData";

const Articles = () => {
  const tributes = tributesData.filter((item) => item.type === "tribute");
  const articles = tributesData.filter((item) => item.type === "article");

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Tribute & Article
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full"></div>
          </div>

          {/* Tributes and Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 animate-fade-in-up">
            {/* Tributes Column */}
            <div className="space-y-4">
              {tributes.map((tribute, index) => (
                <a
                  key={tribute.id}
                  href={tribute.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <FileText className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {tribute.title}
                  </span>
                </a>
              ))}
            </div>

            {/* Articles Column */}
            <div className="space-y-4">
              {articles.map((article, index) => (
                <a
                  key={article.id}
                  href={article.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <FileText className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Documents Section */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary text-center mb-12">
              Documents
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documentsData.map((doc, index) => (
                <a
                  key={doc.id}
                  href={doc.downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <FileText className="w-6 h-6 text-red-600 flex-shrink-0" />
                  <span className="text-foreground group-hover:text-primary transition-colors">
                    {doc.title}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Articles;
