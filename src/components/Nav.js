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
        <nav className="bg-turquesa h-14  opacity-90 shadow-lg
                sm:h-20">

            <ul className="flex justify-between items-center">

                <li className="mt-4 sm:mt-7">

                    <Link to="/contato">
                        <a className="p-3 bg-roxo ml-3 text-white font-semibold
                            sm:p-4 sm:px-8 sm:text-xl sm:ml-10 
                            sm:bg-opacity-90 hover:bg-opacity-100">Agendar</a>
                    </Link>

                </li>

                {/*if(Mobile)*/}
                <ul className="sm:hidden flex">

                    <button className="focus:outline-none" onClick={clickSandwich}>

                        <li id="bar">
                            <div id="bar1" className="h-1 mt-4 w-8 mr-3 bg-black"></div>
                            <div id="bar2" className="h-1 mt-1 w-8 mr-3 bg-black"></div>
                            <div id="bar3" className="h-1 mt-1 w-8 mr-3 bg-black"></div>
                        </li>

                        <li id="x" className="hidden">
                            <img src="/images/close.png" className="w-10 h-10 top-2 right-2 absolute" alt="Botao Fechar" />
                        </li>

                    </button>

                </ul>

                {/*if(> Mobile)*/}
                <ul className="hidden sm:flex space-x-5 items-center mt-6 mr-4">

                    <li className="hover:text-white text-xl duration-200 font-bold">
                        <Link to="/">
                            Home
                        </Link>
                    </li>

                    <li className=" hover:text-white text-xl duration-200 font-bold">
                        <Link to="/curriculo">
                            Currículo
                        </Link>
                    </li>

                    <li className="hover:text-white text-xl duration-200 font-bold">
                        <Link to="/sintomas">
                            Sintomas
                        </Link>
                    </li>

                    <li className="hover:text-white hover:font-black text-xl duration-200 font-bold">
                        <Link to="/contato">
                            Contato
                        </Link>
                    </li>

                </ul>

            </ul>

            <div id="menuDrop" className="hidden bg-turquesa">
                <ul className="flex flex-col items-center">
                    <li className="mt-6 border-2 border-roxo w-2/3 flex justify-center text-white focus:bg-roxo">
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className="mt-2 border-2 border-roxo w-2/3 flex justify-center text-white">
                        <Link to="/curriculo">
                            Currículo
                        </Link>
                    </li>
                    <li className="mt-2 border-2 border-roxo w-2/3 flex justify-center text-white">
                        <Link to="/sintomas">
                            Sintomas
                        </Link></li>
                    <li className="mb-4 mt-2 border-2 border-roxo w-2/3 flex justify-center text-white">
                        <Link to="/contato">
                            Contato
                        </Link>
                    </li>
                </ul>
            </div>

        </nav>
    )
}


