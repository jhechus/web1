import React from 'react'
import { Link } from 'react-router-dom'
import Muestreo from '../images/muestreo.png'
import Seguridad from '../images/seguridad.png'
import Presion from '../images/presion.png'
import Proteccion from '../images/Proteccion.png'
import Ambientalfoto from '../images/ambiental.png'
import Estudios from '../images/estudios.png'
import Civil from '../images/civil.png'

function Ambiental() {
  return (
    <div>
      <section className="card text-white bg-success my-1 py-4 text-center">
        <div className="card-body">
          <h2 className="text-white m-0"> AMBIENTAL </h2>
        </div>
      </section>


      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5">
            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x600/dee2e6/6c757d.jpg" alt="..." /></div>
            <div className="col-lg-5">
                <h6><strong>Laboratorio Analitico Ambiental, S.A de C.V. </strong> es división ambiental de GRUPO VIDESA, cuyo propósito es el de auxiliar a empresas en sus programas y políticas de Conservación del Entorno Ecológico y Medio Ambiente, mediante el Reconocimiento, la Evaluación y el Control de los contaminantes emitidos hacia el Agua, el Aire y el Suelo.</h6>
                <br /> <br />

                <h1 className="font-weight-light text-center "> Principales Servicios </h1>

                <ul className=' py-4'>
                  <li><strong className='px-1'> Agua- </strong> Toma de muestras y análisis para la evaluación de contaminantes regulados en la normatividad nacional, descargados a bienes nacionales, sistemas de alcantarillado, aguas residuales tratadas.</li>
                  <li><strong className='px-1'> Aire- </strong> Toma de muestras y análisis de partículas suspendidas, gases, compuestos orgánicos etc., emitidos por fuentes fijas de emisión. </li>
                  <li><strong className='px-1'> Ruido- </strong> Medición directa y evaluación de la emisión de ruido a la colindancia generada por fuentes estacionarias de las industrias hacia su entorno. </li>
                  <li> licencias Ambientales Federales, Municipales y de Ciudad de México. </li>
                  <li> Diagnosticos Ambientales. </li>
                  <li> Auditoria para certificacion de industria limpia. </li>
                  <li> Auditoria ambiental estatal (PROPAEM) </li>
                </ul>
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

      





    </div>
  )
}

export default Ambiental
