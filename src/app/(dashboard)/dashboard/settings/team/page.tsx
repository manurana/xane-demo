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

const TeamPage = async () => {
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
