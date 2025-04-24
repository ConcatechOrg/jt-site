import { useLanguage } from "../context/useLanguage";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  const { translations } = useLanguage();

  const faqData = [
    {
      question: translations.faq_question_1,
      answer: translations.faq_answer_1,
    },
    {
      question: translations.faq_question_2,
      answer: translations.faq_answer_2,
    },
    {
      question: translations.faq_question_3,
      answer: translations.faq_answer_3,
    },
  ];

  return (
    <section id="faq" className="px-4">
      <h2 className="font-bai font-semibold text-bai-24-600 pb-[1.5rem]">
        {translations.faq_title}
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FaqItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
