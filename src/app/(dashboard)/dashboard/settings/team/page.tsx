import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { UserNameForm } from "@/components/user-name-form";

import { columns } from "./columns";
import { DataTable } from "./data-table";

//dummyjson.com user type
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  company: {
    name: string;
    title: string;
    department: string;
  };
};

const getTeamMembers = async () => {
  const res = await fetch("https://dummyjson.com/users?limit=10");
  const data = await res.json();
  const users = data.users as User[];
  return data.users;
};

const TeamPage = async () => {
  const users = await getTeamMembers();
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Team"
        text="Manage account and website settings."
      />
      <DataTable columns={columns} data={users} />
    </DashboardShell>
  );
};

export default TeamPage;
