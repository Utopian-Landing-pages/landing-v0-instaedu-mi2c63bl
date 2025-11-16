import { Check } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PROJECT_URL } from '@/lib/constants'

const plans = [
  {
    name: 'Free',
    price: 'Free',
    period: 'forever',
    features: [
      'Basic content access',
      'Limited features',
      'Ad-supported experience',
      'Single child profile',
    ],
    cta: 'Get Started Free',
    popular: false,
  },
  {
    name: 'Monthly Premium',
    price: '$9.99',
    period: 'month',
    features: [
      'Full content access',
      'Advanced parental controls',
      'Ad-free experience',
      'Personalized learning feed',
      'Up to 3 child profiles',
      'Priority support',
    ],
    cta: 'Subscribe Monthly',
    popular: false,
  },
  {
    name: 'Annual Premium',
    price: '$99.99',
    period: 'year',
    features: [
      'All Premium features',
      '2 months free (save 16%)',
      'Ad-free experience',
      'Personalized learning feed',
      'Unlimited child profiles',
      'Priority support',
      'Early access to new features',
    ],
    cta: 'Save Annually',
    popular: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose the perfect plan for your family. Start free or unlock premium features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${
                plan.popular
                  ? 'border-primary border-2 shadow-xl scale-105 md:scale-110'
                  : 'border-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period !== 'forever' && (
                    <span className="text-muted-foreground">/{plan.period}</span>
                  )}
                </div>
                {plan.period === 'forever' && (
                  <span className="text-muted-foreground text-sm">{plan.period}</span>
                )}
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full ${
                    plan.popular
                      ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                  size="lg"
                >
                  <a href={PROJECT_URL}>{plan.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <p className="text-center text-muted-foreground mt-12 text-sm">
          All plans include a 7-day money-back guarantee. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
