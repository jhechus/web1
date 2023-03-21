
import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import fotoMyA from '../images/muestreoyanalis.png'
import { FaFaucet } from 'react-icons/fa'

function Agua() {
  return (
    <div>
      <div id='Agua'>
        <section className="card bgAgua my-1 py-4 text-center">
          <div className="card-body">
            <h2 className="m-0"> Muestreos y Analisis de Agua </h2>
          </div>
        </section>
      </div>

      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100 justify">
            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src={fotoMyA} alt="..." /></div>
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


      <section className='bg-light py-3'>
        <div className=' container'>
          <div className=' col-lg-12'>
            <h3 className=' text-center py-3'> Normas para el Análisis del agua </h3>
          </div>

          <div className=' col-lg-112 px-5'>
            <h5><span> <FaFaucet/> </span><strong> NOM-001-SEMARNAT-1996.- </strong>Descargas de aguas residuales en aguas y bienes nacionales.</h5>
            <h5><span> <FaFaucet/> </span><strong> NOM-002-SEMARNAT-1996.- </strong>Descargas de aguas  residuales a los sistemas de alcantarillado urbano o  municipal. </h5>
            <h5><span> <FaFaucet/> </span><strong> NOM-003-SEMARNAT-1997.- </strong>Aguas residuales tratadas que se reúsen en servicios al público. </h5>
            <h5><span> <FaFaucet/> </span><strong> NADF-015-AGUA-2009.- </strong>Descargas de aguas residuales al  sistema de drenaje y alcantarillado del Distrito Federal,  provenientes de las fuentes fijas. </h5>
            <h5><span> <FaFaucet/> </span><strong> Sombra de Arteaga. </strong></h5>
          </div>

        </div>
      </section>

      <Servicios/>

    <Footer/>

    </div>
  )
}

export default Agua
