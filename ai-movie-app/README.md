# 🎬 AI Movie Tracker

An AI-powered movie logging and recommendation app built with Next.js, Supabase, and OpenAI.

## 🚀 Getting Started

### Prerequisites

1. **Supabase Setup**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to Settings > API to get your project URL and anon key
   - Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run Development Server**
```bash
npm run dev
```

4. **Test Authentication**
   - Open [http://localhost:3000](http://localhost:3000)
   - Click "Sign In" and enter your email
   - Check your email for the magic link
   - Click the link to complete authentication

## 🧪 Test: User Authentication

**Expected Behavior:**
- User can login with email
- `user.id` is stored and displayed on homepage
- User can logout successfully

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page with auth
│   ├── login/             # Login page
│   └── auth/callback/     # Auth callback handler
├── hooks/                 # Custom React hooks
│   └── useSupabase.ts     # Supabase auth hook
└── lib/                   # Utility libraries
    └── supabaseClient.ts  # Supabase client config
```

## 🔧 Next Steps

This completes **Task 1: Initialize Project with Next.js + Supabase Auth**

The app now has:
- ✅ Next.js with TypeScript and Tailwind CSS
- ✅ Supabase client configuration
- ✅ Magic link authentication
- ✅ Login/logout functionality
- ✅ User state management
- ✅ Protected routes (homepage shows user info)

Ready for **Task 2: Set Up Supabase Database Schema**
