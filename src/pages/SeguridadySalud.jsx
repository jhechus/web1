import React from 'react'
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";



import Footer from '../components/Footer';
import Servicios from '../components/Servicios';

function SeguridadySalud() {
  return (
    <div>

    <section className="fotobg py-5">
        <div className="container px-5">
            <div className="row gx-5 align-items-center justify-content-center">
                <div className="col-lg-12 col-xl-12 col-xxl-6">
                    <div className="my-3 text-lg-start text-md-start">
                      <h5 className="text-center"> Seguridad y salud en el trabajo </h5>

                      <br />

                      <ul className='list-unstyled'>
                        <li className=' pt-2'>
                            <span className=' text-danger fs-4'> <GiHealthNormal /> </span>
                            Capacitaciones DC-03.
                        </li>
                        <li className=' pt-2'>
                            <span className=' text-danger fs-4'> <GiHealthNormal /> </span>
                            Programa de autogestión de seguridad y salud en el trabajo.
                        </li>
                        <li className=' pt-2'>
                            <span className=' text-danger fs-4'> <GiHealthNormal /> </span>
                            Atención a inspecciones.
                        </li>
                        <li className=' pt-2'>
                            <span className=' text-danger fs-4'> <GiHealthNormal /> </span>
                            Auditorias en seguridad y salud.
                        </li>
                        <li className=' pt-2'>
                            <span className=' text-danger fs-4'> <GiHealthNormal /> </span>
                            Contestación de emplazamientos.
                        </li>
                        <li className=' pt-2'>
                            <span className=' text-danger fs-4'> <GiHealthNormal /> </span>
                            Estudios ergonómicos (Actividades de carga manual, movimientos repetitivos, posturas forzadas, confort térmico).
                        </li>
                        <li className=' pt-2'>
                            <span className=' text-danger fs-4'> <GiHealthNormal /> </span>
                            Elaboración de mapas de riesgo.
                        </li>
                        <li className=' pt-2'>
                            <span className=' text-danger fs-4'> <GiHealthNormal /> </span>
                            Elaboración de Layout de equipo de atención a emergencias.
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className=' container'>
            <div className=' row'>
                <div className=' col-xl-12'>
                    <h3 className=' text-center my-4'> Servicios </h3>
                </div>

                <div className=' row-cols-12 justify'>
                    <ul className='list-unstyled'>
                        <li>
                            <span className='fs-4'> <MdOutlineMiscellaneousServices /> </span>
                             <span className=' fs-5'> <strong> Consultoría en seguridad e higiene en el trabajo: </strong> </span> Se trata de un servicio en el que se asesora a las empresas para que cumplan con las normas de seguridad e higiene establecidas por las autoridades. El servicio podría incluir la evaluación de los riesgos en el lugar de trabajo, la elaboración de planes de seguridad y salud, la capacitación del personal en temas de seguridad e higiene, entre otros aspectos. </li>

                        <li className=' pt-1'>
                            <span className='fs-4'> <MdOutlineMiscellaneousServices /> </span>
                            <span className=' fs-5'><strong> Servicios de prevención y protección contra incendios: </strong></span>  Este servicio se enfoca en la prevención de incendios y en la protección de las instalaciones y el personal en caso de uno. Los trabajadores encargados de prestar este servicio deberán estar capacitados para identificar los riesgos de incendio, instalar sistemas de protección, realizar simulacros de evacuación y, en caso de un incendio, coordinar la atención de emergencias. </li>

                        <li className=' pt-1'>
                            <span className='fs-4'> <MdOutlineMiscellaneousServices /> </span>
                            <span className=' fs-5'><strong>  Servicios de identificación y comunicación de peligros y riesgos por sustancias químicas peligrosas: </strong></span> Este servicio se enfoca en la identificación y la comunicación de los peligros y riesgos asociados con el manejo de sustancias químicas peligrosas en el lugar de trabajo. Los trabajadores encargados de prestar este servicio deberán estar capacitados para identificar los peligros y riesgos asociados con las sustancias químicas peligrosas, así como para desarrollar e implementar planes de comunicación y manejo de emergencias. </li>

                        <li className=' pt-1'>
                            <span className='fs-4'> <MdOutlineMiscellaneousServices /> </span>
                            <span className=' fs-5'><strong> Servicios de protección y dispositivos de seguridad en la maquinaria y equipo: </strong></span>  Este servicio se enfoca en la evaluación de los riesgos asociados con el manejo de maquinaria y equipo en el lugar de trabajo, así como en la instalación y mantenimiento de dispositivos de seguridad para reducir los riesgos. Los trabajadores encargados de prestar este servicio deberán estar capacitados para identificar los riesgos asociados con la maquinaria y el equipo, así como para instalar y mantener los dispositivos de seguridad necesarios para reducir los riesgos a niveles aceptables.</li>

                    </ul>
                </div>


                <div>

                </div>
            </div>
        </div>
    </section>



    <section className='securitynorm'>
        <div className=' container'>
            <div className=' row'>
                <div className=' col-xl-12 py-5'>
                    <h2> Ayudamos a su empresa a verificar que cuenten con todas las normas de seguridad</h2>
                </div>

                <div className='col-lg-4'>
                    <h4 className=' px-5'> Normas de seguridad. </h4>

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
                    <h4 className=' px-5'> Normas de salud. </h4>
                        <ul>
                            <li><strong> NOM-010-STPS-2014.- </strong> Agentes químicos contaminantes. </li>
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
                    <h4 className=' px-5'> Normas de organización. </h4>
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

    
    <Servicios />
           
    <Footer />
    
    </div>
  )
}

export default SeguridadySalud

