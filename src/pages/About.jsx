import React from 'react'
import { FaCircle } from "react-icons/fa";
import Footer from '../components/Footer';
import vision from '../images/vision.png'
import mision from '../images/mission.png'

function About() {
  return (
    <div>
      
            <header className="py-1" id='nosotros'>
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xxl-8">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3"> Política de Calidad </h1>
                                <p className="lead fw-normal text-muted justify "> Es política de calidad de <span className='Laa'> Laboratorio Analítico Ambiental, S.A. de C.V. </span>  cumplir con los requisitos de nuestros clientes, tanto internos como externos, bajo las normas mexicanas correspondientes; así como la NMX-EC-17025-IMNC-2018, mediante equipos de vanguardia y personal competente, capacitado continuamente para la elaboración de estos, manteniendo una comunicación estrecha entre todos los organismos involucrados para obtener los mejores resultados. </p>
                                {/*<a className="btn btn-primary btn-lg" href="#scroll-target"> Nuestra historia </a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section className="py-5 bg-light MyV" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src={vision} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder"> Nuestra Visión </h2>
                            <p className="lead fw-normal text-muted mb-0 justify px-2"><span className='Laa'> Laboratorio Analítico Ambiental, S.A. de C.V. </span> busca convertirse en un proveedor confiable para cada uno de nuestros clientes, cumpliendo con los desafíos que se nos presenten mediante equipos de vanguardia, personal comprometido con las actividades para su organización y capacitado en las normativas que se requieran. Siempre trabajando con honestidad y responsabilidad para cada uno de los interesados.
                            <br /> <br /> 
                            Formar vínculos de comunicación con su organización para que tengan la confianza de buscar nuestro asesoramiento y contribuir a un beneficio para su empresa. Buscamos la mejora continua en nuestras actividades y nuestro sistema de gestión.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-5 MyV">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src={mision} alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder"> Nuestra Misión </h2>
                            <p className="lead fw-normal text-muted mb-0 justify"> Buscamos brindar un servicio eficiente y seguro para nuestros clientes en cada trabajo realizado, para crear una relación de confianza mutua en el desempeño de nuestras actividades diarias.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light" id='valores'>
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xxl-8">
                            <div className="text-center my-3">
                                <h1 className="fw-bolder mb-3"> Nuestros Valores </h1>
                                <p className="lead fw-normal text-muted fs-3"><span className='Laa fs-3'> Laboratorio Analítico Ambiental, S.A de C.V. </span> cuenta con los siguientes valores: </p>
                            </div>

                            <div className='allvalors'>
                                <div className='ourvalors d-flex align-items-center' >
                                    <ion-icon  name="ellipse"></ion-icon> 
                                    <p>Confianza</p>
                                </div>
                                    
                                <div className='ourvalors d-flex align-items-center' >
                                    <ion-icon name="ellipse"></ion-icon> 
                                    <p>Honestidad</p>
                                </div>

                                <div className='ourvalors d-flex align-items-center' >
                                    <ion-icon name="ellipse"></ion-icon> 
                                    <p>Comunicación</p>
                                </div>

                                <div className='ourvalors d-flex align-items-center' >
                                    <ion-icon className='icono' name="ellipse"></ion-icon> 
                                    <p>Respeto</p>
                                </div>

                                <div className='ourvalors d-flex align-items-center' >
                                    <ion-icon name="ellipse"></ion-icon> 
                                    <p>Responsabilidad</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      <Footer/>
    </div>
  )
}

export default About
