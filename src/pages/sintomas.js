import React from "react"
import Layout from '../components/Layout'

export default function Sintomas() {
  return (
    <div>
      <Layout>
        <div className="background ">
          <div id="curriculo" className="flex align-center mt-8">
            <div className="grid grid-cols-3 items-center">
              <p className="font-bold col-span-3 text-turquesa text-3xl">Sintomas</p>
              <p class="mt-3 text-sm text-center text-gray-900"> Sempre que houver algum problema relacionado ao metabolismo do seu corpo, ganho ou perda de peso rápidos e sem causa aparente, problemas de crescimento ou quando houver diagnóstico de doenças como diabetes e alterações nos níveis de colesterol ou triglicérides.</p>

              <p class="mt-3 text-sm text-center text-gray-900"> Pessoas que desejam perder peso têm no endocrinologista um aliado importante, uma vez que ele é o profissional que verificará, por meio de exames clínicos e laboratoriais, se todas as glândulas estão funcionando de maneira saudável e se o ganho de peso não está sendo influenciado por alguma alteração hormonal. </p>

              <p class="mt-3 text-sm text-center text-gray-900"> Enquanto o nutricionista irá garantir que o paciente siga uma dieta que forneça os nutrientes adequados para o seu estado clínico, idade, sexo, dentre outras condições, o endocrinologista pode diagnosticar e prescrever um tratamento que o leve a ter um metabolismo equilibrado. </p>

              <p class="mt-3 text-sm text-center text-gray-900">O endocrinologista pode, inclusive, prescrever medicamentos como reguladores de apetite e fazer o acompanhamento e a orientação para o uso correto deste tipo de medicamento. </p>

              <p class="mt-3 text-sm text-center text-gray-900">Crianças com crescimento deficiente ou excessivo e adultos com alterações repentinas no crescimento de pelos, por exemplo, também podem procurar o endocrinologista para investigação das causas de seus sintomas. </p>

            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}
