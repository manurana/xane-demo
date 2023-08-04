import * as z from "zod";

export const teamMemberFormSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Email is required" }),
});

export const dummyJsonUserSchema = z.object({
  id: z.coerce.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  image: z.string(),
  company: z.object({
    name: z.string(),
    title: z.string(),
    department: z.string(),
  }),
});

export const teamMembersSchema = z.object({
  users: z.array(dummyJsonUserSchema),
});

export type TeamMember = z.infer<typeof dummyJsonUserSchema>;
