import React from 'react'

import Footer from '../components/Footer'
import Servicios from '../components/Servicios'
import { Link } from 'react-router-dom'

import ftproteccion from '../images/pc.png'
import { ImFire } from "react-icons/im";

function ProteccionCivil() {
  return (
    <div>
      <section className="pcbg py-5">
        <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-12 col-xl-12 col-xxl-6">
                    <div className="my-5 text-center text-xl-start">
                        <h1 className="display-5 fw-bolder text-white mb-2 text-center"> Proteccion civil </h1>
                        <p className="lead fw-normal text-white mb-4 text-center"><strong> NO ARRIESGUES TU NEGOCIO O TU OBRA, EVITA LA CLAUSURA CON TUS TRAMITES ANTE PROTECCIÓN CIVIL VIGENTES Y AUTORIZADOS. </strong></p>
                        <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
                            <Link className="btn btn-primary btn-lg px-4 me-sm-3" to={'/Contact'}  > Contactanos </Link>
                        </div>
                    </div>
                </div>
          
            </div>
        </div>
    </section>

    <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
            <div className="col-lg-5"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftproteccion} alt="..." /></div>

            <div className="col-lg-7">
                <h4 className=' text-center'><span className='Laa'><strong>Laboratorio Analitico Ambiental, S.A de C.V. </strong> </span> Tramita todo lo necesario para que <span className=' text-primary'> tu empresa este regularizada. </span></h4>
                <br /> <br />

                <h1 className="font-weight-light text-center "> Principales Servicios </h1>

                <ul className=' py-4 list-unstyled'>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Estudios de vulnerabilidad y riesgo. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Elaboración de Programa Interno de Protección Civil. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Elaboración de Programa Específico de Protección Civil. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Elaboración de planos de identificación de equipo de emergencia. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Asesoría y evaluación de simulacros. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Carta de corresponsabilidad. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Manejo de sustancias peligrosas. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Inducción a la protección civil. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Bitácoras de revisión de extintores y equipos. </li>
                  <li className=' fw-semibold'><span> <ImFire/> </span> Formación de brigadas. </li>
                </ul>
            </div>
        </div>
      </section>


      <Servicios />

      <Footer/>

    </div>
  )
}

export default ProteccionCivil
