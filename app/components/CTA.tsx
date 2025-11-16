import { Sparkles, Shield, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary/90 to-accent animate-gradient-shift">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-8">
            <Sparkles className="h-12 w-12 text-white" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Transform Screen Time into Learning Time
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed text-pretty max-w-2xl mx-auto">
            Join thousands of families who trust InstaEdu to provide their children with safe,
            engaging, and educational content.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 h-auto shadow-2xl mb-12"
          >
            <a href={PROJECT_URL}>
              <Sparkles className="mr-2 h-5 w-5" />
              Start Your Free Trial
            </a>
          </Button>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-white/90">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6" />
              <span className="font-medium">100% Safe & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6" />
              <span className="font-medium">Loved by Parents</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6" />
              <span className="font-medium">No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
