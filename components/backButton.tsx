"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import React from "react";

const BackButton = () => {
  const { user } = useAuth();
  return (
    <Link
      href={user?.role === "SUPER_ADMIN" ? "/super" : "/"}
      className="bg-red-800 px-2 rounded text-center float-right"
    >
      <h2 className="text-white">X</h2>
    </Link>
  );
};

export default BackButton;
