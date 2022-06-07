import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { films } from '../../api/api'

const initialState = {
  films: {
    count: 0,
    next: null,
    previous: null,
    results: []
  }
}

export const getFilms = createAsyncThunk(
  'allFilms/films',
  async () => {
    const response = await films.getFilms()
    return response
  }
)

export const filmsSlice = createSlice({
  name: 'allFilms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.fulfilled, (state, action) => {
        state.films = action.payload
        // state.films.results.map
        // const filmId = []
        for (let index = 0; index < state.films.results.length; index++) {
          const id = state.films.results[index].url.split('/')
          const indexOfFilm = id[id.length-2]
          state.films.results[index].filmId = indexOfFilm
          // filmId.push({indexOfStarShip: indexOfFilm})
        }
        // state.filmById.starships = filmId
      })
  }
})

// Action creators are generated for each case reducer function
export const selectFilms = (state) => state.allFilms.films

export default filmsSlice.reducer