"use client";
import BackButton from "@/components/backButton";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Student } from "@/lib/domains/student.model";
import { fetchAllStudents } from "@/service/api.service";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const StudentsListPage = () => {
  const [students, setStudents] = useState<Student[] | null>([]);
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(false);
      setError(null);

      try {
        const res = await fetchAllStudents({page: 1, size: 10});
        const data = res.data;
        console.log('data collected',res);
        setStudents(data);
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
          <Link href={"/students/new"} className="text-white">
            + New Student
          </Link>
        </div>
        <h1 className="sm:text-2xl text-md text-center m-2">
          {"All Students"}
        </h1>
        <Table>
          <TableHeader className="dark:bg-orange-900 bg-orange-800 text-gray-200 dark:text-gray-300 ">
            <TableRow>
              <TableHead className="w-2/3 text-lg text-gray-200 dark:text-gray-300 rounded-tl-md">
                Name
              </TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300 ">
                ID
              </TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300">
                Section
              </TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300">
                Grade
              </TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300 rounded-tr-md">
                Paid
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {students &&
              students.map((student: Student) => (
                <TableRow key={student.id}>
                  <TableCell>{`${student.firstName} ${student.middleName} ${student.lastName}`}</TableCell>
                  <TableCell className="text-right">{student.id}</TableCell>
                  <TableCell className="text-right">{student.section}</TableCell>
                  <TableCell className="text-right">{student.grade}</TableCell>
                  <TableCell className="text-right">
                    {student.subscribed? 'Paid' : 'Yet To Pay'}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter className="dark:bg-orange-900 bg-orange-800 h-12" />
        </Table>
      </div>
    </div>
  );
};

export default StudentsListPage;
