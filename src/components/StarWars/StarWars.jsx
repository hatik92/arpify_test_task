import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ListOfStarships from '../ListOfStarships/ListOfStarships'
import { getFilmsById, selectFilms } from './starWarsSlice'

function StarWars() {
  const dispatch = useAppDispatch()
  const myFilms = useAppSelector(selectFilms)
  useEffect(() => {
    dispatch(getFilmsById())
  }, [dispatch]);
  

  return (
    <div>
      <h1>{myFilms.title}</h1>
      <p>{myFilms.opening_crawl}</p>
      {myFilms.starships.length > 0 && myFilms.starships.map((starship, i) =><div key={i}>
        <ListOfStarships index={starship.indexOfStarShip} />
        <br />
      </div>
      )}
    </div>
  )
}

export default StarWars