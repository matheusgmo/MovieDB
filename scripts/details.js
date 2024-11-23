import { getFilmList, getImageUrl } from './api.js'
import { indisponivel } from './utils.js';

const id = window.location.hash.slice(1)

getFilmList(`movie/${id}`)
.then(data => {
    const main = document.getElementById('main');
    main.innerHTML = `
    <img src="${getImageUrl([data], 0, 400, 'backdrop')}" alt="${data.title || "Imagem indisponível"}" style="width: 100%">
    <div class="container-fluid">
        <h1 class="mt-3 mb-3 display-4">${data.title || "Título não encontrado"}</h1>
        <p>${data.overview || "Descrição não disponível"}</p>
        <p><i class="bi-star-half"></i> ${data.vote_average.toFixed(1)} - ${data.vote_count} votes</p>
    </div>
    `
})

getFilmList(`tv/${id}`)
.then(data => {
    const main = document.getElementById('main');
    main.innerHTML = `
    <img src="${getImageUrl([data], 0, 400, 'backdrop')}" alt="${data.title || "Imagem indisponível"}" style="width: 100%">
    <div class="container-fluid">
        <h1 class="mt-3 mb-3 display-4">${data.name || "Título não encontrado"}</h1>
        <p>${data.overview || "Descrição não disponível"}</p>
        <p><i class="bi-star-half"></i> ${data.vote_average.toFixed(1)} - ${data.vote_count} votes</p>
    </div>
    `
})

const loginBtn = document.getElementById('loginBtn')
loginBtn.addEventListener('click', indisponivel)