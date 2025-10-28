# DigitRush - Fast-Paced Math Challenge Game

DigitRush is an adrenaline-pumping math quiz game built on Reddit's Devvit platform that challenges players to solve arithmetic problems under intense time pressure. Race against a 30-second countdown timer while tackling addition, subtraction, multiplication, and division problems to achieve the highest score possible.

## What is DigitRush?

DigitRush is a high-intensity mental math game that transforms arithmetic practice into an exciting competitive experience. Players face a continuous stream of randomly generated math problems across four operation types with only 30 seconds to solve as many as possible. The game features:

- **Real-time 30-second gameplay** with dynamic countdown timer and visual progress bar
- **Four math operation types**: Addition, subtraction, multiplication, and division with balanced difficulty
- **Instant visual feedback** with color-coded responses (green for correct, red for incorrect)
- **Community leaderboards** with medal system (🥇🥈🥉) for competitive play
- **Clean, minimalist dark theme** with custom typography and mobile-optimized interface
- **Zero-install gaming** - plays directly within Reddit posts with full-screen immersion
- **Smart problem generation** - server-side algorithms ensure unique, solvable problems
- **Real-time score tracking** with motivational achievement messages
- **Custom animated loading screen** with "Loading" text and dynamic progress indicator

Built with React 19.1.0 and TypeScript 5.8.2, DigitRush runs entirely within Reddit using the Devvit platform, allowing users to play directly from their Reddit feed without any external downloads or installations. The game features a sophisticated component architecture with StartPage, GamePlay, GameResults, and Leaderboard components, all managed through a custom `useMathGame` React hook that handles real-time game state, timer management, and API interactions.

## Game Features & Current Implementation

DigitRush is a **fully functional and complete math challenge game** with the following core features:

### 🎮 Complete Game Flow
- **StartPage**: Clean interface with vibrant green "DigitRush" title using custom FFFFORWA font, prominent "Start Playing" button, trophy icon (🏆) for leaderboard access, and interactive "How to play?" modal with detailed instructions
- **GamePlay**: Real-time 30-second gameplay with auto-focused number inputs, instant color-coded feedback (green for correct, red for incorrect), dynamic countdown timer with urgency indicators, and seamless problem transitions
- **GameResults**: Comprehensive results screen with performance analysis, motivational achievement messages based on score ranges, high score celebrations with special animations, and integrated side-by-side leaderboard
- **Leaderboard**: Community competition with medal system (🥇🥈🥉), personal ranking display, live score updates, and Redis-backed persistence
- **Loading States**: Custom animated loading screen with "Loading" text and dynamic progress indicator using the game's brand colors

### 🧮 Mathematical Challenge System
- **Four Operation Types**: Addition (2-digit + 2-digit), Subtraction (guaranteed positive results), Multiplication (2-digit × 1-digit), Division (clean whole number results only)
- **Smart Problem Generation**: Server-side algorithm creates unique problems with balanced difficulty and proper mathematical symbols (×, ÷)
- **Real-Time Feedback**: Instant visual responses with answer reveals for learning, color-coded input backgrounds, and smooth CSS transitions
- **Unique Problem IDs**: Prevents duplicate submissions and ensures proper game flow with timestamp-based identification

### 🏆 Competitive Features
- **Post-Specific Leaderboards**: Each Reddit post maintains its own competitive environment with isolated scoring
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 recognition for top performers with special border styling
- **Personal Progress**: High score tracking, rank display, and motivational achievement messages ranging from encouragement to celebration
- **Real-Time Rankings**: Live leaderboard updates with automatic score persistence and user position tracking

## Technical Architecture

### Frontend (React 19.1.0 + TypeScript 5.8.2)
- **Component Architecture**: StartPage → GamePlay → GameResults flow with shared Leaderboard component
- **State Management**: Custom `useMathGame` hook managing game state, timer, and API interactions with real-time updates
- **Real-Time Game Engine**: Live countdown timer with automatic game ending, visual progress indicators, and seamless state transitions
- **Input Optimization**: Auto-focused inputs with Enter key support, mobile-friendly design, and prevention of iOS zoom on focus
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4.1.6, touch-optimized interface, and proper viewport settings
- **Loading States**: Custom CSS loading animation with "Loading" text and animated progress indicator

### Backend (Express 5.1.0 + Redis)
- **RESTful API Design**: Comprehensive endpoints for game lifecycle management:
  - `/api/game/init` - Initialize game session with user data and high scores
  - `/api/game/start` - Begin new game with first problem generation
  - `/api/game/answer` - Process answers and generate next problems
  - `/api/game/end` - Finalize scores and update leaderboards
  - `/api/leaderboard` - Fetch community rankings and user position
- **Smart Problem Generation**: Server-side algorithms create unique, balanced math problems with proper difficulty scaling
- **Redis Data Persistence**: 
  - Game state storage with 2-minute expiration for active sessions
  - High score tracking per Reddit post with permanent storage
  - Leaderboard management using Redis sorted sets for efficient ranking
- **User Authentication**: Seamless Reddit user integration through Devvit platform middleware
- **Game Session Management**: Unique game IDs, problem validation, and time-based game expiration

### Visual Design System
- **Multi-Font Typography**: Custom fonts with CSS @font-face loading and font-display: swap:
  - **FFFFORWA**: Heading font for game titles and prominent UI elements like "DigitRush" branding
  - **Medodica**: Primary body font (18px default) for consistent readability across devices and main interface text
  - **editundo**: Game titles, accent text, and monospace elements for distinctive gaming aesthetic
- **Dark Theme Design**: Professional gradient backgrounds (`from-black via-[#071019] to-[#021013]`) with strategic color psychology and subtle background shapes for depth
- **Brand Identity**: Vibrant green (#00bf63) primary color with accent variations (#86f6b1 for headings, #16a085 for borders) creating a cohesive gaming experience
- **Color-Coded Feedback System**: Green backgrounds for correct answers, red for incorrect, with smooth CSS transitions and visual confirmation
- **Animated Loading Screen**: Modern loading animation with "Loading" text and dynamic progress indicator using brand colors
- **Mobile Optimization**: 
  - Proper viewport settings with user-scalable=no for consistent mobile experience
  - 16px minimum font size to prevent iOS zoom on input focus
  - Touch-friendly button sizes and spacing optimized for thumb navigation
  - Removal of number input spinners for cleaner interface
  - Responsive text sizing with media queries for different screen sizes
- **Custom Animations**: 
  - Bounce-in effects for new elements and score celebrations
  - Smooth loading animations with CSS keyframes and modern styling
  - Smooth state transitions and hover effects with transform scaling
  - Progress bar animations with color changes based on time urgency (red when <10 seconds)

## What Makes DigitRush Innovative & Unique

### 🎮 Revolutionary Reddit-Native Gaming Experience
- **Zero-Install Gaming**: Fully embedded within Reddit posts - no external apps or downloads required
- **One-Click Launch**: Start gaming directly from Reddit feed with "Launch App" button
- **Full-Screen Immersion**: Seamless transition from Reddit post to immersive React-based gaming experience
- **Community-Driven Competition**: Each Reddit post creates its own competitive environment with localized leaderboards
- **Authenticated Gaming**: Automatic Reddit user authentication - no separate login required
- **Social Discovery**: Games spread organically through Reddit's sharing and community engagement

### ⚡ High-Intensity Time-Based Gameplay
- **30-Second Rush**: Heart-pounding countdown creates intense, fast-paced mathematical challenges
- **Dynamic Visual Feedback**: Progress bar turns red when under 10 seconds, creating urgency and excitement
- **Instant Problem Validation**: Immediate color-coded responses (green for correct, red for incorrect) with answer reveals
- **Continuous Flow**: Seamless problem transitions with auto-focused inputs and Enter key support
- **Real-Time State Management**: Custom `useMathGame` React hook manages complex game flow and timer management
- **Pressure-Cooker Design**: Time pressure transforms simple math into an adrenaline-fueled challenge

### 🧮 Adaptive Mathematical Challenge System
- **Four Operation Types**: Balanced difficulty across addition, subtraction, multiplication, and division
- **Smart Problem Algorithm**: Server-side generation ensures unique, solvable problems:
  - **Addition**: 2-digit + 2-digit (10-99 range, e.g., 45 + 67 = 112)
  - **Subtraction**: Guaranteed positive results (20-99 minus 10 to num1-1, e.g., 89 - 34 = 55)
  - **Multiplication**: 2-digit × 1-digit mental math (10-99 × 2-9, e.g., 23 × 7 = 161)
  - **Division**: Clean whole number results only (divisor 2-12, quotient 2-25, e.g., 84 ÷ 6 = 14)
- **Unique Problem IDs**: Prevents duplicate submissions and ensures proper game flow
- **Mathematical Symbols**: Clear display with proper symbols (×, ÷) for better readability

### 🏆 Community Competition & Social Gaming
- **Post-Specific Leaderboards**: Each Reddit post maintains its own competitive environment
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 recognition for top performers with special styling
- **Personal Progress Tracking**: Individual high score tracking, rank display, and motivational messages
- **Real-Time Rankings**: Live leaderboard updates with automatic score persistence via Redis
- **Social Integration**: Reddit username integration creates authentic community competition

### 🎨 Professional Visual Design & User Experience
- **Clean Dark Theme**: Minimalist interface with gradient backgrounds (`from-black via-[#071019] to-[#021013]`) for optimal readability
- **Strategic Color Psychology**: Vibrant green (#00bf63) brand identity and color-coded feedback systems
- **Multi-Font Typography System**: Custom fonts with CSS @font-face loading:
  - **FFFFORWA**: Heading font for game titles and prominent UI elements like "DigitRush" branding
  - **Medodica**: Primary body font (18px default) for consistent readability across devices
  - **editundo**: Game titles, accent text, and monospace elements for distinctive gaming aesthetic
- **Mobile-First Responsive Design**: Touch-friendly interface with proper viewport settings and user-scalable=no
- **Performance Optimized**: Lightweight design with custom CSS animations and smooth transitions
- **Component Architecture**: Modular React components with TypeScript interfaces and strict type checking
- **Modern Loading Experience**: Animated loading screen with dynamic progress indicators and smooth transitions

### 🔧 Technical Innovation
- **Real-Time Game Engine**: Custom React hook (`useMathGame`) manages game state, timer, and API interactions
- **Server-Side Problem Generation**: Express backend creates unique math problems with balanced difficulty algorithms
- **Redis-Powered Persistence**: Leaderboards and high scores stored with automatic expiration policies
- **Type-Safe API**: Comprehensive TypeScript interfaces ensure reliable client-server communication
- **Mobile Optimization**: CSS prevents zoom on input focus, removes number input spinners, and optimizes touch interactions



## How to Play DigitRush

### 🚀 Getting Started
1. **Find a DigitRush Post** in Reddit communities or subreddits
2. **Click "Launch App"** on the Reddit post to open the game in full-screen mode
3. **Navigate the Start Screen**:
   - View the vibrant green "DigitRush" title with custom FFFFORWA font styling
   - Click the trophy icon (🏆) in the top-right to view the current leaderboard and top scores
   - Click "How to play?" for detailed instructions modal with game rules
   - Click the green "Start Playing" button to begin your 30-second challenge

### ⚡ During Gameplay (30 Seconds)
1. **Solve Math Problems**: Each problem appears in large, clear text with proper mathematical symbols (e.g., "45 + 67 = ?", "84 ÷ 6 = ?")
2. **Enter Your Answer**: Type in the auto-focused input field (optimized for mobile with 16px font to prevent zoom)
3. **Submit**: Press Enter or click the ✓ button to submit your answer
4. **Get Instant Feedback**:
   - **Green background** = Correct answer ✅ with "Correct!" message
   - **Red background** = Wrong answer ❌ with correct answer revealed for learning
5. **Continue**: New problems appear immediately after each submission with seamless transitions
6. **Watch the Timer**: 
   - Visual progress bar shows time remaining with smooth animations
   - Timer turns red when under 10 seconds remain for urgency
   - Live countdown displays seconds remaining in real-time
7. **Track Your Score**: Live score counter shows problems solved correctly with current streak

### 🏆 Results & Competition
- **View Results**: Comprehensive results screen with performance analysis and statistics
- **Check Rankings**: Compare against other players on the post-specific leaderboard with live updates
- **Performance Stats**: View problems per minute, accuracy percentage, and detailed metrics
- **Motivational Messages**: Get personalized feedback based on your score:
  - 0 points: "Don't give up! Try again! 💪"
  - 1-5 points: "Good start! Keep practicing! 📚"
  - 6-10 points: "Nice work! You're getting better! 👍"
  - 11-15 points: "Great job! Math wizard in training! 🧙‍♂️"
  - 16-20 points: "Excellent! You're a math star! ⭐"
  - 21+ points: "Outstanding! Math genius level! 🏆"
- **High Score Celebration**: Special animation and "NEW HIGH SCORE!" message for personal bests
- **Play Again**: Click "🔄 Play Again" for another round or "🏠 Back to Menu" to return
- **Medal System**: Earn Gold 🥇, Silver 🥈, or Bronze 🥉 for top leaderboard performance

### 🧮 Problem Types & Difficulty
The game generates four types of balanced math problems with server-side algorithms:
- **Addition**: 2-digit + 2-digit (10-99 range, e.g., 45 + 67 = 112)
- **Subtraction**: Always positive results (20-99 minus 10 to num1-1, e.g., 89 - 34 = 55)
- **Multiplication**: 2-digit × 1-digit mental math (10-99 × 2-9, e.g., 23 × 7 = 161)
- **Division**: Clean whole numbers only (divisor 2-12, quotient 2-25, e.g., 84 ÷ 6 = 14)

### 🎮 Game Flow & Components
- **StartPage**: Welcome screen with leaderboard access, instructions modal, and game launch
- **GamePlay**: Real-time 30-second challenge with auto-focused inputs and instant feedback
- **GameResults**: Comprehensive results with performance analysis and leaderboard integration
- **Leaderboard**: Community competition with medal system and personal ranking display

### 💡 Pro Tips for High Scores
- **Use Enter key** for faster submission than clicking buttons
- **Stay calm** when the timer turns red - accuracy matters more than speed
- **Practice mental math** shortcuts like rounding to nearest 10 for addition/subtraction
- **Memorize multiplication tables** (2-12) for instant recognition of multiplication/division
- **Look for patterns** in easy problems to solve them quickly (e.g., multiples of 10)
- **Take advantage** of the auto-focused input for seamless gameplay flow
- **Don't panic** on wrong answers - learn from the revealed correct answer for improvement
- **Focus on accuracy** over speed - each correct answer counts equally regardless of time taken





## Development Setup

### Prerequisites
- Node.js 22+ (required for Devvit compatibility)
- Reddit account connected to Reddit developers

### Getting Started
1. **Clone and Install**
   ```bash
   git clone <repository-url>
   cd digitrush
   npm install
   ```

2. **Authenticate with Reddit**
   ```bash
   npm run login
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   This starts client, server, and Devvit in parallel with hot reloading.

4. **Test the Game**
   - Open the provided playtest URL in your browser
   - The game appears in a test subreddit post
   - Click "Launch App" to start playing

### Available Commands
- `npm run dev` - Development server with hot reloading
- `npm run build` - Build client and server for production
- `npm run deploy` - Upload new version to Reddit
- `npm run launch` - Publish app for review
- `npm run check` - Type check, lint, and format codeimalist interface with high contrast design using gradient backgrounds (`from-black via-[#071019] to-[#021013]`) for optimal readability and reduced eye strain


## Development Setup

> Requires Node.js 22+ for Devvit compatibility

### Initial Setup
1. Clone this repository
2. Run `npm install` to install dependencies
3. Ensure you have a Reddit account connected to Reddit developers
4. Run `npm run login` to authenticate with Reddit

### Local Development
1. Run `npm run dev` to start the development server
2. Open the provided playtest URL in your browser
3. The game will appear in a test subreddit post
4. Click "Launch App" to start playing

## Project Structure

```
src/
├── client/          # React frontend
│   ├── components/  # Game components (StartPage, GamePlay, GameResults, Leaderboard)
│   ├── hooks/       # Custom React hooks (useMathGame)
│   ├── public/      # Static assets (fonts, images)
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Styles with custom fonts and animations
├── server/          # Express backend
│   ├── core/        # Business logic
│   └── index.ts     # API endpoints and game logic
└── shared/          # Shared TypeScript types
    └── types/api.ts # API interfaces
```

## Key Features Summary

- ✅ **Complete Game Flow**: Start → Play → Results with smooth transitions
- ✅ **30-Second Timed Challenges**: Heart-pounding countdown with visual progress
- ✅ **Four Math Operations**: Addition, subtraction, multiplication, division
- ✅ **Real-Time Feedback**: Instant color-coded responses (green/red)
- ✅ **Community Leaderboards**: Post-specific competition with medal system
- ✅ **Mobile-Optimized**: Touch-friendly interface with proper viewport settings
- ✅ **Custom Typography**: Multi-font system with distinctive gaming aesthetic
- ✅ **Redis Persistence**: Scores and leaderboards saved permanently
- ✅ **Reddit Integration**: Native authentication and post-specific environments

## Contributing

This is a Devvit application built for Reddit. To contribute:

1. Follow the development setup instructions above
2. Make changes and test using `npm run dev`
3. Ensure code quality with `npm run check`
4. Submit pull requests with clear descriptions

## License

This project is licensed under the BSD-3-Clause License.
