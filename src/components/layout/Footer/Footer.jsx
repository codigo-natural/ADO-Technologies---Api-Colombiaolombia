import { Logo } from '../../../utils/constants'
import { socials } from '../../../utils/constants'
import './Footer.css'

export const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-columns">
          <div className="footer-logo">
            <img src={Logo} alt='ado technologies' />
            <p>USA, Israel, Colombia, Ecuador</p>
          </div>
          <div>
            <ul>
              <li>
                <a href="#" title="Documentation">Documentation</a>
              </li>
              <li>
                <a href="#" title="Release Notes">Release Notes</a>
              </li>
              <li>
                <a href="#" title="Status">Status</a>
              </li>
            </ul>
          </div>
          <div className='social-links'>
            {socials.map((social, index) => {
              return (
                <a href={social.link} key={index} title={index}>
                  <img src={social.img} alt={index} key={index} />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
