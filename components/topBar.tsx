import Link from 'next/link'
import React from 'react'

const TopBarComponent = () => {
  return (
    <div className='top-0 absolute w-full flex justify-between h-12 items-center bg-gray-800 px-8 text-gray-200 shadow-b-3xl'>
        <Link href='/' >BIT school pay</Link>
        <Link href='/about' >About</Link>
    </div>
  )
}

export default TopBarComponent