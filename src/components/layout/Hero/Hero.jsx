import { Button } from '../../common/Button/Button'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.section}>
      <div className={styles.map}>
        <img className={styles.mapImg} src="https://apicolombiastorage.blob.core.windows.net/maps/2-politicio-administrativo.jpg" alt="" />
      </div>
      <div className={styles.heroText}>
        <h1>Prueba Tecnica Consumiendo la API de Colombia</h1>
        <p>API Colombia is a public RESTful API that enable users to obtain a variety of public information about the country Colombia.</p>
        <div className={styles.heroButtons}>
          <a href="">
            <Button text={'Docs API'} />
          </a>
        </div>
      </div>
    </section>
  )
}
