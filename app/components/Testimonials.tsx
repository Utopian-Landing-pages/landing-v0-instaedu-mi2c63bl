'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    name: 'Sarah L.',
    role: 'Parent at Home Educators',
    quote: "InstaEdu has transformed screen time for my kids! They're actually learning and asking for more educational videos. It's safe, engaging, and I love the parental controls.",
    image: 'https://source.unsplash.com/300x300/?portrait,professional,1',
    rating: 5,
  },
  {
    name: 'Mark P.',
    role: 'Educator at Bright Minds Academy',
    quote: "As an educator, I'm impressed by the quality of content and the intuitive interface. InstaEdu makes learning accessible and genuinely fun for elementary-aged children.",
    image: 'https://source.unsplash.com/300x300/?portrait,professional,2',
    rating: 5,
  },
  {
    name: 'Jessica R.',
    role: 'Mom of two at Tech-Savvy Family',
    quote: 'Finally, an app where my kids can explore and interact without me worrying. The moderated comments are a game-changer, fostering positive peer interaction.',
    image: 'https://source.unsplash.com/300x300/?portrait,professional,3',
    rating: 5,
  },
  {
    name: 'David C.',
    role: 'Tech Professional at Future Innovators Corp.',
    quote: 'The personalized feed is brilliant; my daughter is constantly discovering new topics she loves. InstaEdu is a fantastic blend of education and modern digital engagement.',
    image: 'https://source.unsplash.com/300x300/?portrait,professional,4',
    rating: 5,
  },
  {
    name: 'Emily W.',
    role: "Freelance Writer at Parent's Digest",
    quote: 'My son used to be glued to mindless videos. Now, with InstaEdu, he's actively learning about science and history, all within a safe, controlled environment. Highly recommend!',
    image: 'https://source.unsplash.com/300x300/?portrait,professional,5',
    rating: 5,
  },
  {
    name: 'Dr. Anya Sharma',
    role: 'Child Psychologist at Child Development Center',
    quote: 'InstaEdu effectively leverages the appeal of social media for positive learning outcomes. The emphasis on moderation and tailored content is crucial for healthy child development.',
    image: 'https://source.unsplash.com/300x300/?portrait,professional,6',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Loved by Parents & <span className="text-primary">Educators</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            See what families and education professionals are saying about InstaEdu.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <Card className="border-2">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Profile Image */}
                <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-primary/20">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4 justify-center md:justify-start">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-foreground mb-6 leading-relaxed text-pretty">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author */}
                  <div>
                    <div className="font-bold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots */}
          <div className="flex gap-2 justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
