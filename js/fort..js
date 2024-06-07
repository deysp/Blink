document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        fetch(`?turnTo=${button.id}`)
        document.body.className = button.id
    })
})