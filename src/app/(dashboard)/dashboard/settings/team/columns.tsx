"use client";

import { createColumnHelper, Row } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { TeamMember } from "@/lib/validations/team-member";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { Icons } from "@/components/icons";

const columnHelper = createColumnHelper<TeamMember>();

const RowActions = ({
  row,
  onEditTeamMember,
}: {
  row: Row<TeamMember>;
  onEditTeamMember: (teamMember: TeamMember) => void;
}) => {
  const teamMember = row.original;
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
          onClick={() => navigator.clipboard.writeText(teamMember.id)}
        >
          Copy user ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => onEditTeamMember(teamMember)}>
          Edit Member
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export const columns = [
  columnHelper.accessor("id", {
    header: "ID",
  }),
  columnHelper.accessor((row) => `${row.firstName} ${row.lastName}`, {
    id: "fullName",
    header: "Full Name",
  }),
  columnHelper.accessor("email", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  }),
  columnHelper.accessor("company.title", {
    header: "Title",
  }),
  columnHelper.display({
    id: "actions",
    header: "Actions",
    cell: ({ row, table }) => (
      <RowActions
        row={row}
        onEditTeamMember={table.options.meta?.onEditTeamMember ?? (() => {})}
      />
    ),
  }),
];
