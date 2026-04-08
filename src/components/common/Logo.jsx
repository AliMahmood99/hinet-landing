import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/logo.svg" alt="Logo" width={80} height={80} />
    </Link>
  );
}
