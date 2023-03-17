

import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import ftambiental from '../images/aambiental.png'
import { GiThreeLeaves } from 'react-icons/gi'

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
                <h6><span className='Laa'>Laboratorio Analitico Ambiental, S.A de C.V. </span> es división ambiental, cuyo propósito es el de auxiliar a empresas en sus programas y políticas de Conservación del Entorno Ecológico y Medio Ambiente, mediante el Reconocimiento, la Evaluación y el Control de los contaminantes emitidos hacia el Agua, el Aire y el Suelo.</h6>
                <br /> <br />

                <h1 className="font-weight-light text-center "> Principales Servicios </h1>

                <ul className=' py-4 list-unstyled'>
                  <li className=' fw-bolder' ><span> <GiThreeLeaves /> </span> Minimizar el impacto de las empresas sobre el medioambiente, realizar auditorías y conocer la legislación de cada país sobre el medioambiente para aplicarlas correctamente. </li>
                  <li className=' fw-bolder'><span> <GiThreeLeaves /> </span> Análisis de los datos ambientales. </li>
                  <li className=' fw-bolder'><span> <GiThreeLeaves /> </span> Identificar y analizar los impactos que las empresas pueden generar sobre el medioambiente. Incluyendo vertidos de aguas contaminadas, emisiones de gases contaminantes a la atmósfera, contaminación del suelo, etc. </li>
                  <li className=' fw-bolder'><span> <GiThreeLeaves /> </span> Establecer estrategias para prevenir los riesgos e impactos y proponer soluciones a estos problemas ambientales. </li>
                  <li className=' fw-bolder'><span> <GiThreeLeaves /> </span> Ayudar a definir las políticas ambientales de la empresa acordes a los requisitos de la norma, la legislación propia del país y la Ética Ambiental. </li>
                  <li className=' fw-bolder'><span> <GiThreeLeaves /> </span> Incentivar la práctica de buenos comportamientos ambientales en la empresa. </li>
                  <li className=' fw-bolder'><span> <GiThreeLeaves /> </span> Conocer y evaluar los sistemas de auditoría y de impactos ambientales de la empresa, así como los requisitos técnicos y legales que implica. </li>
                  <li className=' fw-bolder'><span> <GiThreeLeaves /> </span> Dominar tanto las certificaciones nacionales como internacionales en cuanto a las normativas medioambientales para poder implementar correctamente los Sistemas de Gestión Ambiental y evaluar las estrategias ambientales. </li>
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
