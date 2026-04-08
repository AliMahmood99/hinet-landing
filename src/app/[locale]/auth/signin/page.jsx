import { redirect } from "next/navigation";

const PROVIDER_LOGIN_URL =
  process.env.NEXT_PUBLIC_PROVIDER_PANEL_URL
    ? `${process.env.NEXT_PUBLIC_PROVIDER_PANEL_URL}/login`
    : "https://provider.hinet.testcode.tech/login";

export default function SignIn() {
  redirect(PROVIDER_LOGIN_URL);
}
