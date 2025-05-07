import { z } from "zod";


export const createUserSchema = z.object({
    first_name: z
    .string({ required_error: "First name is required" })
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be at most 50 characters"),

    last_name: z
    .string({ required_error: "Last name is required" })
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be at most 50 characters"),

    role: z.enum(["admin", "user"], {
        required_error: "Role is required",
        invalid_type_error: "Role must be either 'admin' or 'parent'",
    }),

    password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must be at most 100 characters long"),

    confirm_password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must be at most 100 characters long"),
}).refine((data) => data.password === data.confirm_password, {
  path: ['confirm_password'],
  message: "Password do not match"
});

export type CreateUserInput = z.infer<typeof createUserSchema>;