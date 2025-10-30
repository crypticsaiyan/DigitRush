# DigitRush

**DigitRush** is a lightning-fast mental math challenge game built natively for Reddit using the Devvit platform. Test your arithmetic skills in two exciting game modes while competing with real Reddit users on global leaderboards.

![DigitRush Game Preview](gameassets/main.png)

## What is DigitRush?

DigitRush is an interactive mental math gaming platform that runs directly within Reddit posts. Players can choose between two distinct game modes: a high-speed 60-second Speed Challenge for rapid-fire problem solving, or a precision-focused Daily Challenge where everyone gets the same 5 problems each day. All gameplay features real-time leaderboards with Reddit user integration, persistent progress tracking, and seamless social sharing capabilities.

The game launches directly from Reddit posts with a single click, requiring no downloads or external accounts. Players see their Reddit username and Snoo avatar throughout the experience, creating a truly native Reddit gaming experience that feels like a natural extension of the platform.

## What Makes DigitRush Innovative?

### 🚀 **Reddit-Native Gaming Experience**
- **Zero Downloads Required**: Runs directly in Reddit posts using Devvit's web platform with instant loading
- **Seamless Reddit Integration**: Automatic user authentication with real Reddit usernames and Snoo avatars
- **Cross-Subreddit Competition**: Players from different communities compete on unified global leaderboards
- **Native Social Sharing**: Built-in mobile share API with intelligent clipboard fallback for desktop users
- **Post Integration**: Games appear as interactive posts in subreddit feeds with custom splash screens

### 🎯 **Dual Game Mode Architecture**
- **Speed Challenge**: 60-second rapid-fire arithmetic with optional auto-submit functionality for maximum speed
- **Daily Challenge**: 5 carefully crafted problems with global daily rankings and one-attempt-per-day mechanics
- **Persistent Progress**: High scores, daily completions, and user statistics saved across sessions using Redis
- **Real-Time Competition**: Live leaderboards that update immediately as players achieve new scores
- **Smart State Management**: Automatic game state persistence and recovery across browser sessions

### 🧠 **Intelligent Problem Generation**
- **Balanced Difficulty**: Four operation types (addition, subtraction, multiplication, division) with carefully tuned number ranges
- **Deterministic Daily Problems**: Same 5 problems for all players worldwide using date-based seeding for fair competition
- **Clean Division**: Division problems guarantee whole number answers to maintain mental math focus
- **Smart Number Ranges**: Problems scaled appropriately for rapid mental calculation without requiring calculators
- **Anti-Trivial Logic**: Prevents overly simple problems (like 1×1) while maintaining mental math accessibility

### 📱 **Mobile-First Design with Advanced UX**
- **Responsive Interface**: Fully optimized for both mobile and desktop Reddit users with touch-friendly controls
- **Auto-Submit Toggle**: Optional retro-style square toggle that automatically submits correct answers for rapid gameplay
- **Visual Feedback System**: Real-time color-coded input highlighting (green for correct, red for incorrect)
- **Accessibility Features**: Full keyboard navigation, screen reader support, and proper ARIA labels
- **Custom Animations**: Heartbeat animations on main buttons, loading sequences, and smooth transitions for engaging gameplay
- **Asset Preloading**: Custom fonts and images preload with progress tracking for smooth gameplay experience

## How to Play DigitRush

### Getting Started
1. **Find a DigitRush Post**: Look for DigitRush posts in participating subreddits
2. **Click "Launch App"**: Tap the button to open the game in full-screen webview mode
3. **Wait for Assets**: The game preloads fonts and images with a custom loading animation
4. **Choose Your Mode**: Select either "Start Playing" for Speed Challenge or "Daily Challenge" from the main menu

### Speed Challenge Mode

#### Objective
Solve as many arithmetic problems as possible in exactly 60 seconds to achieve your highest score and climb the global leaderboard.

#### Step-by-Step Instructions
1. **Start the Game**: Click "Start Playing" from the main menu
2. **Understand the Interface**: 
   - **Top Left**: Current score counter
   - **Top Center**: Retro-style square auto-submit toggle switch
   - **Top Right**: Time remaining (60s countdown) with color-changing progress bar
3. **Solve Problems**: You'll see math problems like `47 + 83 = ?` or `84 ÷ 7 = ?`
4. **Enter Your Answer**: Type the answer using the large number input field (number-only input)
5. **Choose Submit Method**:
   - **Auto-Submit Mode** (Default): Correct answers automatically submit when typed
   - **Manual Mode**: Press Enter or click the Submit button for each answer
6. **Visual Feedback**: Input field changes color (green for correct, red for incorrect) with brief success/error messages
7. **Race the Clock**: Progress bar turns red when 10 seconds remain
8. **Automatic End**: Game automatically ends when timer reaches zero, with final answer submission if applicable
9. **View Results**: See your final score, accuracy percentage, performance metrics, and high score status
10. **Share & Compare**: Use native mobile sharing, view the global leaderboard, or play again

#### Speed Challenge Features
- **Real-Time Timer**: 60-second countdown with visual progress bar that changes color
- **Auto-Submit Toggle**: Retro-style square toggle to enable/disable automatic submission
- **Instant Visual Feedback**: Input field color changes and brief success/error messages
- **Live Score Counter**: Real-time score updates as you solve problems
- **High Score Tracking**: Personal best scores saved with "NEW HIGH SCORE!" celebrations
- **Performance Analytics**: Accuracy percentage and problems-per-minute calculations

### Daily Challenge Mode

#### Objective
Complete exactly 5 math problems as quickly and accurately as possible. All players worldwide get identical problems each day, competing for the fastest completion time.

#### Step-by-Step Instructions
1. **Access Daily Challenge**: Click "Daily Challenge" from the main menu
2. **Check Today's Status**: 
   - See if you've already completed today's challenge
   - View your previous completion summary if already done
3. **Start Challenge**: Click "Start Daily Challenge" (only one attempt allowed per day)
4. **Solve 5 Problems**: Work through each problem sequentially with no time pressure
5. **Track Progress**: 
   - **Top Left**: Problem counter (1/5, 2/5, etc.)
   - **Top Right**: Elapsed time with precision timing (MM:SS.T format)
   - **Bottom**: Visual progress bar showing completion percentage
6. **Submit Each Answer**: Type answer and press Enter or click Submit (no auto-submit in Daily Challenge)
7. **Automatic Completion**: Challenge ends after the 5th problem is answered and returns to menu
8. **View Completion Summary**: Menu shows your score (X/5), completion time, and performance message
9. **Check Daily Leaderboard**: Access leaderboard from menu to compare with other players

#### Daily Challenge Features
- **One Attempt Per Day**: Each player gets exactly one chance per calendar day
- **Global Synchronization**: Identical 5 problems generated for all players worldwide using date-based seeding
- **Precision Timing**: Completion time tracked to milliseconds and displayed as MM:SS.T format during play
- **Dual-Criteria Rankings**: Leaderboard sorted by score first (5/5 beats 4/5), then by completion time
- **Perfect Score Recognition**: Special "Perfect!" indicator for 5/5 correct answers in leaderboard
- **Daily Reset**: New problems automatically generated each day at midnight in user's timezone
- **Completion Persistence**: Results saved permanently and displayed in menu after completion with performance messages

### Problem Types & Difficulty

DigitRush generates four types of arithmetic problems with carefully balanced difficulty for optimal mental math challenge:

| Operation | Format | Number Range | Example Problems | Mental Math Level |
|-----------|--------|--------------|------------------|-------------------|
| **Addition** | `A + B = ?` | 10-99 + 10-99 | `47 + 83 = 130` | Moderate |
| **Subtraction** | `A - B = ?` | 20-99 - 10 to (A-1) | `74 - 29 = 45` | Moderate |
| **Multiplication** | `A × B = ?` | 2-20 × 2-10 | `7 × 8 = 56` | Moderate-Hard |
| **Division** | `A ÷ B = ?` | Clean division, divisors 2-11 | `84 ÷ 7 = 12` | Moderate-Hard |

**Problem Generation Logic:**
- **Addition/Subtraction**: Two-digit numbers ensuring reasonable mental math difficulty
- **Multiplication**: Avoids single digits (except as multipliers) to prevent trivial problems
- **Division**: Guarantees whole number results by generating dividend as divisor × answer
- **Daily Challenge**: Uses deterministic seeding based on date for global consistency

### Leaderboard System

#### Speed Challenge Leaderboard
- **Global All-Time Rankings**: Persistent high scores across all players and sessions
- **Personal High Score Tracking**: Your best performance prominently displayed with "NEW HIGH SCORE!" celebrations
- **Real Reddit Integration**: Actual Reddit usernames and Snoo avatars with fallback default avatars
- **Pagination System**: "Load More" functionality to browse extended rankings (10 entries per page)
- **Live Updates**: Leaderboard refreshes in real-time as players achieve new scores
- **Tie-Breaking**: Uses timestamp-based composite scoring for consistent ranking of equal scores

#### Daily Challenge Leaderboard
- **Date-Specific Rankings**: Each day has its own independent leaderboard that resets at midnight
- **Dual-Criteria Sorting**: Perfect scores (5/5) ranked by completion time, others by accuracy then speed
- **Completion Statistics**: Shows both score (X/5 correct) and formatted completion time (MM:SS)
- **Medal System**: Gold, silver, and bronze visual indicators with medal icons for top 3 positions
- **User Rank Display**: Shows your current daily ranking prominently in the challenge menu
- **Refresh Functionality**: Manual refresh button to update rankings after completion

### Advanced Features & User Experience

#### Visual Design & Animations
- **Custom Font System**: Three specialized fonts (FFFFORWA for headings, EditUndo for body, Medodica for monospace)
- **Retro Gaming Aesthetic**: Dark teal color scheme (#06282a, #021013) with neon green accents (#86f6b1, #00bf63)
- **Smooth Animations**: Heartbeat animation on main "Start Playing" button, loading sequences, and smooth transitions
- **Loading Experience**: Custom animated loader with progress tracking for fonts and images
- **Responsive Breakpoints**: Optimized layouts for mobile (single column) and desktop (two-column grid)

#### Accessibility & Mobile Optimization
- **Touch-Friendly Interface**: Large input fields and buttons optimized for mobile tapping
- **Keyboard Navigation**: Full Enter key support for answer submission
- **Screen Reader Support**: Proper ARIA labels and semantic HTML structure
- **Input Validation**: Number-only inputs with disabled spinner arrows for clean mobile experience
- **Prevent Zoom**: iOS-specific CSS to prevent input focus zoom on mobile devices

#### Social Integration & Sharing
- **Native Mobile Sharing**: Uses device's built-in share API when available for Speed Challenge results
- **Intelligent Fallbacks**: Clipboard API for desktop users, alert fallback for older browsers
- **Reddit Context**: Automatic post URL and subreddit name integration for sharing
- **Copy Notifications**: Visual teal notification popup when share text is copied to clipboard

### Tips for Success

#### Speed Challenge Strategy
- **Master Auto-Submit**: Enable auto-submit mode and focus on typing correct answers quickly
- **Learn Mental Math Shortcuts**: Practice addition/subtraction techniques and memorize multiplication tables
- **Stay Calm Under Pressure**: Don't panic when the progress bar turns red at 10 seconds
- **Balance Speed vs Accuracy**: Wrong answers waste time - sometimes accuracy beats speed
- **Use Keyboard Efficiently**: Press Enter to submit in manual mode, use number pad for faster input

#### Daily Challenge Strategy
- **Prioritize Accuracy**: No time pressure means focus on getting all 5 problems correct for maximum score
- **Double-Check Mental Math**: You only get one attempt per day, so verify your calculations before submitting
- **Practice with Speed Mode**: Use Speed Challenge to warm up your mental math skills
- **Consistent Daily Participation**: Build a streak by completing the challenge every day
- **Study the Leaderboard**: Learn from top performers' completion times to improve your speed while maintaining accuracy

## Development

### Quick Start
```bash
git clone https://github.com/crypticsaiyan/DigitRush.git
cd DigitRush
npm ci
npm run dev
```

### Project Structure
```
src/
├── client/                           # React frontend with TypeScript
│   ├── components/                   # Game screens and UI components
│   │   ├── StartPage.tsx            # Main menu with total plays counter and mode selection
│   │   ├── GamePlay.tsx             # Speed Challenge gameplay with auto-submit toggle
│   │   ├── GameResults.tsx          # Speed Challenge results with sharing and leaderboard
│   │   ├── Leaderboard.tsx          # Speed Challenge global leaderboard with pagination
│   │   ├── DailyChallenge.tsx       # Daily Challenge router component
│   │   ├── DailyChallengeMenu.tsx   # Daily Challenge menu with completion status
│   │   ├── DailyChallengePlay.tsx   # Daily Challenge gameplay with progress tracking
│   │   ├── DailyChallengeResults.tsx # Daily Challenge results (unused - menu shows completion)
│   │   ├── DailyChallengeLeaderboard.tsx # Daily Challenge leaderboard with refresh
│   │   └── index.ts                 # Component exports
│   ├── hooks/                       # Custom React hooks for state management
│   │   ├── useMathGame.ts          # Speed Challenge state, timer, and API integration
│   │   ├── useDailyChallenge.ts    # Daily Challenge state and progression logic
│   │   ├── useAssetPreloader.ts    # Font and image preloading with progress tracking
│   │   ├── useCounter.ts           # Counter utilities
│   │   └── useUserStreak.ts        # User streak tracking
│   ├── public/                     # Static assets served by Vite
│   │   ├── fonts/                  # Custom fonts
│   │   │   ├── FFFFORWA.TTF       # Heading font (retro gaming style)
│   │   │   ├── MedodicaRegular.otf # Monospace font (numbers and code)
│   │   │   └── editundo.ttf        # Body text font
│   │   ├── images/                 # Game assets and UI elements
│   │   │   ├── bronze.png          # Bronze medal for leaderboard
│   │   │   ├── gold.png            # Gold medal for leaderboard
│   │   │   ├── silver.png          # Silver medal for leaderboard
│   │   │   ├── trophy.gif          # Animated trophy for leaderboards
│   │   │   ├── clock.png           # Time/speed indicators
│   │   │   ├── target.png          # Accuracy/goal indicators
│   │   │   ├── scroll.png          # Performance/stats indicators
│   │   │   └── partypopper.png     # Celebration for high scores
│   │   └── snoo.png                # Reddit mascot
│   ├── shims/                      # Platform compatibility layers
│   │   └── inquire.ts             # Devvit API shims
│   ├── App.tsx                     # Main app component with mode routing and loading
│   ├── main.tsx                    # React entry point with StrictMode
│   ├── index.html                  # HTML template with viewport meta tags
│   ├── index.css                   # Global styles, animations, and custom fonts
│   ├── global.ts                   # Global type definitions and utilities
│   └── module.d.ts                 # TypeScript module declarations
├── server/                         # Express API with Devvit integration
│   ├── core/                       # Business logic modules
│   │   └── post.ts                # Reddit post creation functionality
│   └── index.ts                   # Main server with all API endpoints and game logic
└── shared/                        # Shared types and constants
    ├── types/                     # TypeScript type definitions
    │   └── api.ts                # API request/response types for all endpoints
    └── constants.ts              # Game configuration (duration, problem count, etc.)
```

### Configuration
Easily customize game parameters:

```typescript
// src/shared/constants.ts
export const GAME_DURATION_SECONDS = 60;              // Speed Challenge duration
export const LOW_TIME_THRESHOLD = 10;                 // Warning threshold (red progress bar)
export const DAILY_CHALLENGE_PROBLEMS_COUNT = 5;      // Daily Challenge problem count
export const ALLOW_DAILY_RETRIES_FOR_TESTING = false; // Enable replay for development
```

### Commands
```bash
npm run dev        # Development server with hot reloading
npm run build      # Build for production
npm run deploy     # Deploy to Reddit using Devvit
npm run launch     # Publish for review on Reddit
```

## License

BSD-3-Clause
