import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User } from "lucide-react";
import { blogsData } from "@/data/blogsData";

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-6">
              Blogs
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stories, reflections, and insights about Jambuvijayji Maharaj Saheb's life and legacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto animate-fade-in-up">
            {blogsData.map((blog, index) => (
              <Card
                key={blog.id}
                className="overflow-hidden hover:shadow-warm transition-all duration-300 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <Link to={`/blogs/${blog.id}`}>
                    <h3 className="text-2xl font-serif font-bold mb-3 text-foreground hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                  </Link>
                  <p className="text-foreground/70 leading-relaxed mb-4 flex-1 line-clamp-4">
                    {blog.excerpt}
                  </p>
                  <Button
                    asChild
                    className="w-full spiritual-gradient text-white hover:scale-105 transition-transform"
                  >
                    <Link to={`/blogs/${blog.id}`}>
                      Read More
                    </Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blogs;
