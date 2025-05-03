import { z } from "zod";

export const loginSchema = z.object({
    access_id: z.string({
        required_error: "Access ID is required",
        invalid_type_error: "Access ID must be a string",
    }).min(5, "Access ID must be at least 5 characters long")
      .max(20, "Access ID must be at most 20 characters long")
      .regex(/^[a-zA-Z]+-[a-zA-Z]+-\d+$/, "Invalid Access ID'"),
    password: z.string({
      required_error: "Password is required",
    }).min(6, "Password must be at least 6 characters long")
})

export type LoginInput = z.infer<typeof loginSchema>