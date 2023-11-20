// eslint-disable-next-line no-unused-vars
import React from 'react'

export function UserLayout(props) {
  // eslint-disable-next-line react/prop-types
  const { children } = props
  return (
    <div>
      <h2>Default Layout</h2>
      { children }
    </div>
  )
}

