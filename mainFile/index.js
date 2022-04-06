const strings = document.querySelectorAll(".type")
const arrayKey = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL']
const note = ['A', 'S' ,'D' ,'F' ,'G' ,'H' ,'J' ,'K']
const note2 = ['DO', 'LYA', 'FA', 'RE', 'DO', 'MI', 'SOL', 'SI' ]
const aud = new Audio()
const audio = new Audio("/audio/do.mp3")
const audio1 = new Audio("/audio/lya.mp3")
const audio2 = new Audio("/audio/fa.mp3")
const audio3 = new Audio("/audio/re.mp3")
const audio4 = new Audio("/audio/do2.mp3")
const audio5 = new Audio("/audio/mi.mp3")
const audio6 = new Audio("/audio/sol.mp3")
const audio7 = new Audio("/audio/si.mp3")

const arrayLet = [audio ,audio1, audio2, audio3, audio4, audio5, audio6, audio7]


let t = 1
const arrayAudio = ["/audio/do.mp3", "/audio/lya.mp3", "/audio/fa.mp3", "/audio/re.mp3", "/audio/do2.mp3", "/audio/mi.mp3", "/audio/sol.mp3", "/audio/si.mp3"]
const notchenge = document.querySelectorAll('.cord')
const button = document.querySelector('.change-cord')
const notes = document.querySelector('.name-not')
const humburger = document.querySelector('.hamburger')
const color0 = document.querySelector('.color')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const reset = document.querySelector('.reset')
const html = document.querySelector('html')

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


const keyPlay = (time, array) => {
    document.addEventListener("keydown", (event) => {
        arrayKey.forEach((elem, nun) => {
            if (elem === event.code) {
              strings[nun].classList.add('start')
              setTimeout(() => {
                  strings[nun].classList.remove('start')
              }, 500) 
              
              if (nun === 0) {
                  array[0].play()
                  array[0].currentTime = 0
                  array[0].playbackRate = time
              } else if (nun === 1) {
                  array[1].play()
                  array[1].playbackRate = time
                  array[1].currentTime = 0
              } else if (nun === 2) {
                  array[2].play()
                  array[2].playbackRate = time
                  array[2].currentTime = 0 
              } else if (nun === 3) {
                  array[3].play()
                  array[3].playbackRate = time
                  array[3].currentTime = 0 
              } else if (nun === 4) {
                  array[4].play()
                  array[4].playbackRate = time
                  array[4].currentTime = 0 
              } else if (nun === 5) {
                  array[5].play()
                  array[5].playbackRate = time
                  array[5].currentTime = 0 
              } else if (nun === 6) {
                  array[6].play()
                  array[6].playbackRate = time
                  array[6].currentTime = 0 
              } else if (nun === 7) {
                  array[7].play()
                  array[7].playbackRate = time
                  array[7].currentTime = 0 
              }
          }
        }) 
     })
}

button.addEventListener('click', () => {
    if (t === 1) {
        notchenge.forEach((elm, r) => {
            notchenge[r].textContent = note[r]  
        })
        t = 0
        button.classList.add('cheng')
        notes.classList.add('gapCord')
    } else {
        notchenge.forEach((elm, r) => {
            notchenge[r].textContent = note2[r]
        })
        t = 1
        button.classList.remove('cheng')
        notes.classList.remove('gapCord')
    }
})
let r =1
const test = (c=1) => {
    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            if (r === 1) {
                keyPlay(1, arrayLet)
                r = 0
                console.log('up')
            } else {
                keyPlay(c, arrayLet)
                r = 1
                console.log('down')
            }
        }
    })
}
humburger.addEventListener('click', () => {
    const line1 = document.querySelector('.line1')
    const line2 = document.querySelector('.line2')
    const line3 = document.querySelector('.line3')
    const line = document.querySelector('.line')
    const listMenu = document.querySelector('.list-menu') 
    listMenu.classList.toggle('open')
    humburger.classList.toggle('play') 
    line2.classList.toggle('play')
    line1.classList.toggle('play')
    line3.classList.toggle('play')
    line.classList.toggle('play')
})


color0.addEventListener('click', () => {
    html.classList.add('chenge')
    html.classList.remove('chenge1')
    html.classList.remove('chenge2')

    color0.classList.add('chenge')
    color1.classList.remove('chenge1')
    color2.classList.remove('chenge2')
    reset.classList.remove('del')
})
color1.addEventListener('click', () => {
    html.classList.add('chenge1')
    html.classList.remove('chenge0')
    html.classList.remove('chenge2')

    color1.classList.add('chenge1')
    color0.classList.remove('chenge')
    color2.classList.remove('chenge2')
    reset.classList.remove('del')
})
color2.addEventListener('click', () => {
    html.classList.add('chenge2')
    color2.classList.add('chenge2')
    color1.classList.remove('chenge1')
    color0.classList.remove('chenge')
    html.classList.remove('chenge1')
    html.classList.remove('chenge0')
    reset.classList.remove('del')
})
reset.addEventListener('click', () => {
    html.classList.remove('chenge')
    html.classList.remove('chenge1')
    html.classList.remove('chenge2')
    color2.classList.remove('chenge2')
    color1.classList.remove('chenge1')
    color0.classList.remove('chenge')
    reset.classList.add('del')
})

test()