"use client";

import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const section = {
  items: [
    { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Typically, 6-8 weeks with focused study." },
    { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Typically, 6-8 weeks with focused study." },
    { question: "Lorem ipsum dolor sit amet consectetur?", answer: "Typically, 6-8 weeks with focused study." },
  ],
};

function FaqItem({ number, question, answer, open, onToggle }) {
  return (
    <div
      className={`rounded-lg w-full border border-gray-200 shadow-sm ${
        open ? "bg-primary-green" : "bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="cursor-pointer flex w-full rounded-lg items-center justify-between gap-4 py-3 px-8 text-left"
      >
        <span className={`text-5 ${open ? "text-white" : "text-black"}`}>
          {number}. {question}
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
            open ? "bg-white text-primary-green" : "bg-primary-red text-white"
          }`}
        >
          <FaCaretUp size={18} className={`${open ? "rotate-0" : "rotate-180"} transform transition-transform duration-300`}/>
        </span>
      </button>

      <div className={`grid bg-white transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <div className="overflow-hidden">
          <p className="p-6 text-lg text-black/70">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqSection({ section: data = section }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {data.items.map((item, i) => (
        <FaqItem
          key={i}
          number={i + 1}
          question={item.question}
          answer={item.answer}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}