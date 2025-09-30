import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React from "react";

const PaymentsPage = () => {
  return (
    <div className="flex-col mt-16 mx-1 sm:mx-4 justify-center">
      <div className="flex-col mt-2 mx-1 sm:mx-4 justify-center">
        <div className="bg-red-800 px-2 rounded text-center float-right">
          {" "}
          <Link href={"/"} className="text-white">
            X
          </Link>
        </div>
        <h1 className="sm:text-2xl text-md text-center m-2">
          {"All Payments Collected"}
        </h1>
        <Table>
          <TableHeader className="dark:bg-orange-900 bg-orange-800 text-gray-200 dark:text-gray-300 ">
            <TableRow>
              <TableHead className="w-1/3 text-lg text-gray-200 dark:text-gray-300 rounded-tl-md">Paid For Student</TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300 ">Service</TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300">Amount</TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300">Date</TableHead>
              <TableHead className="text-lg text-right text-gray-200 dark:text-gray-300 rounded-tr-md">Paid</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>lesson 01</TableCell>
              <TableCell className="text-right">Transport</TableCell>
              <TableCell className="text-right">lesson 02</TableCell>
              <TableCell className="text-right">lesson 03</TableCell>
              <TableCell className="text-right">yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>lesson 01</TableCell>
              <TableCell className="text-right">Tuition</TableCell>
              <TableCell className="text-right">lesson 02</TableCell>
              <TableCell className="text-right">lesson 03</TableCell>
              <TableCell className="text-right">yes</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>lesson 01</TableCell>
              <TableCell className="text-right">Transport</TableCell>
              <TableCell className="text-right">lesson 02</TableCell>
              <TableCell className="text-right">lesson 03</TableCell>
              <TableCell className="text-right">yes</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter className="dark:bg-orange-900 bg-orange-800 h-12"/>
        </Table>
      </div>
    </div>
  )
}

export default PaymentsPage