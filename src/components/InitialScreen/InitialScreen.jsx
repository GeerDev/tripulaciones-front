import { Link } from 'react-router-dom';
import empleado from '../../img/empleado.jpg'
import empresa from '../../img/empresa.jpg'
import logo from '../../img/logo.svg'
import './InitialScreen.scss'

const InitialScreen = () => {
  return (
    <div className='initial-screen'>
      <section className='section-initial-screen'>
      <img src={logo}  />
        <h1>BIENVENID@</h1>
        <h3>¿Te atreves a ser más sostenible?</h3>
        </section>
        <ul>
          <li>
          <img src={ empresa}  />
            <Link to='/registercompany'> Empresa </Link>
        </li>
        <li>
            <img src={ empleado}  />
            <Link to='/registeruser'> Emplead@ </Link>
          </li>
        </ul>
    </div>
  )
}

export default InitialScreen