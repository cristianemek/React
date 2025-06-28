import React, { memo } from 'react'

interface smallProps{
    value: number
}

export const Small: React.FC<smallProps> = memo( ({ value }) => {
  return (
    <small>{value}</small>
  )
})
