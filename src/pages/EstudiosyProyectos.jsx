import { Link } from 'react-router-dom'
import Muestreo from '../images/muestreo.png'
import Seguridad from '../images/seguridad.png'
import Presion from '../images/presion.png'
import Proteccion from '../images/Proteccion.png'
import Ambiental from '../images/ambiental.png'
import Estudios from '../images/estudios.png'
import Civil from '../images/civil.png'

function EstudiosyProyectos() {
  return (
    <div>
       <section className="card text-white bg-success my-1 py-4 text-center">
        <div className="card-body">
          <h2 className="text-white m-0"> Estudios y proyectos ambientales. </h2>
        </div>
      </section>

      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5">
            
            <div className="col-lg-5 ">
                

                <h1 className="font-weight-light text-center "> Principales Servicios </h1>

                <div className="serviciosp">
                  <ul className=' py-4'>
                    <li> Plan de manejo de residuos solidos urbanos. </li>
                    <li> Plan de manejo de residuos de manejo especial. </li>
                    <li> Plan de manejo de residuos peligrosos. </li>
                    <li> Programa de ahorro de agua. </li>
                    <li> Dictamen de impacto estatal. </li>
                    <li> Dictamen vial. </li>
                    <li> Dictamen urbano. </li>
                    <li> Dictamen de factibilidad de agua. </li>
                    <li> Dictamen del medio ambiente. </li>
                    <li> Plan de contingencia ambiental. </li>
                    <li> Estudio de generación de residuos. </li>
                    <li> Estudio hidrológico. </li>
                    <li> Estudio geológico. </li>
                    <li> Estudio geofísico. </li>
                    <li>Mecánica de suelo. </li>
                  </ul>
                </div>
            </div>

            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x450/dee2e6/6c757d.jpg" alt="..." /></div>
        </div>
      </section>

      <section>
        <div className=" container proyectos">
          <div className=" row">
            <div className="col-xl-6 justify-content-center">
              <h4 className=" text-center" > Proyectos </h4>

              <ul className="align-items-center">
                <li> Diseño, fabricación y modificación de chimeneas. </li>
                <li> Dictamen estructural. </li>
                <li> Dictamen de instalaciones eléctricas. </li>
                <li> Diagrama unifilar. </li>
                <li> Dictamen de instalaciones de gas natural y LP. </li>
                <li> Constancia de seguridad estructural. </li>
                <li> Vo.Bo. de seguridad y operación. </li>
              </ul>
            </div>

            <div className="col-xl-6">
              <h4 className=" text-center"> Auditorias </h4>

              <ul>
                <li> Diseño, fabricación y modificación de chimeneas. </li>
                <li> Dictamen estructural. </li>
                <li> Dictamen de instalaciones eléctricas. </li>
                <li> Diagrama unifilar. </li>
                <li> Dictamen de instalaciones de gas natural y LP. </li>
                <li> Constancia de seguridad estructural. </li>
                <li> Vo.Bo. de seguridad y operación. </li>
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


    </div>
  )
}

export default EstudiosyProyectos

