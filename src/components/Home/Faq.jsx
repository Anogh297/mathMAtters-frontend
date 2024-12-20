import { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl font-mons md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-mons text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Have questions? We’ve got answers! Learn how to make the most of
              Math Matters with these helpful tips.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {/* <Item title="How do I submit assignments?">
            Navigate to the **Assignments** section in your dashboard. Select
            the assignment you wish to submit, upload your solution, and click
            **Submit**. Ensure your file format and size meet the requirements.
          </Item> */}
          <Item title="How can I check my progress?">
            Head to the **Progress** tab in your profile. You'll find detailed
            analytics on your performance, including solved problems,
            contest scores, and more.
          </Item>
          <Item title="How do I participate in a contest?">
            Visit the **Contests** page and browse ongoing or upcoming events.
            Click **Register** to secure your spot. Make sure to review the
            rules and prepare ahead of time!
          </Item>
          <Item title="How do I edit my profile?">
            Go to your **Profile** page and click the **Edit Profile** button.
            Update your details, such as name, email, and bio, and save your
            changes. Customizing your profile helps others know more about you.
          </Item>
          <Item title="What resources are available?">
            Check out the **Resources** section for curated guides, video
            tutorials, and study materials tailored to your needs. You’ll find
            everything to boost your math skills!
          </Item>
        </div>
      </div>
    </div>
  );
};
