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

const apiConsumption = () => {

    const apiKey = 'f1d01bea3ef891d53eaf4b9c2e492281'
    const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) throw new Error('Erro ao buscar dados');
        return response.json();
    })
    .then(data => {
        const filmes = data.results
        
        getFilmPoster('poster', 0, 400)

        let titulo = document.getElementById('titulo')
        titulo.innerText = filmes[0].original_title

        let sinopse = document.getElementById('sinopse')
        sinopse.innerText = filmes[0].overview

        let vote_average = document.getElementById('vote_average')
        vote_average.innerText = filmes[0].vote_average 

        let vote_count = document.getElementById('vote_count')
        vote_count.innerText = `- ${filmes[0].vote_count} votes` 
    })
    .catch(error => console.error('Erro:', error));

    
    const getFilmPoster = (elementId, arrayId, widht) => {
        const imageUrlBase = `https://image.tmdb.org/t/p/w${widht}`
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error('Erro ao buscar dados');
            return response.json();
        })
        .then(data => {
            const filme = data.results[arrayId];
            const posterPath = filme.poster_path
            const posterUrl = `${imageUrlBase}${posterPath}`
            const imgElement = document.getElementById(`${elementId}`);
            imgElement.src = posterUrl;
        })
        .catch(error => console.error('Erro:', error));
    }

    getFilmPoster("filmeEmAlta0", 0, 200)
    getFilmPoster("filmeEmAlta1", 1, 200)
    getFilmPoster("filmeEmAlta2", 2, 200)
    getFilmPoster("filmeEmAlta3", 3, 200)
    getFilmPoster("filmeEmAlta4", 4, 200)
    getFilmPoster("filmeEmAlta5", 5, 200)
    getFilmPoster("filmeEmAlta6", 6, 200)
    getFilmPoster("filmeEmAlta7", 7, 200)
    getFilmPoster("filmeEmAlta8", 8, 200)
    getFilmPoster("filmeEmAlta9", 9, 200)
}

apiConsumption()