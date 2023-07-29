import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { TeamMemberForm } from "./team-member-form";

const TeamMemberDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="secondary">Add team member</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add team member</DialogTitle>
          <DialogDescription>
            Add a new team member. An invite will be sent to them on the email
            provided
          </DialogDescription>
        </DialogHeader>
        <TeamMemberForm />
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;
