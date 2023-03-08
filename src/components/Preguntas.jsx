import React from 'react'

function Preguntas() {
  return (
    <div>
      <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder"> Preguntas mas Frecuetnes </h1>
                        <p className="lead fw-normal text-muted mb-0">Como te podemos ayudar?</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            
                            <h2 className="fw-bolder mb-3"> Las Preguntas Mas Frecuetnes </h2>
                            <div className="accordion mb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> Pregunta 1</button></h3>
                                    <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>Respuesta detallada</strong>
                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum temporibus natus iure, delectus quisquam aperiam necessitatibus totam quibusdam minus quaerat minima rerum omnis officia! Magnam adipisci est quas doloremque nisi.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"> Pregunta 2</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong>Respuesta detallada</strong>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum suscipit quae, provident illum nulla temporibus. Exercitationem, excepturi ipsa! Repellendus nihil accusamus optio mollitia placeat repudiandae quis quam. Ducimus, velit ex?
                                            Inventore nemo molestias quaerat facilis aliquid sapiente doloribus sunt omnis consequuntur minima amet, laborum reiciendis iure saepe a, deserunt ipsa eaque quod repellendus? Quae laborum, dolore repudiandae quidem dignissimos magni.
                                            Exercitationem minima deleniti possimus doloremque iste quisquam consequatur obcaecati asperiores eligendi, distinctio sapiente adipisci accusantium quasi a quidem pariatur, rerum vitae? Odit nesciunt quidem omnis? Tempora corrupti autem esse ipsam?
                                            Exercitationem sapiente mollitia cupiditate omnis dicta? Maiores corrupti recusandae mollitia debitis quaerat quia alias optio, placeat harum suscipit nobis sapiente totam magni porro adipisci blanditiis nam error earum aperiam veritatis!
                                            Officia voluptatem commodi omnis minima veniam exercitationem id consequatur nam nobis, corrupti, temporibus rem similique enim cum, dolores eum deserunt blanditiis fugiat odio accusamus eaque dicta illum. Vel, fuga dolorum?
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"> Pregunta 3</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <strong></strong>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod placeat sapiente sed unde repellat alias deleniti rem ipsum, optio nisi, cumque beatae fuga quas nobis explicabo consequuntur tenetur atque?
                                            Molestiae quaerat iste nulla provident mollitia eligendi aliquid fugit officiis perspiciatis, voluptatibus, eius repellendus! Nihil corrupti tempora vitae voluptatum ullam minima saepe quas fugit laboriosam? Obcaecati illo in quia aut?
                                            Sint laudantium minus laboriosam inventore a cupiditate provident rerum dolores error velit nam consequatur porro est dolore ut, quam corporis delectus atque? Possimus libero aperiam, esse fuga beatae quidem voluptates!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card border-0 bg-light mt-xl-5">
                                <div className="card-body p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">Have more questions?</div>
                                            <p className="text-muted mb-4">
                                                Contact us at
                                                <br />
                                                <a href="#!">support@domain.com</a>
                                            </p>
                                            <div className="h6 fw-bolder">Follow us</div>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Preguntas
