import Link from 'next/link'
import React from 'react'

const BackButton = () => {
  return (
    <div className="bg-red-800 px-2 rounded text-center float-right">
          {" "}
          <Link href={"/"} className="text-white">
            X
          </Link>
        </div>
  )
}

export default BackButton