import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-col items-center justify-center w-full  h-full">
      <div className="h-140 w-screen dark:bg-orange-900 bg-orange-800  dark:opacity-60 flex items-center justify-center"> 
        <div>
          <p>Pay From Your Comfort for your student!</p>
        <div className="flex flex-wrap gap-2">
            <Link href={'/students/paidFor'} className="p-4 bg-gray-700 dark:bg-gray-900 rounded text-gray-200 dark:text-gray-300 ">Some Actions</Link>
        </div>
        </div>
      </div>
      <div className="m-12 flex justify-center gap-5 flex-wrap">
        <Link href={'/students/paidFor'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">Students Paid</Link>
        <Link href={'/students/unpaidFor'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">Students to pay</Link>
        <Link href={'/staffs'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">My Staffs</Link>
        <Link href={'/students'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">My Students</Link>
        <Link href={'/payments'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform">Payments collected</Link>
      </div>
      {
      }

    
    </div>
  );
}
