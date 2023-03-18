import Servicios from '../components/Servicios'
import Footer from '../components/Footer';

import ftaguapotable from '../images/Aguapotable.png'
import { GiWaterDrop } from "react-icons/gi";

function AguaPotable() {
  return (
    <div>

      <div id='Agua'>
        <section className="card bgAgua my-1 py-4 text-center">
          <div className="card-body">
            <h2 className="m-0"> Muestreos y Analisis de Agua Potable </h2>
          </div>
        </section>
      </div>

      <section>
        <div className="row gx-4 px-5 gx-lg-8 align-items-center my-5 w-100">
            
            <div className="col-lg-7 ">
                

                <h1 className="font-weight-light text-center "> Razones para analizar el agua potable </h1>

                <div className="serviciosp justify">
                  <ul className=' py-4 list-unstyled'>
                    <li className=' fs-5'><span> <GiWaterDrop /> </span> A diferencia de los sistemas públicos de agua, el análisis del suministro de agua privado es responsabilidad voluntaria del propietario. No hay agencias o programas gubernamentales que analicen rutinariamente los sistemas de agua privados para los propietarios. </li>
                    <li className=' fs-5'><span> <GiWaterDrop /> </span> Estudios adicionales han encontrado que alrededor del 50 por ciento de los sistemas privados de agua fallan al menos una norma de agua potable. </li>
                    <li className=' fs-5'><span> <GiWaterDrop /> </span> Muchos de los contaminantes que se encuentran en los sistemas privados de agua no presentan síntomas evidentes y sólo pueden detectarse mediante pruebas de laboratorio. </li>
                    <li className=' fs-5'><span> <GiWaterDrop /> </span> La única forma en que los propietarios de viviendas pueden estar seguros de que su agua es segura para beber es hacer que el agua se analice periódicamente. </li>
                    
                  </ul>
                </div>
            </div>

            <div className="col-lg-4"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftaguapotable} alt="..." /></div>
        </div>
      </section>

      <Servicios />

      <Footer />


    </div>
  )
}

export default AguaPotable
