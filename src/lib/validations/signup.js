import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

const BLOCKED_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "aol.com",
  "icloud.com",
  "mail.com",
  "protonmail.com",
  "yandex.com",
  "zoho.com",
  "live.com",
  "msn.com",
  "me.com",
  "mac.com",
  "googlemail.com",
];

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
    .max(255, "emailMax")
    .refine((email) => {
      const domain = email.split("@")[1]?.toLowerCase();
      return domain && !BLOCKED_EMAIL_DOMAINS.includes(domain);
    }, "emailPersonal"),

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
