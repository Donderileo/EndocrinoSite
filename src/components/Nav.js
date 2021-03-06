import React from 'react'
import { Link } from 'gatsby'
import '../styles/button.css'

export default function Nav() {


    function clickSandwich() {
        document.getElementById("bar").classList.toggle("hidden")
        document.getElementById("x").classList.toggle("hidden")
        document.getElementById("menuDrop").classList.toggle("hidden")
    }


    return (
        <nav className="bg-gray-50 shadow-lg
                sm:h-24 fixed left-0 top-0 right-0 z-40">

            <ul className="flex justify-between items-center">

                <li className="mt-4 sm:mt-7">

                    <Link to="/">
                        <div className="hidden sm:block">
                            <img src="images/logo_comp.png" alt="Doutor Cristiano Barcelos" className="ml-10 -mt-5" />
                        </div>
                        <div className="sm:hidden">
                            <img src="/images/logo.png" alt="Doutor Cristiano Barcelos" className="ml-10 h-14 mb-2" />
                        </div>
                    </Link>


                </li>

                {/*if(Mobile)*/}
                <li className="lg:hidden flex">

                    <button className="focus:outline-none" aria-label="Button pages menu" onClick={clickSandwich}>

                        <div id="bar" className="absolute top-2 right-8 md:top-6">
                            <div id="bar1" className="h-1 mt-4 w-8  bg-black"></div>
                            <div id="bar2" className="h-1 mt-1 w-8  bg-black"></div>
                            <div id="bar3" className="h-1 mt-1 w-8  bg-black"></div>
                        </div>

                        <div id="x" className="hidden">
                            <img src="/images/close.png" className="w-10 h-10 top-4 md:top-6 right-8 absolute" alt="Botao Fechar" />
                        </div>

                    </button>

                </li>

                {/*if(> Mobile)*/}
                <li className="hidden lg:flex space-x-5 items-center mr-4">

                    <div className="hover:text-turquesa text-xl duration-200 font-bold">
                        <Link to="/">
                            Home
                        </Link>
                    </div>

                    <div className=" hover:text-turquesa text-xl duration-200 font-bold">
                        <Link to="/carreira">
                            Carreira
                        </Link>
                    </div>

                    <div className="hover:text-turquesa text-xl duration-200 font-bold">
                        <Link to="/sintomas">
                            Sintomas
                        </Link>
                    </div>

                    <div className="hover:text-turquesa hover:font-black text-xl duration-200 font-bold">
                        <Link to="/contato">
                            Contato
                        </Link>
                    </div>

                </li>

            </ul>

            {/*Menu sandwich*/}
            <div id="menuDrop" className="hidden bg-gray-50 ">
                <ul className="flex flex-col items-center">
                    <li className="mt-6 border-2 py-2 border-roxo w-2/3 flex justify-center text-gray-700 font-bold">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="mt-2 border-2 py-2 border-roxo w-2/3 flex justify-center text-gray-700 font-bold">
                        <Link to="/carreira">
                            Carreira
                        </Link>
                    </li>
                    <li className="mt-2 border-2 py-2 border-roxo w-2/3 flex justify-center text-gray-700 font-bold">
                        <Link to="/sintomas">
                            Sintomas
                        </Link></li>
                    <li className="mb-4 mt-2 border-2 py-2 border-roxo w-2/3 flex justify-center text-gray-700 font-bold    ">
                        <Link to="/contato">
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}


