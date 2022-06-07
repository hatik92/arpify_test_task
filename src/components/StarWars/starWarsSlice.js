import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { films } from '../../api/api'

const initialState = {
  filmById: {
    title: "",
    episode_id: null,
    opening_crawl: "",
    director: "",
    producer: "",
    release_date: "",
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    created: "",
    edited: "",
    url: ""
  }
}

export const getFilmsById = createAsyncThunk(
  'films/filmById',
  async (filmId, thunkAPI) => {
    const response = await films.getFilmsById(filmId)
    return response.data
  }
)

export const starWarsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getFilmsById.fulfilled, (state, action) => {
        state.filmById = action.payload
        const starships = []
        for (let index = 0; index < state.filmById.starships.length; index++) {
          const url = state.filmById.starships[index].split('/')
          const indexOfStarShip = url[url.length-2]
          starships.push({indexOfStarShip})
        }
        state.filmById.starships = starships
      })
  }
})

// Action creators are generated for each case reducer function
export const selectFilm = (state) => state.starWars.filmById

export default starWarsSlice.reducer