import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import ftEambiental from '../images/estambiental.png'
import { FaSeedling } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";

function EstudiosyProyectos() {
  return (
    <div>

      <div className='EyP'>
        <section className="card text-white bgEyP my-1 py-4 text-center">
          <div className="card-body">
            <h2 className="text-white m-0"> Estudios y proyectos ambientales. </h2>
          </div>
        </section>
      </div>

      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
            
            <div className="col-lg-5 ">
                

                <h1 className="font-weight-light text-center "> Principales Servicios </h1>

                <div className="serviciosp">
                  <ul className=' py-4 list-unstyled'>
                    <li><span> <FaSeedling /> </span> Plan de manejo de residuos solidos urbanos. </li>
                    <li><span> <FaSeedling /> </span> Plan de manejo de residuos de manejo especial. </li>
                    <li><span> <FaSeedling /> </span> Plan de manejo de residuos peligrosos. </li>
                    <li><span> <FaSeedling /> </span> Programa de ahorro de agua. </li>
                    <li><span> <FaSeedling /> </span> Dictamen de impacto estatal. </li>
                    <li><span> <FaSeedling /> </span> Dictamen vial. </li>
                    <li><span> <FaSeedling /> </span> Dictamen urbano. </li>
                    <li><span> <FaSeedling /> </span> Dictamen de factibilidad de agua. </li>
                    <li><span> <FaSeedling /> </span> Dictamen del medio ambiente. </li>
                    <li><span> <FaSeedling /> </span> Plan de contingencia ambiental. </li>
                    <li><span> <FaSeedling /> </span> Estudio de generación de residuos. </li>
                    <li><span> <FaSeedling /> </span> Estudio hidrológico. </li>
                    <li><span> <FaSeedling /> </span> Estudio geológico. </li>
                    <li><span> <FaSeedling /> </span> Estudio geofísico. </li>
                    <li><span> <FaSeedling /> </span>Mecánica de suelo. </li>
                  </ul>
                </div>
            </div>

            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftEambiental} alt="..." /></div>
        </div>
      </section>

      <section className=' bg-light py-3'>
        <div className=" container proyectos">
          <div className=" row">
            <div className="col-xl-6 justify-content-center">
              <h4 className=" text-center" > Proyectos </h4>

              <ul className="align-items-center list-unstyled">
                <li><span> <GiPlantSeed /> </span> Diseño, fabricación y modificación de chimeneas. </li>
                <li><span> <GiPlantSeed /> </span> Dictamen estructural. </li>
                <li><span> <GiPlantSeed /> </span> Dictamen de instalaciones eléctricas. </li>
                <li><span> <GiPlantSeed /> </span> Diagrama unifilar. </li>
                <li><span> <GiPlantSeed /> </span> Dictamen de instalaciones de gas natural y LP. </li>
                <li><span> <GiPlantSeed /> </span> Constancia de seguridad estructural. </li>
                <li><span> <GiPlantSeed /> </span> Vo.Bo. de seguridad y operación. </li>
              </ul>
            </div>

            <div className="col-xl-6">
              <h4 className=" text-center"> Auditorias </h4>

              <ul className=' list-unstyled'>
                <li><span> <GiPlantSeed /> </span> Diagnostico ambiental.  </li>
                <li><span> <GiPlantSeed /> </span> Auditoría ambiental estatal (PROPAEM). </li>
                <li><span> <GiPlantSeed /> </span> Auditoria para certificación de industria limpia. </li>
                <li><span> <GiPlantSeed /> </span> Verificación de cumplimiento. </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

    <Servicios />

    <Footer/>

    </div>
  )
}

export default EstudiosyProyectos

