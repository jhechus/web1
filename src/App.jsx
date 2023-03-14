import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'

// Componentes creados 
import Navegacion from "./components/Navegacion"
import Clientes from './pages/SeguridadySalud'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import ProteccionCivil from "./pages/ProteccionCivil"
import Ambiental from "./pages/Ambiental"
import EstudiosyProyectos from "./pages/EstudiosyProyectos"
import ServicioMedico from "./pages/ServicioMedico"
import Blog from "./pages/Blog"
import Acreditaciones from "./pages/Acreditaciones"
import Recipiente from "./pages/Recipiente"
import MuestreosyAnalisis from "./pages/MuestreosyAnalisis"
import SeguridadySalud from "./pages/SeguridadySalud"
import ScrollToTop from "./components/ScrollToTop"

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route 
            path="/"
            element={ <Navegacion/> }
          >
            <Route path="About"                 element={ <About             /> } />
            <Route index                        element={ <Home              /> } />
            <Route path="Contact"               element={ <Contact           /> } />
            <Route path="Seguridad_Salud"       element={ <SeguridadySalud   /> } />
            <Route path="Recipientes_a_Presion" element={ <Recipiente        /> } />
            <Route path="Muestreos_Analisis"    element={ <MuestreosyAnalisis/> } />
            <Route path="Proteccioncivil"       element={ <ProteccionCivil   /> } />
            <Route path="Ambiental"             element={ <Ambiental         /> } />
            <Route path="proyectosyAmbiental"   element={ <EstudiosyProyectos/> } />
            <Route path="ServicioMedico"        element={ <ServicioMedico    /> } /> 
            <Route path="Blog"                  element={ <Blog              /> } />
            <Route path="Acreditaciones"        element={ <Acreditaciones    /> } />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
