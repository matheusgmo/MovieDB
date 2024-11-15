const searchPage = document.getElementById('searchPage')
const searchInput = document.getElementById('searchInput')

const dBlockSearch = () => {
    searchPage.classList.remove('d-none')
    searchPage.classList.add('d-block')
    searchInput.focus()
}

const dNoneSearch = () => {
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
    alt="Capa do filme" class="w-100">`
    poster.href += `#${data.results[0].id}`

    const filmesEmAlta = document.getElementById('filmesEmAlta')
    for (let i = 0; i < data.results.length; i++) {
        filmesEmAlta.innerHTML += `
        <a href="detalhes.html#${data.results[i].id}">
            <img src='${getUrl(data.results, i, 'https://image.tmdb.org/t/p/')}' alt="Capa do filme">
        </a>
        `
    }

})

getFilmList('https://api.themoviedb.org/3/tv/popular')
.then(data => {

    console.log(data.results[0])

    const seriesEmAlta = document.getElementById('seriesEmAlta')
    for (let i = 0; i < data.results.length; i++) {
        seriesEmAlta.innerHTML += `
        <a href="detalhes.html#${data.results[i].id}">
        <img src='${getUrl(data.results, i, 'https://image.tmdb.org/t/p/')}' alt="Capa do filme">
        </a>
        `
    }
})

const id = window.location.hash.slice(1)

getFilmList(`https://api.themoviedb.org/3/movie/${id}`)
.then(data => {
    const detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w400${data.backdrop_path}" alt="${data.title || "Imagem indisponível"}" style="width: 100%">
    <div class="container-fluid">
        <h1 class="mt-3 mb-3 display-4">${data.title || "Título não encontrado"}</h1>
        <p>${data.overview || "Descrição não disponível"}</p>
        <p><i class="bi-star-half"></i> ${data.vote_average} - ${data.vote_count} votes</p>
    </div>
    `
})

getFilmList(`https://api.themoviedb.org/3/tv/${id}`)
.then(data => {
    const detalhes = document.getElementById('detalhes');
    detalhes.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w400${data.backdrop_path}" alt="${data.title || "Imagem indisponível"}" style="width: 100%">
    <div class="container-fluid">
        <h1 class="mt-3 mb-3 display-4">${data.name || "Título não encontrado"}</h1>
        <p>${data.overview || "Descrição não disponível"}</p>
        <p><i class="bi-star-half"></i> ${data.vote_average} - ${data.vote_count} votes</p>
    </div>
    `
})