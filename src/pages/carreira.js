import React from "react"
import Layout from '../components/Layout'

export default function Carreira() {
  return (
    <div>
      <Layout>
        <div className="mt-36  ">

          <p className="font-black text-center text-10 text-roxo text-5xl ">Carreira</p>

          <div className="mt-10 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 mx-10">

            <div className="flex flex-col items-center bg-white rounded-xl shadow-xl transform duration-200  hover:-translate-y-2 border-transparent border-2 hover:border-roxo">

              <img className="sm:absolute mt-5  left-3 top-3 w-14 h-14 md:w-28 md:h-28 rounded-full" src="/images/logo-santos.jpg" alt="logo universidade de santos" />

              <p className="mt-5 text-roxo font-black text-center text-3xl sm:text-6xl ">1998</p>
              <p className="break-words text-sm lg:text-lg row-start-1 row-end-2 2xl:text-2xl font-semibold mt-5 mx-10 sm:text-center p-5 text-gray-700 2xl:py-20  ">Formado pela Faculdade de Ciências Médicas de Santos</p>

            </div>

            <div className="flex flex-col items-center bg-white rounded-xl shadow-xl transform duration-200 border-transparent border-2 hover:border-roxo hover:-translate-y-2">

              <img className="sm:absolute mt-5 left-3 top-3 w-12 h-12 md:w-24 md:h-24 " src="/images/SBEM.png" alt="Logo SBEM" />

              <p className="mt-5 text-roxo font-black text-center text-3xl sm:text-6xl ">2003</p>
              <p className="break-words text-sm lg:text-lg row-start-1 row-end-2 2xl:text-2xl font-semibold mt-5 mx-10 sm:text-center p-5 text-gray-700 2xl:py-20  ">Título de Especialista em Endocrinologia conferido pela Sociedade Brasileira de Endocrinologia e Metabologia (SBEM)</p>

            </div>

            <div className="flex flex-col items-center bg-white rounded-xl shadow-xl transform duration-200 border-transparent border-2 hover:border-roxo hover:-translate-y-2">

              <img className="sm:absolute mt-5  left-3 top-3 w-14 h-14 md:w-28 md:h-28 rounded-full" src="/images/medusp.png" alt="Logo USP Medicina" />

              <p className="mt-5 text-roxo font-black text-center text-3xl sm:text-6xl ">2008</p>
              <p className="break-words text-sm lg:text-lg row-start-1 row-end-2 2xl:text-2xl font-semibold mt-5 mx-10 sm:text-center p-5 text-gray-700 2xl:py-20  ">Doutorado em Endocrinologia pela Faculdade de Medicina da Universidade de São Paulo (USP)</p>

            </div>

            <div className="flex flex-col items-center sm:block bg-white rounded-xl shadow-xl transform duration-200 hover:-translate-y-2 border-transparent border-2 hover:border-roxo">

              <img className="sm:absolute mt-5  left-3 top-3 w-14 h-14 md:w-28 md:h-28 " src="/images/pucsp.jpg" alt="Logo PUCSP" />
              <p className="mt-5 text-roxo font-black text-center text-3xl sm:text-6xl">Atualmente</p>
              <p className="break-words text-sm lg:text-lg row-start-1 row-end-2 2xl:text-2xl font-semibold mt-5 mx-10 sm:text-center p-5 text-gray-700 2xl:py-20 ">Professor e Pesquisador da Faculdade de Ciências Médicas da Pontifícia Universidade Católica de São Paulo (PUC-SP)</p>

            </div>
          </div>



        </div>
      </Layout>
    </div>

  )
}
