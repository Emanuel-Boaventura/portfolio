import { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <nav className='flex gap-6 justify-end items-center px-8 py-2 text-gray-300 h-[5vh]'>
      <span className='mr-auto'>Link-sobrenome</span>
      <span>About</span>
      <span>Projects</span>
      <span>Contact</span>
      <span className='border border-gray-500 p-1 rounded-lg'>
        {darkMode ? <SunIcon className='h-6' /> : <MoonIcon className='h-6' />}
      </span>
    </nav>
  );
};

export default Navbar;
