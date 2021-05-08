import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__header">
        Go Fish
      </div>
      <ul>
        <Link href="/"><a><li>Field Workers</li></a></Link>
        <Link href="/"><a><li>Projects</li></a></Link>
        <Link href="/"><a><li>Org Profile</li></a></Link>
      </ul>
    </div>
  )
}

export default Navbar
