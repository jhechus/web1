import React from 'react'
import { BsFillArrowThroughHeartFill } from "react-icons/bs";

function SeguridadySalud() {
  return (
    <div>
       <div className="card bg-dark text-white">
  <img src="https://dummyimage.com/650x180/dee2e6/6c757d.jpg" className="card-img" alt="..." />
  <div className="card-img-overlay">
    <h5 className="card-title text-center fs-5 text-success"> Seguridad y salud en el trabajo </h5>

    <div className='encabezadosys '>
      <div className='d-flex'>
          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
          <p className='px-2 fs-5 text-primary'> Capacitaciones DC-03. </p> 
      </div>

      <div className='d-flex'>
          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
          <p className='px-2 fs-5 text-primary'> Programa de autogestión de seguridad y salud en el trabajo </p> 
      </div>

      <div className='d-flex'>
          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
          <p className='px-2 fs-5 text-primary'>Atención a inspecciones </p> 
      </div>

      <div className='d-flex'>
          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
          <p className='px-2 fs-5 text-primary'> Auditorias en seguridad y salud </p> 
      </div>

      <div className='d-flex'>
          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
          <p className='px-2 fs-5 text-primary'> Contestación de emplazamientos </p> 
      </div>

      <div className='d-flex'>
          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
          <p className='px-2 fs-5 text-primary'> Estudios ergonómicos (Actividades de carga manual, movimientos <br /> repetitivos, posturas forzadas, confort térmico) </p> 
      </div>

      <div className='d-flex'>
          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
          <p className='px-2 fs-5 text-primary'> Elaboración de mapas de riesgo </p> 
      </div>

      <div className='d-flex'>
          < BsFillArrowThroughHeartFill className=' fs-3 text-danger' />
          <p className='px-2 fs-5 text-primary'> Elaboración de Layout de equipo de atención a emergencias </p> 
      </div>

    </div>
    
  </div>
</div>
    </div>
  )
}

export default SeguridadySalud

