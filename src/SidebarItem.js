import React from 'react'

export default function SidebarItem( props ) {
    return (
      <button 
        onClick={props.handleClick}
        className={`sidebar-item ${props.active ? 'active' : ''}`}
      >
        {props.name}
        </button>
    )
}
