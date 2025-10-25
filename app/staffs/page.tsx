"use client";
import BackButton from "@/components/backButton";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
import { User } from "@/lib/domains/user.model";
import { fetchMyStaffs } from "@/service/api.service";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const StaffsPage = () => {
  const [staffs, setStaffs] = useState<User[] | null>([]);
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(false);
      setError(null);

      try {
        const res = await fetchMyStaffs({ page: 1, size: 10 });
        const data = res.data;
        console.log("data collected", res);
        setStaffs(data);
      } catch (e) {
        console.error(e);
        setError("Error loading tenders. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (error)
    return (
      <div className="flex text-center items-center text-red-500">
        Error Loading Students
      </div>
    );
  if (loading)
    return (
      <div className="flex text-center items-center">Loading Students</div>
    );

  return (
    <div className="flex-col mt-16 mx-1 sm:mx-4 justify-center">
      <div className="flex-col mt-2 mx-1 sm:mx-4 justify-center">
        <BackButton />
        <div className="bg-green-800 px-2 rounded text-center float-right mr-2">
          {" "}
          <Link href={"/staffs/new"} className="text-white">
            + Add staff
          </Link>
        </div>
        <h1 className="sm:text-2xl text-md text-center m-2">
          {"All Staff Members"}
        </h1>
        <Table>
          <TableHeader className="dark:bg-orange-900 bg-orange-800 text-gray-200 dark:text-gray-300 ">
            <TableRow>
              <TableHead className="w-1/3 text-lg text-gray-200 dark:text-gray-300 rounded-tl-md">
                Name
              </TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300 ">
                ID
              </TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300">
                phone
              </TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300">
                email
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffs &&
              staffs.map((staff: User) => (
                <TableRow key={staff.id}>
                  <TableCell>{`${staff.firstName} ${staff.middleName} ${staff.lastName}`}</TableCell>
                  <TableCell className="text-right">{staff.id}</TableCell>
                  <TableCell className="text-right">{staff.phone}</TableCell>
                  <TableCell className="text-right">{staff.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter className="dark:bg-orange-900 bg-orange-800 h-12" />
        </Table>
      </div>
    </div>
  );
};

export default StaffsPage;
