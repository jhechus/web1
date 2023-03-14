import React from 'react'

import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import ftdoctor from '../images/doctor.png'
import ftcovid from '../images/covid.png'
import ftdoctor2 from '../images/docotres.png'
import ruidos from '../images/ruidos.png'
import respiracion from '../images/respiracion.png'
import esqueleto from '../images/esqueleto.png'
import fisico from '../images/fisico.png'

function ServicioMedico() {
  return (
    <div>
      <div>
          <div className='encabezado'>
            <section className="card my-1 py-4 text-center bdSM">
              <div className="card-body">
                <h2 className=" m-0"> Servicio Medico </h2>
              </div>
            </section>
          </div> 

        <section>
          <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
              <div className="col-lg-6"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftdoctor} alt="..." /></div>
              <div className="col-lg-6">

                  <h1 className="font-weight-light text-center "> Principales Servicios </h1>

                  <ul className=' py-4'>
                    <li> Historia clínica laboral. </li>
                    <li> Exámenes médicos de ingreso. </li>
                    <li> Exámenes médicos específicos. </li>
                    <li> Exámenes médicos periódicos. </li>
                    <li> Examen optométrico. </li>
                    <li> Atención de accidentes en planta. </li>
                    <li> Determinación de aptitud de personal que realiza actividades de carga manual. </li>
                    <li> Control estadístico de la accidentabilidad, morbilidad y días perdidos. </li>
                  </ul>
              </div>
          </div>
        </section>


        <section>
          <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
              <div className="col-lg-6">

                  <div className="card border-primary mb-3 carta">
                      <div className="card-body text-primary">
                        <ul>
                          <li> Protocolo de seguridad sanitaria. </li>
                          <li> Administración del servicio médico. </li>
                          <li> Atención de la consulta general. </li>
                          <li> Administración de ambulancias. </li>
                          <li> Análisis clínicos (EGO, BH, Q Sanguíneo, antidoping). </li>
                          <li> Radiografía lumbosacra AP y lateral. </li>
                        </ul>
                      </div>
                  </div>
              </div>

              <div className="col-lg-6"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftdoctor2} alt="..." /></div>
          </div>
        </section>
        

        <section className=' text-center bgmdc'>
          <h2 className=' py-4'> Programas medicos </h2>
          <div className='container'>
            <div className='row'>
    
              <div className='col-md-3 col-sm-6'>
                <img className="img-fluid rounded mb-4 mb-lg-0" src={ruidos} alt="..." />
                <h6 className=' py-3'> PROGRAMA DE CONSERVACIÓN DE LA AUDICIÓN. </h6>
                <p className=' px-3 '> PROGRAMA DE CONSERVACIÓN DE LA AUDICIÓN. Dirigido a prevenir la aparición de efectos en la salud auditiva de los trabajadores por exposición al ruido ocupacional. </p>
              </div>

              <div className='col-md-3 col-sm-6'>
                <img className="img-fluid rounded mb-4 mb-lg-0" src={respiracion} alt="..." />
                <h6 className=' py-3'> PROGRAMA DE CONSERVACIÓN RESPIRATORIA. </h6>
                <p className=' px-3'> Ayuda a reducir la exposición ocupacional de los trabajadores a los contaminantes aéreos como partículas, gases y vapores, y a la deficiencia de oxígeno. </p>
              </div>

              <div className='col-md-3 col-sm-6'>
                <img className="img-fluid rounded mb-4 mb-lg-0" src={esqueleto} alt="..." />
                <h6 className=' py-3'> CUESTIONARIO KUORINKA​. </h6>
                <p className=' px-3'> Para la detección y análisis de síntomas músculo-esqueléticos, aplicable en el contexto de estudios ergonómicos o de salud ocupacional. </p>
              </div>

              <div className='col-md-3 col-sm-6'>
                <img className="img-fluid rounded mb-4 mb-lg-0" src={fisico} alt="..." />
                <h6 className=' py-3'> PRUEBA DE ESFUERZO. </h6>
                <p className=' px-3'> Examen diagnóstico que consiste en realizar un registro del electrocardiograma durante un esfuerzo controlado, es decir, se monitoriza el ritmo del corazón y la presión arterial. </p>
              </div>

            </div>
          </div>
        </section>



        <section>
          <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
              <div className="col-lg-6 imgcovid"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftcovid} alt="..." /></div>

              <div className="col-lg-6">
                  

                  <h1 className="font-weight-light text-center text-info"> Pruebas rápidas certificadas | COVID-19 </h1>

                  <div className='d-flex pt-5 covid'>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                    <p className='px-2 fs-3'> Prueba rápida nasofaríngea de detección de antígenos SARS-CoV-2. </p>        
                  </div>

                  <div className='d-flex covid'>
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                    <p className='px-2 fs-3'> Prueba rápida serológica de detección de anticuerpos SARS-CoV-2. </p>        
                  </div>

                    <br /><br />
                  <div className=' text-center'> 
                    <h3> Resultados en <span className='text-primary'><strong> 15 a 30 minutos. </strong> </span> </h3>
                    <h3> Aprobada por <span className='text-primary'>COFEPRIS.</span> </h3>
                    <h3> Aplicación individual, en consultorio o a grupos. </h3>
                  </div>

              </div>
          </div>
        </section>

        <Servicios />

        <Footer />


      </div>
    </div>
  )
}

export default ServicioMedico
