# DigitRush

A compact, Reddit-embedded math quiz (Devvit) that gives players a short timed round to answer as many arithmetic problems as possible.

## Quick start

1. Clone and install

```bash
git clone https://github.com/crypticsaiyan/DigitRush.git
cd DigitRush
npm ci
```

2. Development

```bash
npm run dev
```

3. Build

```bash
npm run build
```

4. Type-check and lint

```bash
npm run type-check
npm run lint
```

## Project layout (key parts)

- `src/client` — React app (StartPage, GamePlay, GameResults, Leaderboard)
- `src/server` — Express API (game lifecycle, leaderboard, persistence)
- `src/shared` — shared types and constants
- `assets` — images and fonts

## Config

- Round duration: `src/shared/constants.ts` → `GAME_DURATION_SECONDS`

## Deploy

- `npm run deploy` (uses devvit tooling configured in this repo)

## License

- BSD-3-Clause

For implementation details, inspect files under `src/`.
