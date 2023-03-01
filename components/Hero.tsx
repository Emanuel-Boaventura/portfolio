import Image from "next/image";
import link from "../public/link.png";

const Hero = () => {
  return (
    <section
      className="flex container flex-col items-center mx-auto relative h-screen
    text-gray-200 "
    >
      <div className="flex flex-col my-auto items-center">
        <div
          className="w-[10rem] h-[10rem] border-green-400 border-2 rounded-full overflow-hidden
        items-center pt-10 flex"
        >
          <Image alt="link" src={link} className="grayscale object-contain" />
        </div>
        <div className="text-3xl z-10 text-center mt-5">
          <p className="text-base">Hi There!</p>
          <h1 className="text-2xl font-bold">I am Emanuel Boaventura.</h1>
          <p className="text-xl text-green-400">A FullStack Developer.</p>
        </div>
      </div>
      <div className="my-auto">
        <p className="text-base">Wanna know more? Just scroll down!</p>
      </div>
    </section>
  );
};

export default Hero;
