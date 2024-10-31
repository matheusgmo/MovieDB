const searchPage = document.getElementById('searchPage')
const searchInput = document.getElementById('searchInput')

const dBlock = () => {
    searchPage.classList.remove('d-none')
    searchPage.classList.add('d-block')
    searchInput.focus()
}

const dNone = () => {
    searchPage.classList.remove('d-block')
    searchPage.classList.add('d-none')
    searchInput.value = ""
}

const submitKeyPress = (event) => {
    if (event.key === "Enter") {
        indisponivel()
        window.location.reload()
    }
}

const indisponivel = () => {
    event.preventDefault()
    alert('Essa função ainda não está disponível :(')
}

// Consumindo a api

const getFilmList = (apiUrl) => {
    const apiKey = '?api_key=f1d01bea3ef891d53eaf4b9c2e492281'
    return fetch(apiUrl+apiKey)
    .then(response => {
        if (!response.ok) throw new Error('Erro ao buscar dados')
        return response.json()
    })
    .then(data => data)
    .catch(error => console.error('Erro:', error))
}


const getUrl = (array, index, posterUrl, width = 200) =>  `${posterUrl}w${width}${array[index].poster_path}`

getFilmList('https://api.themoviedb.org/3/movie/popular')
.then(data => {
    const poster = document.getElementById('poster')
    poster.innerHTML += `<img 
    src='${getUrl(data.results, 0,'https://image.tmdb.org/t/p/', 400)}' 
    alt="Capa do filme" class="w-100" 
    onclick="indisponivel()">`

    const filmesEmAlta = document.getElementById('filmesEmAlta')
    for (let i = 0; i < data.results.length; i++) {
        filmesEmAlta.innerHTML += `<img 
        src='${getUrl(data.results, i, 'https://image.tmdb.org/t/p/')}' 
        alt="Capa do filme" 
        onclick="indisponivel()">`
    }
})

getFilmList('https://api.themoviedb.org/3/tv/popular')
.then(data => {
    const seriesEmAlta = document.getElementById('seriesEmAlta')
    for (let i = 0; i < data.results.length; i++) {
        seriesEmAlta.innerHTML += `<img 
        src='${getUrl(data.results, i, 'https://image.tmdb.org/t/p/')}' 
        alt="Capa do filme" 
        onclick="indisponivel()">`
    }
})