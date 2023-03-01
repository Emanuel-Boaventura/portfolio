import Image from "next/image";
import link2 from "../public/link2.png";

const About = () => {
  return (
    <div className="w-full bg-neutral-800">
      <section className="h-page container mx-auto">
        <Image alt="link2" src={link2} className="w-96 h-fit " />
        <p className="text-gray-100 text-justify p-3">
          As it is already stamped up there, my name is Emanuel Boaventura, I
          have been working in the programming area since December 2022. This is
          where I started my career as a Frontend Developer. I'm currently
          working with Mobile Apps using React Native. Since I was little I grew
          up next to the computer and that's why I'm very familiar with the
          technological world. Always aware of the innovations that are to come,
          I try to learn to adapt to the market.
        </p>
      </section>
    </div>
  );
};

export default About;
