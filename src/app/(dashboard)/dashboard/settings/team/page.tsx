import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";

import { columns } from "./columns";
import { DataTable } from "./data-table";

//dummyjson.com user type
export type TeamMember = {
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
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  const users = data.users as Array<TeamMember>;
  return users;
};

const TeamPage = async () => {
  const teamMembers = await getTeamMembers();
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Team"
        text="Manage account and website settings."
      />
      <DataTable columns={columns} data={teamMembers} />
    </DashboardShell>
  );
};

export default TeamPage;
