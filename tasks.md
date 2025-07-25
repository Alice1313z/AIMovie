
# 🎬 AI Movie Tracker & Recommender App – MVP Build Plan

This document outlines the step-by-step tasks to build the MVP of the AI-driven movie logging and recommendation app. Each task is self-contained, testable, and has a clear scope, suitable for LLM execution.

---

## ✅ Phase 1: Initialization & Basic Infrastructure

### 1. Initialize Project with Next.js + Supabase Auth
- Create project with `create-next-app`
- Setup Tailwind CSS
- Configure `.env.local` with Supabase keys
- Integrate Supabase Auth (magic link)
- Create `/login` page and test login/logout flow

**Test**: User can login and `user.id` is stored

---

### 2. Set Up Supabase Database Schema (Movies, Tags, Reviews)
- Create tables in Supabase:
  - `movies`: id, user_id, title, watched_at
  - `tags`: id, movie_id, name
  - `reviews`: id, movie_id, content, created_at

**Test**: A movie record can be created and retrieved

---

### 3. Build Basic Movie Entry Form (Text Only)
- Page: `/record`
- Fields: movie name, date, short review
- Submit button to write to Supabase

**Test**: Movie record and review appear in DB after submission

---

## 🧠 Phase 2: AI Tagging & Fuzzy Search

### 4. Implement Tag Generation API (OpenAI)
- Create `/api/generateTags.ts`
- Input: review text
- Output: tag array from OpenAI/GPT

**Test**: Input review returns tag JSON

---

### 5. Auto-tag on Movie Submission
- On submit, call `generateTags` and save tags to Supabase

**Test**: Movie record is associated with correct tags

---

### 6. Build Fuzzy Search Page (`/search`)
- Search box to support fuzzy tag match
- Display results as cards

**Test**: Entering a keyword returns matching tagged movies

---

## 🎭 Phase 3: Emotion-based Recommendation & Character Generation

### 7. Build Mood Input UI (`/recommend`)
- Mood input as emoji/text
- Display recent mood + recommend button

**Test**: Mood stored and used in app state

---

### 8. Implement Movie Recommendation via Chat (GPT)
- Input mood, use GPT to recommend
- Display: title, description, image (mock)

**Test**: Each mood gives different, logical results

---

### 9. Build “Generate My Movie Character” Page (`/character`)
- Use all tags → generate cartoon with image API
- Display generated image

**Test**: Clicking button produces a character image

---

## 🧼 Phase 4: UI Polish & State Management

### 10. Extract Zustand Store for Movie + Mood
- `useMovieStore.ts` for movie state
- `useMoodStore.ts` for current mood

**Test**: State persists across pages

---

### 11. Add Animations and UI Polish
- Add Framer Motion transitions
- Unified theme and color scheme

**Test**: Smooth transitions, consistent UI

---

### 12. Final Integration Test & Deploy to Vercel
- Connect production Supabase keys
- Deploy on Vercel
- Final test: login → record → tag → search → recommend → character

**Test**: End-to-end user flow successful

---

## 🚧 Optional Post-MVP Features
- OCR: Extract movie info from ticket
- Voice input: Whisper to text + tag
- Rating, favorites, sharing
- Multi-language support
- Social sharing page
