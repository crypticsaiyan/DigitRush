# DigitRush

**DigitRush** is an ultra-fast mental math challenge built for Reddit using the Devvit platform. Test your mathematical reflexes by solving arithmetic problems in lightning-fast rounds that push your speed and accuracy to the limit!

## What is DigitRush?

DigitRush is an extreme-speed mental math game that runs directly within Reddit posts, challenging players to solve as many arithmetic problems as possible in just **1 second total**. This lightning-fast format creates an intense test of mathematical reflexes and instant calculation abilities.

The game features a sophisticated React-based interface with real-time countdown timers, instant visual feedback, and seamless integration with Reddit's user system for authentic leaderboard competition.

The game presents players with rapid-fire arithmetic problems (addition, subtraction, multiplication, division) and challenges them to input correct answers before the extremely short timer runs out. Each correct answer increases your score by 1 point, and the game tracks your accuracy, problems per minute, and maintains a global leaderboard with Reddit user integration.

## What Makes DigitRush Innovative?

### Revolutionary Ultra-Speed Mental Math Format
DigitRush pioneers a completely new category of mathematical gaming with its extreme 1-second total duration:

- **Unprecedented Time Pressure**: Unlike traditional math games with 30-60 seconds, DigitRush's 1-second limit eliminates all thinking time and requires pure mathematical automation
- **Reflexive Mathematics**: Success demands instant number recognition and automatic calculation responses - conscious problem-solving is impossible
- **Cognitive Limit Testing**: Pushes players to their absolute mathematical processing limits, creating genuine achievement when even 1-2 problems are solved
- **Addictive Micro-Sessions**: Ultra-short games enable rapid replay cycles, perfect for mobile gaming and quick mental challenges
- **Mathematical Muscle Memory**: Develops lightning-fast number processing abilities through repeated exposure to extreme time pressure

### Reddit-Native Gaming Innovation
- **Seamless Platform Integration**: First math game built natively for Reddit using Devvit - no external apps, downloads, or account creation required
- **Community-Driven Competition**: Global leaderboard connects players across Reddit with real usernames, profile avatars, and authentic social engagement
- **Instant Social Sharing**: Native mobile share API with custom challenge messages and automatic clipboard fallback for cross-platform compatibility
- **Moderator Empowerment**: Built-in menu actions allow subreddit moderators to create game posts and manage community engagement
- **Reddit Authentication**: Leverages Reddit's existing user system for immediate play and authentic leaderboard participation

### Advanced Technical Architecture
- **Server-Side Security**: All math problems, scoring, and timing handled server-side to prevent cheating and ensure fair global competition
- **Real-Time Feedback System**: Instant visual responses with color-coded input fields and immediate answer reveals create engaging gameplay flow
- **Grace Period Mechanics**: Sophisticated timing logic allows one final answer submission after timer expiration for fairness
- **Anti-Cheat Protection**: Server validates all answers, timing, and game state to maintain leaderboard integrity and competitive balance
- **Cross-Platform Excellence**: Responsive design with touch-optimized controls, keyboard shortcuts, and native mobile features

### Psychological Gaming Innovation
- **Extreme Difficulty as Feature**: The seemingly impossible 1-second limit creates genuine achievement and competitive bragging rights
- **Mathematical Flow State**: Extreme time pressure eliminates overthinking and creates pure mathematical flow experiences
- **Skill Ceiling Breakthrough**: Virtually unlimited room for improvement as players develop mathematical automation and reflexes
- **Instant Gratification**: Ultra-short sessions provide immediate feedback and rapid improvement cycles
- **Competitive Intensity**: The extreme difficulty makes every point meaningful and creates authentic competitive experiences

### Core Game Features

- **Lightning-fast 1-second total game duration** - Extreme time pressure that tests mathematical reflexes and instant calculation
- **Dynamic math problems** covering addition, subtraction, multiplication, and division with server-side generation
- **Personal high score tracking** with automatic saving and celebration animations for new records
- **Global leaderboard** with Reddit user integration, avatars, and medal rankings (Gold/Silver/Bronze)
- **Instant visual feedback** with color-coded input fields (green for correct, red for incorrect answers)
- **Performance analytics** showing accuracy percentage and problems-per-minute calculations
- **Social sharing** with native mobile share API and clipboard fallback for desktop users
- **Responsive design** optimized for both desktop and mobile with touch-friendly controls
- **Custom assets** including specialized fonts (FFFFORWA, Medodica, EditUndo) and animated trophy graphics
- **Real-time countdown** with visual progress bar and critical time warnings
- **Grace period mechanics** allowing one final answer submission after time expires
- **Anti-cheat protection** with server-side validation of all answers and timing
- **Auto-focus input system** with keyboard-optimized controls and Enter key submission
- **Immediate visual feedback** with animated loading states and problem transitions

### Game Flow & Components

The game consists of three main screens that create a seamless gaming experience:

1. **Start Page** (`StartPage.tsx`) - Welcome screen with game introduction, leaderboard preview showing top score, "How to Play" modal with instructions, and animated trophy button for leaderboard access
2. **Game Play** (`GamePlay.tsx`) - The intense 1-second math challenge with real-time scoring, countdown timer, progress bar, and instant visual feedback with color-coded input fields
3. **Game Results** (`GameResults.tsx`) - Comprehensive results analysis with performance metrics, social sharing, leaderboard integration, and responsive mobile/desktop layouts

### Game State Management

The game uses a sophisticated state management system through the `useMathGame` hook that handles:
- **Game States**: 'start' → 'playing' → 'finished' with seamless transitions
- **Real-time Timer**: Countdown from 1 second with automatic game ending
- **Score Tracking**: Current score, high score, accuracy, and total problems attempted
- **Problem Management**: Server-generated math problems with unique IDs and validation
- **API Integration**: RESTful endpoints for game initialization, answer submission, and leaderboard data

## What Makes DigitRush Innovative?

### Extreme-Speed Mental Math Challenge
DigitRush pushes mathematical gaming to its absolute limits with a 1-second total game duration that creates the ultimate test of mathematical reflexes:

- **Ultimate Time Pressure**: 1-second total game time eliminates thinking time and requires pure mathematical automation
- **Reflexive Calculation**: Success demands instant number recognition and automatic calculation responses  
- **Adrenaline-Fueled Gaming**: Extreme time constraints create an addictive, high-intensity gaming experience
- **Mathematical Reflexes**: Develops lightning-fast number processing and calculation abilities through practice
- **Instant Mastery Testing**: Only players with exceptional mathematical fluency can achieve meaningful scores
- **Competitive Intensity**: The extreme difficulty creates genuine achievement and competitive bragging rights
- **Unlimited Skill Ceiling**: Virtually endless room for improvement as players develop mathematical automation

### Reddit-Native Gaming Platform
- **Seamless Integration**: Runs directly within Reddit posts using Devvit - no external sites, apps, or downloads required
- **Community Competition**: Global leaderboard connects players across Reddit with real usernames and profile avatars
- **Instant Authentication**: Uses Reddit's built-in user system for immediate play without separate account creation
- **Social Challenge System**: Native mobile share API with custom challenge messages and automatic clipboard fallback
- **Moderator Tools**: Built-in menu actions for subreddit moderators to create new game posts and manage content

### Advanced Game Architecture
- **Server-Side Security**: All math problems, scoring, and timing handled server-side to prevent cheating and ensure fair competition
- **Real-Time Feedback System**: Instant visual responses with color-coded input fields (green/red) and immediate answer reveals
- **Extreme Pressure Mechanics**: Lightning-fast countdown with visual progress bar and critical time warnings (red under 10s)
- **Comprehensive Analytics**: Detailed post-game statistics including accuracy percentage and problems-per-minute calculations
- **Grace Period Logic**: Players can submit one final answer even after the timer expires for fairness
- **Anti-Cheat Protection**: Server validates all answers, timing, and game state to maintain leaderboard integrity
- **Redis Data Persistence**: High scores and leaderboard data automatically synchronized and persisted across all players

### Technical Excellence
- **Cross-Platform Optimization**: Responsive design works flawlessly on desktop and mobile with touch-optimized controls and layouts
- **Type-Safe Architecture**: Full TypeScript implementation across client, server, and shared modules ensures code reliability
- **Smart Asset Management**: Preloading system with custom fonts (FFFFORWA, Medodica, EditUndo) and animated graphics (trophy.gif)
- **Mobile-First UX**: Native share API, keyboard shortcuts (Enter to submit), auto-focus input, and optimized mobile layouts
- **Modular Component Design**: Clean separation between React components, Express API endpoints, and shared TypeScript types
- **Vite Build System**: Fast development with hot reloading and optimized production builds for both client and server

## How to Play DigitRush

### Step-by-Step Instructions

#### 1. Getting Started
1. **Access the Game**: Open the DigitRush post on Reddit - the game runs directly within the Reddit post interface
2. **Launch the Game**: Click the green "Start Playing" button with heartbeat animation on the main welcome screen
3. **View Leaderboard**: Click the trophy button (animated GIF) in the top-right corner to see current global rankings, top scores, and your current position
4. **Read Instructions**: Optionally click "How to play?" for a quick tutorial modal explaining the basic rules:
   - Solve as many problems as you can while the timer runs down
   - Correct answers increase your score by 1 point each
   - Check the leaderboard and challenge friends with your results

#### 2. Playing the Lightning Math Challenge
1. **Game Initialization**: After clicking "Start Playing", the game loads your first math problem and begins the 1-second countdown immediately
2. **Problem Recognition**: A large math problem appears (e.g., "7 + 3 = ?") in the center of the screen
3. **Instant Calculation**: Calculate the answer as quickly as possible - you have only 1 second total for the entire game session
4. **Answer Input**: 
   - The input field is automatically focused and ready for typing
   - Type only the numerical answer (negative numbers supported with minus sign)
   - Press **Enter** to submit immediately, or click the "Submit" button
5. **Immediate Feedback**:
   - ✅ **Correct Answer**: Input field turns green, shows "✅ Correct!" message, score increases by 1
   - ❌ **Wrong Answer**: Input field turns red, shows "❌ Wrong! Answer was [correct answer]"
6. **Continuous Flow**: New problems appear instantly after each submission with automatic input clearing and focus
7. **Monitor Progress**: Watch your score (top-left) and countdown timer (top-right) with color-coded progress bar
8. **Game End**: When the 1-second timer reaches zero, the game automatically ends and transitions to results

#### 3. Viewing Your Results
1. **Performance Summary**: See your final score prominently displayed with celebration animation if you achieved a new personal best
2. **Detailed Analytics**: Review your performance metrics:
   - **Problems per minute**: Rate calculation based on your score and game duration
   - **Accuracy percentage**: Correct answers divided by total attempts
   - **Personal high score**: Your all-time best performance with gold medal icon
3. **Social Sharing**: 
   - Click "Share Score" to challenge friends using native mobile share or clipboard copy
   - Pre-formatted message: "I got a score of [X] in DigitRush. Can you beat my score? Play now [post URL]"
4. **Global Leaderboard**: View your rank among all players with Reddit usernames and profile avatars
5. **Continue Playing**: Click "Play Again" for another lightning round or "Back to Menu" to return to the start screen

### The Lightning Math Challenge Experience
DigitRush challenges you to solve as many arithmetic problems as possible in just **1 second total**, creating an extreme test of mathematical reflexes and instant calculation abilities. This is not 1 second per problem - it's 1 second for the entire game session!

#### During the Lightning Math Challenge
1. **Instant Problem Recognition**: A math problem appears in large text (e.g., "7 + 3 = ?") - you have only 1 second total for the entire game!
2. **Reflexive Calculation**: Calculate the answer instantly using mathematical automation - no time for conscious thinking
3. **Lightning Input**: Type the numerical answer in the auto-focused input field and press **Enter** immediately for submission
4. **Immediate Visual Feedback**: 
   - ✅ **Correct**: Input field turns green with "✅ Correct!" message and you advance to the next problem instantly
   - ❌ **Wrong**: Input field turns red showing "❌ Wrong! Answer was [correct answer]" then continues to next problem
5. **Monitor Your Progress in Real-Time**: 
   - **Score** (top-left): Increases by 1 for each correct answer, displayed prominently in accent green (#86f6b1)
   - **Timer** (top-right): Counts down from 1 second with color-coded progress bar (turns red when ≤10 seconds remain)
   - **Progress Bar**: Visual countdown showing remaining time percentage with smooth animations
6. **Seamless Problem Flow**: New problems appear instantly after each submission with automatic input clearing and focus restoration

**Interface Details**:
- **Auto-Focus System**: Input field automatically focuses and selects text for maximum speed
- **Number-Only Input**: Keyboard validation accepts only numbers and minus sign (for negative results)
- **Loading States**: Visual feedback during answer submission with "Loading..." placeholder
- **Problem Transitions**: Smooth transitions between problems with automatic state management

**Reality Check**: In 1 second, most players can only attempt 1 problem, maybe 2 if they're extremely fast. The challenge is completing even a single calculation and input before time expires.

#### Game Mechanics & Rules
- **Scoring System**: Each correct answer = +1 point (no penalties for incorrect answers, encouraging speed over caution)
- **Time Limit**: Extreme 1-second total game duration that tests pure mathematical reflexes and automation
- **Problem Types**: Addition, subtraction, multiplication, and division with server-generated varying difficulty levels
- **Input System**: Accepts only numerical input with support for negative numbers (subtraction results)
- **Grace Period**: You can submit one final answer even after the timer reaches zero for fairness
- **Server-Side Validation**: All problems, answers, and timing are validated server-side to prevent cheating
- **Auto-Focus System**: Input field automatically focuses and selects text for maximum input speed
- **Keyboard Optimization**: Number-only input validation with Enter key submission for maximum efficiency
- **Continuous Problem Flow**: New problems appear immediately after each answer submission with automatic input clearing
- **Dynamic Problem Generation**: Server generates diverse arithmetic problems in real-time during gameplay
- **Loading States**: Visual feedback during answer submission with disabled input and "Loading..." placeholder text
- **Ultimate Mathematical Challenge**: Success requires developing mathematical automation - conscious thinking time is eliminated
- **Game State Management**: Seamless transitions between Start Page, GamePlay, and GameResults screens
- **Asset Preloading**: Custom fonts and images are preloaded for smooth gameplay experience

#### Technical Implementation Details
- **Problem Uniqueness**: Each math problem has a unique ID to prevent duplicate submissions and ensure proper answer validation
- **State Synchronization**: Client and server maintain synchronized game state throughout the session using RESTful API endpoints
- **Submission Prevention**: Input is disabled during answer processing to prevent multiple submissions and race conditions
- **Final Answer Logic**: Special handling for submitting answers when time expires with grace period mechanics
- **Error Handling**: Graceful handling of network errors, invalid responses, and game expiration scenarios
- **Timer Management**: Precise countdown timer with automatic cleanup on component unmount and game state transitions
- **Asset Preloading**: Custom fonts (FFFFORWA, Medodica, EditUndo) and images preloaded for smooth gameplay experience
- **Auto-Focus System**: Intelligent input field focusing and text selection for maximum input speed and user experience

### Results & Performance Analysis
After your lightning math challenge ends, you'll see comprehensive game statistics and performance analytics:

#### Game Summary & Statistics
- **Final Score**: Large prominent display of total problems solved correctly with accent green color highlighting
- **New High Score Celebration**: Animated celebration with party popper emojis if you beat your personal best record
- **Personal Best Tracking**: Your all-time high score displayed with a gold medal icon for easy reference
- **Detailed Performance Metrics**: 
  - **Problems per minute**: Calculated rate based on your score and actual game duration
  - **Accuracy percentage**: Correct answers divided by total attempts, showing mathematical precision under pressure

#### Responsive Layout Design
The results screen intelligently adapts to your device for optimal user experience:

**Mobile Layout** (single-column, optimized order for touch):
1. **Your Score** - Large display with celebration animation if new high score achieved
2. **Share Score** - Native mobile share API button or clipboard fallback for challenging friends
3. **Play Again** - Prominent animated green button with heartbeat effect for immediate replay
4. **Leaderboard** - Button showing your current rank among all players with trophy icon
5. **High Score** - Your personal best with gold medal icon for motivation
6. **Performance Metrics** - Accuracy percentage and problems-per-minute calculations
7. **Back to Menu** - Return to start screen for accessing other features

**Desktop Layout** (two-column design for larger screens):
- **Left Column**: Your score with celebration animations and new high score notifications
- **Right Column**: High score tracking and detailed performance metrics display
- **Top-Right**: Trophy icon for quick leaderboard access without leaving results
- **Bottom Actions**: Horizontal layout with Play Again, Share Score, and Back to Menu buttons

#### Leaderboard & Social Features
- **Global Rankings**: View top players worldwide with Reddit usernames and authentic profile avatars
- **Your Current Rank**: Your position among all players displayed prominently in a highlighted gradient card
- **Medal System**: Gold (1st), Silver (2nd), Bronze (3rd) with gradient styling, colored borders, and medal icons
- **Animated Trophy**: Live GIF trophy icon for visual appeal and competitive engagement
- **Smart Avatar System**: Automatic fallback to Reddit default avatars or user initials if profile images fail to load
- **Rank-Based Visual Styling**: Special visual treatment for top 3 positions with colored borders, gradients, and backgrounds
- **Paginated Leaderboard**: Load more functionality to view complete rankings beyond top 10 players
- **Advanced Social Sharing**: 
  - Native mobile share API with automatic clipboard fallback for desktop compatibility
  - Pre-formatted challenge message: "I got a score of [X] in DigitRush. Can you beat my score? Play now [post URL]"
  - Cross-platform compatibility ensuring seamless sharing on both mobile and desktop devices
  - Copy success notification popup for successful clipboard operations with 2-second auto-dismiss
  - Integrated share button in both mobile and desktop result layouts for maximum accessibility

#### Continue Playing Options
- **Play Again**: Prominent animated green button with heartbeat CSS animation to immediately start another lightning math challenge
- **Back to Menu**: Return to the start screen to view leaderboard, read instructions, or access other game features
- **Share Score**: Challenge friends and community members with your results using native sharing or clipboard copy

### Understanding the Lightning Challenge

The 1-second format creates the ultimate test of mathematical reflexes and cognitive automation:

- **Develop Mathematical Automation**: Regular practice builds instant number recognition and reflexive calculation abilities
- **Experience Extreme Gaming**: The seemingly impossible time pressure creates an addictive, high-intensity gaming experience
- **Build Mathematical Reflexes**: Success requires developing automatic mathematical responses that bypass conscious thought
- **Test Pure Mathematical Skill**: Eliminates strategy and thinking time - only mathematical mastery and automation matter

#### Score Expectations & Progression (1-Second Lightning Mode)
- **First Attempts**: 0 points - Most players cannot even input an answer in 1 second on their first try
- **Learning the Interface**: 0-1 points as players learn to quickly recognize problems and use keyboard shortcuts
- **Basic Competency**: 1-2 points for players who can solve one simple problem very quickly
- **Skilled Players**: 2-4 points for those with exceptional speed and simple math automation
- **Expert Level**: 4-6 points for players with lightning-fast reflexes and instant number recognition
- **Master Level**: 6+ points - extremely rare, requires perfect mathematical automation and interface mastery

**Note**: The 1-second format is intentionally extreme. Most players will score 0-2 points, making even small improvements feel significant and rewarding.

### User Interface & Controls

#### Game Screen Layout
- **Top-Left**: Current score display in bright green (#86f6b1) with large, bold font
- **Top-Right**: Countdown timer and progress bar (turns red when ≤10 seconds remain)
- **Center**: Math problem in large text (e.g., "15 - 8 = ?")
- **Bottom**: Answer input field with auto-focus and "Submit" button
- **Footer**: Instruction text: "Type your answer and press Enter or click Submit"

#### Input Controls & Keyboard Shortcuts
- **Auto-Focus**: Input field automatically focuses when new problems appear
- **Number-Only Input**: Accepts digits 0-9 and minus sign (-) for negative results
- **Enter Key**: Press Enter to submit answers instantly (fastest method)
- **Text Selection**: Input automatically selects all text for quick replacement
- **Disabled States**: Input is disabled during answer processing to prevent multiple submissions
- **Loading Feedback**: Shows "Loading..." placeholder during answer submission

#### Visual Feedback System
- **Correct Answers**: Green input field with checkmark and "Correct!" message
- **Wrong Answers**: Red input field with X mark and correct answer display
- **Progress Bar**: Smooth countdown animation with color transitions (green → red)
- **Score Animation**: Score increases with smooth transitions and highlighting
- **Loading States**: Visual indicators during game initialization and answer processing

#### Responsive Design Features
- **Mobile Optimization**: Touch-friendly buttons and input fields sized for mobile screens
- **Desktop Enhancement**: Keyboard shortcuts and hover effects for desktop users
- **Cross-Platform**: Consistent experience across all devices and screen sizes
- **Accessibility**: High contrast colors, clear fonts, and keyboard navigation support

### Pro Tips for Lightning Success
- **Master Basic Mathematical Facts**: Memorize addition/subtraction to 20 and multiplication tables until they become completely automatic
- **Use Keyboard Shortcuts**: Press **Enter** to submit answers instantly - every millisecond counts in the 1-second challenge
- **Embrace the Extreme Pressure**: Accept that 1 second seems impossible - focus on building mathematical reflexes over time through practice
- **Develop Pattern Recognition**: Train your brain to recognize common number combinations and calculation patterns instantly
- **Build Number Sense**: Practice until calculations become automatic and unconscious rather than deliberate thinking
- **Leverage Auto-Focus**: The input field automatically focuses and selects - be ready to type the instant you see the problem
- **Prioritize Accuracy Over Speed**: In 1 second, you might only solve 1-2 problems - make every answer count
- **Practice Consistently**: Regular practice sessions build the mathematical automation and muscle memory needed for success
- **Stay Relaxed Under Pressure**: Tension slows reflexes - stay loose and let your mathematical training take over
- **Build Skills Gradually**: Start with mental math practice in longer sessions, then work down to lightning-speed challenges

## Development

### Quick Start
```bash
git clone <repository-url>
cd DigitRush
npm ci
npm run dev
```

### Project Structure
- `src/client/` — React frontend with TypeScript
  - `components/` — StartPage, GamePlay, GameResults, Leaderboard with responsive layouts
  - `hooks/` — useMathGame (game state management), useAssetPreloader, useCounter
  - `public/` — Static assets
    - `fonts/` — FFFFORWA.TTF, MedodicaRegular.otf, editundo.ttf
    - `images/` — gold.png, silver.png, bronze.png, trophy.gif, scroll.png, partypopper.png
  - `main.tsx` — React application entry point
  - `App.tsx` — Main app component with game state management and screen transitions
  - `index.css` — Tailwind CSS with custom animations, dark theme, and heartbeat effects
  - `vite.config.ts` — Client build configuration
- `src/server/` — Express API with Devvit integration
  - `core/` — Business logic modules (post creation, game management)
  - `index.ts` — Main server with API endpoints (/api/game/*, /api/leaderboard, /api/share-info)
  - `vite.config.ts` — Server build configuration
- `src/shared/` — Shared TypeScript types and constants
  - `types/api.ts` — Game responses, leaderboard entries, math problems, share info
  - `constants.ts` — Game configuration (GAME_DURATION_SECONDS: 1, LOW_TIME_THRESHOLD: 10)

### Key Components Architecture

#### Game State Management (`useMathGame.ts`)
- **Centralized State**: Single hook managing all game state including score, timer, problems, and leaderboard data
- **API Integration**: Handles all server communication through RESTful endpoints
- **Timer Management**: Precise countdown with automatic cleanup and game ending logic
- **Problem Flow**: Manages problem generation, answer submission, and state transitions
- **Error Handling**: Graceful handling of network errors and edge cases

#### Component Hierarchy
```
App.tsx (Main container with loading states)
├── StartPage.tsx (Welcome screen with leaderboard preview)
├── GamePlay.tsx (Active gameplay with timer and input)
└── GameResults.tsx (Results analysis and social sharing)
    └── Leaderboard.tsx (Global rankings modal)
```

#### API Endpoints
- `POST /api/game/init` — Initialize game session and get user data
- `POST /api/game/start` — Start new game and get first problem
- `POST /api/game/answer` — Submit answer and get next problem
- `POST /api/game/end` — End game and get final results
- `GET /api/leaderboard` — Get global rankings and user position
- `GET /api/share-info` — Get post URL and subreddit for sharing

### Configuration

#### Difficulty Customization
The game's duration can be easily adjusted for different challenge levels:

```typescript
// src/shared/constants.ts
export const GAME_DURATION_SECONDS = 1;    // Current: Lightning Mode (extreme difficulty)
export const LOW_TIME_THRESHOLD = 10;      // Warning threshold (when progress bar turns red)
```

**Recommended Settings:**
- **Lightning Mode**: 1 second (current) - Ultimate mathematical reflex challenge
- **Blitz Mode**: 5 seconds - Extremely fast-paced for advanced players
- **Speed Mode**: 15 seconds - Intense pressure for skilled players
- **Quick Mode**: 30 seconds - Fast-paced rounds for regular play
- **Standard Mode**: 60 seconds - Balanced challenge for most players
- **Extended Mode**: 120 seconds - More relaxed pace for skill development
- **Learning Mode**: 180+ seconds - For practice and building confidence

**Note**: The LOW_TIME_THRESHOLD setting controls when the progress bar turns red to indicate critical time remaining. With the current 1-second duration, the bar is red from the start due to the extreme time pressure.

#### Other Configuration
- **Asset Management**: Custom fonts (FFFFORWA, Medodica, EditUndo) and images in `src/client/public/`
- **Styling**: Tailwind CSS with custom dark theme and accent colors (#86f6b1, #00bf63, #06282a)
- **Game Logic**: Server-side problem generation and validation in `src/server/`
- **Devvit Integration**: Configuration in `devvit.json` for Reddit platform deployment

### Build & Deploy
```bash
npm run build      # Build for production
npm run deploy     # Deploy to Reddit using Devvit
npm run launch     # Publish for review on Reddit
npm run type-check # TypeScript validation
npm run lint       # Code quality checks
```

### Testing
```bash
npm run dev        # Start development server with hot reloading
# Visit the provided playtest URL to test in Reddit environment
```

## License

BSD-3-Clause
