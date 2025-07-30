'use client'

import { useSupabase } from '@/hooks/useSupabase'
import Link from 'next/link'

export default function Home() {
  const { user, loading, signOut } = useSupabase()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Loading...</h2>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h1 className="text-center text-4xl font-bold text-gray-900 mb-8">
              🎬 AI Movie Tracker
            </h1>
            <p className="text-center text-gray-600 mb-8">
              Track your movies with AI-powered insights
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/login"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">
                🎬 AI Movie Tracker
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user.email}
              </span>
              <button
                onClick={signOut}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Welcome to AI Movie Tracker!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Your user ID: {user.id}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/record"
                className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  📝 Record Movie
                </h3>
                <p className="text-gray-600">
                  Add a new movie to your collection
                </p>
              </Link>
              <Link
                href="/search"
                className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🔍 Search Movies
                </h3>
                <p className="text-gray-600">
                  Find movies in your collection
                </p>
              </Link>
              <Link
                href="/recommend"
                className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  💡 Get Recommendations
                </h3>
                <p className="text-gray-600">
                  AI-powered movie suggestions
                </p>
              </Link>
              <Link
                href="/character"
                className="p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  🎭 My Character
                </h3>
                <p className="text-gray-600">
                  Generate your movie character
                </p>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
