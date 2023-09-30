import {customProperty} from'/customProperty.mjs'

let opponentImg = document.getElementById('opponent')
let i = 0;
const OPPONENT_FRAME_COUNT = 3
const FRAME_TIME = 150
const JUMP_SPEED = 0.05
let currentFrameTime = 0
let opponentFrame = 0
export function opponentRun(delta,speedScale) {
   if(currentFrameTime >= FRAME_TIME){
        let imageIndex = (opponentFrame+1) % OPPONENT_FRAME_COUNT
        opponentFrame = imageIndex
        console.log('b4')
        console.log(imageIndex)
        opponentImg.src = `/public/catrun${imageIndex}-removebg-preview.png`
        currentFrameTime-=FRAME_TIME
   }

   currentFrameTime+= delta
}

export function opponentJump(delta,speedScale){
   opponentImg.src = `/public/catJump-removebg-preview.png`
   customProperty.increment(opponentImg,'--bottom',30*JUMP_SPEED+'%')

   // if(customProperty.get(opponentImg,'--bottom') > 0){
   //    customProperty.set(opponentImg,'--bottom',0)
   // }
}