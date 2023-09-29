const SCREEN_WIDTH = 100
const SCREE_HEIGHT = 30
const SPEED_SCALE_INC = 0.0001

import {ground} from '/ground.mjs'
import { opponentRun } from './opponent.mjs'

const screenElement = document.getElementById("gameScreen")
setScreenSize()
opponentRun()
window.addEventListener('resize', setScreenSize)

window.addEventListener('keydown',startGame,{once : true})

ground.set()
let lastTime;
let speedScale;
let score = 0;
function update(time){
    if(lastTime == null){
        lastTime = time
    }
    let delta = time - lastTime
    ground.move(delta,speedScale)
    speedScaleInc(delta)
    updateScore(delta)
   
    lastTime = time
    window.requestAnimationFrame(update)
}

function startGame(){
    speedScale = 1
    const startGameTitle = document.getElementById('start')
    startGameTitle.classList.add('hide')
    window.requestAnimationFrame(update)
}

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
