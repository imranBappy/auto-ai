import { Smartphone, MessageCircle, Instagram, Facebook, CreditCard, ShoppingCart } from "lucide-react";

const integrations = [
  { name: "WhatsApp Business", icon: Smartphone, description: "Official API" },
  { name: "Facebook Messenger", icon: MessageCircle, description: "Auto chat replies" },
  { name: "Instagram DMs & Comments", icon: Instagram, description: "Full automation" },
  { name: "Facebook Page Comments", icon: Facebook, description: "Instant reply bot" },
  { name: "Payment Gateway", icon: CreditCard, description: "Seamless integration" },
];

export function Integrations() {
  return (
    <section className="py-16 px-4 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Platforms We Automate</h2>
          <p className="text-xl text-gray-600">
            One smart system. All your student conversations.
          </p>
        </div>

        <div className="grid justify-between grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-8 h-8 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </div>
                <div className="font-semibold text-sm mb-1">{integration.name}</div>
                <div className="text-xs text-gray-500">{integration.description}</div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 text-gray-500 font-medium italic">
          No extra apps. No technical headache.
        </div>
      </div>
    </section>
  );
}