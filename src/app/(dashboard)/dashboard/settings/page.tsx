import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import { DashboardHeader } from "@/components/header";
import { DashboardShell } from "@/components/shell";
import { UserNameForm } from "@/components/user-name-form";

export const metadata = {
  title: "Settings",
  description: "Manage account and website settings.",
};

export default async function SettingsPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <UserNameForm
          user={{
            id: user.id,
            name: `${user.firstName} ${user.lastName}` || "",
          }}
        />
      </div>
    </DashboardShell>
  );
}
