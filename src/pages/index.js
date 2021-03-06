import React from "react"
import Layout from '../components/Layout'
import '/dist/background.css'
import '/dist/anime.css'

import { Link } from 'gatsby'

export default function Home() {


  return (
    <div>
      <Layout>

        <div className="background grid auto-cols-max justify-center sm:grid-cols-2 lg:grid-cols-3">


          <div className="hidden sm:flex flex-col justify-center bg-white m-10 rounded-3xl h-5/6 shadow-2xl lg:mt-36 
              col-start-2 row-start-2 
              sm:col-span-2 md:col-span-1
              lg:row-start-1 lg:col-start-1  
              opacity-70 transform hover:-translate-y-4 duration-200 hover:opacity-100  border-2 border-transparent hover:border-turquesa
              animate-left">

            <p className=" absolute top-5 left-0 right-0 sm:text-xl md:text-3xl mt-5 font-black text-roxo text-center">
              Endocrinologia
            </p>



            <div className="sm:mt-20 sm:mx-10 md:text-md lg:text-lg 2xl:text-xl text-center mb-3 font-bold text-gray-900">

              <p>É a especialidade médica que cuida do funcionamento das glândulas e das doenças que as afetam. As glândulas são órgãos do corpo humano que liberam os hormônios na corrente sanguínea. Já os hormônios, por sua vez, são substâncias que regulam o funcionamento de diversas funções do nosso organismo.</p>



            </div>
          </div>


          {/*Centro Mobile-Desk*/}

          <div className="mt-36 col-span-2 sm:col-start-1 lg:col-start-2 lg:col-span-1  md:mt-20 lg:mt-22 2xl:mt-36 animate-down">

            <p className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-700 text-center">Doutor <br /> Cristiano Barcellos</p>

            <div className="mt-10 sm:mt-20 lg:mt-40">
              <p className="text-3xl sm:text-4xl 2xl:text-5xl text-center mb-3 font-bold text-roxo ">Endocrinologia</p>
              <p className="text-center sm:text-lg md:text-xl lg:text-3xl 2xl:text-3xl font-semibold text-black">&</p>
              <p className="text-3xl sm:text-4xl 2xl:text-5xl text-center mt-3 font-bold text-roxo">Metabologia</p>
            </div>

            <div className="mt-32 sm:mt-20  text-center">

              <Link to="/contato">
                <p className="p-4 md:px-6 bg-roxo text-white font-semibold opacity-90 hover:opacity-100
                    absolute bottom-5 left-0 right-0 sm:static sm:mb-10">
                  Agende sua consulta!
                </p>
              </Link>

            </div>
          </div>

          <div className="hidden sm:flex flex-col justify-center bg-white m-10 rounded-3xl h-5/6 shadow-2xl lg:mt-36 
              sm:col-span-2 md:col-span-1
              opacity-70 transform hover:-translate-y-4 duration-200 hover:opacity-100  border-2 border-transparent hover:border-turquesa 
              animate-right">

            <p className="  absolute top-5 left-0 right-0 sm:text-xl md:text-3xl  sm:mt-5 font-black text-roxo text-center">Metabologia</p>

            <div className="sm:mt-20 sm:mx-10 md:text-sm lg:text-lg 2xl:text-xl text-center mb-3 font-bold text-gray-900">

              <p>
                Uma especialidade médica relativamente nova e que consiste no estudo do metabolismo humano, ou seja, das transformações energéticas que dão vida ao ser humano, tendo em vista a alimentação como fonte de energia elementar.
                A metabologia é, portanto, responsável por estudar as moléstias do metabolismo, definido como o conjunto de mecanismos químicos que o organismo necessita para a formação, desenvolvimento e renovação de estruturas celulares, além da produção de energia exigida por manifestações internas e externas.
              </p>

            </div>

          </div>

        </div>


      </Layout >

    </div >
  )
}
