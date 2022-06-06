import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getStarship, selectStarship } from '../ListOfStarships/listOfStarshipsSlice';

function StarShip() {
  const currentStarship = useAppSelector(selectStarship)
  const dispatch = useAppDispatch()
  const loc = useParams()
  useEffect(() => {
    dispatch(getStarship(loc.id))
  }, [loc.id, dispatch]);

  return <>
    <h1>Name: {currentStarship.name}</h1>
    <h1>Model: {currentStarship.model}</h1>
    <h1>Manufacturer: {currentStarship.manufacturer}</h1>
    <h1>Passengers: {currentStarship.passengers}</h1>
  </>
}

export default StarShip