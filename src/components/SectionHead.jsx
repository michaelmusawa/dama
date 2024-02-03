import React from 'react'


const SectionHead = ({icon, title, subtitle, className}) => {
  return (
    <div className={`section__head ${className}`}>
        <span>{icon}</span>
        <h4>{subtitle}</h4>
        <h2>{title}</h2>
    </div>
  )
}

export default SectionHead