// src/components/WhatsappButton.tsx


const WhatsappButton = () => {
  return (
    <button className="flex items-center justify-center  px-[0.9375rem] py-[0.5rem] gap-[0.625rem] rounded-[0.5rem] bg-navy text-white font-shoulders font-regular text-shoulders-16-400">
      <img src="/assets/whatsapp.svg" alt="WhatsApp" className="w-5 h-5" />
      Contact via Whatsapp
    </button>
  );
};

export default WhatsappButton;
