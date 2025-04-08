import React from 'react'

type Props = {
    id: string,
    title: string,
    descritpion: string,
    image: string,
    content: string,
    createdAt: Date
}

export const Blogcard = ({id, title, descritpion, image, content, createdAt}: Props) => {
  return (
    <div>
        <h1>Blog Card</h1>
        <p>{id}</p>
        <p>{title}</p>
        <p>{descritpion}</p>
        <p>{image}</p>
        <p>{content}</p>
        <p>{createdAt.toDateString()}</p>
    </div>
  )
}
