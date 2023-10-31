import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (

    <footer className="bg-black shadow dark:bg-black">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 sm:mb-0">
            <img src="https://play-lh.googleusercontent.com/L1w4leiEGjZS-CAV7zJV1Vfn8xDAO-V_UC2CZzBC2vUt722KYw7i8KqPJKyhWpvbZw" className="h-8 mr-3 rounded-full" alt="Flowbite Logo" />
            <span className="text-white self-center text-4xl font-semibold whitespace-nowrap dark:text-white">FoodGo</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li className="flex items-center">
              <img src="https://cdn.icon-icons.com/icons2/555/PNG/512/instagram_icon-icons.com_53610.png" alt="Red Social" className="h-7 mr-1" />
              <Link href="/contact" className="text-2xl hover:underline md:mr-6 text-white">Instagram</Link>
            </li>
            <li className="flex items-center">
              <img src="https://cdn.icon-icons.com/icons2/555/PNG/512/facebook_icon-icons.com_53612.png" alt="Red Social" className="h-7 mr-1" />
              <Link href="/contact" className="text-2xl hover:underline md:mr-6 text-white">Facebook</Link>
            </li>
            <li className="flex items-center">
              <img src="https://cdn.icon-icons.com/icons2/555/PNG/512/whatsapp_icon-icons.com_53606.png" alt="Red Social" className="h-7 mr-1" />
              <Link href="/contact" className="text-2xl hover:underline md:mr-6 text-white">WhatsApp</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-white textFooter">2023 <Link href="/" className="hover:underline textFooter" target='_blank'>FoodGo.</Link> Programación</span>
      </div>
    </footer>



  );
};

export default Footer;