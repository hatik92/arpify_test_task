import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import ListOfStarships from '../ListOfStarships/ListOfStarships'
import { getFilmsById, selectFilm } from './starWarsSlice'

function StarWars() {
  const dispatch = useAppDispatch()
  const myFilms = useAppSelector(selectFilm)
  const params = useParams()
  useEffect(() => {
    dispatch(getFilmsById(params.id))
  }, [dispatch, params.id]);


  return (
    <div>
      <h1>{myFilms.title}</h1>
      <p>{myFilms.opening_crawl}</p>
      {myFilms.starships.length > 0 && myFilms.starships.map((starship, i) => <div key={i}>
        <ListOfStarships index={starship.indexOfStarShip} />
        <br />
      </div>
      )}
    </div>
  )
}

export default StarWars