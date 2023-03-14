import { WiSmoke } from "react-icons/wi";
import humo from '../images/humo.png'
import humo2 from '../images/humo2.png'
import humo3 from '../images/humo3.png'
import humo4 from '../images/humo4.png'
import ftFuentesFijas from '../images/control-emisiones.png'

import Servicios from '../components/Servicios'
import Footer from '../components/Footer'

function FuentesFijas() {
  return (
    <div>

      <section className="images d-none d-xl-block">
        <img className="humo" src={humo} alt="" />
        <img className="humo2" src={humo2} alt="" />
        <img className="humo3" src={humo3} alt="" />
        <img className="humo4" src={humo4} alt="" />
      </section>

        <section>
          <div className=' container'>
            <div className=' col-12'>
              <h2 className=' text-center pt-5'> Fuentes Fijas </h2>

              <div className="col-xl-12 col-xxl-12 text-center"><img className="img-fluid rounded-3 my-5" src={ftFuentesFijas} alt="..." /></div>
            </div>

            <div className=' col-12'>
              <h4 className=' text-center '> Principales servicios </h4>
                <div className=" FJservice fs-5">
                  <p><span><WiSmoke className=" fs-2"/></span><strong> NADF-011-AMBT-2018 </strong> Compuestos orgánicos volátiles emitidos por fuentes fijas de competencia de la Ciudad de México. </p>
                  <p><span><WiSmoke className=" fs-2"/></span><strong> NADF-016-AMBT-2016 </strong>Equipos de combustión de calentamiento  indirecto que deberán de cumplir los responsables de industrias, comercios y servicios ubicados en el territorio de la Ciudad de México </p>
                  <p><span><WiSmoke className=" fs-2"/></span><strong> NOM-043-SEMARNAT-1993 </strong>Emisión a la atmósfera de partículas sólidas provenientes de fuentes fijas. </p>
                  <p><span><WiSmoke className=" fs-2"/></span><strong> NOM-085-SEMARNAT-2011 </strong>Niveles máximos permisibles de emisión de los equipos de combustión de calentamiento indirecto y su medición. </p>
                  <p><span><WiSmoke className=" fs-2"/></span><strong> NMX-AA-056-1980 </strong>Determinación de bióxido de azufre y neblinas de ácido sulfúrico en los gases que luyen por un conducto. </p>
                  <p><span><WiSmoke className=" fs-2"/></span><strong> US EPA Test Method 10 </strong>Emisiones de monóxido de carbono en fuentes fijas. </p>
                </div>
            </div>
          </div>
        </section>

        <Servicios />

        <Footer />

    </div>
  )
}

export default FuentesFijas
