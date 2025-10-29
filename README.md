# DigitRush

**DigitRush** is a lightning-fast mental math challenge game built natively for Reddit using the Devvit platform. Race against a 60-second countdown to solve as many arithmetic problems as possible while competing on a global leaderboard with authentic Reddit users!

![DigitRush Game Preview](assets/default-splash.png)

## What is DigitRush?

DigitRush is an intense 60-second mental math challenge that runs directly within Reddit posts, testing your mathematical speed and accuracy under extreme time pressure. Players race to solve as many arithmetic problems as possible while a countdown timer creates heart-pounding urgency.

**Core Gameplay**: You have exactly 60 seconds to solve rapid-fire math problems covering addition, subtraction, multiplication, and division. Each correct answer earns 1 point, with no penalties for wrong answers - encouraging speed over caution. The game features real-time visual feedback, instant problem transitions, and a sophisticated scoring system that tracks both accuracy and problems-per-minute.

**Reddit Integration**: Built natively on Reddit's Devvit platform, DigitRush seamlessly integrates with Reddit's user system for authentic competition. The global leaderboard displays real Reddit usernames and profile avatars, creating genuine social competition without requiring external accounts or downloads.

**Technical Excellence**: The game features a React-based interface with server-side problem generation, anti-cheat protection, real-time countdown timers, and responsive design optimized for both mobile and desktop play. Custom fonts, animated assets, and smooth transitions create a polished gaming experience.

### Game Flow
The game consists of three main screens that create a seamless gaming experience:

1. **Start Page** - Welcome screen with game introduction, total plays counter, leaderboard preview, and "How to Play" instructions
2. **Game Play** - The intense 60-second math challenge with real-time scoring, countdown timer, and instant visual feedback
3. **Game Results** - Comprehensive results analysis with performance metrics, social sharing, and leaderboard integration

## What Makes DigitRush Innovative?

DigitRush revolutionizes mental math gaming through its unique combination of Reddit-native integration, perfectly balanced 60-second challenge format, and sophisticated anti-cheat architecture that creates authentic competitive gameplay.

### Perfectly Balanced 60-Second Challenge Format
DigitRush's 60-second duration creates the optimal mathematical gaming experience:

- **Intense Time Pressure**: Creates heart-pounding urgency that eliminates hesitation and forces rapid mental calculation
- **Achievable Excellence**: Long enough for skilled players to demonstrate mastery (50+ problems) while remaining accessible to beginners
- **Strategic Decision Making**: Players must balance speed vs accuracy - rushing causes mistakes, but hesitation wastes precious seconds
- **Addictive Replay Value**: Perfect session length for "just one more game" psychology with immediate restart capability
- **Mathematical Flow State**: Sustained 60-second focus develops rapid number processing and calculation fluency
- **Meaningful Progression**: Substantial skill ceiling allows continuous improvement over time with clear performance metrics

### Revolutionary Reddit-Native Gaming Platform
- **Zero-Friction Access**: First mental math game built natively for Reddit - no downloads, external accounts, or app installations required
- **Authentic Social Competition**: Global leaderboard features real Reddit usernames, profile avatars, and genuine community engagement
- **Advanced Social Sharing**: Native mobile share API with pre-formatted challenge messages and intelligent clipboard fallback for desktop users
- **Community Integration**: Moderator menu actions enable easy game post creation and subreddit community management
- **Seamless Authentication**: Leverages Reddit's existing user system for instant play and authentic competitive participation
- **Cross-Subreddit Competition**: Players from different communities compete on unified global leaderboards

### Sophisticated Anti-Cheat Architecture
- **Server-Side Problem Generation**: All math problems generated server-side with unique IDs to prevent predictability and client-side manipulation
- **Comprehensive Validation**: Server validates all answers, timing, game state, and score calculations to ensure leaderboard integrity
- **Real-Time State Synchronization**: Client and server maintain synchronized game state throughout sessions using secure RESTful APIs
- **Grace Period Fairness**: Sophisticated timing logic allows one final answer submission after timer expiration to prevent network lag penalties
- **Tamper-Proof Scoring**: All scoring logic handled server-side with Redis persistence to prevent score manipulation
- **Secure Leaderboard System**: Composite scoring with timestamp-based tie-breaking ensures fair and deterministic rankings

### Advanced User Experience Design
- **Instant Visual Feedback**: Color-coded input fields (green for correct, red for incorrect) with immediate answer reveals create engaging flow
- **Auto-Focus Input System**: Intelligent input field focusing and text selection maximizes input speed and eliminates friction
- **Responsive Cross-Platform Design**: Touch-optimized mobile controls with keyboard shortcuts and hover effects for desktop users
- **Custom Asset Integration**: Specialized fonts (FFFFORWA, Medodica, EditUndo) and animated graphics create polished visual experience
- **Loading State Management**: Smooth transitions and loading indicators prevent user confusion during network operations
- **Accessibility Excellence**: High contrast colors, clear typography, and keyboard navigation support ensure inclusive gameplay

### Core Game Features

- **Fast-paced 60-second game duration** - Optimal time pressure that balances speed and accuracy challenges
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

### Technical Architecture

**Game State Management**: The game uses a sophisticated state management system through the `useMathGame` hook that handles:
- **Game States**: 'start' → 'playing' → 'finished' with seamless transitions
- **Real-time Timer**: Countdown from 60 seconds with automatic game ending
- **Score Tracking**: Current score, high score, accuracy, and total problems attempted
- **Problem Management**: Server-generated math problems with unique IDs and validation
- **API Integration**: RESTful endpoints for game initialization, answer submission, and leaderboard data

**Component Architecture**:
- **StartPage.tsx** - Welcome screen with game introduction, total plays counter, leaderboard preview, and "How to Play" modal
- **GamePlay.tsx** - The intense 60-second math challenge with real-time scoring, countdown timer, and instant visual feedback
- **GameResults.tsx** - Comprehensive results analysis with performance metrics, social sharing, and leaderboard integration
- **Leaderboard.tsx** - Global rankings modal with Reddit user integration and medal system



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

#### 2. Playing the 60-Second Math Challenge
1. **Game Initialization**: After clicking "Start Playing", the game loads your first math problem and begins the 60-second countdown immediately
2. **Problem Recognition**: A large math problem appears (e.g., "7 + 3 = ?") in the center of the screen
3. **Calculate and Input**: Calculate the answer and type it as quickly as possible - you have 60 seconds to solve as many problems as you can
4. **Answer Input**: 
   - The input field is automatically focused and ready for typing
   - Type only the numerical answer (negative numbers supported with minus sign)
   - Press **Enter** to submit immediately, or click the "Submit" button
5. **Immediate Feedback**:
   - ✅ **Correct Answer**: Input field turns green, shows "✅ Correct!" message, score increases by 1
   - ❌ **Wrong Answer**: Input field turns red, shows "❌ Wrong! Answer was [correct answer]"
6. **Continuous Flow**: New problems appear instantly after each submission with automatic input clearing and focus
7. **Monitor Progress**: Watch your score (top-left) and countdown timer (top-right) with color-coded progress bar
8. **Game End**: When the 60-second timer reaches zero, the game automatically ends and transitions to results

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

### The 60-Second Math Challenge Experience
DigitRush challenges you to solve as many arithmetic problems as possible in **60 seconds**, creating an engaging test of mathematical speed, accuracy, and mental agility under time pressure.

#### During the 60-Second Math Challenge
1. **Problem Recognition**: A math problem appears in large text (e.g., "7 + 3 = ?") - you have 60 seconds to solve as many as possible!
2. **Quick Calculation**: Calculate the answer efficiently, balancing speed with accuracy for maximum score
3. **Fast Input**: Type the numerical answer in the auto-focused input field and press **Enter** for quick submission
4. **Immediate Visual Feedback**: 
   - ✅ **Correct**: Input field turns green with "✅ Correct!" message and you advance to the next problem instantly
   - ❌ **Wrong**: Input field turns red showing "❌ Wrong! Answer was [correct answer]" then continues to next problem
5. **Monitor Your Progress in Real-Time**: 
   - **Score** (top-left): Increases by 1 for each correct answer, displayed prominently in accent green (#86f6b1)
   - **Timer** (top-right): Counts down from 60 seconds with color-coded progress bar (turns red when ≤10 seconds remain)
   - **Progress Bar**: Visual countdown showing remaining time percentage with smooth animations
6. **Seamless Problem Flow**: New problems appear instantly after each submission with automatic input clearing and focus restoration

**Interface Details**:
- **Auto-Focus System**: Input field automatically focuses and selects text for maximum speed
- **Number-Only Input**: Keyboard validation accepts only numbers and minus sign (for negative results)
- **Loading States**: Visual feedback during answer submission with "Loading..." placeholder
- **Problem Transitions**: Smooth transitions between problems with automatic state management

**Strategy**: In 60 seconds, skilled players can solve 20-40+ problems. The key is finding the right balance between speed and accuracy - rushing leads to mistakes, but hesitation wastes precious time.

### Math Problem Types & Difficulty

DigitRush generates four types of arithmetic problems with carefully balanced difficulty levels:

#### Addition Problems
- **Format**: `A + B = ?`
- **Range**: Both numbers from 10-99 (two-digit numbers)
- **Examples**: `47 + 83`, `25 + 56`, `91 + 38`
- **Difficulty**: Moderate - requires carrying for most problems

#### Subtraction Problems  
- **Format**: `A - B = ?`
- **Range**: A from 20-99, B from 10 to (A-1)
- **Examples**: `74 - 29`, `85 - 47`, `63 - 18`
- **Difficulty**: Moderate - always produces positive results, may require borrowing

#### Multiplication Problems
- **Format**: `A × B = ?`
- **Range**: A from 2-20, B from 2-10 (excludes 1 to avoid trivial problems)
- **Examples**: `7 × 8`, `15 × 6`, `12 × 9`
- **Difficulty**: Moderate to Hard - tests multiplication table knowledge and larger calculations

#### Division Problems
- **Format**: `A ÷ B = ?`
- **Range**: Divisors 2-11 (excludes 1), ensures clean division with no remainders
- **Examples**: `84 ÷ 7`, `132 ÷ 11`, `45 ÷ 9`
- **Difficulty**: Moderate to Hard - all problems result in whole number answers
- **Special Logic**: Problems with divisor 11 use larger dividends (100-1000 range) for more challenging calculations

#### Problem Generation Features
- **Server-Side Generation**: All problems generated server-side to prevent predictability
- **Unique IDs**: Each problem has a unique identifier to prevent duplicate submissions
- **Balanced Distribution**: Equal probability of each operation type appearing
- **No Trivial Problems**: Excludes problems with 1 as a factor to maintain challenge level
- **Clean Results**: Division problems always result in whole numbers (no decimals or remainders)

#### Game Mechanics & Rules
- **Scoring System**: Each correct answer = +1 point (no penalties for incorrect answers, encouraging speed over caution)
- **Time Limit**: 60-second game duration that tests mathematical speed and accuracy under pressure
- **Problem Types**: Addition, subtraction, multiplication, and division with server-generated varying difficulty levels
- **Input System**: Accepts only numerical input with support for negative numbers (subtraction results)
- **Grace Period**: You can submit one final answer even after the timer reaches zero for fairness
- **Server-Side Validation**: All problems, answers, and timing are validated server-side to prevent cheating
- **Auto-Focus System**: Input field automatically focuses and selects text for maximum input speed
- **Keyboard Optimization**: Number-only input validation with Enter key submission for maximum efficiency
- **Continuous Problem Flow**: New problems appear immediately after each answer submission with automatic input clearing
- **Dynamic Problem Generation**: Server generates diverse arithmetic problems in real-time during gameplay
- **Loading States**: Visual feedback during answer submission with disabled input and "Loading..." placeholder text
- **Balanced Mathematical Challenge**: Success requires developing both speed and accuracy in mental calculation
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
3. **Play Again** - Prominent animated green button with heartbeat effect for another 60-second challenge
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
- **Play Again**: Prominent animated green button with heartbeat CSS animation to immediately start another 60-second math challenge
- **Back to Menu**: Return to the start screen to view leaderboard, read instructions, or access other game features
- **Share Score**: Challenge friends and community members with your results using native sharing or clipboard copy

### Understanding the 60-Second Challenge

The 60-second format creates an engaging test of mathematical speed and accuracy:

- **Develop Mathematical Fluency**: Regular practice builds faster mental calculation and number recognition abilities
- **Experience Engaging Gaming**: The balanced time pressure creates an addictive, challenging gaming experience
- **Build Mathematical Speed**: Success requires developing faster calculation skills while maintaining accuracy
- **Test Mathematical Skill**: Balances speed and accuracy - both quick thinking and careful calculation matter

#### Score Expectations & Progression (60-Second Challenge)
- **First Attempts**: 5-15 points - New players learning the interface and getting comfortable with the time pressure
- **Learning Phase**: 10-20 points as players develop rhythm and learn to balance speed with accuracy
- **Basic Competency**: 15-25 points for players who can maintain steady problem-solving pace
- **Skilled Players**: 25-35 points for those with good mental math skills and efficient input techniques
- **Expert Level**: 35-50 points for players with excellent mathematical fluency and speed
- **Master Level**: 50+ points - exceptional performance requiring both speed and near-perfect accuracy

**Note**: The 60-second format allows for meaningful progression and skill development, with most players able to see improvement over time.

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

### Pro Tips for 60-Second Success
- **Master Basic Mathematical Facts**: Memorize addition/subtraction to 20 and multiplication tables for faster calculation
- **Use Keyboard Shortcuts**: Press **Enter** to submit answers instantly - it's faster than clicking the button
- **Find Your Rhythm**: Develop a steady pace that balances speed with accuracy for maximum score
- **Develop Pattern Recognition**: Train your brain to recognize common number combinations and calculation shortcuts
- **Build Mental Math Skills**: Practice mental calculation techniques to solve problems faster
- **Leverage Auto-Focus**: The input field automatically focuses and selects - be ready to type immediately
- **Balance Speed and Accuracy**: Don't rush so much that you make careless mistakes, but don't hesitate too long
- **Practice Consistently**: Regular play builds mathematical fluency and familiarity with the interface
- **Stay Calm Under Pressure**: Maintain focus and composure as the timer counts down
- **Learn from Mistakes**: Pay attention to the correct answers when you get problems wrong

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
  - `constants.ts` — Game configuration (GAME_DURATION_SECONDS: 60, LOW_TIME_THRESHOLD: 10)

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
export const GAME_DURATION_SECONDS = 60;   // Current: 60-second challenge mode
export const LOW_TIME_THRESHOLD = 10;      // Warning threshold (when progress bar turns red)
```

**Recommended Settings:**
- **Lightning Mode**: 15 seconds - Extremely fast-paced for advanced players
- **Speed Mode**: 30 seconds - Intense pressure for skilled players  
- **Standard Mode**: 60 seconds (current) - Balanced challenge for most players
- **Extended Mode**: 90 seconds - More relaxed pace for skill development
- **Learning Mode**: 120+ seconds - For practice and building confidence
- **Marathon Mode**: 180+ seconds - Extended sessions for endurance challenges

**Note**: The LOW_TIME_THRESHOLD setting controls when the progress bar turns red to indicate critical time remaining. With the current 60-second duration, the bar turns red when 10 seconds or less remain.

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
