import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";

const Events = () => {
  const events = [
    {
      id: 1,
      title: "Birth Anniversary Celebration",
      date: "1923 - Commemorated Annually",
      location: "Mandal, Gujarat",
      description:
        "Annual celebration of Maharaj Saheb's birth with prayers, discourses, and community gathering.",
    },
    {
      id: 2,
      title: "Diksha Anniversary",
      date: "Commemorated Annually",
      location: "Various Locations",
      description:
        "Marking the day when Maharaj Saheb embraced monastic life and dedicated himself to spiritual pursuit.",
    },
    {
      id: 3,
      title: "Memorial Day",
      date: "2009 - Observed Annually",
      location: "Multiple Locations",
      description:
        "Honoring the memory of Maharaj Saheb with special prayers and reflection on his teachings.",
    },
    {
      id: 4,
      title: "Scholarly Seminars",
      date: "Various Dates",
      location: "Academic Institutions",
      description:
        "Academic discussions and presentations on Maharaj Saheb's scholarly contributions to Jain literature.",
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
              Events & Commemorations
            </h1>
            <div className="w-24 h-1 spiritual-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Special occasions and gatherings to honor the life and teachings of Maharaj Saheb
            </p>
          </div>

          {/* Events List */}
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in-up">
            {events.map((event, index) => (
              <Card
                key={event.id}
                className="p-6 md:p-8 shadow-soft hover:shadow-warm transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-grow">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-3">
                      {event.title}
                    </h2>
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="text-foreground/80 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Stay Updated
              </h3>
              <p className="text-foreground/80 mb-6 max-w-md">
                To receive notifications about upcoming events and commemorations, please contact us.
              </p>
              <a
                href="/contact"
                className="inline-block px-8 py-3 spiritual-gradient text-white font-semibold rounded-lg shadow-warm hover:scale-105 transition-transform"
              >
                Get in Touch
              </a>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Events;
