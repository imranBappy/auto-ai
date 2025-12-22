import { Workflow, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Workflow className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-xl">ChatBot Auto</span>
            </div>
            <p className="text-sm">
              Automate WhatsApp, Facebook, Instagram chats and comments. Sell courses 24/7 without manual replies.
            </p>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Platforms</h4>
            <ul className="space-y-2 text-sm">
              <li>WhatsApp Business API</li>
              <li>Facebook Messenger</li>
              <li>Instagram DM & Comments</li>
              <li>Facebook Comment Reply</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Plans</h4>
            <ul className="space-y-2 text-sm">
              <li>Free 7-Day Trial</li>
              <li>Starter - $20/month</li>
              <li>Custom Enterprise</li>
              <li>No Setup Fees</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                imranbappy.official@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +8801724825061
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ChatBot Automation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}