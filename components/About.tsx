import Image from "next/image";
import link2 from "../public/link2.png";
import dompixel from "../public/dompixel.jpeg";

const About = () => {
  return (
    <div className="w-full text-gray-100">
      <section className="bg-neutral-800 container mx-auto mb-12 rounded">
        <Image alt="link2" src={link2} className="w-96 h-fit rounded-t" />
        <p className=" text-justify p-3">
          As it is already stamped up there, my name is Emanuel Boaventura, I
          have been working in the programming area since December 2022. This is
          where I started my career as a Frontend Developer. I'm currently
          working with Mobile Apps using React Native. Since I was little I grew
          up next to the computer and that's why I'm very familiar with the
          technological world. Always aware of the innovations that are to come,
          I try to learn to adapt to the market.
        </p>
      </section>
      <section className="pb-96">
        <h2 className="font-bold text-2xl text-center mb-4">
          My history on Tecnology
        </h2>
        <div className="flex gap-2 bg-neutral-800 rounded items-center p-2">
          <Image
            alt="DomPixel"
            src={dompixel}
            className="w-20 h-20 grayscale object-contain rounded-xl"
          />
          <div className="flex flex-col">
            <div className="flex flex-col ml-1">
              <h3 className="text-green-400 text-lg">DomPixel Tecnologia</h3>
              <p>10/2022 até ...</p>
              <p className="text-green-400">Dev FullStack Jr</p>
            </div>
            <div className="flex gap-2">
              <span className="bg-neutral-900 rounded-full px-2 text-blue-500">
                React Native
              </span>
              <span className="bg-neutral-900 rounded-full px-2 text-blue-500">
                NextJS
              </span>
              <span className="bg-neutral-900 rounded-full px-2 text-blue-500">
                NodeJS
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
