import React from 'react'

import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import presion from '../images/recipiente.png'

function Recipiente() {
  return (
    <div>
      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
            <div className="col-lg-6"><img className="img-fluid rounded mb-4 mb-lg-0" src={presion} alt="..." /></div>

            <div className="col-lg-6">
              <p className=' fs-6'>

              En <span className='Laa'> Laboratorio Analitico Ambiental, S.A DE C.V. </span> contamos con la experiencia para asistir sus requerimientos de seguridad para el cumplimiento normativo en cualquier fase en el ciclo de vida de su equipo, desde el diseño hasta las inspecciones en servicio y mantenimiento. 
              <br /> <br />
              La inspección y verificación de Recipientes Sujetos a Presión implica una serie de pruebas realizadas a recipientes sujetos a presión para encontrar puntos críticos de fuga que pudieran potencialmente conducir a reacciones peligrosas y no controlables.
                
              </p>

                    <br />  <br />
                <h3 className=' text-danger'> Cumplimiento al 100% de la 'NOM-020-STPS-2011' </h3>
                <ul>
                  <li className=' fs-4'> Recipientes sujetos a presion </li>
                  <li className=' fs-4'> Generadores de vapor (Calderas) </li>
                  <li className=' fs-4'> Recipientes criogénicos </li>
                  <li className=' fs-4'> Condiciones de seguridad </li>
                </ul>
                <br /> 

                <h1 className="font-weight-light text-center pb-2"> Principales Servicios </h1>

                <div className=' container'> 
                  <div className=' row'>
                    <div className='col-md-6 col-lg-6 '>
                      <ul>
                        <li className=' fs-5'> Ingreso ante STPS. </li>
                        <li className=' fs-5'> Dictamen Unidad de Verificación. </li>
                        <li className=' fs-5'> Capacitación con Constancia DC3. </li>
                        <li className=' fs-5'> Pruebas no destructivas. </li>
                      </ul>
                    </div>

                    <div className='col-md-6 col-lg-6 '>
                      <ul>
                        <li className=' fs-5'> Ingreso ante STPS. </li>
                        <li className=' fs-5'> Dictamen Unidad de Verificación. </li>
                        <li className=' fs-5'> Capacitación con Constancia DC3. </li>
                        <li className=' fs-5'> Pruebas no destructivas. </li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>

        <Servicios/>

      <Footer/>

    </div>
  )
}

export default Recipiente

