import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGrinBeam } from '@fortawesome/free-solid-svg-icons'
import { faNpm, faLinkedin, faStackOverflow, faYoutube, faVimeo, faGithub, faTwitter, faTwitch } from '@fortawesome/free-brands-svg-icons'

export const AppFooter = () => (<>
  <br />
  <FontAwesomeIcon icon={faGrinBeam} size="2x" />
  <br /> <br />
  ~ Open Source and Social links ~
  <footer className="footer-links">
    <a href="https://www.linkedin.com/in/stjohnpeaster/" title="Linked In"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
    <a href="https://github.com/StJohn3D" title="Git Hub"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
    <a href="https://mobile.twitter.com/StJohn3D" title="Twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
    <a href="https://stackoverflow.com/users/5900250/stjohn3d" title="Stack Overflow"><FontAwesomeIcon icon={faStackOverflow} size="2x" /></a>
    <a href="https://www.npmjs.com/~stjohn3d" title="npm"><FontAwesomeIcon icon={faNpm} size="2x" /></a>
    <a href="https://vimeo.com/stjohn3d/videos/appears/sort:date" title="Vimeo"><FontAwesomeIcon icon={faVimeo} size="2x" /></a>
    {/* <a href="https://www.youtube.com/channel/UCM12bKTjKcR3DpnpVHXDQig" title="You Tube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a> */}
    <a href="https://www.twitch.tv/stjohn3d" title="Twitch"><FontAwesomeIcon icon={faTwitch} size="2x" /></a>
  </footer>
</>)
