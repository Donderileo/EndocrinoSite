import React from 'react'
import Nav from './Nav'
import { Helmet } from "react-helmet"



export default function Layout(props) {
    return (

        <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Dr. Cristiano Barcellos</title>
                <meta name="Description" content="Site institucional do Doutor Cristiano Barcellos, Endocrinologista com ênfase em Metabologia" />
            </Helmet>

            < Nav />
            {props.children}
        </div >

    )
}