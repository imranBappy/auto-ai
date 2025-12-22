import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, Users, Clock, MessageSquare } from "lucide-react";

const caseStudies = [
  {
    company: "Digital Marketing Institute",
    industry: "Digital Marketing Course",
    image: "https://images.unsplash.com/photo-1533895328642-8035bacd565a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWNlYm9vayUyMHNvY2lhbCUyMG1lZGlhfGVufDF8fHx8MTc2NjQxODE4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "450 Facebook comments → only 12 enrollments. Manual replies took days. Students lost interest.",
    solution: "Every comment replied in under 30 seconds with automatic DMs and payment links.",
    results: [
      { icon: TrendingUp, value: "127", label: "Enrollments from same post" },
      { icon: Clock, value: "<30s", label: "Reply Time" },
      { icon: MessageSquare, value: "10x", label: "Enrollment Growth" }
    ]
  },
  {
    company: "English Speaking Course",
    industry: "Language Learning",
    image: "https://images.unsplash.com/photo-1762330910399-95caa55acf04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZyUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjY0MDc1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    challenge: "Missed late-night WhatsApp messages. Students joined competitors by morning.",
    solution: "24/7 WhatsApp automation. Students enrolled at 3 AM without owner involvement.",
    results: [
      { icon: Clock, value: "24/7", label: "Always Online" },
      { icon: TrendingUp, value: "340%", label: "Increase in Sales" },
      { icon: Users, value: "3 AM", label: "Active Enrollment" }
    ]
  }
];

export function CaseStudies() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Real Results: Before & After Automation</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            How course creators went from missing sales to selling 24/7 automatically
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2">
                  <img
                    src={study.image}
                    alt={study.company}
                    className="w-full h-full object-cover min-h-[300px]"
                  />
                </div>
                <div className="md:col-span-3 p-6">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-3">
                      {study.industry}
                    </div>
                    <h3 className="text-2xl mb-2">{study.company}</h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm text-red-600 mb-1">❌ Before Automation</div>
                      <p className="text-gray-700">{study.challenge}</p>
                    </div>
                    <div>
                      <div className="text-sm text-green-600 mb-1">✅ After Automation</div>
                      <p className="text-gray-700">{study.solution}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    {study.results.map((result, idx) => {
                      const Icon = result.icon;
                      return (
                        <div key={idx} className="text-center">
                          <Icon className="w-5 h-5 text-blue-600 mx-auto mb-2" />
                          <div className="text-2xl text-blue-600 mb-1">{result.value}</div>
                          <div className="text-sm text-gray-600">{result.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}