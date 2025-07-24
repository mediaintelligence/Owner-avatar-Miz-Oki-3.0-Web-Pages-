import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Twitter, Linkedin, Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1B365D]/50 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-white">
                MediaIntelligence<span className="text-[#00D4FF]">.ai</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Transform media noise into strategic intelligence with our AI-powered platform.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#00D4FF] hover:bg-white/10">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#00D4FF] hover:bg-white/10">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#00D4FF] hover:bg-white/10">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-[#00D4FF] hover:bg-white/10">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  Security
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Get the latest insights and updates delivered to your inbox.</p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#00D4FF] hover:bg-[#00D4FF]/90 text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2025 MediaIntelligence.ai. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00D4FF] text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
