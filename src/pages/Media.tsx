import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVimeoSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
import { Content } from '../components/Content'

export const Media = () => {
  return (
    <Content>
      <a href="https://vimeo.com/stjohn3d/videos/appears/sort:date" target="blank">
        <FontAwesomeIcon icon={faVimeoSquare} /> Vimeo
      </a>
      <a href="https://www.youtube.com/channel/UCHUiwM3sIogMjfwaN60Q-8A" target="blank">
        <FontAwesomeIcon icon={faYoutubeSquare} /> YouTube
      </a>
    </Content>
  )
}