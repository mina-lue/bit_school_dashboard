'use client'
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link'
import React from 'react'

const TopBarComponent = () => {
  const {user} = useAuth();
  return (
    <div className='top-0 absolute w-full flex justify-between h-[5%] items-center bg-gray-800 px-8 text-gray-200 shadow-b-3xl capitalize'>
        <Link href={user?.role === 'SUPER_ADMIN' ? '/super' : '/'}>BIT school pay</Link>
        <div className='flex gap-2'>
          <p>Eng</p>
          <Link href='/about' >About</Link>
        </div>
    </div>
  )
}

export default TopBarComponent