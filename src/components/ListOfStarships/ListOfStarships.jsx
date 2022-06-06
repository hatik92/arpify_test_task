import React from 'react'
import { Link } from 'react-router-dom'

function ListOfStarships({index}) {
  
  return <Link to={`listOfStarships/${index}`} style={{ textDecoration: 'none', color: 'rgb(255, 230, 0)' }}>Starship {index}</Link>
}

export default ListOfStarships