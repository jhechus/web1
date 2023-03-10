import React from 'react'
import { BsFillArrowThroughHeartFill } from "react-icons/bs";

import { Link } from 'react-router-dom'
import Muestreo from '../images/muestreo.png'
import Seguridad from '../images/seguridad.png'
import Presion from '../images/presion.png'
import Proteccion from '../images/Proteccion.png'
import Ambientalfoto from '../images/ambiental.png'
import Estudios from '../images/estudios.png'
import Civil from '../images/civil.png'

import Footer from '../components/Footer';

function SeguridadySalud() {
  return (
    <div>

    <section className="bg-dark py-5">
        <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-12 col-xl-12 col-xxl-6">
                    <div className="my-3 text-center text-xl-start">
                      <h5 className="text-center fs-5 text-success"> Seguridad y salud en el trabajo </h5>

                      <br />

                      <div className=' d-flex'>
                          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
                          <p className='px-2 fs-5 text-white'> Capacitaciones DC-03. </p> 
                      </div>

                      <div className='d-flex'>
                          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
                          <p className='px-2 fs-5 text-white'> Programa de autogestión de seguridad y salud en el trabajo </p> 
                      </div>

                      <div className='d-flex'>
                          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
                          <p className='px-2 fs-5 text-white'>Atención a inspecciones </p> 
                      </div>

                      <div className='d-flex'>
                          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
                          <p className='px-2 fs-5 text-white'> Auditorias en seguridad y salud </p> 
                      </div>

                      <div className='d-flex'>
                          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
                          <p className='px-2 fs-5 text-white'> Contestación de emplazamientos </p> 
                      </div>

                      <div className='d-flex style={{ flexShrink: 0 }}'>
                          < BsFillArrowThroughHeartFill className=' fs-1 text-danger' />
                          <p className='px-2 fs-5 text-white'> Estudios ergonómicos (Actividades de carga manual, movimientos repetitivos, posturas forzadas, confort térmico) </p> 
                      </div>

                      <div className='d-flex'>
                          < BsFillArrowThroughHeartFill className=' fs-4 text-danger' />
                          <p className='px-2 fs-5 text-white'> Elaboración de mapas de riesgo </p> 
                      </div>

                      <div className='d-flex'>
                          < BsFillArrowThroughHeartFill className=' fs-4 text-danger' />
                          <p className='px-2 fs-5 text-white'> Elaboración de Layout de equipo de atención a emergencias </p> 
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section>
        <div className=' container'>
            <div className=' row'>
                <div className=' col-xl-12 py-5'>
                    <h2> Ayudamos a su empresa a verificar que cuenten con todas las normas de seguridad</h2>
                </div>

                <div className='col-lg-4'>
                    <h4 className=' px-5'> Normas de seguridad </h4>

                    <ul>
                        <li><strong> NOM-001-STPS-2008.- </strong> Edificios, locales, instalaciones. </li>
                        <li><strong> NOM-002-STPS-2010.- </strong>Prevención y protección contra incendios. </li>
                        <li><strong> NOM-004-STPS-1999.- </strong>Sistemas de protección y dispositivos de seguridad en la maquinaria y equipo. </li>
                        <li><strong> NOM-005-STPS-1998.- </strong>Manejo, transporte y almacenamiento de sustancias químicas peligrosas. </li>
                        <li><strong> NOM-006-STPS-2014.- </strong>Manejo y almacenamiento de materiales. </li>
                        <li><strong> NOM-009-STPS-2011.- </strong>Trabajos en altura. </li>
                        <li><strong> NOM-020-STPS-2011.- </strong>Recipientes sujetos a presión, recipientes criogénicos y generadores de vapor o calderas. </li>
                        <li><strong> NOM-022-STPS-2015.- </strong>Electricidad estática. </li>
                        <li><strong> NOM-027-STPS-2008.- </strong>Actividades de soldadura y corte. </li>
                        <li><strong> NOM-029-STPS-2011.- </strong>Mantenimiento de las instalaciones  eléctricas en los centros de trabajo. </li>
                        <li><strong> NOM-033-STPS-2015.- </strong>Trabajos en espacios confinados. </li>
                        <li><strong> NOM-034-STPS-2016.- </strong>Acceso y desarrollo de actividades de  trabajadores con discapacidad. </li>
                    </ul>
                </div>

                <div className='col-lg-4'>
                    <h4 className=' px-5'> Normas de salud </h4>
                        <ul>
                            <li><strong> NOM-010-STPS-2014.- </strong> Agentes químicos contaminantes </li>
                            <li><strong> NOM-011-STPS-2001.- </strong>Ruido laboral. </li>
                            <li><strong> NOM-013-STPS-1993.- </strong>Radiaciones electromagnéticas no ionizantes. </li>
                            <li><strong> NOM-015-STPS-2001.- </strong>Condiciones térmicas elevadas o abatidas. </li>
                            <li><strong> NOM-024-STPS-2001.- </strong>Vibraciones. </li>
                            <li><strong> NOM-025-STPS-2008.- </strong>Iluminación. </li>
                            <li><strong> NOM-035-STPS-2018.- </strong>Factores de riesgo psicosocial en el trabajo. </li>
                            <li><strong> NOM-036-I-STPS-2018.- </strong>Factores de riesgo ergonómico. </li>
                        </ul>
                </div>


                <div className='col-lg-4'>
                    <h4 className=' px-5'> Normas de Organizacion</h4>
                    <ul>
                        <li><strong> NOM-017-STPS-2008.- </strong >Equipo de protección personal. </li>
                        <li><strong>  NOM-018-STPS-2015.- </strong> Sistema armonizado para la  identificación y comunicación de peligros y riesgos por  sustancias químicas peligrosas. </li>
                        <li><strong>  NOM-019-STPS-2011.- </strong> Constitución, organización y  funcionamiento de las comisiones de seguridad e higiene en  los centros de trabajo. </li>
                        <li><strong>  NOM-026-STPS-2008.- </strong> Colores y señales de seguridad e  higiene, e identificación de riesgos por fluidos conducidos en  tuberías. </li>
                        <li><strong>  NOM-028-STPS-2012.- </strong> Seguridad en los procesos y equipos críticos que manejen sustancias químicas peligrosas. </li>
                        <li><strong>  NOM-030-STPS-2009.- </strong> Servicios preventivos de seguridad y  salud en el trabajo. </li>
                    </ul>
                </div>


            </div>
        </div>
    </section>

    
    <section className=' text-center'>
        <div className=' container'>
                <div className=' row'>
                    <div className=' col-md-12 text-center my-4'>
                        <h2> Nuestros Otros Servicios </h2>
                    </div>
                    
                    <div className='d-md-flex justify-content-center'>
                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Muestreos_Analisis'} className=' text-decoration-none col-xl-12 px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Muestreo} alt="Muestreo" />
                                <h3 className=' text-center'> Muestreos y Analisis </h3>
                            </Link>
                        </div>


                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Seguridad_Salud'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Seguridad} alt="Seguridad y Salud" />
                                <h3 className=' text-center px-5'> Seguridad y Salud en el trabajo </h3>
                            </Link>
                        </div>

                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/Recipientes_a_Presion'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Presion} alt="Presion" />
                                <h3 className=' text-center px-5'>Recipientes sujetos a presion </h3>
                            </Link>
                        </div>


                        <div className=' col-xl-3 col-md-3 servicios'>
                            <Link to={'/ProteccionCivil'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Civil} alt="Proteccion civil" />
                                <h3 className=' text-center'> Proteccion civil </h3>
                            </Link>
                        </div>
                    </div>


                    <div className='d-md-flex justify-content-center'>
                        <div className=' col-xl-4 col-md-4 servicios'>
                            <Link to={'/Ambiental'} className=' text-decoration-none col-xl-12 px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Ambientalfoto} alt="Ambiental" />
                                <h3 className=' text-center'> Ambiental </h3>
                            </Link>
                        </div>


                        <div className=' col-xl-4 col-md-4 servicios'>
                            <Link to={'/proyectosyAmbiental'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Estudios} alt="Estudios y Proyectos" />
                                <h3 className=' text-center px-2'> Estudios y Proyectos Ambientales </h3>
                            </Link>
                        </div>

                        <div className=' col-xl-4 col-md-4 servicios'>
                            <Link to={'/ServicioMedico'} className=' text-decoration-none col-xl-12  px-4'> 
                                <img className="img-fluid rounded-circle my-2 mb-lg-0 mx-auto d-block" src={Proteccion} alt="Presion" />
                                <h3 className=' text-center px-5'> Servicio medico </h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
      </section>
           
    <Footer />
    
    </div>
  )
}

export default SeguridadySalud

