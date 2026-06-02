import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Mail, Zap, AlertCircle, X } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

/**
 * CTA Section Component
 * Design Philosophy: Civic Data Transparency
 * 
 * Features:
 * - Asymmetric layout with hero imagery
 * - Progressive engagement: awareness → action → mastery
 * - Institutional navy primary with cyan/gold accents
 * - Diagonal section dividers for visual flow
 * - Sophisticated hover animations and micro-interactions
 * - Form validation with error states and toast notifications
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
            <a
              href="https://usaspendingplaybook.base44.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="cta-button-primary bg-primary hover:bg-blue-900 text-white rounded-lg h-14 px-8 font-semibold text-lg"
              >
                Start Learning
                <ArrowRight className="icon-slide ml-2 h-5 w-5" />
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="cta-button-outline border-2 border-primary text-primary hover:bg-blue-50 rounded-lg h-14 px-8 font-semibold text-lg"
            >
              Explore Data
              <ArrowRight className="icon-slide ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social Proof Badges */}
          <div className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
            <p className="text-sm font-semibold text-slate-600 mb-4">Trusted by government analysts, journalists & researchers</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <span className="text-slate-700 font-medium">5K+ Users</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <span className="text-slate-700 font-medium">100% Free</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <span className="text-slate-700 font-medium">Open Data</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold">✓</span>
                </div>
                <span className="text-slate-700 font-medium">No Sign-up</span>
              </div>
            </div>
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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Email validation regex
  const validateEmail = (emailValue: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Clear error when user starts typing
    if (error) {
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation checks
    if (!email.trim()) {
      setError("Email address is required");
      toast.error("Please enter your email address", {
        description: "We need your email to send you weekly insights.",
        icon: <AlertCircle className="h-4 w-4" />,
      });
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      toast.error("Invalid email format", {
        description: "Please check your email and try again.",
        icon: <AlertCircle className="h-4 w-4" />,
      });
      return;
    }

    // Simulate API call
    setIsLoading(true);
    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate occasional API errors (10% chance)
      if (Math.random() < 0.1) {
        throw new Error("Server error");
      }

      setSubmitted(true);
      setEmail("");
      toast.success("Successfully subscribed!", {
        description: "Check your inbox for a confirmation email.",
        icon: <CheckCircle className="h-4 w-4" />,
      });

      // Reset submitted state after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setError("Failed to subscribe. Please try again.");
      toast.error("Subscription failed", {
        description: "Please try again in a moment or contact support.",
        icon: <AlertCircle className="h-4 w-4" />,
      });
    } finally {
      setIsLoading(false);
    }
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

          <form onSubmit={handleSubmit} className="flex flex-col gap-3 mb-6">
            <div className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={handleEmailChange}
                    disabled={isLoading}
                    className={`newsletter-input w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary transition-all duration-200 ${
                      error
                        ? "border-red-400 focus:ring-red-400"
                        : "border-white/20 focus:ring-accent focus:border-transparent"
                    } ${isLoading ? "opacity-60 cursor-not-allowed" : ""}`}
                  />
                  {error && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-300">
                      <AlertCircle className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <Button
                  type="submit"
                  disabled={isLoading || submitted}
                  className={`cta-button-primary font-semibold rounded-lg px-6 py-3 whitespace-nowrap transition-all duration-200 ${
                    submitted
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : "bg-accent hover:bg-cyan-400 text-primary"
                  } ${isLoading ? "opacity-75 cursor-not-allowed" : ""}`}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Subscribing...
                    </span>
                  ) : submitted ? (
                    <span className="success-checkmark flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Subscribed
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>

              {/* Error message display */}
              {error && (
                <div className="mt-3 flex items-start gap-2 p-3 bg-red-500/20 border border-red-400/50 rounded-lg animate-in fade-in slide-in-from-top-2 duration-200">
                  <AlertCircle className="h-4 w-4 text-red-300 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-red-200">{error}</p>
                </div>
              )}
            </div>
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
              className="track-card relative bg-white rounded-xl p-8 border border-slate-200"
            >
              {/* Step indicator */}
              <div className="track-card-number absolute -top-4 -left-4 w-10 h-10 bg-accent text-primary font-bold rounded-full flex items-center justify-center text-sm">
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
                className="cta-button-primary w-full bg-primary hover:bg-blue-900 text-white rounded-lg py-3 font-semibold"
              >
                {track.cta}
                <ArrowRight className="icon-slide ml-2 h-4 w-4" />
              </Button>

              {/* Accent line on hover */}
              <div className="track-accent-line"></div>
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
                <div key={idx} className="feature-card flex gap-4">
                  <div className="feature-icon flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-accent">
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
              className="cta-button-primary mt-8 bg-primary hover:bg-blue-900 text-white rounded-lg px-8 py-3 font-semibold"
            >
              Explore All Features
              <ArrowRight className="icon-slide ml-2 h-4 w-4" />
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
