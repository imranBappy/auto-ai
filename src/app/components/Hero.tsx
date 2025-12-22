import { Button } from "./ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  /*
    Automate Your WhatsApp, Facebook & Instagram Chats — Sell Courses 24/7
  */

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
              <MessageCircle className="w-4 h-4" />
              <span>Automate Your Course Sales 24/7</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              Automate Your  <span className="text-blue-600">WhatsApp, Facebook & Instagram</span>
              <br /> <span className="text-xl">
                Chats — Sell Courses 24/7
              </span>
            </h1>

            <p className="text-xl text-gray-700">
              Turn every message, comment, and DM into a paying student. Our AI-powered chat automation replies instantly, shares course details, sends payment links, and confirms enrollments — even while you sleep.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="text-green-600 font-bold">✅</div>
                <span>Instant replies on WhatsApp, Facebook & Instagram</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="text-green-600 font-bold">✅</div>
                <span>Sell courses directly inside chat</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="text-green-600 font-bold">✅</div>
                <span>Never miss a student inquiry again</span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={scrollToContact} className="group h-14 px-8 text-lg">
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="h-14 px-8 text-lg">
                See Live Demo
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600 flex items-center gap-2">
                  <span>🚀</span> 24/7
                </div>
                <div className="text-sm text-gray-600">Automated Replies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 flex items-center gap-2">
                  <span>⚡</span> &lt;30s
                </div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 flex items-center gap-2">
                  <span>📈</span> 3×
                </div>
                <div className="text-sm text-gray-600">More Enrollments</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-10 blur-3xl rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?q=80&w=1096&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="WhatsApp Chat Automation for Courses"
              className="relative rounded-2xl w-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}