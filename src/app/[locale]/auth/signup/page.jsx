import Form from "@/components/auth/signup/Form";
import Image from "next/image";

export default function SignUp() {
  return (
    <div className="flex h-[calc(100dvh-80px)] overflow-hidden">
      <div className="w-full lg:w-1/2 flex items-center justify-center overflow-y-auto">
        <Form />
      </div>

      <div className="hidden lg:block relative lg:w-1/2 rounded-l-[20px] overflow-hidden">
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
