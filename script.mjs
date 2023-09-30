const SCREEN_WIDTH = 100
const SCREE_HEIGHT = 30
const SPEED_SCALE_INC = 0.0001

import {ground} from '/ground.mjs'
import { opponentRun , opponentJump } from './opponent.mjs'

const screenElement = document.getElementById("gameScreen")
setScreenSize()
window.addEventListener('resize', setScreenSize)

window.addEventListener('keydown',startGame,{once : true})

ground.set()
let lastTime;
let speedScale;
let delta
let score;
function update(time){
    if(lastTime == null){
        lastTime = time
    }
    delta = time - lastTime
    ground.move(delta,speedScale)
    speedScaleInc(delta)
    updateScore(delta)
    opponentRun(delta,speedScale)
   
    lastTime = time
    window.requestAnimationFrame(update)
}

let isActive = false

function startGame(){
    isActive = true
    speedScale = 1
    score = 0;
    const startGameTitle = document.getElementById('start')
    startGameTitle.classList.add('hide')
    window.requestAnimationFrame(update)
}

window.addEventListener('keydown',(event)=>{
    if(isActive){
        if(event.key == " "){
            console.log('spaced...')
            opponentJump(delta,speedScale)
        }
    }
})

function updateScore(delta){
    score+=delta*0.01
    document.getElementById('score').textContent = Math.floor(score)
}

function speedScaleInc(delta){
    speedScale+= delta*SPEED_SCALE_INC
}

function setScreenSize() {
    let screenSize
    if (window.innerWidth / window.innerHeight < SCREEN_WIDTH / SCREE_HEIGHT) {
        screenSize = window.innerWidth / SCREEN_WIDTH
    } else {
        screenSize = window.innerHeight / SCREE_HEIGHT
    }

    screenElement.style.width = SCREEN_WIDTH * screenSize + 'px';
    screenElement.style.height = SCREE_HEIGHT * screenSize + 'px';
}
