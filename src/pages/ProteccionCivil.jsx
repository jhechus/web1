import React from 'react'

function ProteccionCivil() {
  return (
    <div>
      <section className="bg-dark py-5">
        <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-12 col-xl-12 col-xxl-6">
                    <div className="my-5 text-center text-xl-start">
                        <h1 className="display-5 fw-bolder text-white mb-2 text-center"> Proteccion civil </h1>
                        <p className="lead fw-normal text-white-50 mb-4 text-center"><strong> NO ARRIESGUES TU NEGOCIO O TU OBRA, EVITA LA CLAUSURA CON TUS TRAMITES ANTE PROTECCIÓN CIVIL VIGENTES Y AUTORIZADOS. </strong></p>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
                            <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features"> Contactanos </a>
                        </div>
                    </div>
                </div>
          
            </div>
        </div>
    </section>

    <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5">
            <div className="col-lg-5"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x600/dee2e6/6c757d.jpg" alt="..." /></div>

            <div className="col-lg-7">
                <h4 className=' text-center'><strong>Laboratorio Analitico Ambiental, S.A de C.V. </strong> Tramita todo lo necesario para que <span className=' text-primary'> tu empresa este regularizada. </span></h4>
                <br /> <br />

                <h1 className="font-weight-light text-center "> Principales Servicios </h1>

                <ul className=' py-4'>
                  <li className=' fw-semibold'> Estudios de vulnerabilidad y riesgo. </li>
                  <li className=' fw-semibold'> Elaboración de Programa Interno de Protección Civil. </li>
                  <li className=' fw-semibold'> Elaboración de Programa Específico de Protección Civil. </li>
                  <li className=' fw-semibold'> Elaboración de planos de identificación de equipo de emergencia. </li>
                  <li className=' fw-semibold'> Asesoría y evaluación de simulacros. </li>
                  <li className=' fw-semibold'> Carta de corresponsabilidad. </li>
                  <li className=' fw-semibold'> Manejo de sustancias peligrosas. </li>
                  <li className=' fw-semibold'> Inducción a la protección civil. </li>
                  <li className=' fw-semibold'> Bitácoras de revisión de extintores y equipos. </li>
                  <li className=' fw-semibold'> Formación de brigadas. </li>
                </ul>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ProteccionCivil
