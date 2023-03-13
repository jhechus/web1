import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import ftEambiental from '../images/estambiental.png'

function EstudiosyProyectos() {
  return (
    <div>
       <section className="card text-white bg-success my-1 py-4 text-center">
        <div className="card-body">
          <h2 className="text-white m-0"> Estudios y proyectos ambientales. </h2>
        </div>
      </section>

      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
            
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

            <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftEambiental} alt="..." /></div>
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

    <Servicios />

    <Footer/>

    </div>
  )
}

export default EstudiosyProyectos

