import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MessageSquare, MessageCircle, Instagram, ThumbsUp } from "lucide-react";

const services = [
  {
    icon: MessageSquare,
    title: "WhatsApp Chat Automation",
    description: "When a student messages “I want to join”, the bot instantly replies with course details, fees, and a secure payment link. Once payment is done, the student gets automatic confirmation.",
    features: [
      "Course details & syllabus",
      "Fees & batch timings",
      "Instructor information",
      "Secure payment link"
    ]
  },
  {
    icon: MessageCircle,
    title: "Facebook Messenger Automation",
    description: "Handle unlimited Messenger chats at the same time. Answer FAQs, share demo videos, and close enrollments directly in Messenger. Your inbox stays clean. Sales keep coming.",
    features: [
      "Answer FAQs instantly",
      "Share demo videos & syllabus",
      "Book demo classes",
      "Close enrollments in Messenger"
    ]
  },
  {
    icon: ThumbsUp,
    title: "Facebook Comment Reply Bot",
    description: "When people comment “Interested” or “Price?” on your post, the bot replies instantly, sends details, and moves them to Messenger DM for enrollment. Perfect for viral posts.",
    features: [
      "Reply to every comment in seconds",
      "Automatically sends details",
      "Moves students to Messenger DM",
      "Perfect for course launches"
    ]
  },
  {
    icon: Instagram,
    title: "Instagram DM & Comment Automation",
    description: "Never miss Instagram leads again. Auto-reply to comments like “Fee?” or “Join”. Instantly send DM with course info, payment links, and demo videos. Convert reels into enrollments.",
    features: [
      "Auto-reply to comments on Reels/Posts",
      "Instantly send DM with course info",
      "Share payment links & demo videos",
      "Convert reels into enrollments"
    ]
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Chat & Comment Automation Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sell courses 24/7 through WhatsApp, Facebook, Instagram without manual replies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}