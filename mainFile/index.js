const strings = document.querySelectorAll(".type")
const arrayKey = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK']
const audio = new Audio()
const audio1 = new Audio()
const arrayAudio = ["/audio/do.mp3", "/audio/lya.mp3", "/audio/fa.mp3", "/audio/re.mp3", "/audio/do2.mp3", "/audio/mi.mp3", "/audio/sol.mp3", "/audio/si.mp3"]
const addClassEven = () => {
    strings.forEach((elem) => {
        elem.addEventListener('click', () => {
            elem.classList.add('start')
            audio.src = arrayAudio[nun]
            setTimeout(() => {
                elem.classList.remove('start')
            }, 500) 
        })
    })
}

const keyPlay = () => {
   document.addEventListener("keydown", (event, g) => {
      arrayKey.forEach((elem, nun) => {
          if (elem === event.code) {
            strings[nun].classList.add('start')
            setTimeout(() => {
                strings[nun].classList.remove('start')
            }, 500) 
            audio.src = arrayAudio[nun]
            audio.play()
            console.log(nun)
        }
      })
      
   })

}
const keyPlay1 = () => {
    document.addEventListener("keyup", (event) => {
       arrayKey.forEach((elem, nun1) => {
           if (elem === event.code) {
             strings[nun1].classList.add('start')
             setTimeout(() => {
                 strings[nun1].classList.remove('start')
             }, 500) 
             audio1.src = arrayAudio[nun1]
             audio1.play()
             console.log(nun1)
           }
 
       })
    })
 }

addClassEven()
keyPlay()
//keyPlay1()



