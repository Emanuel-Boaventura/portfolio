import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-neutral-700">
        <Navbar />
        <main className="relative mx-auto w-[90%]">
          <Hero />
          <About />
        </main>
      </div>
    </>
  );
}
