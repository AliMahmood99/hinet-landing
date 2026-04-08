import Form from "@/components/auth/signup/Form";
import Image from "next/image";

export default function SignOut() {
  return (
    // Added min-h-screen so the layout spans the full height of the viewport
    <div className="flex min-h-screen">
      {/* Form Container: 100% width on mobile, 50% width on large screens */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <Form />
      </div>

      {/* Image Container: Hidden on mobile, 50% width on large screens */}
      <div className="hidden lg:block relative lg:w-1/2  rounded-l-[20px] overflow-hidden">
        <Image
          src="/auth/auth-img.png"
          alt="Auth Image"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
