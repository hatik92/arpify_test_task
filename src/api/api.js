import axios from 'axios'

const apiFilmConfig = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

export const films = {
  getFilms() {
    return apiFilmConfig.get('films').then(res => res.data)
  },
  getFilmsById(id) {
    return apiFilmConfig.get(`films/${id}`).then(res => res)
  }
}

export const starships = {
  getStarships(id) {
    return apiFilmConfig.get(`starships/${id}`).then(res => res)
  }
}

