import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return <Link to='/films' style={{ textDecoration: 'none', color: 'rgb(255, 230, 0)' }}>Films</Link>
}

export default HomePage