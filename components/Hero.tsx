import Image from 'next/image';
import link from '../public/link.png';

const Hero = () => {
  return (
    <section className='flex container mx-auto relative pt-[5vh] h-screen'>
      <div className='text-3xl text-gray-200 z-10 my-auto'>
        <p>Hi There!</p>
        <h1 className='text-6xl font-bold'>I am Link, not Zelda.</h1>
        <p>A Swordsman Warrior.</p>
      </div>
      <Image
        alt='link'
        src={link}
        className='z-1 absolute right-0 h-page w-auto min-w-fit grayscale'
      />
    </section>
  );
};

export default Hero;
