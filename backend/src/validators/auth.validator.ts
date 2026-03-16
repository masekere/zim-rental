import { z } from "zod";

export const registerSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters"),

    email: z.email({
        message: "Invalid email address",
    }),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),

    phone: z
        .string()
        .min(10, "Phone number is too short"),

    role: z
        .enum(["tenant", "landlord", "admin"])
        .default("tenant"),

    isVerified: z
        .boolean()
        .default(false),

    profileImage: z.url("Profile image must be a valid URL").optional()
});

export const loginSchema = z.object({
    email: z.email({
        message: "Invalid email address",
    }),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters")
});