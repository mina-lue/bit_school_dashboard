'use client'
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function Home() {
  const {user} = useAuth();
  return (
    <div className="flex-col items-center justify-center w-full  h-full">
      <div className="h-140 w-screen dark:bg-orange-900 bg-orange-800  dark:opacity-60 flex items-center justify-center"> 
        <div>
          <p>Pay From Your Comfort for your student!</p>
        <div className="flex flex-wrap gap-2">
            <Link href={'/registration'} className="p-4 bg-gray-700 dark:bg-gray-900 rounded text-gray-200 dark:text-gray-300 ">Some Actions</Link>
            <p>My students</p>
            <p>School Name</p>
            <p>up coming payment</p>
            <p>revenue collected this month</p>
            <p>update payment data</p>
            <p>update students data</p>
        </div>
        </div>
      </div>
      <div className="m-12 flex justify-center gap-5 flex-wrap">
        <Link href={'/students/paidFor'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">Students Paid</Link>
        <Link href={'/students/unpaidFor'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">Students to pay</Link>
        { user?.role==='ADMIN' && <Link href={'/staffs'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">My Staffs</Link>}
        <Link href={'/students'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">My Students</Link>
        { user?.role==='ADMIN' && <Link href={'/payments'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">Payments collected</Link>}
      </div>
      {
      }

    
    </div>
  );
}
