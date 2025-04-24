import { useState } from "react";

type ContactUsProps = {
  imageName: string;
  useBlueBackground?: boolean;
};
const ContactUs = ({ imageName, useBlueBackground = true }: ContactUsProps) => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClear = (field: string) => {
    setForm({ ...form, [field]: "" });
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
        {/* Formulário */}
        <div className="flex-1 w-full">
          <h2 className="font-bai font-semibold text-bai-24-600 text-white pb-[1.5rem]">
            Contact Us
          </h2>

          <div className="space-y-6 mt-4">
            {/* Campo Name */}
            <div className="relative w-full pb-[2.5rem]">
              <label
                htmlFor="name"
                className="absolute -top-5 left-3 text-sm  px-1"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="personal or company"
                value={form.name}
                onChange={handleChange}
                className={`w-full bg-transparent rounded-md px-4 py-3 pr-10 ${inputClass}`}
              />
              {form.name && (
                <button
                  onClick={() => handleClear("name")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Campo Email */}
            <div className="relative w-full pb-[2.5rem]">
              <label
                htmlFor="email"
                className="absolute -top-5 left-3 text-sm  px-1  "
              >
                E-mail
              </label>
              <input
                type="email"
                name="email"
                placeholder="youremail@"
                value={form.email}
                onChange={handleChange}
                className={`w-full bg-transparent rounded-md px-4 py-3 pr-10 ${inputClass}`}
              />
              {form.email && (
                <button
                  onClick={() => handleClear("email")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Campo Message */}
            <div className="relative w-full">
              <label
                htmlFor="message"
                className="absolute -top-5 left-3 text-sm  px-1"
              >
                Message
              </label>
              <textarea
                name="message"
                placeholder="Hi, I need help with..."
                value={form.message}
                onChange={handleChange}
                className={`w-full bg-transparent rounded-md px-4 py-3 pr-10 ${inputClass}`}
              />
              {form.message && (
                <button
                  onClick={() => handleClear("message")}
                  className="absolute right-3 top-3 text-white/60"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex justify-center">
              <button className="bg-navy text-white px-6 py-2 rounded-md mt-2 hover:bg-opacity-80">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Imagem */}
        <div className="h-[25.875rem] w-full md:w-[28rem] rounded-[10px] overflow-hidden">
          <img
            src={`${imageName}`}
            alt={imageName}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
