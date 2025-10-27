## Math Quiz Rush - Reddit Game

A fast-paced math quiz game built on Reddit's Devvit platform where players race against time to solve arithmetic problems and compete for high scores.

### What Makes This Game Unique

- **Reddit Integration**: Seamlessly integrated into Reddit posts, allowing users to play directly in their feed
- **Real-time Scoring**: Live score tracking with persistent high scores stored per Reddit post
- **Time Pressure**: 60-second countdown creates exciting, fast-paced gameplay
- **Adaptive Difficulty**: Mix of addition, subtraction, multiplication, and division problems
- **Social Competition**: High scores are shared within the Reddit community context
- **Mobile-First Design**: Optimized for both desktop and mobile Reddit users

### How to Play

1. **Start the Game**: Click the "Play" button when you see the game post in your Reddit feed
2. **Quick Math**: You have 60 seconds to solve as many math problems as possible
3. **Problem Types**: You'll encounter:
   - Addition (e.g., 45 + 67)
   - Subtraction (e.g., 89 - 34) 
   - Multiplication (e.g., 23 × 7)
   - Division (e.g., 84 ÷ 6)
4. **Input Answers**: Type your answer and submit quickly - every second counts!
5. **Score Points**: Each correct answer increases your score
6. **Beat the Clock**: Try to answer as many as possible before time runs out
7. **High Score**: Your best score is saved and displayed - try to beat your personal record!
8. **Play Again**: Return to the menu and start a new game to improve your score

### Technology Stack

- [Devvit](https://developers.reddit.com/): Reddit's developer platform for immersive games
- [React](https://react.dev/): Frontend UI framework
- [TypeScript](https://www.typescriptlang.org/): Type-safe development
- [Express](https://expressjs.com/): Backend API server
- [Redis](https://redis.io/): Score persistence and game state
- [Vite](https://vite.dev/): Build tool and development server
- [Tailwind CSS](https://tailwindcss.com/): Responsive styling

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
- **Game State Management**: React hooks manage game flow, timing, and scoring
- **API Integration**: RESTful endpoints handle game initialization, problem generation, and score persistence  
- **Real-time Updates**: Live countdown timer and instant feedback on answers
- **Persistent Storage**: High scores saved using Redis with Reddit post context
- **Responsive Design**: Mobile-optimized interface using Tailwind CSS

## Commands

- `npm run dev`: Starts a development server where you can develop your application live on Reddit.
- `npm run build`: Builds your client and server projects
- `npm run deploy`: Uploads a new version of your app
- `npm run launch`: Publishes your app for review
- `npm run login`: Logs your CLI into Reddit
- `npm run check`: Type checks, lints, and prettifies your app

## Cursor Integration

This template comes with a pre-configured cursor environment. To get started, [download cursor](https://www.cursor.com/downloads) and enable the `devvit-mcp` when prompted.
