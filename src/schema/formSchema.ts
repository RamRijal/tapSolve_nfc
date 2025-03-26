import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^98\d{8}$/, "Invalid phone number"),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(1, "Message is required"),
});
