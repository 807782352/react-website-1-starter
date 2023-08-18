import React from 'react'
import './index.css'

export default function SectionHeader({icon, title, className}) {
  return (
    <div className={`section__header ${className}`}>
        <span>{icon}</span>
        <h2>{title}</h2>
    </div>
  )
}
