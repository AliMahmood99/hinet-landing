import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const signupSchema = z.object({
  companyName: z
    .string()
    .min(2, "companyNameMin")
    .max(300, "companyNameMax"),

  firstName: z
    .string()
    .min(1, "firstNameRequired")
    .max(100, "firstNameMax"),

  lastName: z
    .string()
    .min(1, "lastNameRequired")
    .max(100, "lastNameMax"),

  crn: z
    .string()
    .max(50, "crnMax")
    .optional()
    .or(z.literal("")),

  email: z
    .string()
    .min(1, "emailRequired")
    .email("emailInvalid")
    .max(255, "emailMax"),

  phone: z
    .string()
    .optional()
    .or(z.literal(""))
    .refine(
      (val) => !val || isValidPhoneNumber(val),
      "phoneInvalid"
    ),

  acceptTerms: z
    .boolean()
    .refine((val) => val === true, "termsRequired"),
});
