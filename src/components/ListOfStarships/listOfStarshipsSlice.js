import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { starships } from '../../api/api'

const initialState = {
  starship: {
    name: "", 
    model: "", 
    manufacturer: "", 
    cost_in_credits: "", 
    length: "", 
    max_atmosphering_speed: "", 
    crew: "", 
    passengers: "", 
    cargo_capacity: "", 
    consumables: "", 
    hyperdrive_rating: "", 
    MGLT: "", 
    starship_class: "", 
    pilots: [], 
    films: [], 
    created: "", 
    edited: "", 
    url: ""
  }
}

export const getStarship = createAsyncThunk(
  'starship/starshipByUrl',
  async (id, thunkAPI) => {
    const response = await starships.getStarships(id)
    return response.data
  }
)

export const listOfStarshipsSlice = createSlice({
  name: 'starship',
  initialState,
  reducers: { },
  extraReducers: (builder) => {
    builder
      .addCase(getStarship.fulfilled, (state, action) => {
        state.starship = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const selectStarship = (state) => state.starship.starship

export default listOfStarshipsSlice.reducer