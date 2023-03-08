import React from 'react'

function inicio3() {
  return (
    <div>
         <section className="bg-dark py-5">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2"> Lassa </h1>
                                <p className="lead fw-normal text-white-50 mb-4"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quidem fugiat eius illo, aut cum quam neque, incidunt ea magni sit temporibus animi blanditiis aspernatur quae atque id. Ratione, possimus. </p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-primary btn-lg px-4 me-sm-3" href="#features"> Contactanos </a>
                                    <a className="btn btn-outline-light btn-lg px-4" href="#!"> Saber mas </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img className="img-fluid rounded-3 my-5" src="https://dummyimage.com/600x400/343a40/6c757d" alt="..." /></div>
                    </div>
                </div>
            </section>
            
            <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0"> Nuestros Servicios </h2></div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection"></i></div>
                                    <h2 className="h5"> Servicio Nombre </h2>
                                    <p className="mb-0"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, illo, voluptatem similique aspernatur repudiandae ad facilis laboriosam quod aliquam commodi illum, magni voluptas. Voluptatem eligendi earum quidem odio expedita illo?</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building"></i></div>
                                    <h2 className="h5"> Servicio Nombre </h2>
                                    <p className="mb-0"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, illo, voluptatem similique aspernatur repudiandae ad facilis laboriosam quod aliquam commodi illum, magni voluptas. Voluptatem eligendi earum quidem odio expedita illo?</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                                    <h2 className="h5"> Servicio Nombre </h2>
                                    <p className="mb-0"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, illo, voluptatem similique aspernatur repudiandae ad facilis laboriosam quod aliquam commodi illum, magni voluptas. Voluptatem eligendi earum quidem odio expedita illo?</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2"></i></div>
                                    <h2 className="h5"> Servicio Nombre </h2>
                                    <p className="mb-0"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, illo, voluptatem similique aspernatur repudiandae ad facilis laboriosam quod aliquam commodi illum, magni voluptas. Voluptatem eligendi earum quidem odio expedita illo?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      
    </div>
  )
}

export default inicio3
