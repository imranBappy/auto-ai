import { Clock, MessageSquare, TrendingUp, Zap, Globe, BarChart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Never Miss a Student",
    description: "Students message at night, early morning, weekends — your bot is always online and ready to help."
  },
  {
    icon: MessageSquare,
    title: "Handle 1000+ Comments Easily",
    description: "Manual replies are slow. Automation replies to everyone instantly, ensuring no lead is left behind."
  },
  {
    icon: TrendingUp,
    title: "Sell Without a Website",
    description: "Students can enroll and pay directly inside WhatsApp or Messenger. No complex setup required."
  },
  {
    icon: BarChart,
    title: "One Dashboard, Full Control",
    description: "Track conversations, platforms, enrollments, and performance in one place with detailed analytics."
  }
];

export function Features() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Why You Need Chat Automation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Sell more courses without increasing workload
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}