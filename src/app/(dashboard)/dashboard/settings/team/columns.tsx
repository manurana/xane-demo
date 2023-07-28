"use client";

import { ColumnDef, createColumnHelper, Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";

import type { User } from "./page";

const columnHelper = createColumnHelper<User>();

const RowActions = ({ row }: { row: Row<User> }) => {
  const user = row.original;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(user.id)}
        >
          Copy user ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Remove Member</DropdownMenuItem>
        <DropdownMenuItem>Disable Member</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  //   columnHelper.accessor("firstName", {
  //     header: "First Name",
  //   }),
  //   columnHelper.accessor("lastName", {
  //     header: "Last Name",
  //   }),
  columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
    id: "fullName",
    header: "Full Name",
  }),
  columnHelper.accessor("email", {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <Icons.sortArrow className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  }),
  columnHelper.accessor("company.title", {
    header: "Title",
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <RowActions row={row} />,
  }),
];

// export const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: "id",
//     header: "ID",
//   },
//   {
//     accessorKey: "firstName",
//     header: "First Name",
//   },
//   {
//     accessorKey: "lastName",
//     header: "Last Name",
//   },
//   {
//     accessorKey: "email",
//     header: "Email",
//   },
//   {
//     accessorKey: "company.title",
//     header: "Title",
//   },
// ];
