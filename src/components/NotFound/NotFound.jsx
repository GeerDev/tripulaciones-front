import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
  <div className="card animate__animated animate__fadeIn">
  <div>
  <div className="starsec"></div>
  <div className="starthird"></div>
  <div className="starfourth"></div>
  <div className="starfifth"></div>
</div>

<div className="lamp__wrap">
  <div className="lamp">
    <div className="cable"></div>
    <div className="cover"></div>
    <div className="in-cover">
      <div className="bulb"></div>
    </div>
    <div className="light"></div>
  </div>
</div>
<section className="error">
  <div className="error__content">
    <div className="error__message message">
      <h1 className="message__title">Página no encontrada</h1>
      <p className="message__text">Lo sentimos, la página que buscaba no se encuentra aquí. El enlace que ha seguido puede estar roto o ya no existe.</p>
    </div>
  </div>

</section>
      </div>
    )
  }
  
  export default NotFound