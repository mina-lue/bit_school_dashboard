"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { LoginResponse } from "@/lib/domains/loginResponse.dto";

interface AuthContextType {
  user: LoginResponse["user"] | null;
  login: (data: LoginResponse) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<LoginResponse["user"] | null>(null);

  // 🔹 On initial load, try to fetch user from server-side cookie
  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      }
    };
    fetchUser();
  }, []);

  // 🔹 Call server action to set cookies
  const login = async (data: LoginResponse) => {
    await fetch("/api/auth/set-token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        accessToken: data.backendTokens.accessToken,
        refreshToken: data.backendTokens.refreshToken,
        user: data.user,
      }),
    });
    setUser(data.user);
  };

  // 🔹 Call server action to clear cookies
  const logout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
