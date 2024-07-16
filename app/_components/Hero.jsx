import React from "react";
import Image from "next/image";
import Footer from "./Footer";

function Hero() {
  return (
    <section className="bg-customBg text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-5xl font-bold sm:text-4xl">
            Expense Tracker Application
          </h1>
          <p className="mt-4 text-silverCrest text-xl text-pretty">
            Having expense tracker application can help you manage your money
            well and make progress towards your future goals.
          </p>
          <p className="mt-4 text-silverCrest text-xl">
            Start creating a budget for yourself and start saving money!
          </p>
        </div>
        <div className="mt-6 mb-24 text-center">
          <a
            href="/dashboard"
            className="inline-block rounded bg-muslin px-8 py-3 text-md font-bold text-black transition hover:bg-silverCrestDark focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
        <div className="flex mt-2 justify-center items-center">
          <Image
            src="/dashboard.png"
            alt="board"
            width={2000}
            height={700}
            className="rounded-lg border-2"
          />
        </div>
        <div className="mt-28 text-2xl font-md sm:text-xl text-center">
          <h2>
            Learn more from each artcle below to know why it's important to
            budget:
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
          <a
            className="block rounded-xl border border-gray-800 bg-silverCrestDark p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:bg-muslin"
            href="https://finlit.yale.edu/planning/budgeting-and-goal-setting"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 text-customBg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-2 text-xl font-bold text-black">
              Yale Univeristy - Finacial Literacy
            </h2>

            <p className="mt-1 text-sm text-black">
              Budgeting and Goal Setting - What is a budget? Do I need one?
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 bg-silverCrestDark p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:bg-muslin"
            href="https://www.experian.com/blogs/ask-experian/why-is-budgeting-important/#:~:text=A%20budget%20can%20help%20you,set%20aside%20from%20each%20paycheck."
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 text-customBg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-2 text-xl font-bold text-black">Experian</h2>

            <p className="mt-1 text-sm text-black">
              Why is Budgeting Important?
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 bg-silverCrestDark p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:bg-muslin"
            href="https://squareup.com/us/en/the-bottom-line/tools/expense-tracker"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 text-customBg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-2 text-xl font-bold text-black">
              The Bottom Line - Square
            </h2>

            <p className="mt-1 text-sm text-black">
              Using an Expense Tracker to Form Good Financial Habits
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 bg-silverCrestDark p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 hover:bg-muslin"
            href="https://wealthovernow.com/tracking-vs-budgeting-how-to-actively-manage-your-finances/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-8 text-customBg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>

            <h2 className="mt-2 text-xl font-bold text-black">
              Wealth Over Now - Money Files
            </h2>

            <p className="mt-1 text-sm text-black">
              Tracking vs. Budgeting - How to Actively Manage Your Finances
            </p>
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Hero;
