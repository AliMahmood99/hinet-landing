import { useTranslations } from "next-intl";
import Image from "next/image";
import UpperForm from "@/components/contact/UpperForm";
import Form from "@/components/contact/Form";
import UnderForm from "@/components/contact/UnderForm";

export default function ContactUsPage() {
  const t = useTranslations("Contact");

  return (
    <div className="contact">
      <UpperForm />
      <Form />
      <UnderForm />
    </div>
  );
}
