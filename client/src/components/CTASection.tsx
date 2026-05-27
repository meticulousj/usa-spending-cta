import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Mail, Zap } from "lucide-react";
import { useState } from "react";

/**
 * CTA Section Component
 * Design Philosophy: Civic Data Transparency
 * 
 * Features:
 * - Asymmetric layout with hero imagery
 * - Progressive engagement: awareness → action → mastery
 * - Institutional navy primary with cyan/gold accents
 * - Diagonal section dividers for visual flow
 */

export function HeroCTA() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663380365453/dTFWTHAH4gfiFS9mwTwZTn/hero-federal-data-Q75nbaSifEsaNWRu5o35F7.webp"
          alt="Federal spending data visualization"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 md:py-32 flex items-center min-h-screen">
        <div className="max-w-2xl">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
            <span className="text-sm font-semibold text-primary">🇺🇸 Federal Spending Data</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Understand Where Your Tax Dollars Go
          </h1>

          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Interactive guides to navigating federal spending data. From contracts and grants to agency budgets—learn how to find, analyze, and act on government spending information.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-blue-900 text-white rounded-lg h-14 px-8 font-semibold text-lg transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-blue-50 rounded-lg h-14 px-8 font-semibold text-lg"
            >
              Explore Data
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">7</div>
              <div className="text-sm text-slate-600">Playbooks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">38+</div>
              <div className="text-sm text-slate-600">Steps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary">Free</div>
              <div className="text-sm text-slate-600">Public Data</div>
            </div>
          </div>
        </div>
      </div>

      {/* Diagonal divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill="white"
        />
      </svg>
    </section>
  );
}

export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary to-blue-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
            <Mail className="h-4 w-4 text-accent" />
            <span className="text-sm font-semibold text-white">Stay Updated</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Get Weekly Spending Insights
          </h2>

          <p className="text-lg text-blue-100 mb-8">
            Curated guides, data releases, and analysis tips delivered to your inbox. No spam, just actionable federal spending intelligence.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            />
            <Button
              type="submit"
              className="bg-accent hover:bg-cyan-400 text-primary font-semibold rounded-lg px-6 py-3 transition-all duration-200 hover:shadow-lg active:scale-95 whitespace-nowrap"
            >
              {submitted ? "✓ Subscribed" : "Subscribe"}
            </Button>
          </form>

          <p className="text-sm text-blue-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ProgressTrackCTA() {
  const tracks = [
    {
      icon: "📋",
      title: "Beginner Track",
      description: "Find your first contract",
      steps: 4,
      time: "10 min",
      cta: "Start"
    },
    {
      icon: "🎓",
      title: "Intermediate Track",
      description: "Analyze agency spending",
      steps: 5,
      time: "15 min",
      cta: "Start"
    },
    {
      icon: "🔍",
      title: "Advanced Track",
      description: "Trace spending flows",
      steps: 5,
      time: "20 min",
      cta: "Start"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Choose Your Learning Path
          </h2>
          <p className="text-xl text-slate-600">
            Progressive guides designed for your skill level. Start anywhere and build your federal spending data literacy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl p-8 border border-slate-200 hover:border-accent hover:shadow-xl transition-all duration-300"
            >
              {/* Step indicator */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-accent text-primary font-bold rounded-full flex items-center justify-center text-sm">
                {idx + 1}
              </div>

              <div className="text-5xl mb-4">{track.icon}</div>

              <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                {track.title}
              </h3>

              <p className="text-slate-600 mb-6">{track.description}</p>

              <div className="flex items-center gap-4 mb-6 text-sm text-slate-500">
                <span>{track.steps} steps</span>
                <span>•</span>
                <span>{track.time}</span>
              </div>

              <Button
                className="w-full bg-primary hover:bg-blue-900 text-white rounded-lg py-3 font-semibold transition-all duration-200 group-hover:shadow-lg active:scale-95"
              >
                {track.cta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              {/* Accent line on hover */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-accent to-secondary rounded-b-xl w-0 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesCTA() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Search & Filter",
      description: "Find contracts, grants, and spending by agency, vendor, or keyword"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Build Profiles",
      description: "Create comprehensive spending profiles for any federal award recipient"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Track Changes",
      description: "Monitor agency spending trends over time with interactive visualizations"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Powerful Tools for Data Exploration
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Everything you need to understand federal spending. Our platform makes complex government data accessible to journalists, researchers, policymakers, and engaged citizens.
            </p>

            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-accent">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              className="mt-8 bg-primary hover:bg-blue-900 text-white rounded-lg px-8 py-3 font-semibold transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              Explore All Features
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="relative">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663380365453/dTFWTHAH4gfiFS9mwTwZTn/hero-civic-engagement-gCtBCpgGF6X8HAhAPiLetd.webp"
              alt="Data exploration interface"
              className="rounded-xl shadow-2xl"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTAShowcase() {
  return (
    <div className="min-h-screen bg-slate-50">
      <HeroCTA />
      <ProgressTrackCTA />
      <FeaturesCTA />
      <NewsletterCTA />
    </div>
  );
}
