import Styles from './Home.module.css'

export default function Home() {
  return (<section className={Styles['home']}>
    <img src="profile.jpg" alt="Profile picture" className={Styles['profile']}/>
    <h1>JOSUÉ MARTÍNEZ</h1>
    <h3>DEVELOPER</h3>
  </section>)
}