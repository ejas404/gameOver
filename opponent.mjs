// const opponents = document.querySelectorAll('.opponent')
let opponents = document.querySelectorAll('.opponent')
let i = 0;
export function opponentRun(){
   
    setInterval(()=>{
       opponents[i].classList.remove('hide')
        i++
        if(i > 0){
            opponents[i-1].classList.add('hide')
        }
        if(i == opponents.length){
            i=0;
        }
    },1000)
   
}