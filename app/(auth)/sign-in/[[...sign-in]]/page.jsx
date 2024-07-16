import {SignIn} from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="bg-customBg">
      <div className="text-silverCrest mx-auto max-w-screen-xl px-4 py-36 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-2xl">
            Welcome to Expense Tracker Application.
          </h1>
          <h1 className="text-2xl font-bold sm:text-3xl">Get Started Today!</h1>

          <p className="mt-4">
            Please sign in/up to budget your expenses and save up 😊.
          </p>
        </div>
        <div className="relative flex justify-center mt-8 lg:mt-16">
          <SignIn />
        </div>
      </div>
    </section>
  );
}
