document.addEventListener("DOMContentLoaded", () => {
    let heads = 0;
    let tails = 0;
    let animationActive = false;
    const coinContainer = document.getElementById("coinContainer");
    const headCounter = document.querySelector(".headCounter");
    const tailCounter = document.querySelector(".tailCounter");
    const tossButton = document.getElementById("toss");
    const resetButton = document.getElementById("reset");

    tossButton.addEventListener("click", () => {
        let i = Math.floor(Math.random() * 2);

        coinContainer.style.animation = "none";

        if (i == 0) {
            setTimeout(function () {
                coinContainer.style.animation = "flip-head 3s";
            }, 100);
            heads++;
        } else {
            setTimeout(function () {
                coinContainer.style.animation = "flip-tail 3s forwards";
            }, 100);
            tails++;
        }
        setTimeout(updateScore, 3000);
    });

    resetButton.addEventListener("click", () => {
        heads = 0;
        tails = 0;
        updateScore();
    });

    function updateScore() {
        headCounter.innerHTML = heads;
        tailCounter.innerHTML = tails;
    }
});




// let heads = 0;
// let tails = 0;
// let animationActive = false;
// const coinContainer = document.getElementById("coinContainer");
// const headCounter = document.querySelector(".headCounter");
// const tailCounter = document.querySelector(".tailCounter");
// const tossButton = document.getElementById("toss");
// const resetButton = document.getElementById("reset");


// tossButton.addEventListener("click", () => {
//     let i = Math.floor(Math.random()*2);

//     coinContainer.style.animation = "none";
    
//     if(i==0){
//         setTimeout(function(){
//             coinContainer.style.animation = 'flip-head 3s';
//         }, 100);
//         heads++;        
//     }
//     else{
//         setTimeout(function(){
//             coinContainer.style.animation = 'flip-tail 3s forwards';
//         }, 100);
//         tails++;
//     }
//     setTimeout(updateScore, 3000);
// });
// resetButton.addEventListener("click", () => {
//     heads = 0;
//     tails = 0;
//     updateScore();
// }

// function updateScore(){
//     headCounter.innerHTML = heads;
//     tailCounter.innerHTML = tails;
// }
// // 








       

// function flipCoin() {
//     if (animationActive) {
//         return; // Para evitar que se lance una nueva animación mientras una está en curso
//     }

//     animationActive = true;

//     const totalFrames = 10;
//     let currentFrame = 0;
//     let finalResult; 

//     function animate() {
//         const randomNum = Math.random();
//         if (randomNum < 0.5) {
//             coinContainer.classList.remove("animate-tail");
//             coinContainer.classList.add("animate-head");
//             finalResult = "HEAD"; 
//         } else {
//             coinContainer.classList.remove("animate-head");
//             coinContainer.classList.add("animate-tail");
//             finalResult = "TAIL"; 
//         }

//         currentFrame++;

//         if (currentFrame < totalFrames) {
//             setTimeout(animate, 100);
//         } else {
//             if (finalResult === "HEAD") {
//                 heads++;
//                 headCounter.innerHTML = "HEAD: " + heads;
//             } else {
//                 tails++;
//                 tailCounter.innerHTML = "TAIL: " + tails;
//             }

//             animationActive = false;
//         }
//     }

//     animate();
// }

// function resetCounter() {
//     heads = 0;
//     tails = 0;
//     headCounter.innerHTML = "";
//     tailCounter.innerHTML = "";
// }

// const flipButton = document.getElementById("flip");
// const resetButton = document.getElementById("reset");

// flipButton.addEventListener("click", flipCoin);
// resetButton.addEventListener("click", resetCounter);