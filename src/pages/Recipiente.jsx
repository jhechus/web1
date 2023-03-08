import React from 'react'

function Recipiente() {
  return (
    <div>
      <section>
        <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5">
            <div className="col-lg-6"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://dummyimage.com/900x600/dee2e6/6c757d.jpg" alt="..." /></div>

            <div className="col-lg-6">
                <h6><strong>Laboratorio Analitico Ambiental, S.A de C.V. </strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis dolorum sequi vitae minima illo ex, est error adipisci saepe earum, consequatur sed mollitia eaque, cupiditate praesentium nobis vero similique excepturi! </h6>

                    <br />
                <h3 className=' text-danger'> Cumplimiento al 100% de la 'NOM-020-STPS-2011' </h3>
                <ul>
                  <li className=' fs-4'> Recipientes sujetos a presion </li>
                  <li className=' fs-4'> Generadores de vapor (Calderas) </li>
                  <li className=' fs-4'> Recipientes criogénicos </li>
                  <li className=' fs-4'> Condiciones de seguridad </li>
                </ul>
                <br /> 

                <h1 className="font-weight-light text-center pb-2"> Principales Servicios </h1>

                
                  <div className='col-md-12 '>
                    <ul>
                      <li className=' fs-5'> Ingreso ante STPS. </li>
                      <li className=' fs-5'> Dictamen Unidad de Verificación. </li>
                      <li className=' fs-5'> Capacitación con Constancia DC3. </li>
                      <li className=' fs-5'> Pruebas no destructivas. </li>
                    </ul>
                  </div>

                  <div className='col-md-12 '>
                    <ul>
                      <li className=' fs-5'> Ingreso ante STPS. </li>
                      <li className=' fs-5'> Dictamen Unidad de Verificación. </li>
                      <li className=' fs-5'> Capacitación con Constancia DC3. </li>
                      <li className=' fs-5'> Pruebas no destructivas. </li>
                    </ul>
                  </div>
                


            </div>
        </div>
      </section>
    </div>
  )
}

export default Recipiente

