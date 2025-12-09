interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Hero Section */}
      <section className="relative px-6 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className="text-5xl md:text-7xl font-display font-bold text-primary-dark mb-6 tracking-tight animate-slide-up-large opacity-0"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Elevate Networking Events
          </h1>
          <p 
            className="text-xl md:text-2xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up opacity-0 delay-200"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Transform social connections with a sophisticated ice-breaker designed for professional events, conferences, and corporate gatherings.
          </p>
          <button
            onClick={onGetStarted}
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:scale-105 animate-slide-up opacity-0 delay-400"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="px-6 py-20 bg-surface-elevated">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Built for Professionals",
                description: "Designed specifically for corporate events, conferences, and team offsites where meaningful connections matter."
              },
              {
                title: "Zero Setup",
                description: "Start immediately. No downloads, no accounts, no friction. Just open and play."
              },
              {
                title: "Seamless Mobile",
                description: "Perfectly optimized for phones and tablets, ensuring everyone can participate effortlessly."
              },
              {
                title: "Proven Ice-Breaker",
                description: "Turn awkward introductions into engaging conversations that spark genuine connections."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className={`animate-slide-up opacity-0 delay-${(index + 2) * 100}`}
              >
                <div className="h-full p-8 bg-white rounded-lg border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
                  <h3 
                    className="text-xl font-semibold text-primary-dark mb-3 tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-secondary leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-4xl md:text-5xl font-display font-bold text-primary-dark text-center mb-16 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            How It Works
          </h2>
          <div className="space-y-12">
            {[
              {
                number: "01",
                title: "Launch the Game",
                description: "Open the app and start a new bingo board. Each board is uniquely generated with thoughtful conversation starters."
              },
              {
                number: "02",
                title: "Engage & Connect",
                description: "Mingle with attendees and discover shared experiences. Tap squares as you find matches to mark your progress."
              },
              {
                number: "03",
                title: "Celebrate Together",
                description: "Complete a line to win! Perfect conversation starter to break the ice and build connections that last."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="flex gap-8 items-start"
              >
                <div 
                  className="flex-shrink-0 w-20 h-20 flex items-center justify-center rounded-full bg-primary text-white text-2xl font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {step.number}
                </div>
                <div className="flex-1 pt-3">
                  <h3 
                    className="text-2xl font-semibold text-primary-dark mb-3 tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {step.title}
                  </h3>
                  <p 
                    className="text-lg text-secondary leading-relaxed"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="px-6 py-20 bg-surface-elevated">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Perfect For Every Occasion
          </h2>
          <p 
            className="text-xl text-secondary mb-12 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Conferences • Team Offsites • Networking Mixers • Company Retreats • Industry Events
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                quote: "An elegant solution that brings people together naturally.",
                context: "Conference Organizer"
              },
              {
                quote: "Finally, an ice-breaker that doesn't feel forced or awkward.",
                context: "Event Coordinator"
              },
              {
                quote: "Professional, polished, and actually fun to use.",
                context: "Team Lead"
              }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="p-6 bg-white rounded-lg border border-gray-200"
              >
                <p 
                  className="text-primary-dark italic mb-4 leading-relaxed"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  "{testimonial.quote}"
                </p>
                <p 
                  className="text-sm text-secondary font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  — {testimonial.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className="text-4xl md:text-5xl font-display font-bold text-primary-dark mb-6 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ready to Transform Your Event?
          </h2>
          <p 
            className="text-xl text-secondary mb-10 leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Start creating meaningful connections in seconds.
          </p>
          <button
            onClick={onGetStarted}
            className="inline-block px-12 py-5 text-xl font-semibold text-white bg-primary rounded-lg hover:bg-primary-light transition-all duration-300 ease-out shadow-lg hover:shadow-xl hover:scale-105"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 bg-primary-dark text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 
            className="text-2xl font-display font-bold mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Soc Ops
          </h3>
          <p 
            className="text-gray-300 text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Professional networking, elevated.
          </p>
        </div>
      </footer>
    </div>
  );
}
