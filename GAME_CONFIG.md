# Game Configuration Guide

This document explains how to modify game settings for DigitRush.

## Game Duration

The game duration is centrally controlled through the constants file at:
```
src/shared/constants.ts
```

### Current Settings
- **Game Duration**: 1 second (Lightning Mode - extreme difficulty)
- **Low Time Warning Threshold**: 10 seconds (when timer turns red)

### How to Change Game Duration

To change the game duration (e.g., from 1 second to 30 seconds):

1. Open `src/shared/constants.ts`
2. Modify the `GAME_DURATION_SECONDS` constant:
   ```typescript
   export const GAME_DURATION_SECONDS = 30; // Change this value
   ```
3. Save the file
4. The following will automatically update:
   - Initial timer display
   - Game countdown timer
   - Progress bar calculations
   - Server-side time validation
   - Splash screen description

### What Gets Updated Automatically

The constant is imported and used in:
- `src/client/hooks/useMathGame.ts` - Initial game state and timer resets
- `src/client/components/GamePlay.tsx` - Progress bar and timer display
- `src/server/index.ts` - Server-side game duration validation
- `src/server/core/post.ts` - Splash screen description text

### Example Configurations

**Lightning Mode (1 second)** - Current
```typescript
export const GAME_DURATION_SECONDS = 1;
export const LOW_TIME_THRESHOLD = 10;
```

**Quick Mode (5 seconds)**
```typescript
export const GAME_DURATION_SECONDS = 5;
export const LOW_TIME_THRESHOLD = 2;
```

**Standard Mode (30 seconds)**
```typescript
export const GAME_DURATION_SECONDS = 30;
export const LOW_TIME_THRESHOLD = 10;
```

**Extended Mode (60 seconds)**
```typescript
export const GAME_DURATION_SECONDS = 60;
export const LOW_TIME_THRESHOLD = 15;
```

**Marathon Mode (120 seconds)**
```typescript
export const GAME_DURATION_SECONDS = 120;
export const LOW_TIME_THRESHOLD = 20;
```

### Low Time Threshold

The `LOW_TIME_THRESHOLD` controls when the timer turns red to warn the player time is running out. It's recommended to set this to approximately 20-30% of the total game duration.

## Making Changes

After modifying the constants:

1. The changes will be reflected immediately in development mode
2. For production, rebuild the app:
   ```bash
   npm run build
   ```
3. Test thoroughly to ensure the new timing works well with the game mechanics

## Notes

- The `GAME_DURATION_MS` constant is automatically calculated from `GAME_DURATION_SECONDS` (multiplied by 1000)
- Server and client use the same constants to ensure consistency
- All time-related UI elements will automatically adjust to the new duration
