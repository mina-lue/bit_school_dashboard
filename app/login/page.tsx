"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login as apiLogin } from "@/service/api.service";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await apiLogin(email, password);
      login(data);
      const  homeRoute =  user?.role === 'SUPER_ADMIN' ? '/super':'/';
      router.push(homeRoute)
    } catch {
      setError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full  h-[95vh]">
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-2xl w-full max-w-md space-y-6 border-1 shadow-2xl"
      >
        <h1 className="text-2xl font-semibold text-center">Sign In</h1>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border border-gray-400 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>


        {error && <p className="text-red-500 text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}
