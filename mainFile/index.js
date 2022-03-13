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



/*if (event.code === 'KeyA') {
        console.log(1)
      } else if (event.code === 'KeyS') {
      } else if (event.code === 'KeyD') {
        console.log(2)
        console.log(3)
      }else if (event.code === 'KeyF') {
        console.log(4)
      }else if (event.code === 'KeyG') {
        console.log(5)
      }else if (event.code === 'KeyH') {
        console.log(6)
      }else if (event.code === 'KeyJ') {
        console.log(7)
    }else if (event.code === 'KeyK') {
        console.log(8)
    }*/