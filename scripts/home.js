import { getFilmList, getImageUrl } from './api.js'
import { indisponivel } from './utils.js'

getFilmList('movie/popular')
.then(data => {

    main.innerHTML = `
    <a id="poster"></a>

        <div class="container-fluid mt-3 mb-3">

            <h2 class="display-5">Popular movies</h2>
            <div id="filmesEmAlta" class="d-flex gap-3 overflow-scroll mt-3 mb-3"></div>

            <h2 class="display-5">Popular series</h2>
            <div id="seriesEmAlta" class="d-flex gap-3 overflow-scroll mt-3"></div>
        </div>
    `

    const poster = document.getElementById('poster')
    poster.innerHTML += `<img 
    src='${getImageUrl(data.results, 0, 400)}' 
    alt="Capa do filme" class="w-100">`
    poster.href = `detalhes.html#${data.results[0].id}`

    const filmesEmAlta = document.getElementById('filmesEmAlta')
    for (let i = 0; i < data.results.length; i++) {
        filmesEmAlta.innerHTML += `
        <a href="detalhes.html#${data.results[i].id}">
            <img src='${getImageUrl(data.results, i)}' alt="Capa do filme">
        </a>
        `
    }

})

getFilmList('tv/popular')
.then(data => {
    const seriesEmAlta = document.getElementById('seriesEmAlta')
    for (let i = 0; i < data.results.length; i++) {
        seriesEmAlta.innerHTML += `
        <a href="detalhes.html#${data.results[i].id}">
        <img src='${getImageUrl(data.results, i)}' alt="Capa do filme">
        </a>
        `
    }
})

const loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('click', indisponivel)