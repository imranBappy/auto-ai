import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Course Setup",
    description: "We add your course details, fees, batches, and payment system to our smart automation engine."
  },
  {
    number: "02",
    title: "AI Training",
    description: "Bot learns your syllabus, FAQs, and admission process to answer student queries like a pro."
  },
  {
    number: "03",
    title: "Platform Connection",
    description: "WhatsApp, Facebook, and Instagram are connected securely to start receiving messages."
  },
  {
    number: "04",
    title: "Go Live & Scale",
    description: "Start handling unlimited inquiries automatically. Monitor performance and grow your academy."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From setup to your first automated enrollment in just 5-7 days
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-6xl text-blue-100 mb-4">{step.number}</div>
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <h3 className="text-xl">{step.title}</h3>
              </div>
              <p className="text-gray-600 pl-9">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-transparent -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}