

import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import ftambiental from '../images/aambiental.png'

function Ambiental() {
  return (
    <div id='ambiental'>
      <section className="card text-white bgambiental my-1 py-4 text-center">
        <div className="card-body">
          <h2 className="text-white m-0"> AMBIENTAL </h2>
        </div>
      </section>


      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftambiental} alt="..." /></div>
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
      
    <Servicios/>
      
    <Footer />

    </div>
  )
}

export default Ambiental
