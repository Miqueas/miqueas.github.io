import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Styles from './Home.module.css'

import Footer from './Footer'

export default function Home() {
  return (<>
    <main className={Styles['home']}>
      <img src='profile.jpg' alt='Profile picture' className={Styles['profile']}/>
      <h1>JOSUÉ MARTÍNEZ</h1>
      <h3>DEVELOPER</h3>
      <ul className={Styles['social']}>
        <li>
          <a href='mailto:miqueas2020@yahoo.com'>
            <FontAwesomeIcon icon={faEnvelope}/>
            <span>Email</span>
          </a>
        </li>
        <li>
          <a href='https://wa.me/573238152847'>
            <FontAwesomeIcon icon={faWhatsapp}/>
            <span>WhatsApp</span>
          </a>
        </li>
        <li>
          <a href='https://github.com/Miqueas'>
            <FontAwesomeIcon icon={faGithub}/>
            <span>Github</span>
          </a>
        </li>
      </ul>
    </main>
    <Footer/>
  </>)
}