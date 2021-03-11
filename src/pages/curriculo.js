import React from "react"
import Layout from '../components/Layout'

export default function Curriculo() {
  return (
    <div>
      <Layout>
        <div className="background">
          <div id="curriculo" className="flex align-center mt-8">
            <div className="flex flex-col items-center">
              <p className="font-bold text-turquesa text-3xl">Formação</p>
              <p className="text-center text-lg mt-4">Formado pela Faculddade de Ciências Médicas de Santos em 1998</p>
              <p className="text-center text-lg mt-4">Possui título de Especialista em Endocrinologia conferido pela Sociedade Brasileira de Endocrinologia e Metabologia (SBEM) em 2003.</p>
              <p className="text-center text-lg mt-4">Doutorado em Endocrinologia pela Faculdade de Medicina da Universidade de São Paulo (USP) em 2008.</p>
              <p className="text-center text-lg mt-4">Professor e Pesquisador da Faculdade de Ciências Médicas da Pontifícia Universidade Católica de São Paulo (PUC-SP).</p>
            </div>
          </div>


        </div>
      </Layout>
    </div>
  )
}
