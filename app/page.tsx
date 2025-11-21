"use client";
import { useAuth } from "@/context/AuthContext";
import { DashboardDataShape } from "@/lib/domains/school.dto";
import { getDashboardData } from "@/service/api.service";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { user } = useAuth();
  const [loading, setLoading] =  useState(false);
  const [error, setError] =  useState('');
  const [dashData, setDashData] = useState<DashboardDataShape>();


  useEffect( ()=> {

    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await getDashboardData();
        if(data.success)
        setDashData(data.data!);
      } catch (error) {
        setError(' Error loading dashboard data')
      }
    }
    fetchDashboardData()
  }, [])

  return (
    <div className="flex-col items-center justify-center w-full  h-full">
      <div className="h-140 w-screen dark:bg-orange-900 bg-orange-800  dark:opacity-60 flex items-center justify-center">
        <div className="flex flex-wrap w-full h-full">
          <div className="w-1/3 p-4">
          <div className="flex-col items-center justify-center w-full h-full">
              <p className="text-xl font-semibold">Shobone Primary School</p>
              <p>Mister Mesele Mengesha</p>
              <p>My students</p>
              <p>male and female students bar</p>
          </div>
          </div>
          <div className="w-1/3 p-4">
            <p>Pay From Your Comfort for your student!</p>
            
          </div>
          <div className="w-1/3 p-4">
            <div>
              <div className="">
              
              <p>up coming payment</p>
              <p>revenue collected this month</p>
              <p>update payment data</p>
              <p>update students data</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-12 flex justify-center gap-5 flex-wrap">
        <Link
          href={"/students/paidFor"}
          className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform"
        >
          Students Paid
        </Link>
        <Link
          href={"/students/unpaidFor"}
          className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform"
        >
          Students to pay
        </Link>
        {user?.role === "ADMIN" && (
          <Link
            href={"/staffs"}
            className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform"
          >
            My Staffs
          </Link>
        )}
        <Link
          href={"/students"}
          className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform"
        >
          My Students
        </Link>
        {user?.role === "ADMIN" && (
          <Link
            href={"/payments"}
            className="p-4 bg-orange-700 dark:bg-orange-900 rounded text-gray-200 dark:text-gray-300 hover:-translate-y-1 transition-transform"
          >
            Payments collected
          </Link>
        )}
      </div>
      {}
    </div>
  );
}
