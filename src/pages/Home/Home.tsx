import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWrench, faCog, faShareAlt, faGrinBeam } from '@fortawesome/free-solid-svg-icons'
import { Content } from '../../components/Content'

export const Home = () => {
  return (
    <Content>
      A personal site by <a href="https://mobile.twitter.com/StJohn3D" >St. John Peaster</a>.
      <br />
      Code • Art • Games
      <br /><br />
      <FontAwesomeIcon icon={faCog} size="2x" />
      <br /><br />
      <FontAwesomeIcon icon={faWrench} flip="horizontal" />{' '}
      This site is largely a work in progress being built in spare-time.
      {' '}<FontAwesomeIcon icon={faWrench} />
    </Content>
  )
}
