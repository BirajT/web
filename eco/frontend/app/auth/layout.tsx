import React from 'react'

const layout = ({children}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
        <div>
            Auth Layout
        </div>
      {children}
    </div>
  )
}

export default layout
