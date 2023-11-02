import { data } from "autoprefixer";
import { z } from "zod";

export const RegisterUserSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "Full name is required"),
    lastName: z
      .string({
        required_error: "Name is required",
      })
      .min(1, "Full name is required"),
    email: z
      .string({
        required_error: "Email is required",
      })
      .min(1, "Email is required")
      .email("Email is invalid"),
    photo: z.string().optional(),
    password: z
      .string({
        required_error: "Password is required",
      })
      .min(1, "Password is required")
      .min(6, "Password must be more than 6 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: z
      .string({
        required_error: "Confirm your password",
      })
      .min(1, "Confirm your password"),
    phone: z.string({required_error: "Phone is required"}),
    birthday: z
  .string({ required_error: "Birthday is required" })
  .refine((value) => {
    // Use a regular expression to validate the date format (YYYY-MM-DD)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!dateRegex.test(value)) {
      return false; // Date format is invalid
    }
    
    // Parse the date and check if it's a valid Date
    const parsedDate = new Date(value);
    return !isNaN(parsedDate.getTime());
  }, { message: "Invalid date format or date does not exist" })
  .transform((value) => new Date(value).toISOString())// Optionally transform the date to a standardized format

  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

export const LoginUserSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, "Email is required")
    .email("Email is invalid"),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export type LoginUserInput = z.infer<typeof LoginUserSchema>;
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
