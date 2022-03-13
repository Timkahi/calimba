const strings = document.querySelectorAll(".type")



const addClassEven = () => {
    strings.forEach((elem) => {
        elem.addEventListener('click', () => {
            elem.classList.add('start')
            setTimeout(() => {
                elem.classList.remove('start')
            }, 500)
        })
    })
}
addClassEven()
console.log(strings)