# **DigitRush:**

## **Project Overview & Inspiration**
DigitRush is a fast-paced, 60-second mental math game built as a Reddit-native application using Devvit.
No menus, no tutorials—players jump straight into a round and get results in under a minute.
Inspired by instant-play microgames, the goal was to make a **byte-sized** game which can be played in seconds. The project emphasizes **zero-friction gameplay** (no complex onboarding, simple controls, wonderful UI/UX, minimal asset loading time), fast rounds, and social competition via integrated leaderboards.
It takes inspiration from other such mental math platforms.

## **Core Features**
* **Bite-Sized and Asynchronous:** Players solve as many arithmetic problems as possible in one minute.
* **Auto-Submit Mode:** It detects correctly typed answers in real-time and **automatically submits** them, advancing to the next problem.
* **Server-Side Logic:** All problems are generated and validated on the server to prevent client-side cheating.
* **Reddit-Integrated Leaderboard:** A global leaderboard displays high scores using players' **Reddit usernames and avatars**, with data persisted in Redis, making the use of **pagination** techniques for lazy loading.
* **Deterministic Daily Challenge:** A seeded algorithm generates the same set of problems for all players on a given day, ensuring fair **daily competition**. It also keeps in mind the time zone of the player to generate challenges at the same time.
* **Polished UX:** The interface features an **auto-focused input field**, a **progress bar**, **instant feedback**, and a native **share** **flow** (mobile) with a **clipboard** **fallback** (desktop).
* **Social Flywheel:** Players **share their scores** in comments or posts, turning gameplay into fresh content that fuels organic visibility and discussion.

## **Technical Architecture**
* **Frontend:** Built with React, TypeScript, Vite, and Tailwind CSS.
* **Backend:** Uses the Devvit server SDK (Express-style) for API endpoints.
* **Persistence:** Leverages Redis (via Devvit) for storing leaderboards, total play counts, and short-lived (2-minute expiry) game state used for server-side answer validation.
* **Anti-Cheat & Fairness:** To ensure fairness, problem generation, scoring, and time-window validation are all handled authoritatively by the server.
* A shared `constants.ts` file ensures game durations and other rules are synchronized between the client and server.

## **Challenges & Key Learnings**
- The primary challenges involved balancing the high-speed auto-submit feature (which created input edge cases) with the need for fairness and anti-cheat.
- The UI/UX was difficult to build from scratch to ensure easy play.
- Another challenge was that I needed to handle the case where there is user input but time limit exceeds.
### **Other learnings include:**
* **Server Authority is Key:** I quickly learned that any competitive game must have server-side authority. So I moved **problem generation** and **answer validation** to the backend .
* **Latency & Time Sync:** Managing network latency required implementing a small **grace window** for the final answer submission and using **ephemeral Redis state** to validate sessions.
* **UX in Speed Games:** Small UI/UX details, like managing **input focus** and providing non-disruptive **visual feedback**, proved to be crucial for player enjoyment and speed.

## **Future Roadmap**
Future plans include:
* **Short-Term:** Adding **adaptive difficulty**, implementing a better **analysis page**, making  visual "**share cards**" for social media.
* **Long-Term:** Expanding the game with persistent and **complex profiles**, **friend lists**, **tournaments**, **new problem types** (algebra), **real time 1v1 matches** between players.