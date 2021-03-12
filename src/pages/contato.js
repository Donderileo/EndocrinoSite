import React from "react"
import Layout from '../components/Layout'

export default function Contato() {
  return (
    <div>
      <Layout>
        <div className="background">
          <div className="mt-36 ">

            <p className="font-bold text-center text-roxo text-5xl ">Agende sua consulta conosco!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 mt-5 2xl:grid-cols-4 2xl:mt-20">

              <div className="2xl:col-start-2 flex flex-col justify-center items-center text-center">
                <p className=" text-2xl font-black text-gray-700">
                  Venha conhecer nosso consultório!
                  </p>
                <p className=" mx-5 mt-5 text-xl text-gray-900">Localizado na Rua Guaipá, 51 Conjunto 303</p>
                <p className="text-lg text-gray-900">São Paulo-SP</p>

                <p className="mx-5 mt-5 text-xl text-wrap text-gray-900 ">Contamos com uma excelente estrutura física e profissionais preparados para sanar suas dúvidas, venha fazer uma consulta conosco.</p>
                <p className=" mt-10 text-center text-2xl font-semibold text-gray-700">Marque sua consulta pelo  WhatsApp</p>
                <p className="text-xl font-extralight text-gray-500">ou se preferir, agende pelo telefone</p>
                <p className="mt-5 text-4xl font-bold text-green-600">(11) 99140-7988</p>

              </div>




              <div className="flex flex-col mr-12">

                <a href="https://www.google.com/maps/place/R.+Guaip%C3%A1,+51+-+cj+303+-+Vila+Leopoldina,+S%C3%A3o+Paulo+-+SP,+05089-001/@-23.5217751,-46.7251195,17z/data=!4m5!3m4!1s0x94cef8934dd27eb3:0x6419ffd277ab6de6!8m2!3d-23.52178!4d-46.7229308" target="_blank">

                  <img src="/images/mapa.png" alt="mapa consultório" className="w-96 h-96 ml-5 sm:ml-0 mt-10 border-4 border-roxo cursor-pointer hover:shadow-2xl transform hover:translate-y-2 duration-200" />

                </a>
              </div>
            </div>
            <div className="flex justify-center mt-20 mx-10 sm:mx-0 ">

              <img src="images/logo_comp.png" alt="Doutor Cristiano Barcelos" className=" bottom-5 left-0 right-0 sm:static mb-10" />

            </div>

          </div>

        </div>
      </Layout>
    </div >
  )
}
