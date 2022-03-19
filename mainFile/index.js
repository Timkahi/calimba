const strings = document.querySelectorAll(".type")
const arrayKey = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK']
const aud = new Audio()
const audio = new Audio("/audio/do.mp3")
const audio1 = new Audio("/audio/lya.mp3")
const audio2 = new Audio("/audio/fa.mp3")
const audio3 = new Audio("/audio/re.mp3")
const audio4 = new Audio("/audio/do2.mp3")
const audio5 = new Audio("/audio/mi.mp3")
const audio6 = new Audio("/audio/sol.mp3")
const audio7 = new Audio("/audio/si.mp3")
const arrayAudio = ["/audio/do.mp3", "/audio/lya.mp3", "/audio/fa.mp3", "/audio/re.mp3", "/audio/do2.mp3", "/audio/mi.mp3", "/audio/sol.mp3", "/audio/si.mp3"]
const addClassEven = () => {
    strings.forEach((elem, g) => {
        elem.addEventListener('click', () => {
            elem.classList.add('start')
            console.log(g)
            aud.src = arrayAudio[g]
            aud.play()
            aud.playbackRate = 6
            setTimeout(() => {
                elem.classList.remove('start')
            }, 500) 
        })
    })
}

const keyPlay = () => {
   document.addEventListener("keydown", (event) => {
      arrayKey.forEach((elem, nun) => {
          if (elem === event.code) {
            strings[nun].classList.add('start')
            setTimeout(() => {
                strings[nun].classList.remove('start')
            }, 500) 
            if (nun === 0) {
                audio.play()
                audio.currentTime = 0
                audio.playbackRate = 6
            } else if (nun === 1) {
                audio1.play()
                audio1.playbackRate = 6
                audio1.currentTime = 0
            } else if (nun === 2) {
                audio2.play()
                audio2.playbackRate = 6
                audio2.currentTime = 0 
            } else if (nun === 3) {
                audio3.play()
                audio3.playbackRate = 6
                audio3.currentTime = 0 
            } else if (nun === 4) {
                audio4.play()
                audio4.playbackRate = 6
                audio4.currentTime = 0 
            } else if (nun === 5) {
                audio5.play()
                audio5.playbackRate = 6
                audio5.currentTime = 0 
            } else if (nun === 6) {
                audio6.play()
                audio6.playbackRate = 6
                audio6.currentTime = 0 
            } else if (nun === 7) {
                audio7.play()
                audio7.playbackRate = 6
                audio7.currentTime = 0 
            }
            console.log(nun)
        }
      }) 
   })
}

addClassEven()
keyPlay()



