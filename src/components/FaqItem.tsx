import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

type Props = {
  question: string;
  answer: string;
};

const FaqItem = ({ question, answer }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`bg-lightBlue rounded-md p-6 cursor-pointer transition-all duration-300 ${
        open ? " " : "mb-4"
      }`}
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-bai font-regular text-shoulders-20-400">
            {question}
          </h3>
          
        </div>
        <ChevronRightIcon
          className={`w-5 h-5 text-navy transform transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        />
      </div>

      {open && (
        <div className="mt-4 font-shoulders text-shoulders-16-400 text-dark">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
