import React from "react"
import Layout from '../components/Layout'
import '/dist/background.css'
import { Link } from 'gatsby'

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="background grid auto-cols-max justify-center sm:grid-cols-2 lg:grid-cols-3 ">


          <div className="hidden sm:block bg-white m-10 rounded-3xl h-5/6 shadow-2xl 
              col-start-2 row-start-2 
              sm:col-span-2 md:col-span-1
              lg:row-start-1 lg:col-start-1  
              opacity-70 transform hover:-translate-y-4 duration-200 hover:opacity-100">

            <p className="sm:text-xl md:text-3xl mt-5 font-black text-roxo text-center">
              Endocrinologia
            </p>

            <div className="sm:mt-7 sm:mx-10 md:text-md lg:text-lg 2xl:text-xl text-center mb-3 font-bold text-gray-700">

              <p>É a especialidade médica que cuida do funcionamento das glândulas e das doenças que as afetam. As glândulas são órgãos do corpo humano que liberam os hormônios na corrente sanguínea. Já os hormônios, por sua vez, são substâncias que regulam o funcionamento de diversas funções do nosso organismo.</p>

            </div>

          </div>


          {/*Centro Mobile-Desk*/}
          <div className="mt-16 col-span-2 sm:col-start-1 lg:col-start-2 lg:col-span-1  md:mt-20">

            <p className="text-3xl sm:text-5xl 2xl:text-7xl font-black text-gray-700 text-center">Doutor <br /> Cristiano Barcellos</p>

            <div className="mt-10 sm:mt-40">
              <p className="text-3xl sm:text-4xl 2xl:text-5xl text-center mb-3 font-bold text-roxo -ml-16">Endocrinologia</p>
              <p className="text-center sm:text-lg md:text-xl lg:text-3xl 2xl:text-3xl text-red-500">&</p>
              <p className="text-3xl sm:text-4xl 2xl:text-5xl text-center mt-3 font-bold text-turquesa ml-16">Metabologia</p>
            </div>

            <div className="mt-32 sm:mt-20  text-center">

              <Link to="/contato">
                <p className="p-4 md:px-6 bg-roxo text-white font-semibold opacity-90 hover:opacity-100">Agende sua consulta!</p>
              </Link>

            </div>
          </div>


          <div className="hidden sm:block bg-white m-10 rounded-3xl h-5/6 shadow-2xl 
              sm:col-span-2 md:col-span-1
              opacity-70 transform hover:-translate-y-4 duration-200 hover:opacity-100">

            <p className="sm:text-xl md:text-3xl  sm:mt-5 font-black text-turquesa text-center">Metabologia</p>

            <div className="sm:mt-7 sm:mx-10 md:text-sm lg:text-md 2xl:text-xl text-center mb-3 font-bold text-gray-700">

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
