import React from 'react'
import { Link } from 'react-router-dom'

import FtAgua from '../images/../images/muestreoyanalis.png'
import FtAguaPotable from '../images/Aguapotable.png'
import Ftfuentefija from '../images/contaminacion.png'
import Ftalimentos from '../images/alimentos.png'

import Footer from '../components/Footer'
import Servicios from '../components/Servicios'



function MuestreosyAnalisis() {
  return (
    <div>

      <h2 className=' text-center py-4 px-5'> Nuestros Servicios en Muestreos y Analisis </h2>

      <div className=' container'>
        <div className=' cardsA d-lg-flex d-md-flex'>


          
            <div class="card cartaA text-center col-lg-3 col-md-3" >
              <img class="card-img-top" src={FtAgua} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> Agua </h5>
                <p class="card-text justify"><strong> El muestreo y Analisis sobre el agua. </strong> Consiste en la extracción de una representativa de agua, cada cierto tiempo y en ciertas condiciones para analizarla y determinar las características que posee.  </p>
                <Link to={'/Agua'} class="btn btn-primary"> Ver mas... </Link>
              </div>
            </div>

            <br />

            <div class="card cartaA text-center col-lg-3 col-md-3" >
              <img class="card-img-top" src={FtAguaPotable} alt="Card image cap" />
              <div class="card-body ">
                <h5 class="card-title"> Agua Potable</h5>
                <p class="card-text"> <strong> Muestreo y Analisis sobre el agua potable. </strong> Las fuentes de agua dulce pueden contener contaminantes químicos; Incluso después del proceso de tratamiento el agua potable pueden exceder los niveles de inocuidad y legalidad. Los municipios,por esta razon las instalaciones de producción bebidas deben analizar su suministro de agua con regularidad para asegurar que las concentraciones de contaminantes se mantengam en los niveles de cumplimiento establecidos </p>
                <Link to={'/Agua_Potable'} class="btn btn-primary"> Ver mas... </Link>
              </div>
            </div>
          
            <br />

          <div class="card cartaA text-center col-lg-3 col-md-3" >
            <img class="card-img-top" src={Ftalimentos} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title"> Alimentos </h5>
              <p class="card-text"> Muestreo y Analisis sobre alimentos.  </p>
              <Link to={'/Alimentos'} class="btn btn-primary"> Ver mas... </Link>
            </div>
          </div>

          <br />

          <div class="card cartaA text-center col-lg-3 col-md-3" >
            <img class="card-img-top" src={Ftfuentefija} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title"> Fuentes fijas </h5>
              <p class="card-text"> Muestreo y Analisis de fuentes fijas.  </p>
              <Link to={'/Fuentes_Fijas'} class="btn btn-primary"> Ver mas... </Link>
            </div>
          </div>

        </div>
      </div>
      <br /> <br />
      < Footer />

    </div>
  )
}

export default MuestreosyAnalisis

