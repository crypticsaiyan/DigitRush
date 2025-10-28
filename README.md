# DigitRush - Lightning-Fast Math Challenge Game

DigitRush is an ultra-intense, lightning-fast math quiz game built on Reddit's Devvit platform that challenges players to solve arithmetic problems under extreme time pressure. With only **60 seconds** to complete as many problems as possible, this game transforms simple math into an adrenaline-fueled test of mental agility and quick thinking.

## What is DigitRush?

DigitRush is a revolutionary high-intensity mental math game that redefines competitive arithmetic gaming. Players face a relentless stream of randomly generated math problems across four operation types with a challenging 60-second time limit! This creates an intense pressure-cooker environment where speed and accuracy determine your success.

The game runs natively within Reddit posts through the Devvit platform, allowing users to discover and play games directly from their Reddit feed without any downloads or external websites. Each Reddit post creates its own competitive environment with localized leaderboards and community challenges.

## Game Description

DigitRush is a **complete and fully functional** React-based math challenge game that delivers an intense arithmetic gaming experience. Built with React 19.1.0 and TypeScript 5.8.2, the game features a sophisticated client-server architecture with real-time gameplay, instant feedback systems, and competitive leaderboards.

### Core Game Mechanics

**60-Second Lightning Rounds**: Players have exactly 60 seconds to solve as many math problems as possible. This time constraint creates engaging gameplay where mental math becomes a test of speed, accuracy, and sustained focus.

**Four Mathematical Operations**: The game generates balanced problems across:
- **Addition**: 2-digit + 2-digit numbers (10-99 range)
- **Subtraction**: Guaranteed positive results (20-99 minus 10 to num1-1)  
- **Multiplication**: Mental math friendly (10-99 × 2-9)
- **Division**: Clean whole number results (divisor 2-12, quotient 2-25)

**Real-Time Feedback System**: Instant visual responses with color-coded feedback (green for correct, red for incorrect) and immediate answer reveals for learning opportunities.

**Community Competition**: Post-specific leaderboards with medal system (🥇🥈🥉) where each Reddit post maintains its own competitive environment with live rankings and achievement celebrations.

**Professional Game Flow**: The game includes a complete user experience with asset preloading, start page with instructions, gameplay interface, results screen, and integrated leaderboard system.

## What Makes DigitRush Innovative and Unique

### ⚡ Engaging 60-Second Math Challenge
DigitRush delivers a **focused 60-second math challenge** that encourages players to solve as many problems as possible under time pressure. This creates an engaging balance of challenge and playability where mental math becomes a test of speed, accuracy, and sustained concentration. The time constraint transforms simple arithmetic into a competitive gaming experience.

### 🎮 Native Reddit Gaming Experience
Unlike traditional web games, DigitRush is **fully embedded within Reddit posts** with zero external downloads required. Players discover and play games directly from their Reddit feed through a custom splash screen, creating seamless social gaming experiences. The game appears as a native Reddit post with a compelling "Tap to Start" button that opens the full-screen gaming experience.

### 🧮 Intelligent Mathematical Engine
The game features a sophisticated **server-side problem generation system** that creates balanced, solvable math problems with proper mathematical symbols:

- **Addition**: 2-digit + 2-digit numbers (10-99, e.g., 45 + 67 = 112)
- **Subtraction**: Guaranteed positive results (20-99 minus 10 to num1-1, e.g., 89 - 34 = 55)  
- **Multiplication**: 2-digit × 1-digit mental math (10-99 × 2-9, e.g., 23 × 7 = 161)
- **Division**: Clean whole number results (divisor 2-12, quotient 2-25, e.g., 84 ÷ 6 = 14)

Each problem includes unique IDs to prevent duplicate submissions and uses proper mathematical symbols (×, ÷) for clarity and professional presentation.

### 🏆 Community-Driven Competition
DigitRush creates authentic competitive gaming through **post-specific leaderboards** where each Reddit post maintains its own ranking system. Players compete for Gold 🥇, Silver 🥈, and Bronze 🥉 recognition with live rankings, gradient styling for top performers, and real-time score updates.

### 🎨 Professional Game Design & User Experience
The game features a **custom multi-font typography system** with three specialized fonts:
- **FFFFORWA**: Bold heading font for game titles and prominent UI elements
- **Medodica**: Primary body font for consistent readability and main interface text
- **editundo**: Accent font for descriptive text and secondary elements

The carefully crafted dark theme (`#021013` background with `#86f6b1` accent colors) is optimized for intense gameplay sessions with mobile-first responsive design.

### 🔧 Advanced Technical Architecture
Built with **React 19.1.0 and TypeScript 5.8.2**, DigitRush uses:
- **Custom React Hooks**: `useMathGame` for sophisticated state management and game lifecycle control
- **Real-Time Client-Server Communication**: Express.js APIs with instant feedback and score synchronization
- **Redis Data Persistence**: Game state, high scores, and leaderboard data with proper expiration handling
- **Auto-Focus Input System**: Mobile-optimized number inputs with Enter key support and iOS zoom prevention
- **Comprehensive Error Handling**: Loading states, network failure recovery, and user-friendly error messages

### 🚀 Instant Accessibility & Performance
- **Zero Installation**: Plays directly within Reddit posts with no downloads or external websites
- **Mobile-Optimized**: Touch-friendly interface with proper viewport settings and responsive design
- **Advanced Asset Preloading**: Intelligent preloading system that loads all images and fonts before gameplay with real-time progress tracking
- **Lightning-Fast Loading**: Optimized assets with font-display: swap, efficient bundle sizes, and graceful error handling for failed assets
- **Cross-Platform Compatibility**: Works seamlessly on desktop and mobile browsers with responsive asset loading
## How to Play DigitRush - Complete Step-by-Step Guide

### 🚀 Getting Started

**Step 1: Find the Game**
- Locate a DigitRush post in Reddit communities or subreddits where the game has been shared
- Look for posts titled "DigitRush - Math Quiz Challenge"

**Step 2: Launch from Splash Screen**
You'll see a compelling custom splash screen featuring:
- **Heading**: "DigitRush - Math Quiz Challenge"
- **Description**: "Test your math skills in 60 seconds!" 
- **Visual Elements**: Custom splash background image and DigitRush app icon
- **Call-to-Action**: Prominent "Tap to Start" button

**Step 3: Enter the Game**
- Click "Tap to Start" to open the game in full-screen mode within Reddit
- The game displays a sophisticated loading screen with real-time progress tracking as it preloads all assets:
  - **Image Assets**: Trophy animations, medal icons, party poppers, scroll backgrounds, and Snoo mascot
  - **Font Assets**: Custom typography files (FFFFORWA, Medodica, editundo) for optimal text rendering
  - **Progress Indicator**: Visual progress bar showing loading percentage with smooth animations
  - **Loading Animation**: Custom CSS loader with "Loading" text and animated elements

**Step 4: Navigate the Welcome Screen**
- **Game Title**: See the vibrant green "DigitRush" title rendered in custom FFFFORWA font
- **Leaderboard Access**: Click the trophy icon (🏆) in the top-right corner to view current community rankings and top scores
- **Game Instructions**: Click "How to play?" to open an interactive modal with detailed game rules and mechanics
- **Start Playing**: Click the animated "Start Playing" button (with heartbeat animation) to begin your lightning-fast challenge

### ⚡ The Ultimate 60-Second Lightning Challenge

**Get ready for an intense mathematical marathon!**

DigitRush features a **challenging 60-second time limit** that creates an exciting test of mathematical speed and sustained mental focus:

**Step 5: Begin the 60-Second Challenge**
1. **Instant Problem Display**: A math problem appears immediately in large, clear text with proper mathematical symbols
2. **Auto-Focused Input**: The answer input field is automatically focused for instant typing (no clicking required)
3. **Problem Types**: You'll encounter four types of balanced math problems:
   - **Addition**: "45 + 67 = ?" (2-digit + 2-digit, range 10-99)
   - **Subtraction**: "89 - 34 = ?" (guaranteed positive results, range 20-99 minus 10 to num1-1)
   - **Multiplication**: "23 × 7 = ?" (2-digit × 1-digit mental math, 10-99 × 2-9)
   - **Division**: "84 ÷ 6 = ?" (clean whole number results, divisor 2-12, quotient 2-25)

**Step 6: Problem Solving Flow**
1. **Type Your Answer**: Enter your solution in the auto-focused number input field
2. **Submit Methods**: 
   - Press **Enter** key for fastest submission
   - Click the **✓** button if using touch interface
3. **Instant Visual Feedback**:
   - **Green background with ✅**: Correct answer with "Correct!" message
   - **Red background with ❌**: Wrong answer with correct solution revealed for learning
4. **Continuous Flow**: When correct, your score increases and a new problem appears instantly

**Step 7: Time Management**
1. **Visual Progress Bar**: Real-time countdown bar showing remaining time out of 60 seconds total
2. **Color-Coded Timer**: 
   - **Green**: Plenty of time remaining (above 10 seconds)
   - **Red**: Critical time warning (10 seconds or less remaining)
3. **Live Score Display**: Your current score updates in real-time with each correct answer
4. **Strategic Pacing**: With 60 seconds of gameplay, find your optimal rhythm for sustained performance!
### 📱 Game Interface & User Experience

The game features a professional, mobile-optimized interface designed for maximum focus and performance:

**Visual Design**:
- **Dark Theme**: Professional gradient backgrounds (`#021013`) optimized for intense focus and reduced eye strain
- **Custom Typography System**: Three specialized fonts for optimal readability:
  - **FFFFORWA**: Bold heading font for game titles and prominent UI elements
  - **Medodica**: Primary body font (18px default) for consistent readability
  - **editundo**: Accent font for descriptive text and secondary elements
- **Brand Colors**: Vibrant green accent colors (`#00bf63`, `#86f6b1`) for positive feedback and UI highlights

**Interactive Elements**:
- **Auto-Focus Input System**: Number input automatically focuses for instant typing (no clicking required)
- **Mobile-Optimized Input**: 16px minimum font size prevents iOS zoom, number spinner arrows removed for clean interface
- **Visual Progress Bar**: Real-time countdown with smooth color transitions (green to red as time expires)
- **Instant Feedback System**: Color-coded responses with smooth CSS transitions and immediate answer reveals
- **Touch-Friendly Design**: Proper button sizing and spacing optimized for thumb navigation

**Performance Features**:
- **Responsive Layout**: Mobile-first design that adapts seamlessly to all screen sizes
- **Loading Animations**: Custom CSS loading screen with brand-consistent styling and smooth transitions
- **Accessibility**: Proper ARIA labels, keyboard navigation support, and screen reader compatibility

### 🏆 Game Results & Community Competition

**Step 8: View Your Performance Results**
After your intense 60-second challenge ends, you'll see a comprehensive results screen:

**Achievement Celebration**:
- **"Time's Up!" Message**: Displayed in vibrant green with custom FFFFORWA typography
- **NEW HIGH SCORE! Alert**: If you beat your personal best, see animated celebration with party popper emojis (🎉) and pulsing border effects
- **Final Score Display**: Your total problems solved shown prominently with color-coded styling

**Performance Analysis**:
- **Detailed Statistics**: Problems per minute calculation and accuracy percentage
- **Personal Progress**: Comparison with your previous high score and improvement tracking
- **Trophy Display**: Visual trophy icon with your current high score

**Step 9: Explore Community Competition**
- **Leaderboard Access**: Click "View Leaderboard" to open the community rankings modal
- **Medal System Recognition**: 
  - **Gold Medal 🥇**: Top performer with yellow gradient styling and "Champion" title
  - **Silver Medal 🥈**: Second place with silver gradient and "Runner-up" title  
  - **Bronze Medal 🥉**: Third place with bronze gradient and "Third Place" title
- **Personal Ranking**: See your current position among all players on this specific Reddit post
- **Live Rankings**: Real-time updates showing the most current community standings

**Step 10: Continue Playing**
- **Play Again**: Click the animated "Play Again" button for another 60-second lightning round
- **Back to Menu**: Return to the welcome screen to view instructions or leaderboard
- **Social Sharing**: Compete with friends by sharing the Reddit post containing the game
### 🎯 Complete Gameplay Flow Summary

**Phase 1: Discovery & Launch**
1. **Find the Game**: Locate DigitRush posts in Reddit communities
2. **Splash Screen**: View the compelling "DigitRush - Math Quiz Challenge" splash screen with custom branding
3. **Launch**: Click "Tap to Start" to open the full-screen game experience within Reddit

**Phase 2: Game Preparation**
4. **Welcome Screen**: See the vibrant green "DigitRush" title with custom FFFFORWA font styling
5. **Learn the Rules**: Click "How to play?" for detailed instructions in an interactive modal
6. **Check Competition**: Click the trophy icon to view current leaderboard and community rankings
7. **Begin Challenge**: Click the animated "Start Playing" button with heartbeat animation

**Phase 3: 60-Second Challenge Gameplay**
8. **Problem Display**: Math problem appears instantly in large, clear text with proper symbols (×, ÷)
9. **Auto-Focus Input**: Number input field automatically focuses for immediate typing
10. **Answer Submission**: Type answer and press Enter or click ✓ for submission
11. **Instant Feedback**: Get immediate color-coded responses (green = correct, red = incorrect with answer revealed)
12. **Score Tracking**: Watch your score increase in real-time with each correct answer
13. **Time Management**: Monitor the visual progress bar showing remaining time out of 60 seconds total

**Phase 4: Results & Competition**
14. **Performance Review**: View comprehensive results with "Time's Up!" message and detailed statistics
15. **Achievement Celebration**: See "NEW HIGH SCORE!" alerts with party animations for personal bests
16. **Community Ranking**: Access leaderboard to compare with other players and see medal standings
17. **Continuous Play**: Choose "Play Again" for another 60-second round or "Back to Menu" to explore features

**Phase 5: Social Competition**
18. **Medal Recognition**: Compete for Gold 🥇, Silver 🥈, Bronze 🥉 positions with special gradient styling
19. **Live Rankings**: View real-time community standings specific to each Reddit post
20. **Share & Challenge**: Invite friends to play by sharing the Reddit post containing the game

### 💡 Pro Tips for Success

- **Mental Preparation**: Warm up with basic math problems before starting to get your mind ready
- **Pattern Recognition**: Learn common multiplication tables and addition patterns for faster recall
- **Stay Focused**: The 60-second time limit requires sustained concentration throughout
- **Finger Positioning**: Keep fingers ready on the number keys for quick response
- **Use Enter Key**: Press Enter to submit answers quickly instead of clicking the ✓ button
- **Quick Estimation**: For complex problems, use estimation techniques to narrow down answers
- **Practice Mental Math**: Regular practice outside the game improves in-game performance
- **Pace Yourself**: Find a sustainable rhythm that you can maintain for the full duration
- **Learn from Mistakes**: Pay attention to incorrect answers shown for learning opportunities
- **Mobile Optimization**: The game is optimized for mobile with touch-friendly inputs and responsive layouts
## Technical Architecture

### Frontend (React 19.1.0 + TypeScript 5.8.2)
- **Component Architecture**: Clean separation with App.tsx routing between StartPage, GamePlay, GameResults, LoadingScreen, and Leaderboard components
- **State Management**: Custom `useMathGame` hook managing game state, 60-second timer precision, and API interactions with real-time updates
- **Asset Preloading System**: Advanced `useAssetPreloader` hook that preloads all game assets (images and fonts) with progress tracking before gameplay begins
- **Input Optimization**: Auto-focused inputs with Enter key support, mobile-friendly design (16px font size), and prevention of iOS zoom
- **Responsive Design**: Mobile-first approach with Tailwind CSS 4.1.6, touch-optimized interface, and proper viewport settings
- **Loading States**: Comprehensive loading system with asset preloading progress bar, custom CSS animations, and brand-consistent styling
- **Modal System**: Overlay modals for "How to play?" instructions and leaderboard display with proper accessibility and scroll lock

### Backend (Express 5.1.0 + Redis)
- **RESTful API Design**: Comprehensive endpoints for game lifecycle management:
  - `/api/game/init` - Initialize game with user data and high scores
  - `/api/game/start` - Begin new game with first problem generation  
  - `/api/game/answer` - Process answers and generate next problems
  - `/api/game/end` - Finalize scores and update leaderboards
  - `/api/leaderboard` - Fetch community rankings and user position
- **Smart Problem Generation**: Server-side algorithms creating balanced problems across four operation types
- **Redis Data Persistence**: Game state storage, high score tracking, and leaderboard management using sorted sets
- **User Authentication**: Seamless Reddit user integration through Devvit platform middleware

### Design System
- **Multi-Font Typography**: Custom fonts with CSS @font-face preloading and font-display: swap
- **Dark Theme Design**: Professional gradient backgrounds with strategic color psychology
- **Brand Identity**: Vibrant green primary colors with accent variations for optimal user experience
- **Color-Coded Feedback System**: Green/red visual responses with smooth CSS transitions
- **Mobile Optimization**: Proper viewport settings, touch-friendly sizing, and responsive design patterns

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

3. **Start Development**
   ```bash
   npm run dev
   ```
   This starts client, server, and Devvit in parallel with hot reloading.

4. **Test the Game**
   - The game appears in a test subreddit post
   - Click "Launch App" to start playing

### Available Commands
- `npm run dev` - Development server with hot reloading
- `npm run build` - Build client and server
- `npm run deploy` - Upload new version to Reddit
- `npm run launch` - Publish app for review

## Current Implementation Status

DigitRush is a **fully functional and production-ready math challenge game** with complete client-server architecture.

### ✅ Implemented Features

**Core Game Engine**
- **Complete Game Flow**: Asset preloading → Start page → 60-second gameplay → Results → Leaderboard
- **React 19.1.0 + TypeScript 5.8.2**: Modern frontend with strict type checking and component architecture
- **Express 5.1.0 Server**: RESTful API endpoints for game lifecycle management
- **Redis Data Persistence**: Game state, high scores, and leaderboard storage with proper expiration

**Gameplay Mechanics**
- **60-Second Timer**: Precise countdown with visual progress bar and color-coded warnings
- **Four Math Operations**: Server-side problem generation with balanced difficulty across addition, subtraction, multiplication, and division
- **Real-Time Feedback**: Instant color-coded responses (green/red) with correct answer reveals
- **Auto-Focus Input System**: Mobile-optimized number inputs with Enter key support
- **Score Tracking**: Live score updates and personal high score management

**User Interface & Experience**
- **Asset Preloading System**: Intelligent loading of images and fonts with progress tracking
- **Custom Typography**: Three specialized fonts (FFFFORWA, Medodica, editundo) with proper fallbacks
- **Dark Theme Design**: Professional gradient backgrounds optimized for focus and readability
- **Mobile-First Responsive**: Touch-friendly interface that works seamlessly across all devices
- **Modal System**: Interactive "How to play?" instructions and leaderboard overlay

**Community Features**
- **Post-Specific Leaderboards**: Each Reddit post maintains its own competitive environment
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 recognition with gradient styling
- **Live Rankings**: Real-time community standings with user position tracking
- **Achievement Celebrations**: "NEW HIGH SCORE!" alerts with animated party effects

**Technical Architecture**
- **Custom React Hooks**: `useMathGame` for state management, `useAssetPreloader` for loading optimization
- **Error Handling**: Comprehensive loading states, network failure recovery, and user-friendly error messages
- **Performance Optimization**: Efficient bundle sizes, font-display: swap, and responsive asset loading
- **Accessibility**: Proper ARIA labels, keyboard navigation, and screen reader compatibility

### 🎮 Game Components

**StartPage Component**
- Welcome screen with animated "Start Playing" button (heartbeat animation)
- Trophy icon access to leaderboard with compact card display
- Interactive "How to play?" modal with detailed instructions
- Professional branding with custom FFFFORWA font styling

**GamePlay Component**
- Real-time problem display with proper mathematical symbols (×, ÷)
- Auto-focused input field with mobile optimization (16px font, no zoom)
- Visual progress bar with color transitions (green → red as time expires)
- Live score display and instant feedback system

**GameResults Component**
- Comprehensive performance analysis with problems solved and accuracy
- "NEW HIGH SCORE!" celebration with party popper animations
- Personal progress tracking with high score comparison
- Direct access to community leaderboard

**Leaderboard Component**
- Medal-based ranking system with gradient styling for top 3 positions
- User ranking display with personal score and position
- Live community standings specific to each Reddit post
- Professional trophy animations and visual hierarchy

## License

This project is licensed under the BSD-3-Clause License.
