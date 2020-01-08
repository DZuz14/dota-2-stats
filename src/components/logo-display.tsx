/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

interface Props {
  logo: string
  height: number
  width: number
  children: any
}

/**
 * @function LogoDisplay
 */
const LogoDisplay = ({ logo, height, width, children }: Props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div
        style={{
          display: !logo ? 'none' : 'initial',
          height: `${height}px`,
          width: `${width}px`,
          backgroundImage: `url('${logo}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateY(1px)'
        }}
      />

      <div style={{ marginLeft: '8px' }}>{children}</div>
    </div>
  )
}

export default LogoDisplay
