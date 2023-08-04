"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { teamMemberSchema } from "@/lib/validations/team-member";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

import { TeamMember } from "./page";

interface TeamMemberFormProps extends React.HTMLAttributes<HTMLFormElement> {
  teamMember?: TeamMember;
  closeDialog?: () => void;
}

type FormData = z.infer<typeof teamMemberSchema>;

export default function TeamMemberForm({
  teamMember,
  closeDialog,
}: TeamMemberFormProps) {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(teamMemberSchema),
    defaultValues: {
      firstName: teamMember?.firstName || "",
      lastName: teamMember?.lastName || "",
      email: teamMember?.email || "",
    },
  });
  const [isSaving, setIsSaving] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsSaving(true);

    const baseUrl = "https://dummyjson.com/users";

    let url, method;
    if (teamMember) {
      url = `${baseUrl}/${teamMember.id}`;
      method = "PATCH";
    } else {
      url = `${baseUrl}/add`;
      method = "POST";
    }

    const response = await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
      }),
    });

    setIsSaving(false);

    if (!response?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Please try again.",
        variant: "destructive",
      });
    }

    toast({
      description: `Team member ${teamMember ? "updated" : "added"}.`,
    });

    closeDialog && closeDialog();
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-x-4 gap-y-2">
          <Label htmlFor="firstName" className="text-right">
            First Name
          </Label>
          <Input
            id="firstName"
            className="col-span-3"
            {...register("firstName")}
          />
          {errors?.firstName && (
            <p className="col-span-3 col-start-2 text-xs text-red-600">
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4 ">
          <Label htmlFor="lastName" className="text-right">
            Last Name
          </Label>
          <Input
            id="lastName"
            className="col-span-3"
            {...register("lastName")}
          />
          {errors?.lastName && (
            <p className="col-span-3 col-start-2 -mt-3 text-xs text-red-600">
              {errors.lastName.message}
            </p>
          )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4 ">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input id="email" className="col-span-3" {...register("email")} />
          {errors?.email && (
            <p className="col-span-3 col-start-2 -mt-3 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>
      <div className="flex justify-end pt-4">
        <Button type="submit" disabled={isSaving} className="self-end">
          {isSaving && <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />}
          {teamMember ? "Update" : "Add"}
        </Button>
      </div>
    </form>
  );
}
