import { useState } from "react";
import backgroundPatternDesktop from "./assets/images/background-pattern-desktop.svg";
import backgroundPatternMobile from "./assets/images/background-pattern-mobile.svg";
import iconMinus from "./assets/images/icon-minus.svg";
import iconPlus from "./assets/images/icon-plus.svg";
import iconStar from "./assets/images/icon-star.svg";

type faqs = {
  question: string;
  answer: string;
  uid: string;
};

const faqs: faqs[] = [
  {
    uid: crypto.randomUUID(),
    question: "What does this platform do, and how will it help me?",
    answer:
      "We provide front-end challenges that include professional web designs. These allow you to practice building websites in a realistic workflow. Taking these challenges will help you improve your skills, gain experience creating websites, and build up an incredible project portfolio. We also have a large community of developers, so it's a great way to meet other devs!",
  },

  {
    uid: crypto.randomUUID(),
    question: "Is it free?",
    answer:
      "The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.",
  },
  {
    uid: crypto.randomUUID(),
    question: "Can I use these projects in my portfolio?",
    answer:
      "Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!",
  },
  {
    uid: crypto.randomUUID(),
    question: "What are points for, and how does the points system work?",
    answer:
      "Your 'Mentor Score' is a rough gauge of your reputation on the platform. Earning more points can boost your exposure within the community and get you on the Wall of Fame. Click 'Learn about our Wall of Fame' on the Wall of Fame for all the information.",
  },
  // {
  //   uid: crypto.randomUUID(),
  //   question:
  //     "Can I use these challenges within my own free or commercial content/tutorials/projects?",
  //   answer:
  //     "Please visit our License page to learn more about how our challenges can be used within your own content. If you're unsure about anything, please feel free to contact us at hi@frontendmentor.io and we'll be more than happy to answer your questions.",
  // },
];
function App() {
  const [currentOpenedFaq, setCurrentOpenedFaq] = useState<string>("");

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen relative bg-light-pink font-workSans">
      <img
        src={backgroundPatternDesktop}
        className="w-screen absolute top-0 z-0 hidden md:flex"
      />
      <img
        src={backgroundPatternMobile}
        className="w-screen absolute top-0 z-0 flex md:hidden"
      />
      <div className="flex flex-col justify-center rounded-xl p-5 md:p-10 bg-white  absolute z-10  shadow-lg w-[90%] md:w-[36%]  ">
        <div className="flex flex-row  items-center space-x-4">
          <img src={iconStar} className=" w-7 lg:w-auto" />
          <h1 className="font-bold text-3xl md:text-5xl text-dark-purple">
            FAQs
          </h1>
        </div>
        <div className="flex flex-col mt-10">
          {faqs.map((faq, index) => {
            return (
              <div
                key={index + "-" + faq.question}
                className="flex flex-col my-2"
              >
                <div className="flex flex-row justify-between items-center space-x-4">
                  <h6 className=" font-bold hover:text-purple-700 text-dark-purple">
                    {faq.question}
                  </h6>
                  <img
                    src={iconPlus}
                    className={currentOpenedFaq === faq.uid ? "hidden" : "flex"}
                    onClick={() => setCurrentOpenedFaq(faq.uid)}
                  />
                  <img
                    src={iconMinus}
                    onClick={() => setCurrentOpenedFaq("")}
                    className={currentOpenedFaq === faq.uid ? "flex" : "hidden"}
                  />
                </div>

                <p
                  className={` mt-3 transition-all duration-300 ease-in-out text-grayish-purple  ${
                    currentOpenedFaq === faq.uid
                      ? " visible max-h-96 opacity-100 "
                      : " max-h-0 invisible opacity-0"
                  }`}
                >
                  {faq.answer}
                </p>
                {index !== faqs.length - 1 && <hr className="mt-3" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
