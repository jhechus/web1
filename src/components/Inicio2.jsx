import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../images/logoo.png'

import { FaSeedling } from "react-icons/fa";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import Footer from './Footer'
import Servicios from './Servicios'

function Inicio2() {
  return (
    <div>
      <header className="bginicio py-5">
            <div className="container px-5">
                <div className="row gx-5 justify-content-center">
                    <div className="col-lg-6">
                        <div className="lassa text-center my-1 logoi">
                            <img src={Logo} alt="Lassa" />
                            <p className="lead text-black fw-normal mb-4 justify"> <span className='nameL'> <strong>Laboratorio Analítico Ambiental, S.A de C.V. </strong> </span> ofrece soluciones integrales tanto a grandes industrias como a pequeños negocios en materia de: medio ambiente, protección civil, seguridad y salud en el trabajo; cumpliendo con la normatividad vigente y estándares internacionales. </p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <a className="lassabtn btn btn-lg px-4 me-sm-3" href="tel:+525551614373"> Llámanos <BiPhoneCall /> </a>

                                <Link className="lassabtn btn btn-lg px-4 me-sm-3" to={'/About'}> Conócenos <FaSeedling /> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>


        < Servicios />

        <section className="py-5 border-bottom" id="features">
            <div className="container px-5 my-5">
                <div className="normas row gx-5">


                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                        
                        <Link className="text-decoration-none" to={'/Muestreos_Analisis'}> <h2 className="h4 fw-bolder text-center"> Muestreos & Análisis Ambientales. </h2> </Link> 
                        
                        
                        <Link to={'/Muestreos_Analisis'} className=' text-decoration-none'> <h5><strong> Análisis de agua. </strong></h5> </Link>

                        <div>
                            <h6><strong> NOM-001-SEMARNAT-1996 </strong></h6>
                            <p> Descargas de aguas residuales en aguas y bienes nacionales. </p>

                            <h6><strong> NOM-002-SEMARNAT-1996 </strong></h6>
                            <p> Descargas de aguas residuales a los sistemas de alcantarillado urbano o municipal. </p>
                            
                            <h6><strong> NOM-003-SEMARNAT-1997 </strong></h6>
                            <p> Aguas residuales tratadas que se reúsen en servicios al público. </p>

                            <h6><strong> NADF-015-AGUA-2009 </strong></h6>
                            <p> Descargas de agua residuales al sistema de drenaje y alcantarillado del Distrito Federal, provenientes de las fuentes fijas </p>
                        </div>

                        <Link to={'/Muestreos_Analisis'} className=' text-decoration-none'> <h5><strong> Emisiones a la atmósfera. </strong></h5> </Link>

                        <h6><strong> NADF-011-AMBT-2018  </strong></h6>
                        <p> Compuestos orgánicos volátiles emitidos por fuentes fijas de competencia de la Ciudad de México. </p>

                        <h6><strong> NADF-016-AMBT-2016  </strong></h6>
                        <p> Equipos de combustión de calentamiento indirecto que deberán cumplir los responsables de industrias, comercios y servicios ubicados en el territorio de la Ciudad de México. </p>

                        <h6><strong> NOM-043-SEMARNAT-1993  </strong></h6>
                        <p> Emision a la atmosfera de particulas sólidas provenientes de fuentes fijas. </p>

                        <h6><strong> NOM-085-SEMARNAT-2011  </strong></h6>
                        <p> Niveles máximos permesibles de emisión de los equipos de combustión de calentamiento indirecto y su medición. </p>

                        <h6><strong> NMX-AA-056-1980  </strong></h6>
                        <p> Determinacion de bióxido de azufre y neblinas de ácido sulfúrico en los gases que luyen por un conducto. </p>

                        <h6><strong> US EPA TEST METHOD 10  </strong></h6>
                        <p> Emisiones de monóxido de carbono en fuentes fijas. </p>

                        <Link to={'/Muestreos_Analisis#top'} className=' text-decoration-none'> <h5><strong> Ruido Perimetral y Vibraciones </strong></h5> </Link>

                        <div>
                            <h6><strong> NADF-004-AMBT-2004 </strong></h6>
                            <p> Vibraciones mecánicas en la Ciudad de México. </p>

                            <h6><strong> NADF-005-AMBT-2013 </strong></h6>
                            <p> Emisiones sonoras en la Ciudad de México. </p>

                            <h6><strong> NOM-081-SEMARNAT-1994 </strong></h6>
                            <p> Emisión de ruido de las fuentes fijas. </p>
                        </div>
                        
                        <Link to={'/Muestreos_Analisis'} className=' text-decoration-none'> <h5><strong> Analisis de Alimentos </strong></h5> </Link>

                        <div>
                            <ul>
                                <li> Analisis de Hielo </li>
                                <li> Analisis de Agua Embotellada </li>
                                <li> Analisis de Alimentos </li>
                            </ul>

                            <h6><strong> NOM-127-SSA1-1994 </strong></h6>
                            <p> Salud ambiental, agua para uso y consumo humano </p>

                            <h6><strong> NOM-201-SSA1-2015 </strong></h6>
                            <p> Agua y hielo para consumo humano, envasados y a granel, contenido neto y tabla nutrimental </p>

                            <h6><strong> Analisis microbiológicos: </strong></h6>
                            <ul>
                                <li> Mesofilos aerobios. </li>
                                <li> Hongos y levaduras. </li>
                                <li> Coliformes totales y fecales. </li>
                                <li> Salmonella y Echerichia Coli. </li>
                            </ul>

                            <h6><strong> Analisis bromatológicos: </strong></h6>
                            <ul>
                                <li> Grasas y Aceites. </li>
                                <li> Cenizas, proteínas, fibra cruda, carbohidratos y azucares. </li>
                            </ul>
                        </div>
                        
                        
                        <Link className="text-decoration-none d-flex flecha" to={'/Seguridad_Salud'}>
                            <p className='px-2'>Saber más...  <span className=' fs-4'> < MdOutlineKeyboardDoubleArrowRight /> </span> </p>
                            
                        </Link>
                    </div>



                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>

                        <Link className="text-decoration-none" to={'/Seguridad_Salud'}><h2 className="h4 fw-bolder text-center"> Seguridad, Salud & Organización en el trabajo </h2> </Link>

                        <Link to={'/Seguridad_Salud'} className=' text-decoration-none'> <h5><strong> Normas de Seguridad </strong></h5> </Link>

                        <h6><strong> NOM-001-STPS-2008 </strong></h6>
                        <p> Edificios, Locales, Instalaciones. </p>

                        <h6><strong> NOM-002-STPS-2010 </strong></h6>
                        <p> Prevención y protección contra incendios.  </p>

                        <h6><strong> NOM-004-STPS-1999 </strong></h6>
                        <p> Sistemas de protección y dispositivos de seguridad en la maquinaria y equipo.  </p>

                        <h6><strong> NOM-005-STPS-1999 </strong></h6>
                        <p> Manejo, transporte y almacenamiento de sustancias químicas peligrosas. </p>

                        <h6><strong> NOM-006-STPS-2014 </strong></h6>
                        <p> Manejo y almacenamiento de materiales. </p>

                        <h6><strong> NOM-009-STPS-2011 </strong></h6>
                        <p> Trabajos en altura. </p>

                        <h6><strong> NOM-020-STPS-2011 </strong></h6>
                        <p> Recpientes sujetos a presión, recipientes criogénicos y generadores de vapor o calderas. </p>

                        <h6><strong> NOM-022-STPS-2015 </strong></h6>
                        <p> Electricidad estática. </p>

                        <h6><strong> NOM-027-STPS-2008 </strong></h6>
                        <p> Actividades de soldura y corte. </p>

                        <h6><strong> NOM-029-STPS-2011 </strong></h6>
                        <p> Mantenimiento de las instalaciones eléctricas en los centros de trabajo. </p>

                        <h6><strong> NOM-033-STPS-2015 </strong></h6>
                        <p> Trabajos en espacios confinados. </p>

                        <h6><strong> NOM-034-STPS-2015 </strong></h6>
                        <p> Acceso y desarrollo de actividades de trabajadores con discapacidad. </p>

                        <Link to={'/Seguridad_Salud'} className=' text-decoration-none'> <h5><strong> Normas de Salud </strong></h5> </Link>

                        <h6><strong> NOM-010-STPS-2014 </strong></h6>
                        <p> Agentes químicos contaminantes. </p>

                        <h6><strong> NOM-011-STPS-2001 </strong></h6>
                        <p> Ruido laboral. </p>

                        <h6><strong> NOM-013-STPS-1993 </strong></h6>
                        <p> Radiaciones electromagnéticas no ionizantes. </p>

                        <h6><strong> NOM-015-STPS-2001 </strong></h6>
                        <p> Condiciones térmicas elevadas o abatidas. </p>

                        <h6><strong> NOM-024-STPS-2001 </strong></h6>
                        <p> Vibraciones. </p>

                        <h6><strong> NOM-025-STPS-2008 </strong></h6>
                        <p> Ilumincacion. </p>

                        <h6><strong> NOM-035-STPS-2018 </strong></h6>
                        <p> Factores de riesgo psicosocial en el trabajo. </p>

                        <h6><strong> NOM-036-I-STPS-2018 </strong></h6>
                        <p> Factores de riesgo ergonómico. </p>

                        <Link to={'/Seguridad_Salud'} className=' text-decoration-none'> <h5><strong> Normas de Organización </strong></h5> </Link>

                        <h6><strong> NOM-017-STPS-2008 </strong></h6>
                        <p> Equipo de protección personal. </p>

                        <h6><strong> NOM-018-STPS-2015 </strong></h6>
                        <p> Sistema armonizado para la identificación y comunicandole peligros y riesgos por sustancias químicas peligrosas. </p>

                        <h6><strong> NOM-019-STPS-2011 </strong></h6>
                        <p> Constitución, organización y funcionamiento de las comisiones de seguridad e higiene en los centros de trabajo. </p>

                        <h6><strong> NOM-026-STPS-2008 </strong></h6>
                        <p> Colores y señales de seguridad e higiene, e identificación de riesgos por fluidos conducidos en tuberías. </p>

                        <h6><strong> NOM-028-STPS-2012 </strong></h6>
                        <p> Seguridad en los procesos y equipos críticos que manejen sustancias químicas peligrosas. </p>

                        <h6><strong> NOM-030-STPS-2009 </strong></h6>
                        <p> Servicios preventivos de seguridad y salud en el trabajo. </p>

                        <Link className="text-decoration-none d-flex flecha" to={'/Seguridad_Salud'}>
                            <p className='px-2'>Saber más...  <span className=' fs-4'> < MdOutlineKeyboardDoubleArrowRight /> </span> </p>
                            
                        </Link>
                    </div>



                   {/* <div className="col-lg-4">
                        <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>

                        <Link className="text-decoration-none" to={'/About'}><h2 className="h4 fw-bolder text-center"> ¿Porque Lassa? </h2> </Link>

                        <ul>
                            <li><strong> Contamos con experiencia y conocimiento en las normas. </strong></li>
                            <li><strong> Supervisamos permanentemente cada uno de nuestros servicios con entrega oportuna. </strong></li>
                            <li><strong> Cumplimos con el sistema de calidad NMX-EC-17025-IMNC-2006. </strong></li>
                            <li><strong> Ofrecemos soluciones integrales tanto a grandes industrias como a pequeños negocios en materia de medio ambiente, protección civil, seguridad y salud en el trabajo, cumpliendo con la normatividad vigente y estándares internacionales. </strong></li>
                        </ul>


                        <Link className="text-decoration-none d-flex flecha px-5" to={'/About'}>
                            <p className='px-2'>Saber más... </p> 
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </Link>
                    </div> */}

                </div>
            </div>
        </section>


        <Footer />
        
        
    </div>
  )
}

export default Inicio2








