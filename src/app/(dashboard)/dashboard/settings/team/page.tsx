import { auth, useAuth } from "@clerk/nextjs";

import { teamMembersSchema } from "@/lib/validations/team-member";
import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";

import { DataTable } from "./data-table";

const getTeamMembers = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  const parsedData = teamMembersSchema.parse(data);
  const users = parsedData.users;
  return users;
};

const getTeamMembers2 = async () => {};

const TeamPage = async () => {
  const { getToken } = auth();
  const token = await getToken({ template: "supabase" });
  console.log(token);

  const teamMembers = await getTeamMembers();
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Team"
        text="Manage account and website settings."
      />
      <DataTable data={teamMembers} />
    </DashboardShell>
  );
};

export default TeamPage;
