import React, { ReactNode } from 'react'

const MainLayout = ({children}:Readonly<{children: ReactNode}>) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default MainLayout