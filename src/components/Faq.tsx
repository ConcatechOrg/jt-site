import FaqItem from "./FaqItem";

const faqData = [
  {
    question: "List item",
    answer:
      "This is the expanded answer to the question. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    question: "List item",
    answer:
      "Another answer explaining in more detail what was asked in the question.",
  },
  {
    question: "List item",
    answer:
      "Here goes the explanation of the FAQ item. You can expand or collapse it as needed.",
  },
];

const FaqSection = () => {
  return (
    <section className=" px-4 ">
      <h2 className="font-bai font-semibold text-bai-24-600 pb-[1.5rem]">
        Frequently asked questions
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
