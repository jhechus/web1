import { Link } from 'react-router-dom'
import Muestreo from '../images/muestreo.png'
import Seguridad from '../images/seguridad.png'
import Presion from '../images/presion.png'
import Proteccion from '../images/Proteccion.png'
import Ambiental from '../images/ambiental.png'
import Estudios from '../images/estudios.png'
import Civil from '../images/civil.png'
import Logo from '../images/logoo.png'


function Servicios() {
  return (
    <div>
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

export default Servicios
