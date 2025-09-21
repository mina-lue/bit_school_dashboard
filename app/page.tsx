import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-col items-center justify-center w-full  h-full">
      <div className="h-100 w-screen dark:bg-orange-900 bg-orange-800  dark:opacity-60 "> 
      </div>
      <div className="m-12 flex justify-center gap-5 flex-wrap">
        <Link href={'/students/paidFor'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:translate-y-2 transition-transform">Students Paid</Link>
        <Link href={'/students/unpaidFor'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:translate-y-2 transition-transform">Students to pay</Link>
        <Link href={'/students/new'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:translate-y-2 transition-transform">Register Students</Link>
        <Link href={'/students'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:translate-y-2 transition-transform">All Students</Link>
        <Link href={'/payments'} className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:translate-y-2 transition-transform">Payments collected</Link>
      </div>
      {
      }

    
    </div>
  );
}
