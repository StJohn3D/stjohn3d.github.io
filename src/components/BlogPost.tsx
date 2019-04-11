import React, { SFC } from 'react'

interface IBlogPostProps {
  title: string
  datePublished: string
  /**Use to estimate Word count
   * TODO: https://marketingland.com/estimated-reading-times-increase-engagement-79830
   */
  wordCount: number,
  children: any
}

export const BlogPost: SFC<IBlogPostProps> = (props) => {
  return (<article>
    <h2>{props.title}</h2>
    <small>Published: {props.datePublished}</small>
    <p>
      {props.children}
    </p>
  </article>)
}