import React from 'react'

function Links(props) {
  return (
    <a className='links' href={props.link} target="_blank" id={props.id}>{props.title}</a>
  )
}

export default Links