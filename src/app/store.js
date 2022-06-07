import { configureStore } from '@reduxjs/toolkit'
import filmsReducer from '../components/Films/filmsSlice'
import listOfStarshipsReducer from '../components/ListOfStarships/listOfStarshipsSlice'
import starWarsReducer from '../components/StarWars/starWarsSlice'

export const store = configureStore({
  reducer: {
    allFilms: filmsReducer,
    starWars: starWarsReducer,
    starship: listOfStarshipsReducer
  },
})