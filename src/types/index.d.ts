import type { RowData } from "@tanstack/react-table";

declare module "@tanstack/table-core" {
  interface TableMeta<TData extends RowData> {
    onEditTeamMember: () => void;
  }
}
