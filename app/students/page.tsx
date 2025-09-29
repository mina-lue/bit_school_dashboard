import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const StudentsListPage = () => {
  return (
    <div>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-2/3 text-lg">Lesson</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableCell>lesson 01</TableCell>
          <TableCell>lesson 02</TableCell>
          <TableCell>lesson 03</TableCell>
        </TableBody>
      </Table>
    </div>
  )
}

export default StudentsListPage