"use client";
import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginPage() {
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://your-app.vercel.app/admin/dashboard", // prod
      },
    });
    if (error) {
      setMessage("❌ Error sending magic link.");
    } else {
      setMessage("✅ Magic link sent! Check your email.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full transform transition hover:scale-[1.02]">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-2">
          Welcome Back 👋
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign in with your email to access the dashboard
        </p>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-200"
          >
            Send Magic Link ✨
          </button>
        </form>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}

        <div className="mt-6 text-center text-xs text-gray-500">
          By logging in you agree to our{" "}
          <a href="/terms" className="text-indigo-600 hover:underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="/privacy" className="text-indigo-600 hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
