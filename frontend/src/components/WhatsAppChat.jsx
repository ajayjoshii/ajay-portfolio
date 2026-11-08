
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const questions = [
  {
    question: "What is the cost of website development?",
    answer:
      "The cost depends on your website requirements, design, and features. Contact me on WhatsApp to discuss your project and get a free quote."
  },
  {
    question: "How much time does it take to build a website?",
    answer:
      "A basic website usually takes 3-7 days, while complex websites may take 2-4 weeks depending on the requirements."
  },
  {
    question: "Will my website be mobile responsive?",
    answer:
      "Yes! I build fully responsive websites that work smoothly on mobile phones, tablets, laptops, and desktops."
  }
];

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const phoneNumber = "9779815898401";

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[360px] overflow-hidden rounded-2xl bg-white shadow-2xl border border-gray-200">

          {/* Header */}
          <div className="flex items-center justify-between bg-[#075E54] p-4 text-white">
            <div>
              <h3 className="font-semibold text-lg">
                Let's Talk!
              </h3>
              <p className="text-xs text-green-100">
                How can I help you?
              </p>
            </div>

            <button onClick={() => setIsOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* Chat Body */}
          <div className="h-[360px] overflow-y-auto bg-gray-50 p-4">

            <div className="mb-4 max-w-[90%] rounded-xl rounded-tl-none bg-white p-3 shadow-sm">
              <p className="text-sm text-gray-700">
                👋 Hello! Welcome to my website development service.
                Please select a question below.
              </p>
            </div>

            {/* FAQs */}
            <p className="mb-3 text-xs font-semibold text-gray-500">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <div className="space-y-3">
              {questions.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-green-200 bg-white"
                >
                  <button
                    onClick={() =>
                      setSelectedQuestion(
                        selectedQuestion === index ? null : index
                      )
                    }
                    className="flex w-full items-center justify-between gap-2 p-3 text-left text-sm font-medium text-gray-700 hover:bg-green-50"
                  >
                    {item.question}

                    <span className="text-lg text-green-600">
                      {selectedQuestion === index ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer Below Question */}
                  {selectedQuestion === index && (
                    <div className="border-t border-green-100 bg-green-50 p-3">
                      <p className="text-sm leading-relaxed text-gray-700">
                        {item.answer}
                      </p>

                      <button
                        onClick={() => openWhatsApp(item.question)}
                        className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] p-2 text-sm font-semibold text-white transition hover:bg-green-600"
                      >
                        <Send size={16} />
                        Chat with Us on WhatsApp
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t bg-white p-3 text-center">
            <p className="text-xs text-gray-400">
              Available for website projects
            </p>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
        aria-label="Open WhatsApp chat"
      >
        {isOpen ? (
          <X size={30} />
        ) : (
          <MessageCircle size={32} />
        )}
      </button>
    </div>
  );
}
