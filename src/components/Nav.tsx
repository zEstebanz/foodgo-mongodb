"use client"
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const Nav = () => {
    const { data: session } = useSession();

    const toggleMenu = () => {
        const menu = document.getElementById("navbar-default");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        } else {
            menu.style.display = "block";
        }
    };

    return (
        <nav className="bg-black border-gray-200 fixed top-0 w-full z-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center">
                    <img src="https://play-lh.googleusercontent.com/L1w4leiEGjZS-CAV7zJV1Vfn8xDAO-V_UC2CZzBC2vUt722KYw7i8KqPJKyhWpvbZw" className="h-8 mr-3 rounded-full" />
                    <span className="text-white self-center text-4xl font-semibold whitespace-nowrap dark:text-white">FoodGo</span>
                </Link>
                <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="/" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">

                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent" aria-current="page">Home</Link>
                        </li>

                        {session ? (
                            <>
                                <li>
                                    <Link href="/tienda" className="block py-2 pl-3 pr-4 text-white rounded" aria-current="page">Tienda</Link>
                                </li>
                                <li>
                                    <Link href="/registerProduct" className="buttonCustom2 block py-2 pl-3 pr-4 text-white rounded" aria-current="page">Registrar Producto</Link>
                                </li>
                                <li>
                                    <Link href="/dashboard/profile" className="buttonCustom block py-2 pl-3 pr-4 text-white rounded" aria-current="page">Perfil</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/tienda" className="block py-2 pl-3 pr-4 text-white rounded" aria-current="page">Tienda</Link>
                                </li>
                                <li>
                                    <Link href="/register" className="block py-2 pl-3 pr-4 text-white rounded md:bg-transparent" aria-current="page">Register</Link>
                                </li>
                                <li>
                                    <Link href="/login" className="buttonCustom block py-2 pl-3 pr-4 text-white rounded" aria-current="page">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Nav;
