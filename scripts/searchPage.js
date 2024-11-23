const hash = window.location.hash.slice(1)

fetch(`https://api.themoviedb.org/3/search/multi?query=${hash}&api_key=f1d01bea3ef891d53eaf4b9c2e492281`)
.then(data => data.json())
.then(data => data.results.filter(item => item.poster_path))
.then(filteredResults => {
    const main = document.getElementById('main')
    filteredResults.forEach(item => {
        main.innerHTML += `
        <a href="detalhes.html#${item.id}">
            <img class="w-100 mt-3" src='https://image.tmdb.org/t/p/w300${item.poster_path}' alt="Capa do filme">
        </a>
        `
    })
})