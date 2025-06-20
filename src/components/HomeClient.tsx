"use client";
import GyroTable from "./ui/gyroscopetable";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

interface Sigma {
  id: number;
  name: string;
  rizz: string;
}

export default function HomeClient({ sigma }: { sigma: Sigma[] }) {
  return (
    <main className="bg-gray-900 flex min-h-screen flex-col items-center justify-center text-white">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Rizz Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sigma?.map((sigma) => (
            <TableRow key={sigma.id}>
              <TableCell className="font-medium">{sigma.id}</TableCell>
              <TableCell>{sigma.name}</TableCell>
              <TableCell>{sigma.rizz}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <GyroTable />
    </main>
  );
} 