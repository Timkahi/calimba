const strings = document.querySelectorAll(".type")
const arrayKey = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK']

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

const keyPlay = () => {
   document.addEventListener("keyup", (event) => {
      arrayKey.forEach((elem, nun) => {
          if (elem === event.code) {
                strings[nun].classList.add('start')
                setTimeout(() => {
                    strings[nun].classList.remove('start')
                }, 500) 
              console.log(nun)
          }

      })
   })
}

addClassEven()
keyPlay()


