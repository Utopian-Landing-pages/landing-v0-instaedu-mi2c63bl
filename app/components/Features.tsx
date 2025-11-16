import Image from 'next/image'
import { BookOpen, ShieldCheck, Sparkles, MessageSquareText, Library } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: BookOpen,
    title: 'Engaging Content Discovery',
    description: 'Short videos, images, and interactive posts for fun learning.',
    image: 'https://source.unsplash.com/400x300/?education,discovery',
  },
  {
    icon: ShieldCheck,
    title: 'Parental Oversight & Safety',
    description: 'Individual child profiles with comprehensive parental controls and moderation.',
    image: 'https://source.unsplash.com/400x300/?parents,safety',
  },
  {
    icon: Sparkles,
    title: 'Personalized Learning Feed',
    description: "Tailored content recommendations based on child's interests and progress.",
    image: 'https://source.unsplash.com/400x300/?personalized,learning',
  },
  {
    icon: MessageSquareText,
    title: 'Moderated Social Interaction',
    description: "Safe 'like' functionality and strictly moderated comments for positive peer learning.",
    image: 'https://source.unsplash.com/400x300/?social,kids',
  },
  {
    icon: Library,
    title: 'Curated Educational Library',
    description: 'Access to a vast collection of high-quality, age-appropriate educational materials.',
    image: 'https://source.unsplash.com/400x300/?curated,content',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything Your Child Needs to{' '}
            <span className="text-primary">Learn & Grow</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Discover powerful features designed to make learning safe, engaging, and effective for
            children aged 6-12.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50"
            >
              <CardContent className="p-6">
                {/* Image */}
                <div className="relative aspect-video mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Icon */}
                <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 text-balance">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
