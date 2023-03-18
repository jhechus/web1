import React from 'react'
import { Link } from 'react-router-dom'

import FtAgua from '../images/../images/muestreoyanalis.png'
import FtAguaPotable from '../images/Aguapotable.png'
import Ftfuentefija from '../images/contaminacion.png'
import Ftalimentos from '../images/alimentos.png'

import { TiArrowForwardOutline } from "react-icons/ti";

import Footer from '../components/Footer'
import Servicios from '../components/Servicios'



function MuestreosyAnalisis() {
  return (
    <div>

      <h2 className=' text-center py-4 px-5'> Nuestros Servicios en Muestreos y Analisis </h2>

      <div className=' container'>
        <div className=' cardsA d-lg-flex d-md-flex'>


          
            <div className="card cartaA text-md-center col-lg-3 col-md-3  h-100" >
              <img className="card-img-top" src={FtAgua} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title"> Agua </h5>
                <p className="justify"><strong> El muestreo y Analisis sobre el agua. </strong> Consiste en la extracción de una representativa de agua, cada cierto tiempo y en ciertas condiciones para analizarla y determinar las características que posee.  </p>
                <Link to={'/Agua'} className="btn btncolor"> Ver mas información... <span className='flech'>< TiArrowForwardOutline /></span> </Link>
              </div>
            </div>

            <br />

            <div className="card cartaA text-md-center col-lg-3 col-md-3  h-100" >
              <img className="card-img-top" src={FtAguaPotable} alt="Card image cap" />
              <div className="card-body ">
                <h5 className="card-title"> Agua Potable</h5>
                <p className="justify"> <strong> Muestreo y Analisis sobre el agua potable. </strong> Las fuentes de agua dulce pueden contener contaminantes químicos; Incluso después del proceso de tratamiento el agua potable pueden exceder los niveles de inocuidad y legalidad. Por esta razon las instalaciones de producción bebidas deben analizar su suministro de agua con regularidad para asegurar que las concentraciones de contaminantes se mantengan en los niveles de cumplimiento establecidos </p>
                <Link to={'/Agua_Potable'} className="btn btncolor"> Ver mas información...  <span>< TiArrowForwardOutline /></span></Link>
              </div>
            </div>
          
            <br />

          <div className="card cartaA text-md-center col-lg-3 col-md-3  h-100" >
            <img className="card-img-top" src={Ftalimentos} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title"> Alimentos </h5>
              <p className="card-text justify"><strong> Los muestreos y analisis de alimentos </strong> se realizan en prevención de posibles problemas digestivos como intoxicaciones e infecciones y para la prevención de intolerancias y control nutricional de la composición alimentaria de los productos.
              <br /> 
              Se realizan por necesidad y por imperativo legal en las industrias alimentarias, así como en sectores de distribución alimentaria como hoteles, panaderías o industrias cárnicas, entre otras..  </p>
              <Link to={'/Alimentos'} className="btn btncolor"> Ver mas información...  <span>< TiArrowForwardOutline /></span></Link>
            </div>
          </div>

          <br />

          <div className="card cartaA text-md-center col-lg-3 col-md-3 h-100" >
            <img className="card-img-top" src={Ftfuentefija} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title"> Fuentes fijas </h5>
              <p className="card-text justify"><strong> Muestreo y Analisis de fuentes fijas </strong> se reañizan evaluaciones integrales en las que identificamos los contaminantes atmosféricos para definir su efecto en la calidad del aire. 
              <br />
              Para prevenir estos riesgos, la normativa ha definido límites para las emisiones de determinadas sustancias contaminantes e impone controles periódicos para verificar su cumplimiento.</p>
              <Link to={'/Fuentes_Fijas'} className="btn btncolor"> Ver mas información...  <span>< TiArrowForwardOutline /></span></Link>
            </div>
          </div>

        </div>
      </div>
      <br /> <br />


      <Servicios/>

      < Footer />

    </div>
  )
}

export default MuestreosyAnalisis

