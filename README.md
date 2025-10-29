# DigitRush

**DigitRush** is a lightning-fast mental math challenge game built natively for Reddit using the Devvit platform. Race against time in two exciting game modes: the intense 60-second speed challenge and the strategic daily challenge, while competing on global leaderboards with authentic Reddit users!

![DigitRush Game Preview](assets/default-splash.png)

## What is DigitRush?

DigitRush is a comprehensive mental math gaming platform that runs directly within Reddit posts, featuring two distinct game modes that test your mathematical skills in different ways. Players can choose between lightning-fast speed challenges or strategic daily competitions, all while competing with real Reddit users on global leaderboards.

The game features a sophisticated dual-mode architecture where each mode offers a completely different gameplay experience: Speed Challenge focuses on rapid-fire problem solving under extreme time pressure, while Daily Challenge emphasizes strategic precision with a single daily attempt at 5 carefully crafted problems.

### Two Exciting Game Modes

#### 🚀 **Speed Challenge** (60-Second Rush)
The classic DigitRush experience - an intense 60-second mental math challenge that tests your speed and accuracy under extreme time pressure. Race to solve as many arithmetic problems as possible while a countdown timer creates heart-pounding urgency.

- **60-Second Timer**: Solve as many math problems as possible in exactly 60 seconds
- **Revolutionary Auto-Submit**: Correct answers instantly advance to the next problem - no button pressing required
- **Manual Mode Option**: Toggle auto-submit off for more deliberate gameplay with Enter key submission
- **Unlimited Attempts**: Play as many rounds as you want to improve your high score
- **Real-Time Scoring**: Watch your score climb with each correct answer (1 point per correct problem)
- **Performance Analytics**: View problems per minute rate and accuracy percentage after each game

#### 🏆 **Daily Challenge** (Strategic Precision)
A completely different experience focused on accuracy and speed optimization. Every day brings a new set of 5 carefully crafted problems that all players worldwide attempt to solve as quickly and accurately as possible.

- **5 Fixed Problems**: Same 5 math problems for all players worldwide each day (deterministically generated)
- **One Attempt Only**: Single chance per day creates strategic pressure and eliminates grinding
- **Speed-Based Ranking**: Among players with equal scores, fastest completion time determines ranking
- **Perfect Score Priority**: Players with 5/5 correct compete separately from those with lower scores
- **Precision Timing**: Completion time tracked to tenths of seconds for accurate leaderboard ranking
- **Global Daily Leaderboard**: Compete against players from all Reddit communities with daily reset

### Core Gameplay Features
- **Four Operation Types**: Addition, subtraction, multiplication, and division with balanced difficulty ranges
- **Dual Scoring Systems**: Speed Challenge = 1 point per correct answer; Daily Challenge = completion time ranking
- **Anti-Cheat Protection**: Server-side problem generation with unique IDs and validation ensures fair competition
- **Cross-Platform**: Optimized for both mobile and desktop with responsive design and touch controls
- **Auto-Focus Input**: Intelligent input field focusing with automatic text selection for maximum speed
- **Real-Time Feedback**: Instant visual feedback with color-coded input fields and success/error messages

### Revolutionary Auto-Submit Technology
DigitRush features breakthrough auto-submit technology in Speed Challenge mode that detects correct answers as you type and instantly advances to the next problem. This eliminates input friction and creates the fastest mental math gaming experience possible, allowing skilled players to achieve 50+ problems per minute (nearly 1 per second).

The system uses real-time answer validation - as soon as you type a complete correct answer, the game automatically submits it and loads the next problem without any button presses or Enter key required. Players can toggle this feature off for manual submission mode.

### Reddit-Native Integration
Built exclusively for Reddit's Devvit platform with seamless user integration:
- **Zero Downloads**: Runs directly in Reddit posts - no external apps required
- **Authentic Competition**: Dual leaderboards with real Reddit usernames and avatars
- **Social Sharing**: Native mobile share API with intelligent clipboard fallback for desktop
- **Cross-Subreddit**: Players from different communities compete on unified global leaderboards
- **Persistent Progress**: High scores and daily challenge completions saved across sessions with Redis backend

### Game Architecture & Flow
The game consists of multiple interconnected screens with sophisticated state management:

1. **Start Page** - Main menu with total plays counter, leaderboard preview, and dual game mode access
2. **Speed Challenge Flow**:
   - **Game Play** - 60-second challenge with auto-submit system, real-time scoring, and progress tracking
   - **Game Results** - Comprehensive performance analysis with social sharing and leaderboard integration
3. **Daily Challenge Flow**:
   - **Challenge Menu** - Daily overview showing completion status, previous results, and leaderboard access
   - **Challenge Play** - Strategic 5-problem sequence with precision timing and progress indicators
   - **Integrated Results** - Completion summary appears in the menu for easy next-day comparison

## What Makes DigitRush Innovative?

### 🎮 **Dual Game Mode Innovation**
- **Speed vs Strategy**: Two completely different gameplay experiences with distinct interfaces and mechanics
- **Speed Challenge**: Revolutionary auto-submit technology enabling 50+ problems per minute gameplay
- **Daily Challenge**: Strategic one-attempt format with deterministic problem generation and precision timing
- **Complementary Skills**: Speed mode builds calculation fluency; Daily mode develops accuracy under pressure
- **Separate Leaderboards**: Independent ranking systems optimized for each mode's unique scoring mechanics

### 🚀 **Revolutionary Auto-Submit Technology** (Speed Challenge)
- **Instant Problem Advancement**: Correct answers are detected as you type and automatically advance to the next problem
- **Lightning-Fast Gameplay**: Eliminates input friction, allowing skilled players to achieve 50+ problems per minute
- **Smart Detection**: Real-time answer validation triggers instant submission only when complete correct answers are typed
- **Toggleable Modes**: Switch between auto-submit (default, maximum speed) and manual mode (Enter key submission)

### ⚡ **Strategic Daily Challenge System**
- **Global Synchronization**: Every player worldwide gets identical 5 problems each day via deterministic generation
- **Date-Based Seeding**: Problems generated using mathematical seeding from date strings for perfect consistency
- **One-Attempt Pressure**: Single daily chance creates strategic decision-making and eliminates grinding
- **Tiered Ranking System**: Players grouped by score (5/5, 4/5, etc.) then ranked by completion time within each tier
- **Precision Timing**: Completion time tracked to tenths of seconds with real-time elapsed timer display
- **24-Hour Reset Cycle**: Fresh challenges daily at midnight local time with persistent leaderboard history

### 🎯 **Perfectly Balanced Difficulty Systems**
- **Speed Challenge**: 60-second format creates intense time pressure while remaining accessible to all skill levels
- **Daily Challenge**: 5-problem format allows for strategic pacing and accuracy optimization
- **Balanced Operation Distribution**: Equal probability of addition, subtraction, multiplication, and division
- **Smart Number Ranges**: Addition/subtraction (10-99), multiplication (2-20 × 2-10), division with clean results
- **No Trivial Problems**: Excludes problems with 1 as a factor; all division results in whole numbers
- **Server-Side Generation**: Problems generated server-side with unique IDs to prevent client-side manipulation

### 🏆 **Reddit-Native Gaming Platform**
- **Zero-Friction Access**: First dual-mode mental math game built natively for Reddit's Devvit platform
- **Authentic Competition**: Separate leaderboards for each mode with real Reddit usernames and Snoovatar integration
- **Advanced Social Sharing**: Native mobile share API with intelligent clipboard fallback and pre-formatted messages
- **Cross-Subreddit Competition**: Players from different communities compete on unified global leaderboards
- **Seamless Integration**: Runs directly in Reddit posts with automatic user authentication and avatar fetching

### 🔒 **Sophisticated Anti-Cheat Architecture**
- **Server-Side Generation**: All math problems generated server-side with unique IDs to prevent client manipulation
- **Dual Validation Systems**: Separate validation logic optimized for speed vs daily challenge mechanics
- **Deterministic Daily Problems**: Date-based mathematical seeding ensures all players get identical daily challenges
- **Comprehensive Timing Validation**: Server validates all timing data and game state for leaderboard integrity
- **Grace Period Fairness**: Speed mode allows one final answer after timer expiration to account for network latency
- **Redis State Management**: Secure game state storage with automatic expiration to prevent state manipulation

### 🎨 **Advanced User Experience Design**
- **Mode-Specific Interfaces**: Completely different UI layouts optimized for each game mode's unique requirements
- **Auto-Focus Input System**: Intelligent field focusing with automatic text selection and seamless problem transitions
- **Dual Feedback Systems**: Speed mode uses instant color feedback; Daily mode shows precision timing with progress bars
- **Responsive Design**: Mobile-first design with touch-optimized controls, keyboard shortcuts, and adaptive layouts
- **Custom Assets**: Specialized fonts (FFFFORWA, Medodica, EditUndo) and animated graphics including trophy GIFs
- **Visual Polish**: Gradient backgrounds, smooth animations, and medal systems for top performers

### 🎮 **Comprehensive Game State Management**
- **Multi-Mode Architecture**: Seamless app-level switching between Speed Challenge and Daily Challenge with independent state
- **Persistent Progress**: Individual high scores and daily completions saved across sessions using Redis backend
- **Real-Time Statistics**: Live tracking of performance metrics including accuracy, problems per minute, and completion times
- **Global Competition**: Separate paginated leaderboards with medal systems, user avatar integration, and "Load More" functionality
- **Advanced Hooks**: Custom React hooks (useMathGame, useDailyChallenge) for sophisticated state management and API integration



## How to Play DigitRush

### 🎮 Quick Start Guide

#### 1. Getting Started
1. **Launch**: Open DigitRush from a Reddit post and click "Launch App"
2. **Choose Your Mode**: 
   - **Green "Start Playing"** button for the 60-Second Speed Challenge
   - **Yellow "Daily Challenge"** button for today's strategic 5-problem challenge
3. **View Leaderboards**: Click trophy icons to see rankings for each game mode
4. **Learn**: Click "How to play?" for detailed instructions

#### 2. Speed Challenge (60-Second Mode)
1. **Auto-Submit Mode (Default)**:
   - Type numerical answers in the auto-focused input field
   - **Instant advancement**: Correct answers automatically advance to the next problem as you type
   - **No button pressing**: Just type complete correct answers and the game flows seamlessly
   
2. **Manual Mode** (toggle auto-submit off):
   - Type your answer and press **Enter** or click "Submit"
   - Allows double-checking answers before submission
   - Submit button shows "Auto On" when auto-submit is enabled, "Submit" when disabled

3. **Game Interface**:
   - **Score** (top-left): Current score with "Score:" label, increases by 1 for each correct answer
   - **Auto-Submit Toggle** (top-center): Retro-style square toggle with "Autosubmit" label
   - **Timer & Progress** (top-right): 60-second countdown with visual progress bar (turns red at ≤10 seconds)
   - **Problem** (center): Large math equation in mono font (e.g., "15 × 7 = ?")
   - **Input Field**: Auto-focused with number-only input, green for correct, red for incorrect with answer shown
   - **Visual Feedback**: "✅ Correct!" or "❌ Wrong! Answer was X" messages

#### 3. Daily Challenge (Strategic Mode)
1. **One Attempt Per Day**: You get exactly one chance at today's 5 problems (unless testing mode enabled)
2. **Fixed Problem Set**: All players worldwide get identical problems generated deterministically from today's date
3. **Speed Matters**: Among players with equal scores, fastest completion time determines ranking
4. **Game Interface**:
   - **Progress** (top-left): Shows "Problem: X/5" with current problem number in green
   - **Precision Timer** (top-right): Real-time elapsed time in MM:SS.T format (e.g., "1:23.7")
   - **Problem** (center): Math equation in large mono font requiring manual submission only
   - **Input & Submit**: Manual submission required - type answer and press Enter or click "Submit"
   - **Progress Bar** (bottom): Visual completion indicator with percentage and "X of 5 completed" text
   - **Visual Feedback**: Same color-coded feedback system as Speed Challenge
5. **Automatic Completion**: After solving problem 5/5, automatically returns to challenge menu
6. **Results Integration**: Completion summary appears in the challenge menu showing score and time

#### 4. Viewing Results
- **Speed Challenge Results**: Final score with celebration animation for new personal bests
- **Daily Challenge Results**: Completion summary shown in the challenge menu
- **Analytics**: Problems per minute, accuracy percentage, personal high scores
- **Social Sharing**: Challenge friends with pre-formatted messages
- **Leaderboards**: View your rank among all Reddit players in each mode
- **Continue**: "Play Again" or return to main menu

### 📱 Step-by-Step Instructions

#### Starting Your First Session
1. **Open DigitRush**: Find a DigitRush post on Reddit and click the "Launch App" button
2. **Loading Screen**: Brief loading screen while assets and game data initialize
3. **Main Menu**: You'll see the Start Page with:
   - **Total Plays** counter (top-left) showing community engagement across all players
   - **Leaderboard Preview** (top-right) with trophy icon, current top score, and chevron arrow
   - **Green "Start Playing"** button for 60-Second Speed Challenge
   - **Yellow "Daily Challenge"** button for today's strategic challenge  
   - **"How to play?"** button for detailed instructions modal

#### Speed Challenge: 60-Second Rush
1. **Launch**: Click "Start Playing" to begin the 60-second timer immediately
2. **Read the Problem**: A math equation appears in large text (e.g., "47 + 83 = ?")
3. **Type Your Answer**: The input field is automatically focused - just start typing numbers
4. **Auto-Submit Magic**: 
   - With auto-submit ON (default): Correct answers instantly advance to the next problem
   - With auto-submit OFF: Press Enter or click Submit after typing your answer
5. **Watch Your Progress**: 
   - Score increases in the top-left corner for each correct answer
   - Timer counts down in the top-right with a visual progress bar
   - Input field turns green for correct answers, red for incorrect (showing the right answer)
6. **Toggle Modes**: Use the auto-submit toggle at the top to switch between lightning-fast and manual modes
7. **Results Screen**: After 60 seconds, view your performance summary with celebration animations for new personal bests

#### Daily Challenge: Strategic Precision
1. **Access**: Click "Daily Challenge" from the main menu
2. **Challenge Overview**: See today's date and challenge status:
   - If not attempted: "Start Daily Challenge" button with game mode explanation
   - If completed: Your score and completion time with "Come back tomorrow" message
3. **Begin Challenge**: Click "Start Daily Challenge" to begin the 5-problem sequence
4. **Solve Problems**: Work through exactly 5 math problems:
   - Progress indicator shows "Problem: X/5" in top-left
   - Precision timer shows elapsed time in top-right (includes tenths of seconds)
   - Manual submission required - type answer and press Enter or click Submit
   - Progress bar at bottom shows completion percentage
5. **Automatic Completion**: After solving all 5 problems, you're returned to the challenge menu
6. **View Results**: Your completion summary appears in the challenge menu with score and time
7. **Daily Leaderboard**: Click the trophy icon to see today's fastest solvers

#### Mastering the Leaderboards
1. **Speed Challenge Leaderboard**: 
   - Click trophy icon from main menu or results screen
   - View global rankings based on highest scores
   - Your current rank and score highlighted at the top
   - Medal system for top 3 players (Gold, Silver, Bronze)
   
2. **Daily Challenge Leaderboard**:
   - Click trophy icon from daily challenge menu
   - View today's rankings based on completion time (among players with same score)
   - Perfect scores (5/5) ranked by speed; lower scores ranked separately
   - Shows both score (X/5) and completion time for each player

3. **Navigation Features**:
   - Scroll through paginated rankings with Reddit usernames and avatars
   - "Load More" button to view additional players beyond initial 10
   - Close button or click outside modal to return to game

### 🎯 Game Strategy & Tips

#### Mastering the Speed Challenge (60-Second Mode)
- **Auto-Submit Advantage**: With auto-submit enabled (default), skilled players can achieve 50+ problems per minute
- **Balance Speed & Accuracy**: Wrong answers waste time showing corrections, so maintain accuracy while maximizing speed
- **Develop Pattern Recognition**: Train your brain to recognize common number combinations and calculation shortcuts
- **Use Mental Math Techniques**: Practice rapid calculation methods for faster problem solving
- **Find Your Rhythm**: Develop steady pace that balances speed with accuracy
- **Stay Calm**: Maintain focus and composure as the timer counts down

#### Mastering the Daily Challenge (Strategic Mode)
- **Accuracy First**: With only one attempt, prioritize getting all 5 problems correct
- **Strategic Pacing**: Balance speed with precision - rushing leads to costly mistakes
- **Mental Preparation**: Take a moment to understand each problem before typing
- **Consistent Technique**: Develop reliable calculation methods for each operation type
- **Time Awareness**: Monitor your elapsed time but don't let it create pressure
- **Perfect Score Focus**: Aim for 5/5 correct to compete for daily champion

#### Pro Tips for Both Modes
- **Master Basic Facts**: Memorize addition/subtraction to 20 and multiplication tables to 12
- **Practice Regularly**: Build mathematical fluency and interface familiarity across both modes
- **Mode-Specific Training**: Use Speed Challenge to build calculation speed; use Daily Challenge to develop accuracy under pressure
- **Learn from Mistakes**: Review incorrect answers to identify calculation weaknesses
- **Leaderboard Analysis**: Study top players' scores to set realistic improvement goals

### 🧮 Math Problem Types

DigitRush generates four types of arithmetic problems with balanced difficulty:

| Operation | Format | Range | Examples | Difficulty |
|-----------|--------|-------|----------|------------|
| **Addition** | `A + B = ?` | 10-99 + 10-99 | `47 + 83`, `25 + 56` | Moderate |
| **Subtraction** | `A - B = ?` | 20-99 - 10-(A-1) | `74 - 29`, `85 - 47` | Moderate |
| **Multiplication** | `A × B = ?` | 2-20 × 2-10 | `7 × 8`, `15 × 6` | Moderate-Hard |
| **Division** | `A ÷ B = ?` | Clean division, 2-11 divisors | `84 ÷ 7`, `132 ÷ 11` | Moderate-Hard |

#### Key Features
- **Server-Side Generation**: Problems generated server-side with unique IDs to prevent cheating
- **Balanced Distribution**: Equal probability of each operation type
- **Clean Results**: All division problems result in whole numbers (no decimals)
- **No Trivial Problems**: Excludes problems with 1 as a factor

### 📊 Game Mechanics & Scoring

#### Speed Challenge Rules
- **Scoring**: Each correct answer = +1 point (no penalties for wrong answers)
- **Time Limit**: Exactly 60 seconds to solve as many problems as possible
- **Input**: Number-only input with support for negative results
- **Grace Period**: One final answer allowed after timer expires (network fairness)
- **Unlimited Attempts**: Play as many rounds as desired to improve your high score
- **Leaderboard**: Ranked by highest score achieved across all attempts

#### Daily Challenge Rules
- **Scoring**: Completion time determines ranking (among players with same score)
- **Problem Count**: Exactly 5 problems per day, same for all players worldwide
- **One Attempt**: Single chance per day - no retries allowed
- **Perfect Score Priority**: Players with 5/5 correct ranked by completion time
- **Partial Score Ranking**: Players with 4/5, 3/5, etc. ranked separately by completion time
- **Daily Reset**: New challenge available at midnight in your local timezone

#### Score Expectations

**Speed Challenge (60-Second Mode)**
| Skill Level | Score Range | Description |
|-------------|-------------|-------------|
| **Beginner** | 5-15 | Learning interface and time pressure |
| **Developing** | 15-25 | Steady problem-solving pace |
| **Skilled** | 25-35 | Good mental math and input efficiency |
| **Expert** | 35-50 | Excellent mathematical fluency |
| **Master** | 50+ | Exceptional speed and near-perfect accuracy |

**Daily Challenge (Strategic Mode)**
| Performance | Score/Time | Description |
|-------------|------------|-------------|
| **Learning** | 3-4/5 in 2-5 min | Building accuracy and confidence |
| **Developing** | 4-5/5 in 1-3 min | Consistent problem-solving |
| **Skilled** | 5/5 in 45-90 sec | Strong mental math fluency |
| **Expert** | 5/5 in 30-60 sec | Excellent speed and accuracy |
| **Champion** | 5/5 in <30 sec | Elite mathematical performance |

### 📈 Results & Performance Analysis

#### Speed Challenge Results
After each 60-second challenge, view comprehensive performance analytics:

- **Final Score**: Prominently displayed with celebration animation for new personal bests
- **Performance Metrics**: Problems per minute rate and accuracy percentage  
- **Personal Best**: All-time high score with gold medal icon
- **Global Rank**: Your position among all Reddit players
- **Social Sharing**: Challenge friends with pre-formatted score messages
- **Responsive Layout**: 
  - **Mobile**: Single-column layout (Score → Share → Play Again → Leaderboard → Stats)
  - **Desktop**: Two-column design with trophy icon for quick leaderboard access

#### Daily Challenge Results
Completion summary integrated into the challenge menu:

- **Score Display**: Shows your result (e.g., "4/5 correct") 
- **Completion Time**: Precise timing to tenths of seconds (e.g., "1:23.7")
- **Status Message**: "Challenge Completed! Come back tomorrow for a new challenge!"
- **Leaderboard Access**: Trophy button to view today's rankings
- **Next Day**: Menu automatically updates with new challenge at midnight

#### Social Features
- **Dual Leaderboards**: Separate rankings for Speed Challenge (by score) and Daily Challenge (by completion time)
- **Reddit Integration**: Authentic usernames with avatars and medal system (Gold/Silver/Bronze)
- **Social Sharing**: Native mobile share API with intelligent clipboard fallback
- **Challenge Messages**: Pre-formatted sharing text for both game modes
- **Paginated Rankings**: Load more functionality to view complete leaderboards

### 🎮 User Interface & Controls

#### Speed Challenge Interface
- **Top-Left**: Current score in bright green (#86f6b1)
- **Top-Center**: Auto-submit toggle switch with "Autosubmit" label
- **Top-Right**: 60-second countdown timer with progress bar (turns red at ≤10 seconds)
- **Center**: Math problem in large text (e.g., "15 - 8 = ?")
- **Bottom**: Auto-focused answer input field with optional submit button

#### Daily Challenge Interface  
- **Top-Left**: Progress indicator (e.g., "Problem: 2/5")
- **Top-Right**: Precision elapsed timer (e.g., "1:23.7")
- **Center**: Math problem in large text (e.g., "84 ÷ 7 = ?")
- **Bottom**: Answer input field with submit button (manual submission required)
- **Progress Bar**: Visual completion indicator at bottom of screen

#### Input Controls
- **Speed Challenge**:
  - **Auto-Submit Mode (Default)**: Type correct answers for instant advancement
  - **Manual Mode**: Press Enter or click Submit button
  - **Mode Toggle**: Switch between auto-submit and manual modes
- **Daily Challenge**: Manual submission only - type answer and press Enter or click Submit
- **Universal Features**:
  - **Auto-Focus**: Input field automatically focuses with text selection
  - **Number-Only**: Accepts digits 0-9 and minus sign for negative results
  - **Keyboard Shortcuts**: Enter key submits in both modes

#### Visual Feedback
- **Correct**: Green input field with "✅ Correct!" message
- **Wrong**: Red input field with "❌ Wrong! Answer was [X]"
- **Progress**: Smooth countdown/timer animations with color transitions
- **Loading**: Visual indicators during processing and problem transitions
- **Mode-Specific**: Speed Challenge uses instant feedback; Daily Challenge shows precision timing

## Development

### Quick Start
```bash
git clone <repository-url>
cd DigitRush
npm ci
npm run dev
```

### Project Structure
```
src/
├── client/          # React frontend with TypeScript
│   ├── components/  # Game screens (StartPage, GamePlay, GameResults, Leaderboard)
│   ├── hooks/       # Custom hooks (useMathGame, useAssetPreloader)
│   ├── public/      # Static assets (fonts, images)
│   └── main.tsx     # React entry point
├── server/          # Express API with Devvit integration
│   ├── core/        # Business logic (post creation)
│   └── index.ts     # API endpoints (/api/game/*, /api/leaderboard)
└── shared/          # Shared types and constants
    ├── types/       # API type definitions
    └── constants.ts # Game configuration (60s duration, 10s warning)
```

### Key Features
- **Dual Game Modes**: Speed Challenge (60-second) and Daily Challenge (5-problem strategic)
- **Game State Management**: Centralized state through `useMathGame` and `useDailyChallenge` hooks
- **Auto-Submit System**: Real-time answer detection with instant problem advancement (Speed Challenge)
- **Daily Challenge System**: Deterministic problem generation with one-attempt-per-day mechanics
- **Anti-Cheat Protection**: Server-side problem generation and validation for both modes
- **Reddit Integration**: Dual leaderboards with authentic user avatars and cross-subreddit competition
- **Responsive Design**: Mobile-first with desktop enhancements and mode-specific interfaces

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
