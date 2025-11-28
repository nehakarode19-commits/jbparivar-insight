import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { blogsData } from "@/data/blogsData";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Blog Not Found</h1>
          <Button onClick={() => navigate("/blogs")}>Back to Blogs</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            onClick={() => navigate("/blogs")}
            className="mb-8 hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blogs
          </Button>

          <article className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                {blog.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>{blog.author}</span>
                </div>
              </div>
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>

            <Card className="p-8">
              <div className="prose prose-lg max-w-none">
                {blog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Card>

            <div className="mt-12 text-center">
              <Button
                onClick={() => navigate("/blogs")}
                size="lg"
                className="spiritual-gradient text-white hover:scale-105 transition-transform"
              >
                Read More Blogs
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
