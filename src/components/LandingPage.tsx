interface LandingPageProps {
  onGetStarted: () => void;
}

export function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="min-h-full bg-retro-cream retro-dots-bg overflow-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-retro-red via-retro-orange to-retro-yellow py-16 px-6 text-center">
        <div className="absolute inset-0 retro-stripes-bg opacity-20"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Decorative bingo balls */}
          <div className="flex justify-center gap-4 mb-6">
            {['B', 'I', 'N', 'G', 'O'].map((letter, i) => (
              <div
                key={letter}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-retro-dark flex items-center justify-center font-display text-2xl md:text-3xl font-bold text-retro-dark shadow-lg"
                style={{
                  animation: `bingo-ball-bounce 2s ease-in-out ${i * 0.1}s infinite`,
                }}
              >
                {letter}
              </div>
            ))}
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-white retro-text-shadow mb-4 tracking-wider">
            SOCIAL BINGO!
          </h1>
          
          <p className="text-xl md:text-2xl text-retro-dark font-semibold mb-8 font-body">
            The Classic Game Meets Modern Networking
          </p>
          
          <button
            onClick={onGetStarted}
            className="group relative inline-block px-8 py-4 md:px-12 md:py-5 bg-retro-green text-white font-display text-3xl md:text-4xl font-bold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 active:scale-95 transition-all duration-200 border-4 border-retro-dark overflow-hidden"
          >
            <span className="relative z-10 retro-text-shadow">PLAY NOW!</span>
            <div className="absolute inset-0 bg-retro-teal transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>
        </div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-16">
            <path d="M0,0 C300,80 600,80 900,0 L900,120 L0,120 Z" fill="#fef8e7" />
          </svg>
        </div>
      </div>

      {/* Features Section - Bingo Card Style */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="font-display text-4xl md:text-5xl text-center text-retro-dark mb-12 retro-text-shadow">
          WHY YOU'LL LOVE IT
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: '🎯', title: 'CLASSIC FUN', desc: 'Timeless gameplay everyone knows' },
            { icon: '🎉', title: 'NO EXPERIENCE', desc: 'Jump right in and start playing' },
            { icon: '🤝', title: 'MEET PEOPLE', desc: 'Break the ice effortlessly' },
            { icon: '⚡', title: 'INSTANT NOSTALGIA', desc: 'Remember game night vibes' },
          ].map((feature, i) => (
            <div
              key={i}
              className="bg-white border-4 border-retro-dark p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-rotate-1 transition-all duration-300"
              style={{
                animation: `slide-up 0.6s ease-out ${i * 0.1}s both`,
              }}
            >
              <div className="text-5xl mb-3">{feature.icon}</div>
              <h3 className="font-display text-xl md:text-2xl text-retro-red mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 font-body">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works - Instruction Card Style */}
      <div className="bg-gradient-to-r from-retro-blue to-retro-teal py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-center text-white mb-12 retro-text-shadow">
            HOW TO PLAY
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: 'B-1', title: 'Pick Your Card', desc: 'Get your unique bingo card with conversation starters' },
              { num: 'I-2', title: 'Find Matches', desc: 'Mingle and find people who match each square' },
              { num: 'N-3', title: 'Shout BINGO!', desc: 'Get 5 in a row and celebrate your win!' },
            ].map((step, i) => (
              <div
                key={i}
                className="bg-retro-yellow border-4 border-retro-dark rounded-lg p-6 md:p-8 shadow-xl transform hover:scale-105 transition-transform duration-200"
                style={{
                  animation: `slide-up 0.6s ease-out ${i * 0.15 + 0.3}s both`,
                }}
              >
                <div className="inline-block bg-retro-red text-white font-display text-3xl md:text-4xl px-4 py-2 rounded-full mb-4 border-4 border-retro-dark retro-text-shadow">
                  {step.num}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-retro-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-retro-dark font-body font-semibold">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section - Vintage Ad Style */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white border-8 border-retro-orange rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-retro-red rounded-full -mr-16 -mt-16 opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-retro-blue rounded-full -ml-20 -mb-20 opacity-20"></div>
          
          <div className="relative z-10 text-center">
            <div className="text-6xl mb-4">🎊</div>
            <blockquote className="font-body text-xl md:text-2xl text-gray-800 mb-6 italic">
              "Just like the classic game nights, but for networking! Everyone instantly gets it, everyone can play, and the ice just melts away."
            </blockquote>
            <p className="font-display text-2xl md:text-3xl text-retro-red">
              — EVERY HAPPY PLAYER
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-retro-dark py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl text-retro-yellow mb-6 retro-text-shadow">
            READY TO PLAY?
          </h2>
          <p className="text-xl md:text-2xl text-retro-cream mb-8 font-body">
            The ice breaker that never gets old
          </p>
          
          <button
            onClick={onGetStarted}
            className="group relative inline-block px-10 py-5 md:px-16 md:py-6 bg-gradient-to-r from-retro-orange via-retro-red to-retro-orange text-white font-display text-4xl md:text-5xl font-bold rounded-xl shadow-2xl hover:shadow-retro-yellow/50 transform hover:scale-105 active:scale-95 transition-all duration-300 border-4 border-retro-yellow"
            style={{
              backgroundSize: '200% 100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundPosition = '100% 0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundPosition = '0% 0';
            }}
          >
            <span className="retro-text-shadow">START PLAYING!</span>
          </button>
          
          {/* Decorative elements */}
          <div className="flex justify-center gap-8 mt-12">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                key={num}
                className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-retro-yellow text-retro-dark flex items-center justify-center font-display text-lg md:text-xl font-bold border-2 border-retro-cream"
                style={{
                  animation: `retro-pulse 2s ease-in-out ${num * 0.2}s infinite`,
                }}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
