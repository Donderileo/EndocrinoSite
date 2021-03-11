import React from "react"
import Layout from '../components/Layout'

export default function Sintomas() {
  return (
    <div>
      <Layout>
        <div className="mt-28">

          <p className="font-bold text-center text-turquesa text-5xl ">Sintomas</p>

          <div className="mt-10 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6 mx-5">

            <div className="bg-white rounded-xl shadow-xl transform duration-200 hover:-translate-y-2 border-transparent border-2 hover:border-turquesa">

              <p className="break-words text-sm lg:text-lg row-start-1 row-end-2 2xl:text-2xl mt-5 mx-10 sm:text-center  p-5 "> Sempre que houver algum problema relacionado ao metabolismo do seu corpo, ganho ou perda de peso rápidos e sem causa aparente, problemas de crescimento ou quando houver diagnóstico de doenças como diabetes e alterações nos níveis de colesterol ou triglicérides.</p>

            </div>

            <div className="bg-white rounded-xl shadow-xl transform duration-200 hover:-translate-y-2 border-transparent border-2 hover:border-turquesa">

              <p className="break-words text-sm lg:text-lg 2xl:text-2xl mt-5 mx-10 sm:text-center  p-5 "> Pessoas que desejam perder peso têm no endocrinologista um aliado importante, uma vez que ele é o profissional que verificará, por meio de exames clínicos e laboratoriais, se todas as glândulas estão funcionando de maneira saudável e se o ganho de peso não está sendo influenciado por alguma alteração hormonal. </p>

            </div>



            <div className="bg-white rounded-xl shadow-xl transform duration-200 hover:-translate-y-2 border-transparent border-2 hover:border-turquesa">

              <p className="break-words text-sm lg:text-lg 2xl:text-2xl mt-5 mx-10 sm:text-center  p-5 ">O endocrinologista pode, inclusive, prescrever medicamentos como reguladores de apetite e fazer o acompanhamento e a orientação para o uso correto deste tipo de medicamento.</p>

            </div>

            <div className="bg-white rounded-xl shadow-xl transform duration-200 hover:-translate-y-2 border-transparent border-2 hover:border-turquesa">

              <p className="break-words text-sm lg:text-lg 2xl:text-2xl mt-5 mx-10 sm:text-center  p-5  col-span-2">Crianças com crescimento deficiente ou excessivo e adultos com alterações repentinas no crescimento de pelos, por exemplo, também podem procurar o endocrinologista para investigação das causas de seus sintomas. </p>

            </div>


          </div>
        </div>
      </Layout>
    </div >
  )
}
