const main = document.getElementById('main')
const loading = document.getElementById('loading')


Promise.all([]).then(results => {
    const main = document.getElementById('main')
    const loading = document.getElementById('loading')
    main.classList.remove('d-none')
    loading.classList.add('d-none')
})

export const indisponivel = () => {
    event.preventDefault()
    alert('Essa função ainda não está disponível :(')
}