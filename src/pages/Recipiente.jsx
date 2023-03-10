import React from 'react'
import { Link } from 'react-router-dom'
import Muestreo from '../images/muestreo.png'
import Seguridad from '../images/seguridad.png'
import Presion from '../images/presion.png'
import Proteccion from '../images/Proteccion.png'
import Ambiental from '../images/ambiental.png'
import Estudios from '../images/estudios.png'
import Civil from '../images/civil.png'

import Footer from '../components/Footer'

function Recipiente() {
  return (
    <div>
      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
            <div className="col-lg-6"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x600/dee2e6/6c757d.jpg" alt="..." /></div>

            <div className="col-lg-6">
                <h6><strong>Laboratorio Analitico Ambiental, S.A de C.V. </strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolorum sequi vitae minima illo ex, est error adipisci saepe earum, consequatur sed mollitia eaque, cupiditate praesentium nobis vero similique excepturi! </h6>

                    <br />
                <h3 className=' text-danger'> Cumplimiento al 100% de la 'NOM-020-STPS-2011' </h3>
                <ul>
                  <li className=' fs-4'> Recipientes sujetos a presion </li>
                  <li className=' fs-4'> Generadores de vapor (Calderas) </li>
                  <li className=' fs-4'> Recipientes criogénicos </li>
                  <li className=' fs-4'> Condiciones de seguridad </li>
                </ul>
                <br /> 

                <h1 className="font-weight-light text-center pb-2"> Principales Servicios </h1>

                
                  <div className='col-md-12 '>
                    <ul>
                      <li className=' fs-5'> Ingreso ante STPS. </li>
                      <li className=' fs-5'> Dictamen Unidad de Verificación. </li>
                      <li className=' fs-5'> Capacitación con Constancia DC3. </li>
                      <li className=' fs-5'> Pruebas no destructivas. </li>
                    </ul>
                  </div>

                  <div className='col-md-12 '>
                    <ul>
                      <li className=' fs-5'> Ingreso ante STPS. </li>
                      <li className=' fs-5'> Dictamen Unidad de Verificación. </li>
                      <li className=' fs-5'> Capacitación con Constancia DC3. </li>
                      <li className=' fs-5'> Pruebas no destructivas. </li>
                    </ul>
                  </div>
            </div>
        </div>
      </section>


      <section>
            <div className=' container'>
                <div className=' row'>
                    <div className=' col-md-12 text-center my-4 ourservice'>
                        <h2> Nuestros Servicios </h2>
                    </div>
                    
                    <div className='d-md-flex justify-content-center'>
                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Muestreos_Analisis'} className=' text-decoration-none col-xl-12 px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Muestreo} alt="Muestreo" />
                                <h3 className=' text-center '> Muestreos y Analisis </h3>
                            </Link>
                        </div>


                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Seguridad_Salud'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Seguridad} alt="Seguridad y Salud" />
                                <h3 className=' text-center  px-5'> Seguridad y Salud en el trabajo </h3>
                            </Link>
                        </div>

                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Recipientes_a_Presion'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Presion} alt="Presion" />
                                <h3 className=' text-center  px-5'>Recipientes sujetos a presion </h3>
                            </Link>
                        </div>


                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/ProteccionCivil'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Civil} alt="Proteccion civil" />
                                <h3 className=' text-center'> Proteccion civil </h3>
                            </Link>
                        </div>
                    </div>


                    <div className='d-md-flex justify-content-center'>
                        <div className=' col-xl-4 col-md-4 servicios'>
                            <Link to={'/Ambiental'} className=' text-decoration-none col-xl-12 px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Ambiental} alt="Ambiental" />
                                <h3 className=' text-center'> Ambiental </h3>
                            </Link>
                        </div>


                        <div className=' col-xl-4 col-md-4 servicios'>
                            <Link to={'/proyectosyAmbiental'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Estudios} alt="Estudios y Proyectos" />
                                <h3 className=' text-center px-2'> Estudios y Proyectos Ambientales </h3>
                            </Link>
                        </div>

                        <div className=' col-xl-4 col-md-4 servicios'>
                            <Link to={'/ServicioMedico'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Proteccion} alt="Presion" />
                                <h3 className=' text-center px-5'> Servicio medico </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      </section>

      <Footer/>

    </div>
  )
}

export default Recipiente

