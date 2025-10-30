'use client'
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link'
import React from 'react'

const SuperAdminPage = () => {
    const { user } = useAuth();
  return (
     <div className="flex-col items-center justify-center w-full  h-full">
      <div className="h-140 w-screen dark:bg-orange-900 bg-orange-800  dark:opacity-60 flex items-center justify-center"> 
        <div>
          <p>Pay From Your Comfort for your student!</p>
        <div className="flex flex-wrap gap-2">
          <p>total schools</p>
          <p>total students</p>
        </div>
        </div>
      </div>
      <div className="m-12 flex justify-center gap-5 flex-wrap">
        <Link href={'/super/schools/registration'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">Register School</Link>
        <Link href={'/super/schools'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">Schools</Link>
       </div>
      {
      }

    
    </div>
  )
}

export default SuperAdminPage