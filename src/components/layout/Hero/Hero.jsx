import { Link } from 'react-router-dom'
import { Button } from '../../common/Button/Button'
import './Hero.css'

export const Hero = () => {
  return (
    <section>
      <div className="map">
        <img className="map-img" src="https://apicolombiastorage.blob.core.windows.net/maps/2-politicio-administrativo.jpg" alt="" />
      </div>
      <div className='hero-text'>
        <h1>Prueba Tecnica Consumiendo la API de Colombia</h1>
        <p>API Colombia is a public RESTful API that enable users to obtain a variety of public information about the country Colombia.</p>
        <div className='hero-buttons'>
          <a href="">
            <Button text={'Docs API'} />
          </a>
          <Link to='/login'>
            <Button text={'Sign Up'} />
          </Link>
        </div>
      </div>
    </section>
  )
}
