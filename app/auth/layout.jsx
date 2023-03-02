import React from 'react'

export default function AuthLayout({ children }) {
  return (
    <div>
      <main>
        <nav>Authlayout</nav>
        {children}
      </main>
    </div>
  )
}
