import React from 'react'
import { Link } from 'react-router-dom'

import FtAgua from '../images/../images/muestreoyanalis.png'

import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import fotoMyA from '../images/muestreoyanalis.png'

function MuestreosyAnalisis() {
  return (
    <div>
      <div className=' cardsA d-flex '>
        <div class="card cartaA text-center " >
          <img class="card-img-top" src={FtAgua} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title"> Agua </h5>
            <p class="card-text"> Muestreo y Analisis sobre el agua.  </p>
            <Link to={'/Agua'} class="btn btn-primary"> Ver mas... </Link>
          </div>
        </div>

        <div class="card cartaA text-center " >
          <img class="card-img-top" src={FtAgua} alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title"> Agua Potable</h5>
            <p class="card-text"> Muestreo y Analisis sobre el agua potable.  </p>
            <Link to={'/Agua'} class="btn btn-primary"> Ver mas... </Link>
          </div>
        </div>
      </div>



      <div>
        
        <Link to={'/Agua_Potable'} className='px-5 my-5 fs-1 fw-bold'> Agua Potable </Link>
        <Link to={'/Alimentos'} className='px-5 my-5 fs-1 fw-bold'> Alimentos </Link>
        <Link to={'/Fuentes_Fijas'} className='px-5 my-5 fs-1 fw-bold'> Fuentes Fijas </Link>
      </div>

    </div>
  )
}

export default MuestreosyAnalisis

