import React from "react"
import Layout from '../components/Layout'

export default function Sintomas() {
  return (
    <div>
      <Layout>
        <div className="mt-36">

          <p className="font-bold text-center text-turquesa text-5xl ">Sintomas</p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:mx-20 text-xl text-center">


            <div className="text-left shadow-xl p-10 rounded-xl flex flex-col justify-center 
            transform hover:-translate-y-2 hover:shadow-2xl hover:border-turquesa border-4  border-transparent duration-200 ">
              <p className="font-bold text-xl md:text-2xl text-turquesa">Obesidade</p>
              <p className="mt-4 text-sm sm:text-lg">Em sua maioria, os casos de obesidade são causados pela má alimentação ou falta de exercícios físicos. Acontece que algumas pessoas podem estar com distúrbios hormonais e, então, acabam por não conseguir perder peso. Neste caso, o médico Endocrinologista fará as investigações necessárias para descobrir porque seu organismo não está “funcionando corretamente”.</p>
            </div>

            <div className="text-left shadow-xl p-10 rounded-xl  flex flex-col justify-center 
            transform hover:-translate-y-2 hover:shadow-2xl hover:border-turquesa border-4  border-transparent duration-200 ">

              <p className="font-bold text-xl md:text-2xl text-turquesa">Diabetes</p>
              <p className="mt-4 text-sm sm:text-lg">A insulina é o hormônio produzido pelo pâncreas e que controla a nossa glicemia. Qualquer alteração na produção da insulina provoca o excesso de açúcar no sangue, podendo caracterizar, assim, a diabetes. Se existe histórico familiar, ou se você observar que está com muita sede, vontade de fazer xixi ou perda de peso aparente e sem motivo, é hora de procurar o Endocrinologista.</p>
            </div>

            <div className="text-left shadow-xl p-10 rounded-xl  flex flex-col justify-center 
            transform hover:-translate-y-2 hover:shadow-2xl hover:border-turquesa border-4  border-transparent duration-200 ">

              <p className="font-bold text-xl md:text-2xl text-turquesa">Distúrbios da menstruação</p>
              <p className="mt-4 text-sm sm:text-lg">Alterações no ciclo menstrual acontecem com boa parte da população feminina. Se você não passou por alguma, com certeza conhece alguém que já. Elas são caracterizadas por ciclos muito longos, períodos muito curtos e até menstruação desregulada. Todas essas alterações podem ser indicadores de problemas nos hormônios da mulher.</p>
            </div>

            <div className="text-left shadow-xl p-10 rounded-xl  flex flex-col justify-center 
            transform hover:-translate-y-2 hover:shadow-2xl hover:border-turquesa border-4  border-transparent duration-200 ">

              <p className="font-bold text-xl md:text-2xl text-turquesa">Disfunções tireoidianas</p>
              <p className="mt-4 text-sm sm:text-lg">Um dos maiores motivos da procura por um Endocrinologista são as disfunções tireoidianas – hipertireoidismo e hipotireoidismo. Funciona assim: a tireoide é uma glândula que deve funcionar em equilíbrio com o cérebro. Este, produz um hormônio chamado TSH que estimula a tireoide a fabricar outros dois hormônios chamados T3 (triiodotironina) e T4 (tiroxina), que desempenham a função de estimular o metabolismo. O hipotireoidismo ou hipertireoidismo se caracteriza, então, quando a tireoide funciona mais lenta ou mais rápida que o normal.</p>
            </div>
          </div>

        </div>


      </Layout>
    </div >
  )
}
