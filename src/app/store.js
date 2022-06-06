import { configureStore } from '@reduxjs/toolkit'
import listOfStarshipsReducer from '../components/ListOfStarships/listOfStarshipsSlice'
import starWarsReducer from '../components/StarWars/starWarsSlice'

export const store = configureStore({
  reducer: {
    starWars: starWarsReducer,
    starship: listOfStarshipsReducer
  },
})