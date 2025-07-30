'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Check, 
  Sparkles, 
  Github, 
  Twitter, 
  Mail,
  Star,
  ChevronRight,
  Plus,
  Minus,
  X,
  Archive,
  Trash2,
  Users,
  Settings,
  MoreHorizontal,
  Menu,
  Search,
  Bell,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Lightbulb,
  Rocket,
  Target,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function StartupLandingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams",
      monthlyPrice: 9,
      annualPrice: 7,
      features: [
        "Up to 5 projects",
        "Basic analytics",
        "Email support",
        "1GB storage",
        "Basic integrations"
      ]
    },
    {
      name: "Pro",
      description: "Best for growing businesses and teams",
      monthlyPrice: 29,
      annualPrice: 23,
      popular: true,
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "10GB storage",
        "Advanced integrations",
        "Team collaboration",
        "Custom branding"
      ]
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        "Everything in Pro",
        "Unlimited storage",
        "24/7 phone support",
        "Custom integrations",
        "Advanced security",
        "Dedicated account manager",
        "SLA guarantee"
      ]
    }
  ]

  const socialProof = [
    { name: "TechCrunch", logo: "TC" },
    { name: "Forbes", logo: "F" },
    { name: "Wired", logo: "W" },
    { name: "The Verge", logo: "TV" },
    { name: "Fast Company", logo: "FC" },
    { name: "Inc", logo: "I" }
  ]

  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Lightning Fast",
      description: "Built for speed and performance. Load your pages in milliseconds."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Bank-level security to keep your data safe and protected."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global CDN",
      description: "Deploy your sites worldwide with our global content delivery network."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Built-in",
      description: "Track performance and user behavior with built-in analytics."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Smart AI",
      description: "AI-powered features that adapt to your needs and preferences."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Instant Deploy",
      description: "Deploy your changes instantly with our continuous deployment system."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <Sparkles className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">Startup</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80" href="#features">
                Features
              </a>
              <a className="transition-colors hover:text-foreground/80" href="#pricing">
                Pricing
              </a>
              <a className="transition-colors hover:text-foreground/80" href="#about">
                About
              </a>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-4 pt-24 pb-8 md:pt-32 md:pb-12 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center"
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="mr-2 h-3 w-3" />
            Now Available
          </Badge>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            The future of
            <br />
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              web development
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Build, deploy, and scale your web applications with the most advanced platform. 
            Join thousands of developers who trust us with their projects.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg" className="h-12 px-8">
            Get Started Free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-12 px-8">
            View Demo
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center space-x-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
          <span>Trusted by 10,000+ developers</span>
        </motion.div>
      </section>

      {/* Social Proof Section */}
      <section className="container py-8 md:py-12">
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by the world's leading companies
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {socialProof.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center"
              >
                <div className="flex h-12 w-32 items-center justify-center rounded-lg border bg-background">
                  <span className="text-sm font-semibold text-muted-foreground">
                    {company.logo}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Everything you need to build amazing products
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Powerful features that help you build, deploy, and scale your applications faster than ever.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </p>
          </motion.div>
          
          <div className="mt-8 flex justify-center">
            <div className="flex items-center space-x-2 rounded-lg border p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                  !isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                  isAnnual ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                }`}
              >
                Annual
                <Badge variant="secondary" className="ml-1">
                  Save 20%
                </Badge>
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-lg border p-8 ${
                  plan.popular ? 'border-primary shadow-lg' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <div className="text-center">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <Button
                    className={`mt-6 w-full ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary/90'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                  <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center justify-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center"
        >
          <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl">
            Ready to get started?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Join thousands of developers who are already building amazing products with our platform.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8">
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Sparkles className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a
                href="#"
                className="font-medium underline underline-offset-4"
              >
                Startup Team
              </a>
              . The source code is available on{" "}
              <a
                href="#"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
} 