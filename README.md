# DigitRush - Fast-Paced Math Challenge Game

DigitRush is an adrenaline-pumping math quiz game built on Reddit's Devvit platform that challenges players to solve arithmetic problems under intense time pressure. Race against a 60-second countdown timer while tackling addition, subtraction, multiplication, and division problems to achieve the highest score possible.

## What is DigitRush?

DigitRush is a high-intensity mental math game that transforms arithmetic practice into an exciting competitive experience. Players face a continuous stream of randomly generated math problems across four operation types (addition, subtraction, multiplication, and division) with only 60 seconds to solve as many as possible. The game features real-time scoring, instant feedback, community leaderboards, and a clean, minimalist dark theme interface that creates an engaging gaming experience directly within Reddit posts.

**Current Game State:**
- **Clean Visual Experience**: Features a sleek dark theme interface with vibrant green titles and strategic color coding for optimal readability and engagement
- **Complete Game Flow**: Four distinct screens (Start → Menu → Gameplay → Results) with smooth state transitions and consistent visual design
- **Advanced Typography**: Multi-font system using custom fonts (FFFFORWA, editundo, Medodica) with strategic font assignment for different UI elements
- **Competitive Features**: Post-specific leaderboards with medal system, personal rankings, and Redis-backed score persistence
- **Mobile-Optimized**: Responsive design with touch-friendly interfaces, proper viewport settings, and optimized performance across all devices

**Visual Experience:**
- **Minimalist Dark Theme**: Clean, professional interface with high contrast design for optimal readability and reduced eye strain
- **Strategic Color System**: Vibrant green (#00bf63) titles for brand identity, red action buttons for urgency, and color-coded feedback systems
- **Responsive Layout**: Mobile-first design with proper viewport settings and touch-friendly interface elements
- **Performance Optimized**: Lightweight design with fast loading times and smooth animations across all devices
- **Immersive Design**: Full-screen gaming experience with consistent visual hierarchy and engaging user interface

**Game Flow Overview:**
- **Start Screen**: Clean, minimalist interface with vibrant green "DigitRush" title (#00bf63), prominent "🚀 Start Playing" button with dark green accents (#144b33), and sleek dark background
- **Game Menu**: Dual-panel layout showing high score card, game description, and live leaderboard side-by-side with consistent dark theme
- **Active Gameplay**: 60-second countdown with dynamic progress bar, real-time problem solving, instant color-coded feedback, and focused gaming interface
- **Results Screen**: Comprehensive performance analysis with motivational messages, new high score celebrations, and side-by-side leaderboard comparison
- **Competition**: Post-specific leaderboards with medal system (🥇🥈🥉), personal rankings, and Redis-backed score persistence

**Core Gameplay Loop:**
1. **Launch** → Click "Launch App" from a Reddit post to enter full-screen mode
2. **Start** → Begin from a clean, minimalist start page with centered green title and red action button
3. **Menu** → Review your high score and view the leaderboard side-by-side
4. **Play** → Solve math problems rapidly for 60 seconds with instant visual feedback
5. **Results** → View your performance with detailed stats and motivational messages
6. **Compete** → Compare your score against other Reddit users on the leaderboard
7. **Improve** → Play again to beat your high score and climb the rankings

## What Makes DigitRush Innovative & Unique

**🎮 Native Reddit Gaming Experience**
- Fully integrated into Reddit posts - no external apps or downloads required
- Players can launch the game directly from their Reddit feed with a single click
- Seamless transition from browsing Reddit to playing an immersive full-screen game with clean, professional interface
- Built with React 19.1.0 and TypeScript 5.8.2 for smooth, responsive gameplay with advanced state management
- Mobile-optimized viewport settings (`user-scalable=no`) prevent unwanted zooming during gameplay
- Clean, minimalist start screen design with vibrant green title (#00bf63), red "🚀 Start Playing" button, and animated digital matrix background
- Leaderboard trophy icon (🏆) positioned in top-right corner for immediate competitive context
- React-based component architecture with smooth state transitions and persistent background animations across all game phases

**🌟 Clean Visual Experience**
- **Minimalist Dark Theme**: Professional, sleek interface with high contrast design for optimal readability and reduced eye strain during gameplay
- **Strategic Color Psychology**: Carefully chosen color palette for maximum visual impact and user engagement:
  - **Vibrant green (#00bf63)**: Main title creating strong brand identity and conveying growth/success
  - **Action-oriented buttons**: Clear call-to-action elements with hover effects and visual feedback
  - **Color-coded feedback**: Green backgrounds for correct answers, red for incorrect responses
  - **Yellow/orange gradients**: High scores, achievements, and medal system (🥇🥈🥉)
- **Responsive Design System**: Mobile-first approach with proper viewport settings and touch-friendly interactions:
  - Responsive breakpoints for different screen sizes (sm, md, lg)
  - Touch-friendly button sizes and spacing optimized for mobile gameplay
  - Proper viewport settings (`user-scalable=no`) preventing unwanted zooming
  - 16px minimum font size for input fields to prevent mobile zoom issues
- **Performance Optimized**: Lightweight design with fast loading times, smooth CSS transitions, and efficient rendering
- **Visual Hierarchy**: Clean layout with gradient backgrounds, rounded corners, hover scale transforms, and consistent spacing

**⚡ High-Intensity Time-Based Gameplay**
- 60-second countdown creates heart-pounding, fast-paced action
- Real-time visual countdown with dynamic progress bar that turns red when under 10 seconds
- Instant feedback system with immediate problem transitions and visual confirmations
- Continuous problem generation keeps players engaged throughout the entire duration
- Auto-focused input fields for seamless keyboard interaction without clicking

**🏆 Community-Driven Competition**
- Post-specific leaderboards create localized competition within Reddit communities
- Persistent high score tracking using Redis sorted sets for reliable data storage
- Social gaming experience where players compete against others who found the same post
- Real-time ranking system with medal awards for top performers (🥇🥈🥉)
- Personal ranking display showing your position among all players
- Automatic leaderboard updates when players achieve new high scores
- Top 10 player display with usernames and scores for community recognition

**🧠 Adaptive Mathematical Challenge**
- Four distinct operation types with carefully balanced difficulty:
  - **Addition**: 2-digit + 2-digit numbers (10-99 range, e.g., 45 + 67 = 112)
  - **Subtraction**: Positive results guaranteed (20-99 minus 10 to num1-1, e.g., 89 - 34 = 55)
  - **Multiplication**: 2-digit × 1-digit for mental math challenge (10-99 × 2-9, e.g., 23 × 7 = 161)
  - **Division**: Clean whole number results only (divisor 2-12, quotient 2-25, e.g., 84 ÷ 6 = 14)
- Server-side random problem generation ensures no two games are identical
- Operation type indicators help players prepare mentally for each problem type
- Problems display with clear mathematical symbols (×, ÷) for better readability
- Unique problem IDs prevent duplicate submissions and ensure proper game flow

**📱 Mobile-Optimized Design**
- Touch-friendly interface designed for Reddit's mobile-first audience
- Responsive design that works seamlessly across all device sizes
- Optimized input handling prevents mobile zoom issues with 16px font size
- Dark theme with high contrast for better visibility and reduced eye strain
- Viewport settings prevent unwanted zooming during gameplay
- Side-by-side layout on larger screens for results and leaderboard

**🎯 Gamified Learning Experience**
- Makes math practice engaging and competitive through game mechanics
- Performance tracking with detailed accuracy metrics and problems-per-minute stats
- Motivational feedback system with personalized messages based on score achievements:
  - 0 points: "Don't give up! Try again! 💪"
  - 1-5 points: "Good start! Keep practicing! 📚"
  - 6-10 points: "Nice work! You're getting better! 👍"
  - 11-15 points: "Great job! Math wizard in training! 🧙‍♂️"
  - 16-20 points: "Excellent! You're a math star! ⭐"
  - 21+ points: "Outstanding! Math genius level! 🏆"
- Progressive visual feedback with color-coded scoring and celebration animations
- New high score celebrations with animated notifications

**🎨 Distinctive Visual Design**
- **Clean Professional Interface**: Sleek dark theme with high contrast design for optimal readability and reduced eye strain during gameplay
- **Smooth User Interactions**: CSS-based hover effects, scale transforms, and smooth transitions for engaging user experience
- **Strategic Layout System**: Professional design with:
  - Gradient backgrounds and rounded corners for modern aesthetics
  - Color-coded feedback systems for immediate user understanding
  - Consistent spacing and visual hierarchy for professional appearance
  - Touch-friendly interface elements optimized for mobile gameplay
- **Multi-Font Typography System**: Strategic font integration with CSS @font-face declarations:
  - **FFFFORWA**: Heading font for titles and prominent UI elements
  - **editundo**: Game titles via `.gametitle` class for distinctive branding
  - **Medodica**: Primary body font (20px) for consistent UI text and excellent readability
  - **Monospace**: Mathematical expressions and scores for clarity
- **Performance Optimized**: Lightweight design with fast loading times, efficient CSS rendering, and mobile-optimized performance
- **Strategic Color Psychology**: Vibrant green (#00bf63) titles convey growth and success, action buttons create engagement urgency
- **Mobile-First Design**: Responsive layout with proper viewport settings (`user-scalable=no`), touch-friendly interfaces, and optimized performance across all devices

## How to Play DigitRush - Complete Guide

**🚀 Getting Started**
1. **Find the Game**: Look for DigitRush posts in participating Reddit communities
2. **Launch**: Click the "Launch App" button on the game post to open full-screen mode
3. **Start Screen**: You'll see the DigitRush start page featuring:
   - **Clean Dark Interface**: Professional black background with high contrast elements for optimal readability
   - **Vibrant Typography**: Large, bold "DigitRush" title in bright green (#00bf63) using FFFFORWA font with responsive sizing (text-5xl to text-6xl)
   - **Action-Oriented Button**: Prominent "🚀 Start Playing" button with dark green text (#144b33), hover scale effects, and fixed width (w-64) for immediate engagement
   - **Competitive Context**: Leaderboard trophy icon (🏆) in top-right corner providing immediate awareness of competitive features
   - **Balanced Layout**: Clean, minimalist centered design using vertical flex with `justify-around` for optimal spacing distribution
   - **Mobile Optimization**: Responsive design with proper viewport settings (`user-scalable=no`) and touch-friendly interface elements
   - **Performance Features**: Fast loading times, smooth CSS transitions, and efficient rendering across all devices

**🎯 Game Flow**
1. **Start Screen**: Click the "🚀 Start Playing" button to proceed from the clean start screen with dark theme background and vibrant green title
2. **Game Menu**: Dual-panel layout with consistent dark theme
   - **Left Panel**: Game menu with editundo font title (🧮 DigitRush), high score display in yellow-themed gradient card, and "🚀 Start Game" button
   - **Right Panel**: Live leaderboard showing top 10 players with medal system (🥇🥈🥉) and personal ranking card
3. **Begin Challenge**: Click "🚀 Start Game" when ready - the 60-second timer starts immediately with real-time countdown!
4. **Active Gameplay**: Solve math problems rapidly with focused interface, instant color-coded feedback, and dynamic progress bar

**🧮 During Gameplay**
1. **Header Display**: Top section shows current score and time remaining side-by-side with clear typography
2. **Progress Bar**: Visual countdown bar that dynamically turns red when under 10 seconds remaining
3. **Problem Display**: Each math problem appears in large, clear monospace text (e.g., "45 + 67 = ?") with proper mathematical symbols (×, ÷)
4. **Operation Badge**: Each problem shows its type (Addition, Subtraction, Multiplication, Division) in a colored indicator badge
5. **Answer Input**: Type your numerical answer in the dedicated input field (automatically focused with 16px font size)
6. **Submit Methods**: Press Enter key or click the ✓ button to submit your answer
7. **Instant Feedback**: Receive immediate visual confirmation with color-coded backgrounds:
   - ✅ "Correct!" in green background for right answers
   - ❌ "Wrong! Answer was [correct answer]" in red background for incorrect responses
8. **Automatic Progression**: New problems appear instantly after each submission with input automatically re-focused
9. **Input Optimization**: Input field is disabled during submission to prevent double-entry and race conditions
10. **Mobile-Optimized**: Responsive design with proper viewport settings and touch-friendly interface

**📊 Scoring System**
- **+1 point** for each correct answer (no partial credit)
- **No penalties** for wrong answers - encourages speed while maintaining accuracy focus
- **Real-time score display** throughout gameplay with live updates
- **Personal high score tracking** across multiple game sessions stored in Redis
- **Post-specific scoring** - each Reddit post maintains its own leaderboard and high scores
- **Automatic score persistence** - scores saved immediately upon game completion
- **New high score celebrations** with animated notifications and special styling

**🏁 Game End & Results**
1. **Automatic End**: Game ends when the 60-second timer reaches zero
2. **Dual-Panel Layout**: Results screen shows two cards side-by-side:
   - **Left Panel**: Personal results and performance stats
   - **Right Panel**: Live leaderboard for immediate comparison
3. **Results Card Features**:
   - "⏰ Time's Up!" header with performance summary
   - **New High Score Celebration**: Animated "🎉 NEW HIGH SCORE! 🎉" notification with pulsing yellow border when achieved
   - **Score Display**: Large, color-coded final score with personalized motivational messages:
     - 0 points: "Don't give up! Try again! 💪"
     - 1-5 points: "Good start! Keep practicing! 📚" (orange text)
     - 6-10 points: "Nice work! You're getting better! 👍" (blue text)
     - 11-15 points: "Great job! Math wizard in training! 🧙‍♂️" (purple text)
     - 16-20 points: "Excellent! You're a math star! ⭐" (green text)
     - 21+ points: "Outstanding! Math genius level! 🏆" (yellow text)
   - **High Score Display**: Current personal best in indigo-themed gradient card
   - **Performance Stats**: Problems/minute and accuracy percentage in detailed grid layout
   - **Action Buttons**: 
     - "🔄 Play Again" with hover scale effect for immediate restart
     - "🏠 Back to Menu" to return to main menu
4. **Encouragement Footer**: Motivational message to keep practicing math skills

**🏆 Leaderboard & Competition**
- **Top 10 Rankings**: View the highest-scoring players for this specific Reddit post
- **Medal System**: Gold 🥇, Silver 🥈, Bronze 🥉 medals for top 3 positions with special styling
- **Personal Ranking Card**: Gradient-styled "Your Ranking" section showing:
  - Current rank position (e.g., "Rank #5")
  - Personal best score with points display
- **Player Cards**: Each leaderboard entry shows:
  - Medal/rank indicator on the left
  - Username and achievement title (Champion, Runner-up, Third Place)
  - Score with "points" label on the right
- **Visual Hierarchy**: Top 3 players get special gold gradient styling
- **Community Competition**: Compete against other Reddit users who played the same post
- **Real-time Updates**: Leaderboard refreshes to show latest rankings

**🎨 Visual Design & Typography**
- **Clean Dark Theme**: Professional interface with high contrast design for optimal readability and reduced eye strain during extended gameplay
- **Multi-Font Typography System**: Strategic font integration with CSS @font-face declarations and proper fallback chains:
  - **FFFFORWA**: Heading font for titles and prominent UI elements with distinctive gaming aesthetic
  - **editundo**: Game titles via `.gametitle` class (🧮 DigitRush) for unique branding identity
  - **Medodica**: Primary body font (20px base size) providing excellent readability across all UI components
  - **Monospace fonts**: Mathematical expressions and scores for optimal number clarity
- **Smooth CSS Animations**: Hover effects, scale transforms, and smooth transitions for engaging user interactions
- **Performance Optimized Design**: Lightweight styling with fast loading times and efficient rendering across all devices
- **Strategic Color System**: Carefully chosen color palette for maximum visual impact:
  - **Vibrant green (#00bf63)**: Main title creating strong brand identity and conveying growth/success
  - **Action buttons**: Clear call-to-action elements with dark green (#144b33) accents creating urgency
  - **Color-coded feedback**: Green backgrounds for correct answers, red for incorrect responses
  - **Yellow/orange gradients**: High scores, achievements, and medal system (🥇🥈🥉)
- **Mobile-First Design**: Responsive layout with proper viewport settings (`user-scalable=no`), 16px minimum font size, and touch-optimized interface elements
- **Visual Hierarchy**: Gradient backgrounds, rounded corners (rounded-2xl, rounded-3xl), hover scale transforms, and consistent spacing distribution
- **Consistent Experience**: Clean, professional design maintained across all game states (Start → Menu → Gameplay → Results) for seamless visual continuity

**💡 Pro Tips for High Scores**
- **Mental Math Practice**: Develop quick calculation skills without relying on finger counting
- **Pattern Recognition**: Look for easy problems (multiples of 10, simple additions) to solve rapidly
- **Stay Calm Under Pressure**: Don't panic when the timer turns red - accuracy still matters
- **Keyboard Efficiency**: Use Enter key for faster submission than clicking the ✓ button
- **Consistent Practice**: Play multiple rounds to improve mental math speed and pattern recognition
- **Focus on Accuracy**: While speed is important, wrong answers waste valuable time
- **Operation Strategies**:
  - **Addition/Subtraction**: Use mental shortcuts like rounding to nearest 10
  - **Multiplication**: Memorize common multiplication tables (2-12)
  - **Division**: Look for factors and use reverse multiplication
- **Input Optimization**: Type answers quickly and press Enter immediately when confident
- **Typography Advantage**: The custom font system with Medodica as the primary body font provides excellent readability for both text and numbers, with responsive font loading and fallback chains ensuring consistent typography across all devices, creating a distinctive gaming experience optimized for mathematical expressions

## Current Game Implementation

### React Component Architecture
DigitRush is built with a modern React 19.1.0 architecture using TypeScript for type safety:

- **App.tsx**: Main application component managing game state through the `useMathGame` hook with loading states and smooth transitions
- **StartPage.tsx**: Clean, minimalist entry point with vibrant green title, action button, and professional dark theme background
- **Background.tsx**: Currently empty - ready for future visual enhancements
- **GameMenu.tsx**: Dual-panel layout showing high scores and live leaderboard side-by-side with animated background
- **GamePlay.tsx**: Real-time gameplay with countdown timer, problem display, instant feedback, and immersive visual effects
- **GameResults.tsx**: Comprehensive results screen with performance analysis, motivational messages, and animated celebrations
- **Leaderboard.tsx**: Community competition display with medal system, personal rankings, and gradient styling

### Game State Management
The `useMathGame` custom hook manages the complete game lifecycle:
- **State Transitions**: Smooth flow between 'start' → 'menu' → 'playing' → 'finished' states
- **Timer Management**: Real-time countdown with automatic game ending and cleanup
- **Score Tracking**: Live score updates with high score persistence across sessions
- **Problem Management**: Automatic problem generation and validation with unique IDs
- **Loading States**: Comprehensive loading indicators during API calls and state transitions

### Visual Design System
- **Clean Dark Theme**: Professional interface with high contrast design for optimal readability and user experience
- **Smooth CSS Animations**: Hover effects, scale transforms, and smooth transitions for engaging user interactions
- **Responsive Layout System**: Mobile-first design with proper viewport settings and touch-friendly interface elements
- **Custom Typography**: Multi-font system with FFFFORWA headings, Medodica body text, and editundo accents
- **Color Scheme**: Strategic use of vibrant green (#00bf63) titles, red action buttons, and dark green accents (#144b33)
- **Responsive Layout**: Mobile-first design with Tailwind CSS 4.1.6 and proper viewport settings
- **Interactive Elements**: Hover effects, scale transforms, smooth transitions, and CSS-based visual feedback
- **Accessibility**: High contrast ratios, proper font sizes, keyboard navigation support, and optimized visual effects

## Game Features & Technical Implementation

### Core Game Mechanics
- **Real-time Problem Generation**: Server-side algorithm creates unique math problems with balanced difficulty
- **Instant Feedback System**: Immediate visual confirmation with color-coded responses and animated background effects
- **Persistent Game State**: Redis-backed session management maintains game state during play
- **Automatic Input Focus**: Seamless user experience with auto-focused input fields
- **Responsive Timer**: Dynamic countdown with visual progress bar and color changes
- **Score Persistence**: High scores and leaderboard data stored permanently per Reddit post

### Advanced Visual Features
- **Clean Interface Design**: Professional dark theme with high contrast elements for optimal readability and user experience
- **Smooth CSS Animations**: Hover effects, scale transforms, and smooth transitions for engaging user interactions
- **Responsive Layout System**: Mobile-first design with proper viewport settings and touch-friendly interface elements
- **Strategic Visual Hierarchy**: Carefully designed layout with:
  - Gradient backgrounds and rounded corners for modern aesthetics
  - Color-coded feedback systems for immediate user understanding
  - Consistent spacing and typography for professional appearance
  - Hover effects and visual feedback for interactive elements
- **Performance Optimization**: Lightweight design with fast loading times and efficient CSS rendering across all devices

### User Interface Features
- **Multi-Screen Flow**: Start → Menu → Gameplay → Results with smooth state transitions and consistent visual design throughout
- **Clean Gaming Experience**: Professional dark theme interface creates focused gaming atmosphere
- **Dual-Panel Layout**: Menu and Results screens feature side-by-side cards (main content + leaderboard) with consistent styling
- **Custom Typography System**: Multi-font integration with strategic font assignment for different UI elements
- **Smooth CSS Animations**: Hover effects, scale transforms, and smooth transitions for engaging user interactions
- **Mobile-First Design**: Optimized for touch interaction with proper viewport settings:
  - `user-scalable=no` prevents unwanted zooming during gameplay
  - 16px minimum font size for input fields to prevent mobile zoom
  - Responsive breakpoints for different screen sizes (sm, md, lg)
  - Touch-friendly button sizes and spacing
  - Lightweight design optimized for mobile performance
- **Dark Theme with Clean Design**: High-contrast gradient design with professional appearance
- **Interactive Elements**: Hover effects, scale transforms, smooth transitions, and visual feedback systems
- **Accessibility**: Proper font sizes, color contrast ratios, keyboard navigation, and optimized visual design
- **Loading States**: Animated spinners, disabled states, and visual feedback with consistent design continuity

### Competitive Elements
- **Post-Specific Leaderboards**: Each Reddit post has its own competitive environment
- **Real-time Rankings**: Live leaderboard updates with medal system (🥇🥈🥉)
- **Personal Progress Tracking**: Individual high score tracking and rank display
- **Social Integration**: Reddit username integration for community competition

### Technology Stack

- **[Devvit](https://developers.reddit.com/)**: Reddit's developer platform for immersive games and apps with integrated Redis and Reddit API access
- **[React 19.1.0](https://react.dev/)**: Frontend UI framework with hooks-based state management via `useMathGame` custom hook and component architecture
- **[TypeScript 5.8.2](https://www.typescriptlang.org/)**: Type-safe development with strict checking and shared type definitions in `src/shared/types/api.ts`
- **[Express 5.1.0](https://expressjs.com/)**: Backend API server with RESTful endpoints (`/api/game/*`) and middleware for JSON/URL-encoded parsing
- **[Redis](https://redis.io/)**: Score persistence, game state, and leaderboard storage via Devvit with sorted sets and automatic expiration
- **[Vite 6.2.4](https://vite.dev/)**: Build tool and development server with hot reloading, TypeScript support, and separate client/server builds
- **[Tailwind CSS 4.1.6](https://tailwindcss.com/)**: Responsive styling with custom design system, dark theme, and gradient utilities
- **CSS Animations**: Smooth transitions, hover effects, and visual feedback using modern CSS features for engaging user interactions
- **Multi-Font Typography**: Strategic font integration with CSS @font-face declarations:
  - **FFFFORWA**: Heading font for titles and prominent UI elements
  - **editundo**: Game titles via `.gametitle` class for distinctive branding
  - **Medodica**: Primary body font (20px) for consistent UI text and excellent readability
  - **Monospace**: Mathematical expressions and scores for optimal clarity
- **State Management**: React hooks with TypeScript for complex game flow, real-time countdown timers, smooth CSS animations, and automatic cleanup
- **API Integration**: RESTful endpoints with comprehensive error handling, loading states, and proper request/response typing
- **Mobile Optimization**: Viewport settings preventing zoom (`user-scalable=no`), touch-friendly interfaces, lightweight design optimized for mobile performance, and responsive breakpoints

## Font Configuration System

DigitRush features a sophisticated font management system that creates a distinctive gaming aesthetic:

### Multi-Font Typography System
- **Diverse Font Collection**: Uses four custom fonts (ka1, FFFFORWA, editundo, MedodicaRegular) for varied visual elements
- **CSS @font-face Loading**: Reliable font loading with proper format declarations and fallback chains
- **Font Specialization**: Different fonts serve specific purposes:
  - **ka1**: Game titles and headings with gaming aesthetic
  - **Medodica**: Primary body text and UI elements (default body font at 20px)
  - **FFFFORWA**: Heading font for titles and prominent elements
  - **editundo**: Special accent text and decorative elements (used for game titles via .gametitle class)
  - **MedodicaRegular**: Alternative display font for variety
- **Mathematical Optimization**: Fonts chosen for excellent readability of numbers and mathematical expressions
- **Responsive Typography**: Flexible font system with proper fallback chains for cross-device compatibility

### Font Loading Strategy
The font system automatically:
- Loads custom fonts via CSS @font-face declarations in `src/client/index.css`
- Provides fallback to system fonts (sans-serif) if custom fonts fail to load
- Uses `font-display: swap` for optimal loading performance
- Applies fonts immediately through CSS class assignments
- Maintains consistent typography across all game components

### Font Customization
To modify fonts, edit the @font-face declarations in `src/client/index.css`:
- Replace font files in `src/client/public/fonts/` directory
- Update CSS font-family references throughout components
- Maintain fallback font chains for reliability
- Test font loading across different devices and browsers

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

### Game Features Implementation
- **Game State Management**: React hooks with TypeScript manage complex game flow through `useMathGame` custom hook with comprehensive state tracking
- **Multi-Screen Flow**: Start screen → Game menu → Active gameplay → Results screen with smooth state transitions managed by React component architecture
- **API Integration**: RESTful endpoints (`/api/game/*`) handle initialization, problem generation, and score persistence:
  - `/api/game/init` - Initialize game session and fetch user data
  - `/api/game/start` - Begin new game and get first problem
  - `/api/game/answer` - Submit answers and receive next problems
  - `/api/game/end` - Finalize game and update leaderboards
  - `/api/leaderboard` - Fetch current rankings and user position
- **Real-time Updates**: Live countdown timer with dynamic progress bar that turns red under 10 seconds, managed by React useEffect hooks
- **Persistent Storage**: High scores and leaderboards saved using Redis with Reddit post-specific context and 2-minute game session expiry
- **Responsive Design**: Mobile-optimized interface using Tailwind CSS 4.1.6 with gradient themes and animations
- **Typography System**: Custom font system with CSS @font-face loading and proper fallback chains for distinctive gaming aesthetic
- **Input Optimization**: Auto-focused inputs with mobile-friendly 16px font size and Enter key support for seamless gameplay
- **Problem Generation**: Server-side algorithm creates balanced difficulty across four operation types with unique problem IDs
- **Competitive Features**: Post-specific leaderboards with medal system (🥇🥈🥉) and personal ranking using Redis sorted sets
- **Visual Feedback**: Color-coded responses, animated celebrations, and motivational performance messages based on score ranges
- **Component Architecture**: Modular React components (StartPage, GameMenu, GamePlay, GameResults, Leaderboard) with TypeScript interfaces
- **State Persistence**: Game sessions maintained with Redis expiration and automatic cleanup after 2 minutes
- **Error Handling**: Comprehensive error handling for network failures, game timeouts, and invalid states with user-friendly messages

## Recent Updates

### Visual System Simplification (Latest)
- **Clean Interface Design**: Transitioned to a clean, professional dark theme interface for optimal performance and readability
- **Vibrant Color Scheme**: Updated title to bright green (#00bf63) for strong brand identity and visual impact
- **Action-Oriented Button Design**: Red "🚀 Start Playing" button with dark green text (#144b33) creates urgency and excitement
- **Competitive Context**: Added leaderboard trophy icon (🏆) in top-right corner for immediate competitive awareness
- **Balanced Layout Structure**: StartPage uses `justify-around` for optimal vertical spacing distribution with equal space around elements
- **Enhanced Visual Balance**: Title positioned in upper area with start button in lower area, creating natural visual flow
- **Strategic Color Psychology**: Green title conveys growth and success, red button creates action urgency
- **Consistent Design Language**: Aligned layout with overall minimalist design approach using centered vertical flex layout
- **Mobile-First Optimization**: Balanced spacing distribution ensures consistent experience across all device sizes
- **Typography Hierarchy**: Clear separation between title area and action area for improved user flow
- **Button Refinement**: Fixed minor spacing issue in button text for perfect alignment

### Font System Implementation
- **Multi-Font Integration**: Implemented four custom fonts (ka1, FFFFORWA, editundo, MedodicaRegular) for diverse visual elements
- **CSS @font-face Declarations**: Reliable font loading with proper format support and fallback chains
- **Font Specialization**: Strategic font assignment with responsive typography system:
  - **Body font**: Medodica (20px) for consistent UI text across all components providing excellent readability
  - **Heading font**: FFFFORWA for titles and prominent UI elements
  - **Game titles**: editundo via `.gametitle` class for distinctive branding
  - **Mathematical expressions**: Monospace fonts for clear number display
  - **Fallback system**: Sans-serif fallbacks ensure reliability across devices
- **Performance Optimization**: `font-display: swap` for optimal loading performance
- **Mobile Responsiveness**: Adaptive font sizing with media queries for smaller screens
- **Typography Consistency**: Centralized font management through CSS custom properties

### StartPage Component Design
- **Minimalist Design**: Streamlined StartPage component with clean, centered layout using vertical flex with `justify-around`
- **Direct Engagement**: Simplified interface puts emphasis on the vibrant green game title and red action button without visual distractions
- **Enhanced Button Design**: Fixed-width (w-64) red start button with rocket emoji, dark green text, hover scale effects, and shadow animations
- **Responsive Typography**: Large, bold title in bright green (#00bf63) with adaptive sizing (text-5xl to text-6xl) using custom FFFFORWA font
- **Competitive Visual Cue**: Trophy icon (🏆) in top-right corner provides immediate context about leaderboard features
- **Mobile-First Approach**: Optimized vertical spacing with `justify-around` and touch-friendly button sizing for mobile users
- **Focused User Experience**: Clean black background with vibrant green title creates immediate, clear path to gameplay
- **Professional Layout**: Balanced spacing distribution ensures consistent visual hierarchy across all screen sizes
- **Color Strategy**: Strategic use of complementary colors (green/red) creates visual tension and encourages action

## Commands

- `npm run dev`: Starts a development server where you can develop your application live on Reddit.
- `npm run build`: Builds your client and server projects
- `npm run deploy`: Uploads a new version of your app
- `npm run launch`: Publishes your app for review
- `npm run login`: Logs your CLI into Reddit
- `npm run check`: Type checks, lints, and prettifies your app

## Cursor Integration

This template comes with a pre-configured cursor environment. To get started, [download cursor](https://www.cursor.com/downloads) and enable the `devvit-mcp` when prompted.
