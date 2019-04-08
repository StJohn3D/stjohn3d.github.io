import React from 'react'
import './Content.scss'

export const Content = (props: any) => {
  return (
    <article className="App-content">
      {props.children}
    </article>
  )
}