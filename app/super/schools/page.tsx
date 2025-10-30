"use client";
import BackButton from "@/components/backButton";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableFooter } from "@/components/ui/table";
import { School } from "@/lib/domains/school.dto";
import { fetchSchools } from "@/service/api.service";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SchoolsPage = () => {
  const [schools, setSchools] = useState<School[] | null>([]);
  const [error, setError] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getSchools = async () => {
      setLoading(false);
      setError(null);

      try {
        const res = await fetchSchools({page: 1, size: 10});
        const data = res.data;
        setSchools(data);
      } catch (e) {
        console.error(e);
        setError("Error loading schools. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getSchools();
  }, []);

  if (error)
    return (
      <div className="flex text-center items-center text-red-500">
        Error Loading Schools
      </div>
    );
  if (loading)
    return (
      <div className="flex text-center items-center">Loading Schools</div>
    );
  return (
    <div className="flex-col mt-16 mx-1 sm:mx-4 justify-center">
      <div className="flex-col mt-2 mx-1 sm:mx-4 justify-center">
        <BackButton />
        <div className="bg-green-800 px-2 rounded text-center float-right mr-2">
          {" "}
          <Link href={"/super/schools/registration"} className="text-white">
            + New School
          </Link>
        </div>
        <h1 className="sm:text-2xl text-md text-center m-2">
          {"All Schools"}
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
                email
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {schools &&
              schools.map((school: School) => (
                <TableRow key={school.id}>
                  <TableCell>{school.name}</TableCell>
                  <TableCell className="text-right">{school.id}</TableCell>
                  <TableCell className="text-right">{school.email}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter className="dark:bg-orange-900 bg-orange-800 h-12" />
        </Table>
      </div>
    </div>
  );
};

export default SchoolsPage;
