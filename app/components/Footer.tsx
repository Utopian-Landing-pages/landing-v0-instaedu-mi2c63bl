'use client'

import Link from 'next/link'
import { GraduationCap, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PROJECT_NAME } from '@/lib/constants'

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
  }

  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary rounded-xl p-2">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-background">{PROJECT_NAME}</span>
            </Link>
            <p className="text-background/80 leading-relaxed">
              Safe, engaging social learning platform for children aged 6-12.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#features" className="text-background/80 hover:text-background transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-background/80 hover:text-background transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-background">Stay Updated</h3>
            <p className="text-background/80 mb-4">
              Get the latest news and updates from InstaEdu.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                required
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/70 text-sm">© 2025 InstaEdu. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-background/70 hover:text-background transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-background/70 hover:text-background transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
