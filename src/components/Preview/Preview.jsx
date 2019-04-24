import React from 'react'
import './Preview.scss'
import { Link } from 'react-router-dom'

export default function Preview(props) {
  return (
    <Link to={props.link ? props.link: ''} className="Preview">
        <div className="Wrapper">
            <div className="ImageWrapper"  style={{backgroundImage: 'url(' + props.image + ')'}}>
            </div>
            <div className="TextWrapper">
                <h2 className="Title">{props.title}</h2>
                <p className="Text">{props.text}</p>
            </div>
        </div>
    </Link>
  )
}
