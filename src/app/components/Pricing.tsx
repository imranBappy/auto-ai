import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    duration: "7 Days",
    description: "Test automation with real students",
    features: [
      "Test with real students",
      "WhatsApp & Messenger automation",
      "100 messages/day",
      "Payment link integration"
    ],
    cta: "Start Free Trial",
    highlighted: false
  },
  {
    name: "Starter Plan",
    price: "$20",
    duration: "Month",
    description: "Perfect for individual course creators",
    features: [
      "Unlimited messages",
      "WhatsApp Business API",
      "Facebook Messenger & Instagram DM automation",
      "Unlimited comment replies",
      "Up to 5 courses",
      "Analytics dashboard"
    ],
    cta: "Get Started",
    highlighted: true
  },
  {
    name: "Custom Enterprise Plan",
    price: "Custom",
    duration: "pricing",
    description: "For coaching centers & institutes",
    features: [
      "Multiple WhatsApp numbers",
      "Advanced AI workflows",
      "Multi-language support",
      "Unlimited courses",
      "Dedicated account manager",
      "Priority 24/7 support"
    ],
    cta: "Contact Sales",
    highlighted: false
  }
];

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you see results. No hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.highlighted ? 'border-2 border-blue-600 shadow-xl' : ''}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <div className="mb-2">
                  <span className="text-4xl">{plan.price}</span>
                  {plan.price !== "Custom" && plan.price !== "₹0" && (
                    <span className="text-gray-500 ml-2">/{plan.duration}</span>
                  )}
                  {plan.price === "₹0" && (
                    <span className="text-gray-500 ml-2">for {plan.duration}</span>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={scrollToContact}
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Setup assistance</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-600" />
              <span>Data privacy guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
