import Link from 'next/link'
import React from 'react'

const PaymentsPage = () => {
  return (
    <div className="flex items-center justify-center dark:bg-[#0a0a0a] dark:text-gray-200 text-xl w-full">
      <div className="mt-2 mx-4 sm:mx-12 justify-center w-full">
        <div className="bg-red-800 px-2 rounded text-center float-right"> <Link href={'/'} className="text-white">X</Link> </div>
        <div className="dark:text-gray-200">text</div>
      </div>
    </div>
  )
}

export default PaymentsPage