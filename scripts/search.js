const searchPage = document.getElementById('searchPage')
const searchInput = document.getElementById('searchInput')
const searchForm = document.getElementById('searchForm')
const searchBtn = document.getElementById('searchBtn')
const searchOff = document.getElementById('searchOff')

const dBlockSearch = () => {
    searchPage.classList.remove('d-none')
    searchPage.classList.add('d-block')
    searchInput.focus()
}

searchBtn.addEventListener('click', dBlockSearch)

const dNoneSearch = () => {
    searchPage.classList.remove('d-block')
    searchPage.classList.add('d-none')
    searchInput.value = ""
}

searchOff.addEventListener('click', dNoneSearch)

const inputSubmit = (event) => {
    event.preventDefault()

    if (event.key === "Enter" && !searchInput.value){
        alert('Insira uma pesquisa')
    }else {
        if(window.location.href.includes('search.html')){
            window.location = `#${searchInput.value}`
            window.location.reload()
        }else{
            window.location = `search.html#${searchInput.value}`
        }
    }
}

searchForm.addEventListener('submit', inputSubmit)