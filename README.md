# DigitRush - Lightning-Fast Math Challenge Game

DigitRush is an ultra-intense, lightning-fast math quiz game built on Reddit's Devvit platform that challenges players to solve arithmetic problems under extreme time pressure. With only **1 second** to complete as many problems as possible, this game transforms simple math into an adrenaline-fueled test of mental agility and quick thinking.

## What is DigitRush?

DigitRush is a revolutionary high-intensity mental math game that redefines competitive arithmetic gaming. Players face a relentless stream of randomly generated math problems across four operation types with an impossibly short time limit - just 1 second total! This creates the ultimate pressure-cooker environment where every millisecond counts.

The game runs natively within Reddit posts through the Devvit platform, allowing users to discover and play games directly from their Reddit feed without any downloads or external websites. Each Reddit post creates its own competitive environment with localized leaderboards and community challenges.

## Current Game Implementation

DigitRush is a **fully functional and complete math challenge game** featuring:

### 🎮 Complete Game Flow
- **Reddit Splash Screen**: Custom splash screen appears on Reddit feed with "DigitRush - Math Quiz Challenge" title, compelling description ("Test your math skills in 1 seconds!"), and "Tap to Start" button
- **StartPage**: Welcome screen with vibrant green "DigitRush" title using custom FFFFORWA font, animated "Start Playing" button with heartbeat animation, trophy icon for leaderboard access, and interactive "How to play?" modal
- **GamePlay**: Ultra-intense 1-second timed gameplay with auto-focused number inputs, instant color-coded feedback (green for correct, red for incorrect), real-time countdown timer, visual progress bar, and seamless problem transitions  
- **GameResults**: Comprehensive results screen with performance analysis, "NEW HIGH SCORE!" celebrations with party popper emojis, clock icon with "Time's Up!" message, and integrated leaderboard
- **Leaderboard**: Community competition with medal system (🥇🥈🥉), personal ranking display, live updates, and Redis-backed persistence

### 🧮 Mathematical Challenge System
- **Four Operation Types**: Addition, subtraction, multiplication, and division with balanced difficulty
- **Smart Problem Generation**: Server-side algorithm creates unique problems with proper mathematical symbols (×, ÷)
- **Real-Time Feedback**: Instant visual responses with answer reveals for learning and smooth CSS transitions
- **Unique Problem IDs**: Prevents duplicate submissions and ensures proper game flow

### 🏆 Competitive Features  
- **Post-Specific Leaderboards**: Each Reddit post maintains its own competitive environment
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 recognition for top performers
- **Personal Progress**: High score tracking, rank display, and motivational achievement messages
- **Real-Time Rankings**: Live leaderboard updates with automatic score persistence

### 🎨 Visual Design & User Experience
- **Dark Theme**: Professional gradient backgrounds (`bg-[#021013]`) with strategic color psychology and optimal readability
- **Multi-Font Typography**: Custom fonts loaded via CSS @font-face (FFFFORWA for headings, Medodica for body text, editundo for accents)
- **Mobile-First Design**: Touch-friendly interface with proper viewport settings (`user-scalable=no`) and 16px minimum font size to prevent iOS zoom
- **Color-Coded Feedback**: Green/red visual responses with smooth CSS transitions and instant answer reveals
- **Loading States**: Custom animated loading screen with "Loading" text, dynamic progress indicator, and brand colors (#00bf63)
- **Custom Animations**: Heartbeat animation for start button, bounce-in effects for achievements, and smooth state transitions

### Core Game Features

- **⚡ Ultra-Fast Lightning Rounds** - Only 1 second to solve as many problems as possible
- **🧮 Four Math Operation Types** - Addition, subtraction, multiplication, and division with balanced difficulty
- **🎯 Instant Visual Feedback** - Color-coded responses (green for correct, red for incorrect) with immediate answer reveals
- **🏆 Community Competition** - Post-specific leaderboards with medal system (🥇🥈🥉) for competitive play
- **🎨 Professional Dark Theme** - Clean, minimalist interface with custom typography and mobile-optimized design
- **📱 Zero-Install Reddit Gaming** - Plays directly within Reddit posts with full-screen immersion
- **🤖 Smart Problem Generation** - Server-side algorithms ensure unique, solvable problems with proper mathematical symbols
- **📊 Real-Time Score Tracking** - Live score updates with achievement celebrations and high score notifications
- **⏳ Custom Loading Experience** - Animated loading screen with brand colors and smooth transitions
- **🎮 Custom Splash Screen** - Compelling entry point on Reddit feed with "Tap to Start" button and game description

### Technical Architecture

Built with React 19.1.0 and TypeScript 5.8.2, DigitRush runs entirely within Reddit using the Devvit platform, allowing users to play directly from their Reddit feed without any external downloads or installations. The game features a sophisticated component architecture:

- **App.tsx**: Main application component with loading states and game flow routing
- **StartPage**: Welcome screen with leaderboard access, game instructions modal, and animated start button
- **GamePlay**: Real-time timed gameplay with auto-focused inputs, instant feedback, and visual progress indicators
- **GameResults**: Comprehensive results screen with performance analysis, achievement celebrations, and integrated leaderboard
- **Leaderboard**: Community competition display with medal system, personal rankings, and live updates
- **useMathGame Hook**: Custom React hook managing game state, timer precision, API interactions, and game lifecycle

## Current Game Implementation

DigitRush is a **fully functional and complete math challenge game** featuring:

### 🎮 Complete Game Flow
- **Reddit Splash Screen**: Custom splash screen appears on Reddit feed with "DigitRush - Math Quiz Challenge" title, compelling description ("Test your math skills in 1 seconds!"), and "Tap to Start" button
- **StartPage**: Welcome screen with vibrant green "DigitRush" title using custom FFFFORWA font, animated "Start Playing" button with heartbeat animation, trophy icon for leaderboard access, and interactive "How to play?" modal
- **GamePlay**: Ultra-intense 1-second timed gameplay with auto-focused number inputs, instant color-coded feedback (green for correct, red for incorrect), real-time countdown timer, visual progress bar, and seamless problem transitions  
- **GameResults**: Comprehensive results screen with performance analysis, "NEW HIGH SCORE!" celebrations with party popper emojis, clock icon with "Time's Up!" message, and integrated leaderboard
- **Leaderboard**: Community competition with medal system (🥇🥈🥉), personal ranking display, live updates, and Redis-backed persistence

### 🧮 Mathematical Challenge System
- **Four Operation Types**: Addition, subtraction, multiplication, and division with balanced difficulty
- **Smart Problem Generation**: Server-side algorithm creates unique problems with proper mathematical symbols (×, ÷)
- **Real-Time Feedback**: Instant visual responses with answer reveals for learning and smooth CSS transitions
- **Unique Problem IDs**: Prevents duplicate submissions and ensures proper game flow

### 🏆 Competitive Features  
- **Post-Specific Leaderboards**: Each Reddit post maintains its own competitive environment
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 recognition for top performers
- **Personal Progress**: High score tracking, rank display, and motivational achievement messages
- **Real-Time Rankings**: Live leaderboard updates with automatic score persistence

### 🎨 Visual Design & User Experience
- **Dark Theme**: Professional gradient backgrounds (`bg-[#021013]`) with strategic color psychology and optimal readability
- **Multi-Font Typography**: Custom fonts loaded via CSS @font-face (FFFFORWA for headings, Medodica for body text, editundo for accents)
- **Mobile-First Design**: Touch-friendly interface with proper viewport settings (`user-scalable=no`) and 16px minimum font size to prevent iOS zoom
- **Color-Coded Feedback**: Green/red visual responses with smooth CSS transitions and instant answer reveals
- **Loading States**: Custom animated loading screen with "Loading" text, dynamic progress indicator, and brand colors (#00bf63)
- **Custom Animations**: Heartbeat animation for start button, bounce-in effects for achievements, and smooth state transitions



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
- **Smart Problem Generation**: Server-side algorithms create unique, balanced math problems:
  - **Addition**: 2-digit + 2-digit (10-99 range, e.g., 45 + 67 = 112)
  - **Subtraction**: Guaranteed positive results (20-99 minus 10 to num1-1, e.g., 89 - 34 = 55)
  - **Multiplication**: 2-digit × 1-digit mental math (10-99 × 2-9, e.g., 23 × 7 = 161)
  - **Division**: Clean whole number results only (divisor 2-12, quotient 2-25, e.g., 84 ÷ 6 = 14)
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

### ⚡ Revolutionary 1-Second Lightning Challenge
DigitRush pushes the boundaries of mental math gaming with its **extreme 1-second time limit**. This isn't just fast-paced gaming - it's the ultimate test of mathematical reflexes where every millisecond counts. The impossibly short duration transforms simple arithmetic into heart-pounding, adrenaline-fueled challenges that demand instant mental calculation and lightning-fast responses.

### 🎮 Native Reddit Gaming Experience
Unlike traditional web games, DigitRush is **fully embedded within Reddit posts** with zero external downloads required. Players discover games organically through Reddit's feed, click a custom splash screen, and instantly launch into full-screen gaming experiences. Each Reddit post creates its own competitive environment with localized leaderboards, making every game instance a unique community challenge.

### 🧮 Precision Mathematical Engine
The game features a sophisticated **server-side problem generation system** that creates balanced, solvable math problems across four operation types:

- **Addition**: 2-digit + 2-digit (10-99 range, e.g., 45 + 67 = 112)
- **Subtraction**: Guaranteed positive results (20-99 minus 10 to num1-1, e.g., 89 - 34 = 55)  
- **Multiplication**: 2-digit × 1-digit mental math (10-99 × 2-9, e.g., 23 × 7 = 161)
- **Division**: Clean whole number results only (divisor 2-12, quotient 2-25, e.g., 84 ÷ 6 = 14)

Each problem includes unique IDs to prevent duplicate submissions and uses proper mathematical symbols (×, ÷) for clarity.

### 🏆 Community-Driven Competition
DigitRush creates authentic competitive gaming through **post-specific leaderboards** where each Reddit post maintains its own ranking system. Players compete for Gold 🥇, Silver 🥈, and Bronze 🥉 medals while tracking personal progress with real-time high score celebrations and achievement notifications.

### 🎨 Professional Mobile-First Design
The game features a **custom multi-font typography system** with three distinct fonts (FFFFORWA for headings, Medodica for body text, editundo for accents) and a strategic dark theme with vibrant green (#00bf63) branding. The interface provides instant visual feedback through color-coded responses (green for correct, red for incorrect) and smooth CSS animations optimized for mobile gaming.

### 🔧 Advanced Technical Innovation
Built with **React 19.1.0 and TypeScript 5.8.2**, DigitRush uses a sophisticated component architecture managed by a custom `useMathGame` React hook that handles real-time game state, timer precision, and API interactions. The backend leverages **Express and Redis** for problem generation, score persistence, and leaderboard management with automatic expiration policies.



## How to Play DigitRush

### 🚀 Getting Started

1. **Find a DigitRush Post** in Reddit communities or subreddits where the game has been shared
2. **View the Splash Screen**: You'll see a custom splash screen with:
   - **Title**: "DigitRush - Math Quiz Challenge"
   - **Description**: "Test your math skills in 1 seconds!" 
   - **Background**: Custom splash image (`default-splash.png`)
   - **App Icon**: DigitRush branding (`default-icon.png`)
3. **Click "Tap to Start"** on the splash screen to open the game in full-screen mode within Reddit
4. **Navigate the Start Screen**:
   - View the vibrant green "DigitRush" title with custom FFFFORWA font styling
   - Click the trophy icon (🏆) in the top-right to view the current leaderboard and top scores
   - Click "How to play?" for a detailed instructions modal with game rules
   - Click the animated green "Start Playing" button with heartbeat animation to begin your lightning-fast challenge

### ⚡ The Ultimate 1-Second Challenge

**WARNING: This is the most intense math game you'll ever play!**

DigitRush features an **extreme 1-second time limit** that creates the ultimate test of mathematical reflexes:

1. **Lightning Speed Challenge**: You have exactly **1 SECOND TOTAL** to solve as many problems as possible
2. **Solve Math Problems**: Each problem appears in large, clear text (3xl-5xl font size) with proper mathematical symbols:
   - **Addition**: "45 + 67 = ?" (2-digit + 2-digit, range 10-99)
   - **Subtraction**: "89 - 34 = ?" (guaranteed positive results, 20-99 minus 10 to num1-1)
   - **Multiplication**: "23 × 7 = ?" (2-digit × 1-digit, 10-99 × 2-9)
   - **Division**: "84 ÷ 6 = ?" (clean whole number results, divisor 2-12, quotient 2-25)

3. **Enter Your Answer**: Type in the auto-focused input field (optimized for mobile with 16px font to prevent zoom, number input with spinner arrows removed)

4. **Submit Instantly**: Press **Enter** or click the **✓** button to submit your answer

5. **Get Instant Feedback**:
   - **Green background** = Correct answer ✅ with "Correct!" message
   - **Red background** = Wrong answer ❌ with correct answer revealed for learning

6. **Race Against Time**: 
   - Visual progress bar shows time remaining with smooth animations (green normally, red when <10 seconds)
   - Timer displays seconds remaining in real-time with color coding
   - **Critical**: With only 1 second total, every millisecond is precious!

7. **Track Your Score**: Live score counter shows problems solved correctly in real-time

### 🏆 Results & Competition

After your lightning-fast 1-second challenge ends, you'll see:

- **Comprehensive Results Screen**: 
  - Clock icon with "Time's Up!" message in vibrant green (#86f6b1)
  - Performance analysis with detailed statistics including problems/minute and accuracy
  - Your final score displayed prominently in large text (5xl-6xl font size)
- **Personal Achievement Tracking**: 
  - "NEW HIGH SCORE!" celebration with party popper emojis (🎉) and pulsing animation for personal bests
  - High score comparison with trophy icon display
- **Community Leaderboard**: 
  - Side-by-side layout with integrated leaderboard on results screen
  - Compare against other players on the post-specific leaderboard with live updates
  - Personal ranking display with current position
- **Medal System**: Earn Gold 🥇, Silver 🥈, or Bronze 🥉 for top leaderboard performance with special styling
- **Play Again Options**: 
  - Click "Play Again" for another lightning round (with loading state and FFFFORWA font styling)
  - Click "Back to Menu" to return to the start screen

### 🧮 Mathematical Challenge System

DigitRush generates four types of balanced math problems using server-side algorithms:

- **Addition**: 2-digit + 2-digit numbers (10-99 range)
  - Example: 45 + 67 = 112
- **Subtraction**: Always produces positive results (20-99 minus 10 to num1-1)
  - Example: 89 - 34 = 55
- **Multiplication**: 2-digit × 1-digit mental math (10-99 × 2-9)
  - Example: 23 × 7 = 161
- **Division**: Clean whole number results only (divisor 2-12, quotient 2-25)
  - Example: 84 ÷ 6 = 14

Each problem includes unique IDs to prevent duplicate submissions and uses proper mathematical symbols for clarity.

### 🎮 Complete Game Flow

1. **Reddit Splash Screen**: Custom splash screen with "DigitRush - Math Quiz Challenge" title, game description, and "Tap to Start" button
2. **StartPage**: Welcome screen with vibrant green title, leaderboard access via trophy icon, "How to play?" modal, and animated "Start Playing" button
3. **GamePlay**: Ultra-intense 1-second timed challenge with auto-focused inputs, instant color-coded feedback, and real-time progress tracking
4. **GameResults**: Comprehensive results with clock icon, performance analysis, achievement celebrations, and side-by-side leaderboard integration
5. **Leaderboard**: Community competition with medal system, gradient backgrounds for top performers, and live ranking updates

### 💡 Pro Tips for 1-Second Mastery

Given the extreme 1-second time limit, success requires exceptional preparation and speed:

- **Mental Preparation**: Be ready to calculate before the problem appears - every millisecond counts
- **Use Enter Key**: Fastest possible submission method for lightning-quick responses
- **Master Speed Math**: With only 1 second, instant calculation ability is essential
- **Pattern Recognition**: Quickly identify easy problems (multiples of 10, simple divisions)
- **Stay Calm Under Extreme Pressure**: The 1-second limit creates maximum intensity
- **Accuracy Over Speed**: Even one correct answer in 1 second is a significant achievement
- **Finger Positioning**: Keep fingers ready on number keys and Enter for instant response
- **Trust Your Instincts**: No time to double-check - go with your first calculation
- **Practice Mental Math**: Regular practice outside the game improves in-game performance
- **Focus Completely**: Eliminate all distractions for maximum concentration during the 1-second window

### 🎯 Scoring & Achievement System

- **Base Scoring**: 1 point per correct answer
- **High Score Tracking**: Personal best scores saved permanently using Redis persistence
- **New High Score Celebration**: Special animations and congratulatory messages
- **Community Leaderboard Rankings**: Post-specific competition with live updates
- **Medal Recognition**: Gold, Silver, Bronze medals for top performers with special styling
- **Performance Analytics**: Detailed statistics including problems per minute and accuracy percentage
- **Achievement Notifications**: Real-time feedback for personal milestones and improvements





## Technical Configuration

### Game Settings
The game is currently configured with the following settings in `src/shared/constants.ts`:
- **Game Duration**: 1 second (ultra-fast lightning rounds for maximum intensity and adrenaline rush)
- **Low Time Threshold**: 10 seconds (when timer changes to red/urgent state - though with 1-second games, this creates immediate urgency)

### Splash Screen Configuration
The splash screen is configured in `src/server/core/post.ts` with:
- **App Display Name**: "DigitRush"
- **Heading**: "DigitRush - Math Quiz Challenge"  
- **Description**: "Test your math skills in 1 seconds!" (dynamically uses GAME_DURATION_SECONDS)
- **Button Label**: "Tap to Start"
- **Background Image**: `default-splash.png`
- **App Icon**: `default-icon.png`

### Font System
The game uses three custom fonts loaded via CSS @font-face with font-display: swap:
- **FFFFORWA**: Heading font (.font-heading class) for game titles like "DigitRush" and prominent UI elements
- **Medodica**: Primary body font (18px default, .font-mono class) for consistent readability and main interface text
- **editundo**: Accent font (.font-body class) for game descriptions, instructions, and secondary text

### Component Architecture
- **App.tsx**: Main application component with loading states, game flow routing, and custom loading animation
- **StartPage**: Welcome screen with leaderboard modal, "How to play?" instructions, and animated start button
- **GamePlay**: Core gameplay component with 1-second timer, auto-focused inputs, instant feedback, and progress bar
- **GameResults**: Results screen with clock icon, achievement celebrations, performance stats, and side-by-side leaderboard
- **Leaderboard**: Community competition display with medal system, gradient styling, and live rankings
- **useMathGame**: Custom React hook managing game state, 1-second timer precision, API interactions, and game lifecycle

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
- ✅ **Timed Challenges**: Heart-pounding countdown with visual progress (configurable duration)
- ✅ **Four Math Operations**: Addition, subtraction, multiplication, division
- ✅ **Real-Time Feedback**: Instant color-coded responses (green/red)
- ✅ **Community Leaderboards**: Post-specific competition with medal system
- ✅ **Mobile-Optimized**: Touch-friendly interface with proper viewport settings
- ✅ **Custom Typography**: Multi-font system with distinctive gaming aesthetic
- ✅ **Redis Persistence**: Scores and leaderboards saved permanently
- ✅ **Reddit Integration**: Native authentication and post-specific environments

## Current Implementation Status

DigitRush is a **fully functional math challenge game** ready for deployment on Reddit's Devvit platform. The game includes:

### ✅ Completed Features
- **Complete Game Loop**: Reddit splash screen → Start screen → 1-second gameplay → Results with smooth transitions
- **Real-Time Math Engine**: Four operation types with server-side problem generation and unique problem IDs
- **Instant Feedback System**: Color-coded responses (green/red) with answer reveals and smooth CSS transitions
- **Community Competition**: Post-specific leaderboards with medal system, gradient styling, and personal rankings
- **Mobile-Responsive Design**: Touch-friendly interface with custom fonts, animations, and proper viewport settings
- **Redis Data Persistence**: Game state, scores, high scores, and leaderboard data with automatic expiration policies
- **Comprehensive Error Handling**: Loading states, network failure recovery, user feedback, and game session management
- **Auto-Focused Inputs**: Seamless gameplay flow with Enter key support, mobile optimization, and spinner removal
- **Custom Splash Screen**: Compelling Reddit feed entry point with dynamic game description and branding

### ⚙️ Configuration Notes
- Game duration is set to 1 second in `src/shared/constants.ts` for ultra-intense lightning rounds that create maximum adrenaline and challenge
- All API endpoints (`/api/game/init`, `/api/game/start`, `/api/game/answer`, `/api/game/end`, `/api/leaderboard`) are fully functional with comprehensive error handling
- Custom fonts (FFFFORWA, Medodica, editundo) are properly loaded via CSS @font-face with font-display: swap for optimal performance
- CSS animations include heartbeat animation for start button, bounce-in effects for achievements, and smooth state transitions
- Mobile viewport settings (`user-scalable=no`, 16px minimum font size) prevent zoom on input focus for optimal mobile gaming experience
- Custom splash screen dynamically uses game duration in description and appears on Reddit feed with compelling branding to attract players

## Contributing

This is a Devvit application built for Reddit. To contribute:

1. Follow the development setup instructions above
2. Make changes and test using `npm run dev`
3. Ensure code quality with `npm run check`
4. Submit pull requests with clear descriptions

## License

This project is licensed under the BSD-3-Clause License.
