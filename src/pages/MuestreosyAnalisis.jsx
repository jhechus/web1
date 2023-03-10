import React from 'react'
import { Link } from 'react-router-dom'
import Muestreo from '../images/muestreo.png'
import Seguridad from '../images/seguridad.png'
import Presion from '../images/presion.png'
import Proteccion from '../images/Proteccion.png'
import Ambientalfoto from '../images/ambiental.png'
import Estudios from '../images/estudios.png'
import Civil from '../images/civil.png'

import Footer from '../components/Footer'

function MuestreosyAnalisis() {
  return (
    <div>
<section className="card text-white bg-info my-1 py-4 text-center">
        <div className="card-body">
          <h2 className="text-white m-0"> Muestreos y Analisis </h2>
        </div>
      </section>


      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x600/dee2e6/6c757d.jpg" alt="..." /></div>
            <div className="col-lg-5">
                <h6>Los servicios que se emplean para estas normas son principalmente los de monitoreo y análisis de aguas residuales. Estos servicios se encargan de realizar mediciones y análisis físico-químicos y bacteriológicos del agua residual, a fin de determinar su composición y características, y verificar que cumpla con los límites establecidos en cada norma. </h6>

                <br />

                <h6> Además, se requieren servicios de tratamiento de aguas residuales para garantizar que las descargas cumplan con los estándares de calidad establecidos en cada norma. Estos servicios pueden incluir el diseño, construcción y operación de sistemas de tratamiento de aguas residuales, así como el monitoreo continuo de la calidad del agua tratada. </h6>

                <br />

                <h6> También se requieren servicios de inspección y supervisión para asegurar el cumplimiento de las normas y la correcta operación y mantenimiento de los sistemas de tratamiento de aguas residuales. </h6>

                <br />

                <h6> En general, los servicios que se emplean para estas normas se enfocan en garantizar que las descargas de aguas residuales sean tratadas adecuadamente y no afecten negativamente el medio ambiente ni la salud pública. Esto implica una amplia gama de actividades, desde el monitoreo y análisis de las aguas residuales hasta el diseño y operación de sistemas de tratamiento y la supervisión del cumplimiento de las normas.</h6>
            </div>
        </div>
      </section>


      <section>
        <div className=' container'>
          <div className=' col-lg-12'>
            <h3 className=' text-center py-5'> Normas para el Analisis del agua </h3>
          </div>

          <div className=' col-lg-112 px-5'>
            <h5><strong> NOM-001-SEMARNAT-1996.- </strong>Descargas de aguas  residuales en aguas y bienes nacionales.</h5>
            <h5><strong> NOM-002-SEMARNAT-1996.- </strong>Descargas de aguas  residuales a los sistemas de alcantarillado urbano o  municipal. </h5>
            <h5><strong> NOM-003-SEMARNAT-1997.- </strong>Aguas residuales tratadas que se reúsen en servicios al público. </h5>
            <h5><strong> NADF-015-AGUA-2009.- </strong>Descargas de aguas residuales al  sistema de drenaje y alcantarillado del Distrito Federal,  provenientes de las fuentes fijas. </h5>
            <h5><strong> Sombra de Arteaga. </strong></h5>
          </div>

        </div>
      </section>

      <section className=' text-center'>
        <div className=' container'>
                <div className=' row'>
                    <div className=' col-md-12 text-center my-4'>
                        <h2> Nuestros Otros Servicios </h2>
                    </div>
                    
                    <div className='d-md-flex justify-content-center'>
                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Muestreos_Analisis'} className=' text-decoration-none col-xl-12 px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Muestreo} alt="Muestreo" />
                                <h3 className=' text-center'> Muestreos y Analisis </h3>
                            </Link>
                        </div>


                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Seguridad_Salud'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Seguridad} alt="Seguridad y Salud" />
                                <h3 className=' text-center px-5'> Seguridad y Salud en el trabajo </h3>
                            </Link>
                        </div>

                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Recipientes_a_Presion'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Presion} alt="Presion" />
                                <h3 className=' text-center px-5'>Recipientes sujetos a presion </h3>
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
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Ambientalfoto} alt="Ambiental" />
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

export default MuestreosyAnalisis

