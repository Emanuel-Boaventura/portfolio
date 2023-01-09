import Image from 'next/image';
import link2 from '../public/link2.png';

const About = () => {
  return (
    <div className='w-full bg-neutral-800'>
      <section className='h-page container mx-auto'>
        <Image alt='link2' src={link2} className='w-96 h-fit' />
        <span>images</span>
      </section>
    </div>
  );
};

export default About;
