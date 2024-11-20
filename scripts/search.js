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

export const submitKeyPress = (event) => {
    if (event.key === "Enter" && !searchInput.value){
        alert('Insira uma pesquisa')
    }else {
        window.location.href = `pesquisa.html#${searchInput.value}`
    }
}

const inputSubmit = (event) => {
    if (event.key === "Enter" && !searchInput.value){
        alert('Insira uma pesquisa')
    }else {
        // searchForm.action = `search.html#${searchInput.value}`
        indisponivel()
    }
}

searchForm.addEventListener('submit', inputSubmit)


export const indisponivel = () => {
    event.preventDefault()
    alert('Essa função ainda não está disponível :(')
}