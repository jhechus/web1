import React from 'react'
import Lassa from '../images/logoo.png'
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";

function Footer() {
  return (
    <div>

        {/*
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#dddddd" fill-opacity="1" d="M0,320L26.7,304C53.3,288,107,256,160,208C213.3,160,267,96,320,90.7C373.3,85,427,139,480,149.3C533.3,160,587,128,640,144C693.3,160,747,224,800,218.7C853.3,213,907,139,960,144C1013.3,149,1067,235,1120,240C1173.3,245,1227,171,1280,160C1333.3,149,1387,203,1413,229.3L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
  */}
        
        <footer className=" text-center text-lg-start bgfot">
            
            <div className="container p-4">
            
            <div className="row mt-4 jesus">
                
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0 justify-content-center text-center lab">
                    <img src={Lassa} alt="" className=' my-3'/>

                    <h4 className=' text-center '> Laboratorio Analítico Ambiental <br /> S.A. de C.V. </h4>
                </div>
                
                {/*Grid column*/}
                <div className="col-lg-6 col-md-12 mb-4 mb-md-0 py-2 contactanos">
                    <h5 className="text-uppercase mb-4 pb-1 text-center"> Contactanos. </h5>


                    {/* <div className="form-outline form-white mb-4">
                        <input type="text" id="formControlLg" className="form-control form-control-lg" />
                        <label className="form-label" for="formControlLg">Search</label>
                        </div> */}

                    <ul className="fa-ul list-unstyled ">
                        <li className="mb-3 ">
                            <span className="fa-li vanee"><GoLocation/></span><span className="ms-2 vanee"> P.º San Francisco 1, Jardines de Atizapan, 52975 </span>
                        </li>
                        <li className="mb-3">
                             <a href="mailto: gerencia@laasamexico.com.mx " className=''><span className="fa-li vane"><AiOutlineMail /></span><span className="ms-2 vane">gerencia@laasamexico.com.mx 
                            </span></a>
                        </li>
                        <li className="mb-3">
                            <a href="mailto:calidad@laasamexico.com.mx " className='' ><span className="fa-li vane"><AiOutlineMail /></span><span className="ms-2 vane">calidad@laasamexico.com.mx
                            </span></a>
                        </li>
                        <li className="mb-3">
                            <a href="mailto:contacto@laasamexico.com.mx " className=''><span className="fa-li vane"><AiOutlineMail /></span><span className="ms-2 vane">contacto@laasamexico.com.mx
                            </span></a>
                        </li>
                        <li className="mb-3">
                            <a href="tel:+525513887032" className=''><span className="fa-li vane"><FiPhone/></span><span className="ms-2 vane"> 5513887032 </span></a>
                        </li>
                    </ul>
                </div>
                {/*Grid column*/}

                {/*
                {/*Grid column}
                <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase mb-4 text-center"> Horarios de Atencion</h5>

                    <table className="table text-center">
                        <tbody className="fw-normal vane">
                        <tr className='table-row'>
                            <td>Lunes - Jueves:</td>
                            <td> 9am - 5pm</td>
                        </tr>
                        <tr className='table-row'>
                            <td> Viernes: </td>
                            <td> 9am - 4pm </td>
                        </tr>
                        <tr className='table-row'>
                            <td> Sabado - Domingo </td>
                            <td> Cerrado </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/*Grid column}
                */}
            </div>
            
            </div>
            

            {/* Copyright */} 
            <div className="text-center p-3 vanee d-flex justify-content-center text-decoration-none">
            © 2023 Copyright:
            <span className="yuli fw-bold px-2"> Lassa </span>

            </div>
            
        </footer>


    </div>
  )
}

export default Footer
