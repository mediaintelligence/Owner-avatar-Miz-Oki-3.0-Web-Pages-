"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#1B365D]/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-white">
                MediaIntelligence<span className="text-[#00D4FF]">.ai</span>
              </span>
            </div>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-white hover:text-[#00D4FF] transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-white hover:text-[#00D4FF] transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-white hover:text-[#00D4FF] transition-colors">
                About
              </a>
              <a href="#contact" className="text-white hover:text-[#00D4FF] transition-colors">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 space-x-4">
              <Button variant="ghost" className="text-white hover:text-[#00D4FF] hover:bg-white/10">
                Sign In
              </Button>
              <Button className="bg-[#A47864] hover:bg-[#A47864]/90 text-white">Start Free Trial</Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1B365D]/95 backdrop-blur-md rounded-lg mt-2">
              <a href="#features" className="block px-3 py-2 text-white hover:text-[#00D4FF]">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-white hover:text-[#00D4FF]">
                Pricing
              </a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-[#00D4FF]">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-[#00D4FF]">
                Contact
              </a>
              <div className="pt-4 pb-3 border-t border-white/10">
                <Button variant="ghost" className="w-full text-white hover:bg-white/10 mb-2">
                  Sign In
                </Button>
                <Button className="w-full bg-[#A47864] hover:bg-[#A47864]/90 text-white">Start Free Trial</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
