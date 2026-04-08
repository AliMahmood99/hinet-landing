import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://hinet.testcode.tech/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 15000,
});

/**
 * Register a new business account.
 *
 * NOTE: The backend currently requires a `password` field.
 * Since the new flow collects password AFTER admin approval (via email link),
 * we generate a temporary random password. This will be removed once the
 * backend drops the password requirement from registration.
 */
export async function registerBusiness(data) {
  const payload = {
    companyName: data.companyName.trim(),
    firstName: data.firstName.trim(),
    lastName: data.lastName.trim(),
    email: data.email.trim().toLowerCase(),
    // Temporary: backend requires password, user will set real one after approval
    password: crypto.randomUUID() + "A!1a",
  };

  if (data.crn) {
    payload.crn = data.crn.trim();
  }

  if (data.phone) {
    payload.phone = data.phone;
  }

  if (data.country) {
    payload.country = data.country;
  }

  const response = await api.post("/auth/register", payload);
  return response.data;
}

export default api;
