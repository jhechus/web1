import React from 'react'
import { FaCircle } from "react-icons/fa";

function About() {
  return (
    <div>
      
            <header className="py-1">
                <div className="container px-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 col-xxl-8">
                            <div className="text-center my-5">
                                <h1 className="fw-bolder mb-3"> Politica de Calidad </h1>
                                <p className="lead fw-normal text-muted"> Es politica de calidad de Laboratorio Analitico Ambiental, S.A de C.V. cumplir con los requisitos de nuestros clientes tanto internos como externos bajo las normas mexicanas correspondientes; asi como la NMX-EC-17025-IMNC-2018 mediante equipos de vanguardia y personal competente, y capacitada continuamente para la elaboracion de estos, manteniendo una comunicacion estrecha entre todos los organismos involucrados para obtener los mejores resultados. </p>
                                {/*<a className="btn btn-primary btn-lg" href="#scroll-target"> Nuestra historia </a>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder"> Nuestra Vision </h2>
                            <p className="lead fw-normal text-muted mb-0">Laboratorio Analitico Ambiental, S.A de C.V. busca convertirse en un proveedor confiable para cada uno de nuestros clientes cumpliendo con los desafios que se nos presenten mediante equipos de vanguardia, personal comprometido con las actividades de la organizacion y capacitado en las normativas que se requieran, siempre trabajando con honestidad y responsabilidad para cada uno de los interesados.
                            <br /> <br /> 
                            Formar vinculos de comunicacion con las empresas para que tengan la confianza de buscar nuestro asesoramiento y contribuir a un beneficio para con su empresa. Buscamos la mejora. continua en nuestras actividades y nuestro sistema de gestion. </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder"> Nuestra Mision </h2>
                            <p className="lead fw-normal text-muted mb-0"> Buscamos brindar un servicio eficiente y seguro para con nuestros clientes en cada trabajo realizado para crear una relacion de confianza mutua en el desempeño de nuestras actividades diarias.</p>
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
                                <p className="lead fw-normal text-muted fs-3"> laboratorio Analitico Ambiental, S.A de C.V. cuenta con los siguientes valores: </p>
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
                                    <p>Comunicacion</p>
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
      
    </div>
  )
}

export default About
