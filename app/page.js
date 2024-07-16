import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    // <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-gradient-defang">
    //   <h1>Expense Tracker</h1>
    //   <Button>Track!</Button>
    // </main>
    <main>
      <div>
        <Header />
        <Hero />
      </div>
    </main>
  );
}
