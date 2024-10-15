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
    typeDocument: z.string({required_error: "Document is required"}),
    document: z.string({required_error: "Document is required"}),
    birthday: z
    .string()
    .refine( (date) => new Date(date).toString() !== "Invalid Date", {
      message: "Invalid date"}  )
  .transform((date) => new Date(date))

  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

  export const RegisterProfessionalSchema = z
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
    speciality: z
      .string({
        required_error: "Speciality is required",
      })
      .min(1, "Speciality is required"),
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
    typeDocument: z.string({required_error: "Document is required"}),
    document: z.string({required_error: "Document is required"}),
    birthday: z
    .string()
    .refine( (date) => new Date(date).toString() !== "Invalid Date", {
      message: "Invalid date"}  )
  .transform((date) => new Date(date))

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
    .min(6, "Password must be at least 6 characters"),
});

export const MedicalAppointmentSchema = z.object({
  date: z.date(),
  hour: z.date(), 
  status: z.string(),
});

export type InputMedicalAppointment = z.infer<typeof MedicalAppointmentSchema>;
export type LoginUserInput = z.infer<typeof LoginUserSchema>;
export type RegisterUserInput = z.infer<typeof RegisterUserSchema>;
export type RegisterProfessionalSchema = z.infer<typeof RegisterProfessionalSchema>;