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
  MoreHorizontal
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const StartupTemplate: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const pricingPlans = [
    {
      name: "Basic",
      description: "A basic plan for startups and individual users",
      monthlyPrice: 10,
      annualPrice: 8,
      features: [
        "AI-powered analytics",
        "Basic support",
        "5 projects limit",
        "Access to basic AI tools"
      ]
    },
    {
      name: "Premium",
      description: "A premium plan for growing businesses",
      monthlyPrice: 20,
      annualPrice: 16,
      popular: true,
      features: [
        "Advanced AI insights",
        "Priority support", 
        "Unlimited projects",
        "Access to all AI tools",
        "Custom integrations"
      ]
    },
    {
      name: "Enterprise",
      description: "An enterprise plan with advanced features for large organizations",
      monthlyPrice: 50,
      annualPrice: 40,
      features: [
        "Custom AI solutions",
        "24/7 dedicated support",
        "Unlimited projects", 
        "Access to all AI tools",
        "Custom integrations",
        "Data security and compliance"
      ]
    },
    {
      name: "Ultimate",
      description: "The ultimate plan with all features for industry leaders",
      monthlyPrice: 80,
      annualPrice: 64,
      features: [
        "Bespoke AI development",
        "White-glove support",
        "Unlimited projects",
        "Priority access to new AI tools", 
        "Custom integrations",
        "Highest data security and compliance"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="hidden font-bold sm:inline-block">
                Magic UI
              </span>
            </a>
            <nav className="flex items-center gap-6 text-sm">
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/docs"
              >
                Docs
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/docs/components"
              >
                Components
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/examples"
              >
                Examples
              </a>
              <a
                className="transition-colors hover:text-foreground/80 text-foreground/60"
                href="/blocks"
              >
                Blocks
              </a>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <Button variant="outline" className="relative h-8 w-full justify-start rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64">
                <span className="hidden lg:inline-flex">Search documentation...</span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
            </div>
            <nav className="flex items-center">
              <a
                href="https://github.com/magicuidesign/magicui"
                target="_blank"
                rel="noreferrer"
              >
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </div>
              </a>
              <a
                href="https://twitter.com/magicuidesign"
                target="_blank"
                rel="noreferrer"
              >
                <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0">
                  <Twitter className="h-4 w-4 fill-current" />
                  <span className="sr-only">Twitter</span>
                </div>
              </a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container flex max-w-[64rem] flex-col items-center gap-4 text-center pt-6 pb-8 md:pt-10 md:pb-12 lg:pt-16 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a
            className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium"
            href="/docs/changelog"
          >
            🎉 <div data-orientation="vertical" role="none" className="shrink-0 bg-border w-[1px] mx-2 h-4"></div>{" "}
            <span className="hidden sm:inline">
              Introducing Magic UI Pro
            </span>
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </motion.div>

        <motion.h1
          className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Magic UI is the new way <br className="hidden sm:inline" />
          to build landing pages
        </motion.h1>

        <motion.p
          className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Beautifully designed, animated components and templates built with{" "}
          <br className="hidden sm:inline" />
          Tailwind CSS, React, and Framer Motion.
        </motion.p>

        <motion.div
          className="flex flex-col gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button size="lg" className="h-11 px-8">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="h-11 px-8">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section className="container max-w-[58rem] mx-auto pb-8 pt-6 md:pb-12 md:pt-10 lg:pb-24 lg:pt-16">
        <motion.div
          className="mx-auto max-w-[58rem] text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative overflow-hidden rounded-lg border bg-background shadow-2xl">
            <div className="flex h-[500px] flex-col">
              <div className="flex h-14 items-center gap-2 border-b px-4">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
                <div className="ml-auto flex items-center gap-2">
                  <div className="text-xs text-muted-foreground">mail.google.com</div>
                </div>
              </div>
              <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-64 border-r bg-muted/50">
                  <div className="flex h-14 items-center gap-3 border-b px-4">
                    <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center">
                      <span className="text-xs font-semibold text-white">A</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium">Alicia Koch</div>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3 rounded-md bg-background px-3 py-2 text-sm">
                        <Mail className="h-4 w-4" />
                        <span>Inbox</span>
                        <span className="ml-auto text-xs text-muted-foreground">128</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <div className="h-4 w-4" />
                        <span>Drafts</span>
                        <span className="ml-auto text-xs">9</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <div className="h-4 w-4" />
                        <span>Sent</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <Trash2 className="h-4 w-4" />
                        <span>Junk</span>
                        <span className="ml-auto text-xs">23</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <Trash2 className="h-4 w-4" />
                        <span>Trash</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <Archive className="h-4 w-4" />
                        <span>Archive</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <Users className="h-4 w-4" />
                        <span>Social</span>
                        <span className="ml-auto text-xs">972</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <div className="h-4 w-4" />
                        <span>Updates</span>
                        <span className="ml-auto text-xs">342</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <div className="h-4 w-4" />
                        <span>Forums</span>
                        <span className="ml-auto text-xs">128</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <div className="h-4 w-4" />
                        <span>Shopping</span>
                        <span className="ml-auto text-xs">8</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground">
                        <div className="h-4 w-4" />
                        <span>Promotions</span>
                        <span className="ml-auto text-xs">21</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email List */}
                <div className="flex-1 flex flex-col">
                  <div className="flex h-14 items-center justify-between border-b px-4">
                    <h1 className="text-xl font-semibold">Inbox</h1>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        All mail
                      </Button>
                      <Button variant="ghost" size="sm">
                        Unread
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-auto">
                    <div className="p-4 space-y-4">
                      <div className="flex items-start gap-4 rounded-lg border p-4">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">WS</span>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium leading-none">William Smith</p>
                            <p className="text-xs text-muted-foreground">4 months ago</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Meeting Tomorrow</p>
                          <p className="text-xs leading-snug text-muted-foreground">
                            Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="secondary">meeting</Badge>
                            <Badge variant="secondary">work</Badge>
                            <Badge variant="secondary">important</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">AS</span>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium leading-none">Alice Smith</p>
                            <p className="text-xs text-muted-foreground">4 months ago</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Re: Project Update</p>
                          <p className="text-xs leading-snug text-muted-foreground">
                            Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.
                          </p>
                          <div className="flex gap-2">
                            <Badge variant="secondary">work</Badge>
                            <Badge variant="secondary">important</Badge>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 rounded-lg border p-4 hover:bg-muted/50">
                        <div className="h-9 w-9 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                          <span className="text-sm font-semibold text-white">BJ</span>
                        </div>
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium leading-none">Bob Johnson</p>
                            <p className="text-xs text-muted-foreground">4 months ago</p>
                          </div>
                          <p className="text-sm text-muted-foreground">Weekend Plans</p>
                          <p className="text-xs leading-snug text-muted-foreground">
                            Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            TRUSTED BY TEAMS FROM AROUND THE WORLD
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Google</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="grid grid-cols-2 gap-[2px]">
                <div className="h-2 w-2 rounded-sm bg-red-500"></div>
                <div className="h-2 w-2 rounded-sm bg-green-500"></div>
                <div className="h-2 w-2 rounded-sm bg-blue-500"></div>
                <div className="h-2 w-2 rounded-sm bg-yellow-500"></div>
              </div>
              <span className="text-lg font-semibold">Microsoft</span>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span className="text-lg font-semibold">GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">Uber</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded bg-foreground flex items-center justify-center">
                <span className="text-xs font-bold text-background">N</span>
              </div>
              <span className="text-lg font-semibold">Notion</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container py-8 md:py-12 lg:py-24" id="pricing">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Simple pricing for everyone.
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose an{" "}
            <strong className="font-semibold text-foreground">affordable plan</strong>{" "}
            that&apos;s packed with the best features for engaging your audience,
            creating customer loyalty, and driving sales.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-3">
            <span className={`text-sm ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 ${
                isAnnual ? 'bg-orange-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Annual
              <Badge className="ml-2 bg-orange-500">
                2 MONTHS FREE ✨
              </Badge>
            </span>
          </div>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg gap-8 lg:max-w-4xl lg:grid-cols-2 xl:max-w-6xl xl:grid-cols-4">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl border bg-background p-8 shadow-lg ${
                plan.popular
                  ? 'border-orange-500 bg-gradient-to-b from-orange-50/50 to-background dark:from-orange-950/50'
                  : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold leading-8">
                  {plan.name}
                </h3>
              </div>

              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {plan.description}
              </p>

              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground">
                  /month
                </span>
              </p>

              <Button
                className={`mt-6 w-full ${
                  plan.popular
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                    : ''
                }`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Subscribe
              </Button>

              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-orange-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Start building today
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Get started with Magic UI and build beautiful landing pages in minutes.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="h-11 px-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="h-11 px-8">
              View on GitHub
              <Github className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-white" />
            </div>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a
                href="https://magicui.design"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                Magic UI
              </a>
              . The source code is available on{" "}
              <a
                href="https://github.com/magicuidesign/magicui"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/magicuidesign/magicui"
              target="_blank"
              rel="noreferrer"
            >
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </a>
            <a
              href="https://twitter.com/magicuidesign"
              target="_blank"
              rel="noreferrer"
            >
              <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0">
                <Twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default StartupTemplate 