# DigitRush

**DigitRush** is an ultra-fast mental math challenge built for Reddit using the Devvit platform. Test your mathematical reflexes by solving arithmetic problems in lightning-fast rounds that push your speed and accuracy to the limit!

## What is DigitRush?

DigitRush is an extreme-speed mental math game that runs directly within Reddit posts, challenging players to solve as many arithmetic problems as possible in just **1 second**. This lightning-fast format creates an intense test of mathematical reflexes and instant calculation abilities.

The game presents players with rapid-fire arithmetic problems (addition, subtraction, multiplication, division) and challenges them to input correct answers before time runs out. Each correct answer increases your score by 1 point, and the game tracks your accuracy, problems per minute, and maintains a global leaderboard with Reddit user integration.

Key features include:

- **Lightning-fast 1-second rounds** - Extreme time pressure that tests mathematical reflexes and instant calculation
- **Dynamic math problems** covering addition, subtraction, multiplication, and division with server-side generation
- **Personal high score tracking** with automatic saving and celebration animations for new records
- **Global leaderboard** with Reddit user integration, avatars, and medal rankings (Gold/Silver/Bronze)
- **Instant visual feedback** with color-coded input fields (green for correct, red for incorrect answers)
- **Performance analytics** showing accuracy percentage and problems-per-minute calculations
- **Social sharing** with native mobile share API and clipboard fallback for desktop users
- **Responsive design** optimized for both desktop and mobile with touch-friendly controls
- **Custom assets** including specialized fonts (FFFFORWA, Medodica, EditUndo) and animated trophy graphics
- **Real-time countdown** with visual progress bar and critical time warnings (red when under 10 seconds)
- **Grace period mechanics** allowing one final answer submission after time expires
- **Anti-cheat protection** with server-side validation of all answers and timing
- **Auto-focus input system** with keyboard-optimized controls and Enter key submission
- **Immediate visual feedback** with animated loading states and problem transitions

## What Makes DigitRush Innovative?

### Extreme-Speed Mental Math Challenge
DigitRush pushes mathematical gaming to its absolute limits with 1-second lightning rounds that create the ultimate test of mathematical reflexes:

- **Ultimate Time Pressure**: 1-second rounds eliminate thinking time and require pure mathematical automation
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

### Getting Started
1. **Launch the Game**: Click the green "Start Playing" button on the main screen to begin your lightning-fast math challenge
2. **View Leaderboard**: Click the trophy button in the top-right to see current rankings, top scores, and your current position
3. **Read Instructions**: Optionally click "How to play?" for a quick tutorial modal explaining the basic rules:
   - Solve as many problems as you can while the timer runs down
   - Correct answers increase your score by 1 point each
   - Check the leaderboard and challenge friends with your results

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
   - **Score** (top-left): Increases by 1 for each correct answer, displayed prominently in accent green
   - **Timer** (top-right): Counts down from 1 second with color-coded progress bar (starts red due to extreme time pressure)
   - **Progress Bar**: Visual countdown showing remaining time percentage with smooth animations
6. **Seamless Problem Flow**: New problems appear instantly after each submission with automatic input clearing and focus restoration

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
  - `components/` — StartPage, GamePlay, GameResults, Leaderboard
  - `hooks/` — useMathGame (game state), useAssetPreloader, useCounter
  - `public/` — Static assets (fonts: FFFFORWA.TTF, MedodicaRegular.otf, editundo.ttf; images: medals, trophy.gif, scroll.png)
  - `main.tsx` — React application entry point
  - `App.tsx` — Main app component with game state management
  - `index.css` — Tailwind CSS with custom animations and dark theme
- `src/server/` — Express API with Devvit integration
  - `core/` — Business logic modules (post creation, game management)
  - `index.ts` — Main server with API endpoints for game lifecycle, leaderboard, and Redis persistence
- `src/shared/` — Shared TypeScript types and constants
  - `types/api.ts` — Game responses, leaderboard entries, math problems
  - `constants.ts` — Game configuration (duration: 1 second lightning mode, low time threshold: 10 seconds)

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
