import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useLanguage } from "../context/useLanguage";

type ContactUsProps = {
  imageName: string;
  useBlueBackground?: boolean;
};

const ContactUs = ({ imageName, useBlueBackground = true }: ContactUsProps) => {
  const { translations } = useLanguage();

  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClear = (field: keyof typeof form) => {
    setForm({ ...form, [field]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: form.user_name.trim() === "",
      email: form.user_email.trim() === "" || !/\S+@\S+\.\S+/.test(form.user_email),
      message: form.message.trim() === "",
    };

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      setIsLoading(true);
      if (formRef.current) {
        try {
          await emailjs.sendForm(
            "contatositemgimports",
            "template_92mwpuk",
            formRef.current,
            { publicKey: "DiokJ1EDvMDkUI93D" }
          );
          toast.success(translations.email_success);
          setIsLoading(false);
          setForm({ user_name: "", user_email: "", message: "" });
        } catch (error) {
          toast.error(translations.email_error);
          console.error("Erro:", error);
        }
      }
    }
  };

  const containerClasses = `
    ${useBlueBackground ? "bg-blueSoft text-white" : "bg-white text-void"}
    rounded-[20px] w-full mx-auto mt-12
  `;
  const inputClass = useBlueBackground
    ? "border-white placeholder-white/60 text-white border"
    : "border-darkBlue placeholder-darkBlue text-darkBlue border-2";

  return (
    <section id="contact" className={containerClasses}>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 p-8 w-full">
        <form ref={formRef} onSubmit={handleSubmit} className="flex-1 w-full space-y-6">
          <h2 className="font-bai font-semibold text-bai-24-600 pb-[1.5rem]">
            {translations.contact_title}
          </h2>

          {/* Name */}
          <div className="relative w-full pb-[2.5rem]">
            <label htmlFor="name" className="absolute -top-5 left-3 text-sm px-1">
              {translations.contact_name}
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder={translations.contact_name_placeholder}
              value={form.user_name}
              onChange={handleChange}
              className={`w-full bg-transparent rounded-md px-4 py-3 pr-10 ${inputClass}`}
            />
            {form.user_name && (
              <button type="button" onClick={() => handleClear("user_name")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
                ✕
              </button>
            )}
          </div>

          {/* Email */}
          <div className="relative w-full pb-[2.5rem]">
            <label htmlFor="email" className="absolute -top-5 left-3 text-sm px-1">
              {translations.contact_email}
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder={translations.contact_email_placeholder}
              value={form.user_email}
              onChange={handleChange}
              className={`w-full bg-transparent rounded-md px-4 py-3 pr-10 ${inputClass}`}
            />
            {form.user_email && (
              <button type="button" onClick={() => handleClear("user_email")} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
                ✕
              </button>
            )}
          </div>

          {/* Message */}
          <div className="relative w-full">
            <label htmlFor="message" className="absolute -top-5 left-3 text-sm px-1">
              {translations.contact_message}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={translations.contact_message_placeholder}
              value={form.message}
              onChange={handleChange}
              className={`w-full bg-transparent rounded-md px-4 py-3 pr-10 ${inputClass}`}
            />
            {form.message && (
              <button type="button" onClick={() => handleClear("message")} className="absolute right-3 top-3 text-white/60">
                ✕
              </button>
            )}
          </div>

          {/* Submit */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-navy text-white px-6 py-2 rounded-md mt-2 hover:bg-opacity-80 disabled:opacity-50"
            >
              {isLoading ? translations.contact_sending : translations.contact_submit}
            </button>
          </div>
        </form>

        {/* Imagem */}
        <div className="h-[25.875rem] w-full md:w-[28rem] rounded-[10px] overflow-hidden">
          <img src={imageName} alt={imageName} className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
