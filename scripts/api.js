const API_KEY = '?api_key=f1d01bea3ef891d53eaf4b9c2e492281'
const BASE_URL = 'https://api.themoviedb.org/3/'
const POSTER_URL = 'https://image.tmdb.org/t/p/'

export const getFilmList = (endpoint) => {
    return fetch(`${BASE_URL}${endpoint}${API_KEY}`)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao buscar dados')
            return response.json()
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error)
            throw error
        })
}

// endpoint expecifica para a api o que ela vai buscar ex('movie/popular')

export const getImageUrl = (array, index, width = 200, type = 'poster') =>  `${POSTER_URL}w${width}${array[index][`${type}_path`]}`