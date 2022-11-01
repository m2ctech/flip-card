const cards = document.querySelectorAll(".card")
let popup = document.querySelector('.popup')
let close = document.querySelector('.close')
let reload = document.querySelector('.reload')

//Timer
const startingMinutes = 2;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

const restart = document.getElementById("btn");


let cardOne, cardTwo;

let matchedCard = 0;

let disabledDeck = false;



//timer


/*const updateCountdown = () => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--
    if (time-- < 0) {
        time = time;
    }
}
setInterval(updateCountdown, 1000)*/

/*const startTimer = () => {
    let timer = time;
    let  minutes, seconds;
    
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
        timer = time;
    }

}

setInterval(startTimer, 1000)*/






const flipCard = e =>{

    //Getting the card clicked by the player
    const clickedCard = e.target;
    if(clickedCard !== cardOne && !disabledDeck){

        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }

        cardTwo = clickedCard
        disabledDeck = true

        let cardOneImg = cardOne.querySelector("img").src
        let cardTwoImg = cardTwo.querySelector("img").src

        matchCards(cardOneImg, cardTwoImg)
    }

}



const matchCards = (img1, img2) => {

    //if two cards matched
    if(img1 == img2){

        matchedCard++

        if(matchedCard == 8){
            setTimeout(()=>{
                return shuffleCard();
            }, 1000)
            popup.classList.add("active")
            start()
            //confe.classList.add("active")
      
            //setTimeout(()=>{
               // popup.classList.remove("active")
               // confe.classList.remove("active")
           // }, 30000)
        }
        cardOne.removeEventListener("click", flipCard);
        cardOne.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disabledDeck = false;


    }

    //If the cards did not match
    setTimeout(()=>{
        cardOne.classList.add("shake")
        cardTwo.classList.add("shake")

    }, 400)

    setTimeout(()=>{
        cardOne.classList.remove("shake", "flip")
        cardTwo.classList.remove("shake", "flip")

        cardOne = cardTwo = "";
        disabledDeck = false;

    }, 1200)


    

}

const shuffleCard = ()=>{
    matchedCard = 0;
    cardOne = cardTwo = "";
    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]

    arr.sort(()=> Math.random() > 0.5 ? 1 : -1)
    cards.forEach((card, i) => {

        card.classList.remove("flip")
        let imgTag = card.querySelector("img")
        imgTag.src = `images/img-${arr[i]}.png`
        card.addEventListener("click", flipCard)
    })

}

shuffleCard();

restart.addEventListener("click", shuffleCard)


const winner = () => {

}

reload.onclick = ()=>{
    popup.classList.remove("active")
    stop()
   
   
}
const start = () => {
    setTimeout(()=>{
        confetti.start()
    })
}
const stop = () => {
    setTimeout(()=>{
        confetti.stop()
    })
}





cards.forEach(card => {

    card.addEventListener("click", flipCard)
})