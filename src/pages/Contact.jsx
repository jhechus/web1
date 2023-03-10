import React from 'react'
import Mapa from '../components/Mapa' 
import { BsFacebook } from "react-icons/bs";
import { Link } from 'react-router-dom';

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
                <div className="col-md-12 col-xl-6">
                    <form action="/procesos/submit.php" method="post" className="my-form">
                        <h4>Contactanos </h4>
                        <br />
                        <div className="form-group pb-3">
                            <label for="form-name"> Nombre</label>
                            <input type="name" name="name" className="form-control" id="form-name" placeholder="" />
                        </div>
                        <div className="form-group pb-3">
                            <label for="form-email">Correo</label>
                            <input type="email" name="email" className="form-control" id="form-email" placeholder="" />
                        </div>
                        <div className="form-group pb-3">
                            <label for="form-subject">Celular</label>
                            <input type="tel" name="celular" className="form-control" id="form-subject" placeholder="" />
                        </div>
                        <div className="form-group pb-3">
                            <label for="form-message">Tu mensaje:</label>
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
                <a href="#" className=' text-decoration-none'><BsFacebook name="logo-facebook" className="social-icon" /> </a>
                <a href="#" className=' text-decoration-none'><BsFacebook name="logo-facebook" className="social-icon" /> </a>
                <a href="#" className=' text-decoration-none'><BsFacebook name="logo-facebook" className="social-icon" /> </a>
                <a href="#" className=' text-decoration-none'><BsFacebook name="logo-facebook" className="social-icon" /> </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default contact
