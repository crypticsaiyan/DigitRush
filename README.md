# DigitRush - Lightning-Fast Math Challenge Game

DigitRush is an ultra-intense, lightning-fast math quiz game built on Reddit's Devvit platform that challenges players to solve arithmetic problems under extreme time pressure. With only **1 second** to complete as many problems as possible, this game transforms simple math into an adrenaline-fueled test of mental agility and quick thinking.

## What is DigitRush?

DigitRush is a revolutionary high-intensity mental math game that redefines competitive arithmetic gaming. Players face a relentless stream of randomly generated math problems across four operation types with an impossibly short time limit - just 1 second total! This creates the ultimate pressure-cooker environment where every millisecond counts.

The game runs natively within Reddit posts through the Devvit platform, allowing users to discover and play games directly from their Reddit feed without any downloads or external websites. Each Reddit post creates its own competitive environment with localized leaderboards and community challenges.

## Game Overview

DigitRush is a **complete and fully functional** React-based math challenge game featuring:

- **Ultra-Fast 1-Second Gameplay**: The most intense math challenge ever created - solve as many problems as possible in just 1 second
- **Four Math Operations**: Addition, subtraction, multiplication, and division with balanced difficulty levels
- **Smart Problem Generation**: Server-side algorithms create unique, solvable problems with proper mathematical symbols (×, ÷)
- **Real-Time Competition**: Post-specific leaderboards with medal system (🥇🥈🥉) and live rankings
- **Professional Design**: Dark theme with custom typography, mobile-optimized interface, and smooth animations
- **Reddit Integration**: Native splash screen, seamless user authentication, and zero-install gameplay

## Current Game Implementation

DigitRush is a **fully functional and complete math challenge game** featuring:

### 🎮 Complete Game Flow
- **Reddit Splash Screen**: Custom splash screen appears on Reddit feed with "DigitRush - Math Quiz Challenge" title, compelling description ("Test your math skills in 1 seconds!"), and "Tap to Start" button
- **StartPage**: Welcome screen with vibrant green "DigitRush" title using custom FFFFORWA font, animated "Start Playing" button with heartbeat animation, trophy icon for leaderboard access, and interactive "How to play?" modal
- **GamePlay**: Ultra-intense 1-second timed gameplay with auto-focused number inputs, instant color-coded feedback (green for correct, red for incorrect), real-time countdown timer, visual progress bar, and seamless problem transitions  
- **GameResults**: Comprehensive results screen with performance analysis, "NEW HIGH SCORE!" celebrations with party popper emojis, "Time's Up!" message, and play again options
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

## What Makes DigitRush Unique

### ⚡ Revolutionary 1-Second Lightning Challenge
DigitRush is the **only math game** that challenges players to solve problems in just 1 second total. This creates an unprecedented level of intensity where mental math becomes a test of pure reflexes and mathematical intuition.

### 🎮 Native Reddit Gaming Experience
Unlike traditional web games, DigitRush is **fully embedded within Reddit posts** with zero external downloads required. Players discover and play games directly from their Reddit feed, creating seamless social gaming experiences.

### 🧮 Precision Mathematical Engine
The game features a sophisticated **server-side problem generation system** that creates balanced, solvable math problems:

- **Addition**: 2-digit + 2-digit numbers (10-99, e.g., 45 + 67 = 112)
- **Subtraction**: Guaranteed positive results (20-99 minus 10 to num1-1, e.g., 89 - 34 = 55)  
- **Multiplication**: 2-digit × 1-digit mental math (10-99 × 2-9, e.g., 23 × 7 = 161)
- **Division**: Clean whole number results (divisor 2-12, quotient 2-25, e.g., 84 ÷ 6 = 14)

Each problem includes unique IDs to prevent duplicate submissions and uses proper mathematical symbols (×, ÷) for clarity.

### 🏆 Community-Driven Competition
DigitRush creates authentic competitive gaming through **post-specific leaderboards** where each Reddit post maintains its own ranking system. Players compete for Gold 🥇, Silver 🥈, and Bronze 🥉 recognition with live rankings.

### 🎨 Professional Game Design
The game features a **custom multi-font typography system** with three specialized fonts (FFFFORWA for headings, Medodica for body text, editundo for accents) and a carefully crafted dark theme optimized for intense gameplay sessions.

### 🔧 Advanced Technical Innovation
Built with **React 19.1.0 and TypeScript 5.8.2**, DigitRush uses a sophisticated component architecture with custom hooks, real-time state management, and seamless client-server communication through Express.js APIs.



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
   - Read "How to play?" instructions in the interactive modal with clear game rules
   - Click the animated "Start Playing" button to begin your challenge

### ⚡ The Ultimate 1-Second Challenge

**WARNING: This is the most intense math game you'll ever play!**

DigitRush features an **extreme 1-second time limit** that creates the ultimate test of mathematical reflexes:

1. **Lightning Speed Challenge**: You have exactly **1 SECOND TOTAL** to solve as many problems as possible

2. **Solve Math Problems**: Each problem appears in large, clear text with proper mathematical symbols:
   - **Addition**: "45 + 67 = ?" (2-digit + 2-digit, range 10-99)
   - **Subtraction**: "89 - 34 = ?" (guaranteed positive results, range 20-99 minus 10 to num1-1)
   - **Multiplication**: "23 × 7 = ?" (2-digit × 1-digit mental math, 10-99 × 2-9)
   - **Division**: "84 ÷ 6 = ?" (clean whole number results, divisor 2-12, quotient 2-25)

3. **Enter Your Answer**: Type in the auto-focused input field (optimized for mobile and desktop)

4. **Submit Instantly**: Press **Enter** or click the **✓** button to submit your answer

5. **Get Instant Feedback**:
   - **Green background** = Correct answer ✅ with "Correct!" message
   - **Red background** = Wrong answer ❌ with correct answer revealed for learning

6. **Race Against Time**: 
   - Visual progress bar shows remaining time (out of 1 second)
   - Timer displays seconds remaining in real-time with color coding (green to red as time runs out)
   - **Critical**: With only 1 second total, every millisecond counts!

7. **Track Your Score**: Live score counter shows problems solved correctly in real-time

### 📱 Game Interface

The game features a clean, mobile-optimized interface with:

- **Dark Theme**: Professional gradient backgrounds (`#021013`) optimized for focus and readability
- **Custom Typography**: Three specialized fonts for different UI elements (FFFFORWA, Medodica, editundo)
- **Auto-Focus Input**: Number input automatically focuses for instant typing
- **Visual Progress Bar**: Real-time countdown with color transitions (green to red)
- **Instant Feedback**: Color-coded responses with smooth CSS transitions
- **Mobile Viewport**: Optimized for touch devices with proper scaling and 16px minimum font size

### 🏆 Game Results & Competition

After your lightning-fast 1-second challenge ends, you'll see:

- **Comprehensive Results Screen**: 
  - "Time's Up!" message in vibrant green with custom typography
  - Performance analysis with detailed statistics including problems/minute and accuracy
  - Your final score displayed prominently with color-coded styling
- **Personal Achievement Tracking**: 
  - "NEW HIGH SCORE!" celebration with party popper emojis (🎉) and pulsing animation for personal bests
  - High score comparison and personal progress display with trophy icon
- **Community Competition**: 
  - Access the leaderboard to compare against other players on the post-specific rankings
  - Personal ranking display with current position and medal system
- **Medal System**: Earn Gold 🥇, Silver 🥈, or Bronze 🥉 for top leaderboard positions with gradient backgrounds and special styling
- **Play Again Options**: 
  - Click "Play Again" for another lightning round with improved button styling
  - Click "Back to Menu" to return to the start screen
  - Click "View Leaderboard" to see community rankings in a modal overlay

### 🎯 Step-by-Step Gameplay Instructions

1. **Start the Game**:
   - Click "Tap to Start" on the Reddit splash screen
   - View the welcome screen with game title and instructions
   - Click the animated "Start Playing" button to begin

2. **During Gameplay** (1 second total):
   - A math problem appears immediately (e.g., "45 + 67 = ?")
   - The input field is automatically focused for instant typing
   - Type your answer as quickly as possible
   - Press Enter or click ✓ to submit
   - Get instant visual feedback (green = correct, red = incorrect)
   - If correct, your score increases and a new problem appears
   - Continue until the 1-second timer expires

3. **View Results**:
   - See your final score and performance statistics
   - Check if you achieved a new personal high score
   - Compare your performance with previous attempts

4. **Check Leaderboard**:
   - View community rankings for this specific Reddit post
   - See your current rank and medal status
   - Compare scores with other players

5. **Play Again**:
   - Click "Play Again" for another 1-second challenge
   - Or return to the menu to view instructions or leaderboard

### 🧮 Mathematical Challenge System

DigitRush generates four types of balanced math problems:

- **Addition**: 2-digit + 2-digit numbers (10-99)
  - Example: 45 + 67 = 112
- **Subtraction**: Guaranteed positive results (20-99 minus 10 to num1-1)
  - Example: 89 - 34 = 55
- **Multiplication**: 2-digit × 1-digit mental math (10-99 × 2-9)
  - Example: 23 × 7 = 161
- **Division**: Clean whole number results (divisor 2-12, quotient 2-25)
  - Example: 84 ÷ 6 = 14

Each problem includes unique IDs to prevent duplicate submissions and uses proper mathematical symbols (×, ÷) for clarity.

### 🎮 Complete Game Flow

1. **Splash Screen**: Custom Reddit splash screen with "Tap to Start" button and branded visuals
2. **StartPage**: Welcome screen with vibrant green title, leaderboard access via trophy icon, "How to play?" modal with game rules, and animated start button
3. **GamePlay**: Ultra-intense 1-second gameplay with auto-focused inputs, real-time problem solving, instant color-coded feedback, and visual progress bar
4. **GameResults**: Comprehensive results screen with achievement celebrations, performance analysis, improved button styling, and modal leaderboard access
5. **Leaderboard**: Community competition with medal system, gradient backgrounds for top performers, live ranking updates, and user position tracking

### 💡 Pro Tips for 1-Second Mastery

- **Mental Preparation**: Be ready to calculate before the problem appears - every millisecond counts
- **Pattern Recognition**: Learn common multiplication tables and addition patterns for instant recall
- **Stay Calm Under Extreme Pressure**: The 1-second limit creates intense pressure - practice staying focused
- **Finger Positioning**: Keep fingers ready on the number keys for lightning-fast response
- **Use Enter Key**: Press Enter to submit answers quickly instead of clicking the ✓ button
- **Quick Estimation**: For complex problems, use estimation techniques to narrow down answers
- **Practice Mental Math**: Regular practice outside the game improves in-game performance significantly
- **Focus Completely**: Eliminate all distractions for maximum concentration during the 1-second window
- **Mobile Optimization**: The game is optimized for mobile with touch-friendly inputs, proper viewport settings, and responsive button layouts

### 🎮 Game Features Summary

**Core Gameplay**:
- 1-second total time limit for maximum intensity
- Four math operation types with balanced difficulty
- Auto-focused input for instant response
- Real-time visual feedback and scoring

**User Interface**:
- Professional dark theme with custom fonts
- Mobile-optimized responsive design
- Smooth animations and transitions
- Visual progress bar with color coding

**Competition & Social**:
- Post-specific leaderboards with medal system
- Personal high score tracking
- Community rankings and achievements
- Reddit user integration

**Technical Features**:
- React 19.1.0 with TypeScript 5.8.2
- Express.js backend with Redis persistence
- Real-time client-server communication
- Unique problem generation with anti-cheat measures

### 🎯 Scoring & Achievement System

- **Base Scoring**: 1 point per correct answer
- **High Score Tracking**: Personal best scores saved permanently using Redis persistence
- **New High Score Celebration**:es
- **Community Leaderboard Rankings**: Post-specific competition with live updates
- **Medal Recognition**: Gold, Silver, Bronze medals for top performers with special styling
- **Performance Analytics**: Detailed statistics including problems per minge
- **Achievement Notifications**: Real-time feedback for personal milestones and improvements

## Technical Architecture

### Frontend (React 19.1.0 + TypeScript 5.8.2)
- **Component Architecture**: Clean separation with App.tsx routing between StartPage, GamePlay, GameResults, and Leaderboard components
- **State Management**: Custom `useMathGame` hook managing game state, 1-second timer precision, and API interactions with real-time updates
- **Input Optimization**: Auto-focused inputs with Enter key support, mobile-friendly design (16px font size), and prevention of iOS zoom
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4.1.6, touch-optimized interface, and proper viewport settings
- **Loading States**: Custom CSS loading animation with "Loading" text, animated progress indicator, and brand-consistent styling
- **Modal System**: Overlay modals for "How to play?" instructions and leaderboard display with proper accessibility
- **Button Styling**: Improved button layouts with flex-1 classes, proper centering, and disabled states

### Backend (Express 5.1.0 + Redis)
- **RESTful API Design**: Comprehensive endpoints for game lifecycle management:
  - `/api/game/init` - Initialize game with user data and high scores
  - `/api/game/start` - Begin new game with first problem generation  
  - `/api/game/answer` - Process answers and generate next problems
  - `/api/game/end` - Finalize scores and update leaderboards
  - `/api/leaderboard` - Fetch community rankings and user position
- **Smart Problem Generation**: Server-side algorithms creating balanced problems:
  - **Addition**: 2-digit + 2-digit (10-99 range, e.g., 45 + 67 = 112)
  - **Subtraction**: Guaranteed positive results (20-99 minus 10 to num1-1, e.g., 89 - 34 = 55)
  - **Multiplication**: Mental math friendly (10-99 × 2-9, e.g., 23 × 7 = 161)
  - **Division**: Clean whole number results (divisor 2-12, quotient 2-25, e.g., 84 ÷ 6 = 14)
- **Redis Data Persistence**: 
  - Game state storage with 2-minute expiration for active sessions
  - High score tracking per Reddit post with permanent storage
  - Leaderboard management using Redis sorted sets for efficient ranking
- **User Authentication**: Seamless Reddit user integration through Devvit platform middleware

### Design System
- **Multi-Font Typography**: Custom fonts with CSS @font-face preloading and font-display: swap:
  - **FFFFORWA**: Heading font (.font-heading) for titles like "DigitRush" and prominent UI elements
  - **Medodica**: Primary body font (18px default, .font-mono) for readability and consistency
  - **editundo**: Accent font (.font-body) for descriptive text and secondary elements
- **Dark Theme Design**: Professional gradient backgrounds (`bg-[#021013]`) with strategic color psychology
- **Brand Identity**: Vibrant green (#00bf63, #86f6b1) primary colors with accent variations for optimal user experience
- **Color-Coded Feedback System**: Green/red visual responses with smooth CSS transitions and instant answer reveals
- **Animated Loading Screen**: Modern loading animation with "Loading" text, dynamic progress indicator, and brand colors
- **Mobile Optimization**: 
  - Proper viewport settings for consistent mobile experience
  - 16px minimum font size to prevent iOS zoom on input focus
  - Touch-friendly button sizes and spacing optimized for thumb navigation
  - Removal of number input spinners (-webkit-appearance: none) for cleaner interface
  - Responsive text sizing with media queries for different screen sizes
  - Improved button layouts with flex-1 classes and proper alignment
- **Custom Animations**: 
  - Bounce-in effects (@keyframes bounce-in) for new elements and score celebrations
  - Heartbeat animation (@keyframes heartbeat) for interactive elements
  - Smooth loading animations with CSS keyframes and timing functions
  - Progress bar animations with color transitions (green to red as time runs out)
- **Modal System**: Overlay modals with backdrop blur, proper z-indexing, and click-outside-to-close functionality

## Technical Configuration

### Game Settings
The game is currently configured in `src/shared/constants.ts`:
- **Game Duration**: 1 second (ultra-fast lightning rounds for maximum intensity)
- **Low Time Threshold**: 10 seconds (for visual warnings, though not applicable in 1-second games)

### Splash Screen Configuration
The splash screen is configured in `src/server/core/post.ts` with:
- **App Display Name**: "DigitRush - Math Quiz Challenge"
- **Description**: "Test your math skills in 1 seconds!" (dynamically uses GAME_DURATION_SECONDS)
- **Action Text**: "Tap to Start"
- **Background Image**: `default-splash.png`
- **App Icon**: `default-icon.png`

### Font System
The game uses three custom fonts loaded via CSS @font-face with font-display: swap:
- **FFFFORWA**: Heading font (.font-heading class) for game titles like "DigitRush" and prominent UI elements
- **Medodica**: Primary body font (18px default, .font-mono class) for consistent readability and main interface text
- **editundo**: Accent font (.font-body class) for descriptive text and secondary elements

### Component Architecture
- **App.tsx**: Main application component with loading states, game flow routing (start/menu/playing/finished), and custom loading animation
- **StartPage**: Welcome screen with leaderboard access via trophy button, how-to-play modal with game rules, and animated start button
- **GamePlay**: Core gameplay component with 1-second timer, auto-focused inputs, instant color-coded feedback, visual progress bar, and real-time score tracking
- **GameResults**: Results screen with achievement celebrations, performance stats, improved button styling with flex layouts, play-again options, and modal leaderboard access
- **Leaderboard**: Community competition display with medal system (🥇🥈🥉), gradient styling for top performers, live rankings, and user position tracking
- **useMathGame**: Custom React hook managing game state, 1-second timer precision, API interactions, score tracking, and game lifecycle management

## Development Setup

### Prerequisites
- Node.js 22+ (required for Devvit compatibility)
- Reddit account connected to Reddit developers

### Getting Started
l**
   ```bash
   git clone <repository-url>
   cd digitrush
   npm install
   ```

2. **Authenticate with Reddit**

n
 ```


   ```bash

   ```
   This starts client, server, and Devvit in parallel with hot reloading.

4. **Test the Game**

   - The game appears in a testit post
   - Click "Launch App" to start playing

### Available Commands
- `npm run dev` - Development server with hot reloading
- `npm run build` - Build client action
- `npm run deploy` - Upload new version to Rdit
- `npm run launch` - Publish app f
e

## Project Structure

```
src/
ontend
│   ├── components/  # Gamderboard)
│   ├── hooks/       # Custom React hooks (useMathGame)
│   ├── public/      # Static assets (fonts, images)
│   ├── App.tsx      # Main app component
│   ├── main.tsx     # Entry point
│   └── index.css    # Styles with custom fonts and animations
├── server/          # Express backend
c
│   └── index.ts    c
ypes
    └── types/apinterfaces
```



- ✅ **Complete Game Flownsitions
- ✅ **Timen)
- ✅ **Four Math Operations**:
- ✅ **Real-Time
- ✅ **Communit
- ✅ **ettings

- ✅ **Redis Persistence**: Scor
- ✅ **Reddonments

## Current Status

DigitRush is a **fully functional and production-ready math challenge game**.

### ✅ Complete Features
- **Complete Game Flow**: Splash screen → Start page → Gameplay → Results → Leaderboard with seamless transitions
- **Real-Time Math Engine**: Four operation types with server-side problem generation, unique IDs, and proper mathematical symbols (×, ÷)
- **1-Second Lightning Challenge**: Ultra-intense gameplay with precise timing, instant feedback, and auto-focused inputs
- **Community Competition**: Post-specific leaderboards with medal system (🥇🥈🥉), gradient styling, and live rankings
- **Mobile-Responsive Design**: Touch-friendly interface optimized for all screen sizes with proper viewport settings and improved button layouts
- **Redis Data Persistence**: Game state, scores, and leaderboard data with proper expiration and sorted sets
- **Comprehensive Error Handling**: Loading states, network failure recovery, disabled states, and user-friendly error messages
- **Custom Splash Screen**: Compelling Reddit feed entry point with branded visuals and "Tap to Start" call-to-action
- **Modal System**: Interactive modals for game instructions and leaderboard with proper accessibility and backdrop handling
- **Enhanced UI Components**: Improved button styling with flex layouts, proper centering, and consistent disabled states

### ⚙️ Configuration Notes
- Game duration is set to 1 second in `src/shared/constants.ts` for maximum intensity
- All API endpoints (`/api/game/init`, `/api/game/start`, `/api/game/answer`, `/api/game/end`, `/api/leaderboard`) are fully functional
- Custom fonts (FFFFORWA, Medodica, editundo) are properly loaded via CSS @font-face with font-display: swap for optimal performance
- Mobile viewport settings prevent zoom and ensure consistent experience across devices
- Custom splash screen automatically displays on Reddit feed with proper branding and call-to-action

## Contributing

This is a Devvit te:

1. Follow the development setup instructions
2. Make changes and test using `npm run dev`
3. Ensure code quality with `npm run check`
iptions

## License

This project is licensed under the BSD-3-Clause e.Licens
