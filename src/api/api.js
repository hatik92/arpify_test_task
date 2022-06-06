import axios from 'axios'

const apiFilmConfig = axios.create({
  baseURL: 'https://swapi.dev/api/'
})

const apiStarShipConfig = axios.create({
  baseURL: 'https://swapi.dev/api/starships/'
})


export const films = {
  // getFilms() {
  //   return apiConfig.get('films').then(res => res.data)
  // },
  getFilmsById(id) {
    return apiFilmConfig.get(`films/1`).then(res => res)
  }
}

export const starships = {
  getStarships(id) {
    return apiStarShipConfig.get(`${id}`).then(res => res)
  }
}

