import React from 'react'
import Mapa from '../components/Mapa' 
import { BsFacebook, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TfiLinkedin } from "react-icons/tfi";


import Footer from '../components/Footer';

function contact() {
  return (
    <div>
      <div className="pad_100">
            <div className="container">
                <div><h1></h1></div>
                <br />
                <div className="row">
                    <div className="col-md-12 col-xl-6">
                        <div className="googlemap">
                            <Mapa />
                        </div>
                    </div>
                    <br />
                    <div className="col-md-12 col-xl-6 formulario">
                        <form action="https://formsubmit.co/jess.osm1412@gmail.com" method="POST" className="my-form">
                            <h4 className=' text-center'>Cotiza con nosotros. </h4>
                            <br />
                            <div className="form-group pb-3">
                                <label for="form-name"> Nombre : </label>
                                <input type="name" name="name" className="form-control" id="form-name" placeholder="" />
                            </div>
                            <div className="form-group pb-3">
                                <label for="form-email">Correo : </label>
                                <input type="email" name="email" className="form-control" id="form-email" placeholder="" />
                            </div>
                            <div className="form-group pb-3">
                                <label for="form-subject">Celular : </label>
                                <input type="tel" name="celular" className="form-control" id="form-subject" placeholder="" />
                            </div>
                            <div className="form-group pb-3">
                                <label for="form-message">Tu mensaje :</label>
                                <textarea className="form-control" name="mensaje" id="form-message" placeholder=""></textarea>
                            </div>
                            
                            <button type="submit" name="submit" > Enviar </button>
                            
                        
                        </form>
                    </div>
                </div>
            </div>
            <div className="container follow-us-container">
                <div className="text-center follow-us">
                    <h3>Escribenos a nuestras redes sociales</h3>
                </div>

                <br />
                <div className="text-center">
                    <a href="https://es-la.facebook.com/" className=' text-decoration-none'><BsFacebook name="logo-facebook" className="social-icon" /> </a>
                    <a href="#" className=' text-decoration-none'><BsLinkedin name="logo-link" className="social-icon" /> </a>
                    <a href="https://www.instagram.com/" className=' text-decoration-none'><BsInstagram name="logo-facebook" className="social-icon" /> </a>
                    <a href="#" className=' text-decoration-none'><FaTiktok name="logo-facebook" className="social-icon" /> </a>
                </div>
            </div>
        </div>

        <Footer/>

    </div>
  )
}

export default contact
