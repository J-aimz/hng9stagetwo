import React from 'react'
import {Link} from 'react-router-dom'

function LinksToRoute(props) {
  return (
    <div className='route-link-con'>
        <Link className='route-link links' to={props.path} id={props.id}>{props.title}</Link>
    </div>
  )
}

export default LinksToRoute