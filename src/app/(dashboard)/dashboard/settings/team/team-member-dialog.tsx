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

type TeamMemberDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const TeamMemberDialog = ({ open, onOpenChange }: TeamMemberDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add team member</DialogTitle>
          <DialogDescription>
            Add a new team member. An invite will be sent to them on the email
            provided
          </DialogDescription>
        </DialogHeader>
        <TeamMemberForm closeDialog={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberDialog;
