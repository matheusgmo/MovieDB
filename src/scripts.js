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