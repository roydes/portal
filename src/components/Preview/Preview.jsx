import React from 'react'
import './Preview.scss'

export default function Preview(props) {
  return (
    <div className="Preview">
        <div className="Wrapper">
            <div className="TouchWrapper"  style={{backgroundImage: 'url(' + props.image + ')'}}></div>
            <h2 className="Title">{props.title}</h2>
            <p className="Text">{props.text}</p>
        </div>
    </div>
  )
}
