interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="min-h-full overflow-hidden bg-gradient-to-br from-[#ff6b35] via-[#f72585] to-[#00b4d8] animate-gradient">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-[90vh] px-6 py-12 text-white">
        <div className="max-w-4xl w-full text-center">
          {/* Headline */}
          <h1 
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 initial-hidden animate-fade-up font-display"
          >
            Break the Ice with
            <br />
            <span className="text-[#ffd60a] drop-shadow-lg">Social Bingo!</span>
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl mb-10 text-white/90 font-medium initial-hidden animate-fade-up delay-100 font-body"
          >
            Turn networking into a game. Find matches, make connections, win big!
          </p>
          
          {/* CTA Button */}
          <button
            onClick={onStart}
            aria-label="Start playing Social Bingo"
            className="initial-hidden animate-bounce-in delay-200 bg-white text-[#f72585] font-bold text-xl sm:text-2xl px-10 py-5 rounded-full shadow-2xl hover:scale-110 hover:rotate-2 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 font-display"
          >
            🎉 Start Playing Now!
          </button>
          
          {/* Floating emoji decoration */}
          <div className="mt-12 text-6xl initial-hidden animate-float delay-300">
            🎲
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 py-16 bg-white/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white font-display"
          >
            Why You'll Love It
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">⚡</div>
              <h3 
                className="text-xl font-bold mb-2 text-[#ff6b35] font-display"
              >
                No Setup Required
              </h3>
              <p className="text-gray-700">
                Jump right in! No registration, no downloads, just pure fun.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">📱</div>
              <h3 
                className="text-xl font-bold mb-2 text-[#00b4d8] font-display"
              >
                Mobile-Friendly
              </h3>
              <p className="text-gray-700">
                Play anywhere, anytime on any device. Perfect for on-the-go networking.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🎊</div>
              <h3 
                className="text-xl font-bold mb-2 text-[#f72585] font-display"
              >
                Instant Fun
              </h3>
              <p className="text-gray-700">
                Break awkward silences and spark conversations in seconds.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 
                className="text-xl font-bold mb-2 text-[#06d6a0] font-display"
              >
                Perfect for Events
              </h3>
              <p className="text-gray-700">
                Conferences, meetups, parties—make any gathering memorable!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white font-display"
          >
            How It Works
          </h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
              <div 
                className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#ffd60a] text-[#ff6b35] flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg font-display"
              >
                1
              </div>
              <div className="text-white">
                <h3 
                  className="text-xl sm:text-2xl font-bold mb-2 font-display"
                >
                  Get Your Bingo Card
                </h3>
                <p className="text-white/90 text-base sm:text-lg">
                  Click "Start Playing" and receive a personalized bingo card filled with fun conversation prompts.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
              <div 
                className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#ffd60a] text-[#00b4d8] flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg font-display"
              >
                2
              </div>
              <div className="text-white">
                <h3 
                  className="text-xl sm:text-2xl font-bold mb-2 font-display"
                >
                  Find People Who Match
                </h3>
                <p className="text-white/90 text-base sm:text-lg">
                  Mingle and chat! When you meet someone who matches a prompt, tap that square.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="flex items-start gap-4 bg-white/20 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/30 transition-colors">
              <div 
                className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#ffd60a] text-[#f72585] flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg font-display"
              >
                3
              </div>
              <div className="text-white">
                <h3 
                  className="text-xl sm:text-2xl font-bold mb-2 font-display"
                >
                  Score Bingo & Celebrate!
                </h3>
                <p className="text-white/90 text-base sm:text-lg">
                  Get 5 in a row (horizontal, vertical, or diagonal) and win! Share your victory!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white font-display"
          >
            Ready to Play?
          </h2>
          <p 
            className="text-xl sm:text-2xl mb-8 text-white/90 font-body"
          >
            Join the fun and make meaningful connections today!
          </p>
          <button
            onClick={onStart}
            aria-label="Start playing Social Bingo"
            className="bg-white text-[#f72585] font-bold text-xl sm:text-2xl px-10 py-5 rounded-full shadow-2xl hover:scale-110 hover:-rotate-2 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50 font-display"
          >
            🚀 Let's Go!
          </button>
        </div>
      </div>
    </div>
  );
}
