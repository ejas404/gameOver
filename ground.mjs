import {customProperty} from'/customProperty.mjs'

const goundElems = document.querySelectorAll('.ground')

const SPEED = 0.005
const ground = {
    move : (delta,speedScale)=>{
        goundElems.forEach((ground)=>{
            customProperty.increment(ground,'--left', delta*SPEED*speedScale*-1)

            if(customProperty.get(ground,'--left') <= -300){
                customProperty.increment(ground,'--left',600)
            }
        })
    },
    set : ()=>{
        customProperty.set(goundElems[0],'--left',0)
        customProperty.set(goundElems[1],'--left',300)
    }
}

export{ground}