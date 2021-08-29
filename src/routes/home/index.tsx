import { FunctionalComponent, h } from 'preact'
import style from './style.css'

const Home: FunctionalComponent = () => {
  return (
    <div class={style.home}>
      <h1>This site is a work in progress</h1>
      <p>An experiment in creating a Preact site with GitHub Pages and Github Actions</p>
    </div>
  )
}

// Default export required for code splitting at this route
export default Home
