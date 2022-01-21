//selections

let h1 = document.querySelector('.h1')
let bt = document.querySelector('.btn')
let message =document.querySelector('.nb')



let score1 = 0

let score2 = 0

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');


document.querySelector('.btn').addEventListener('click',function(){

    let randomno = Math.floor(Math.random()*6)+1

    let randomno1 = Math.floor(Math.random()*6)+1

    let rimg1 = "images/dice"+randomno+".png";

    let rimg2 = "images/dice"+randomno1+".png";

    document.querySelector('.im1').setAttribute("src",rimg1);

    document.querySelector('.im2').setAttribute("src",rimg2);


     
     console.log(score2,score1)
    if(randomno > randomno1 ){
        ++score1

        p1.textContent=`${score1}`

        if(score1 === 10){
            h1.textContent=`Player 1 win 🎊🎊`
            document.querySelector('.bd').classList.add("bd1")
            bt.style.opacity=0
            message.textContent="Reload The Page To Play Again"


        }

        

    }
    else if (randomno < randomno1){
        ++score2

        p2.textContent=`${score2}`

        if(score2 === 10){
            h1.textContent=`Player 2 win 🎊🎊`
            document.querySelector('.bd').classList.add("bd2")
            bt.style.opacity=0
            message.textContent="Reload The Page To Play Again"
        }


    }
    else{

        h1.textContent="I'ts a Draw"

    }

    

})