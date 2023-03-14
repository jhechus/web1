import Footer from '../components/Footer'
import Servicios from '../components/Servicios'

import ftAlimentos from '../images/alimentos.png'
import { IoFastFoodOutline } from "react-icons/io5";

function Alimentos() {
  return (
    <div>
    <div id='top'>
      <section className="card bgMyA my-1 py-4 text-center">
        <div className="card-body">
          <h2 className="m-0"> Muestreos y Análisis de Alimentos </h2>
        </div>
      </section>
    </div>

    <section>
      <div className="row gx-4 px-5 gx-lg-5 align-items-center my-5 w-100">
          <div className="col-lg-6"><img className="img-fluid rounded mb-4 mb-lg-0" src={ftAlimentos} alt="..." /></div>
          <div className="col-lg-6">
            <h4 className=' text-center'> Principales Servicos </h4>
            <br />
            <ul className=' list-unstyled'>
              <li className=' fs-5'><span><IoFastFoodOutline/></span> Análisis de hielo. </li>
              <li className=' fs-5'><span><IoFastFoodOutline/></span> Análisis de agua embotellada. </li>
              <li className=' fs-5'><span><IoFastFoodOutline/></span> Análisis de alimentos. </li>
            </ul>

            <p className='fs-5'><strong> NOM-127-SSA1-1994 </strong>  Salud ambiental, agua para uso y consumo humano. </p>
            <p className='fs-5'><strong> NOM-201-SSA1-2015 </strong> Agua y hielo para consumo humano, envasados y a granel. </p>
            <p className='fs-5'> Contenido neto y tabla nutrimental. </p>
          </div>
      </div>
    </section>

    <section>
      <div className=' container '>
        <div className=' row'>
          <div className=' col-md-6'> 
            <h5> Análisis microbiológicos: </h5>
              <ul>
                <li> Mesófilos aerobios. </li>
                <li> Hongos y levaduras. </li>
                <li> Coliformes totales y fecales. </li>
                <li> Salmonella y Echerichia Coli. </li>
              </ul>
          </div>

          <div className=' col-md-6'>
            <h5> Análisis bromatológicos: </h5>
            <ul>
              <li> Grasas y Aceites. </li>
              <li> Cenizas, proteínas, fibra cruda, carbohidratos y azucares. </li>
            </ul>
          </div>
        </div>
      </div>
    </section>


   

    <Servicios/>

  <Footer/>

  </div>
  )
}

export default Alimentos
