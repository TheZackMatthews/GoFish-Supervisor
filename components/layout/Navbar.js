import React from 'react'
import Link from 'next/link'
import { useAuth } from '../../auth'

const Navbar = () => {
  const { user } = useAuth();
  
  return (
    <nav>
    <div className="navbar">
      <div className="navbar__header">
        Go Fish
      </div>
      <ul>
        {user && <Link href="/"><a><li>Field Workers</li></a></Link>}
        {user && <Link href="/"><a><li>Projects</li></a></Link>}
        {user && <Link href="/"><a><li>Org Profile</li></a></Link>}
        {user ? (
          <Link href="/logout"><a><li>Log Out</li></a></Link>
        ) : (
          <Link href="/login"><a><li>Log In</li></a></Link>
        )}
      </ul>
    </div>
    </nav>
  )
}

export default Navbar
