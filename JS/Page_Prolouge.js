

console.log("Prolougue JS is connected!");
let inside;

const ProlougueCanvas = document.getElementById("ProlougueCanvas");
const context = ProlougueCanvas.getContext("2d");
document.querySelector("#Prologue-over-canvas").style.display = 'none';

const PrologueGame = {

    clear: ()=> {
        context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    },
    
};

let imgCounter = 1;
function ProlougueDialogue() {
   
    if ( imgCounter >5) {
        context.clearRect(0, 0, ProlougueCanvas.clientWidth, ProlougueCanvas.clientHeight);
        return
    }
    else {
        const image = new Image();
        image.src = `/Dialogues/Prologue_Panel_${imgCounter}.PNG`
        image.addEventListener("load", () => {
            context.drawImage(image, 0, 0, Prolouguecanvas.clientWidth, ProlougueCanvas.clientHeight);
        })
    }

}

document.addEventListener("keydown", (e) => {
    if(e.key =="k"){

        PrologueGame.clear();
        ProlougueDialogue();
    
    }
});

        
/*
const game = {

    clear: ()=> {
        context.clearRect(0,0,canvas.clientWidth, canvas.clientHeight);
    },
    
};
    



// function updateCanvas() {
//     girl.draw();
//     boy.draw();
//     if (boy.contact(girl)) {
//         dialogue.draw();
//     }
//     inGate();
// }

//game.start();

const girl = new Girl(50,400,50,100);
let talking = 0;
let isFirstDialog = false;
let isSecondDialog = false;
let isThirdDialog = false;


const firstScreen = new Image();
firstScreen.src = `/Dialogues/S0.PNG`
firstScreen.addEventListener("load", () => {
    context.drawImage(firstScreen,25,200,450,147);
})

document.addEventListener(`keydown`, (e)=> {
    
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
        return;
    }
    context.clearRect(0,0, 500,500);
    context.clearRect(girl.x, girl.y,girl.w, girl.h);
    context.clearRect(boy.x, boy.y, boy.w, boy.h);
    boy.draw();
    
    if (inGate()) {
        context.clearRect(25, 313,450, 147);
        const image = new Image();
        image.src = "/Dialogues/S2.PNG"
        context.drawImage(image,25,313,450,147);

    } else if (boy.contact(girl)) {
        context.clearRect(25, 313,450, 147);
        const image1 = new Image();
        image1.src = "/Dialogues/S3.PNG"
        context.drawImage(image1,25,313,450,147);
        
        
    } else {
        context.clearRect(25, 313,450, 147);
        switch(e.key) {
            case "ArrowUp":
                    girl.moveUp();
                    break;
            case "ArrowDown":
                    girl.moveDown();
                    break;
            case "ArrowLeft":
                    girl.moveLeft();
                    break;
            case "ArrowRight":
                    girl.moveRight();
                    break;   
        }
        girl.draw();  
    }
});

function inGate() {
    if (girl.top()< 69 && girl.left()>200 && girl.right()<310) {
        inside = true
        return inside;
    }
    return inside =false;
}


let levelUp = 0;

document.addEventListener("keydown", (e) => {
    if(e.key =="x" && inside === true){

        game.clear();
        girl.y=400;
        girl.x=50;
        
        switch(levelUp) {
            case 0: 
                startMiniGame(1500);
                levelUp ++;          
                        break;
            case 1: 
                startMiniGame(1000);
                levelUp ++;
                        break;
            case 2: 
                startMiniGame(500);
                levelUp ++;

                        break;
            case 3: 
                alert("youwin!")
                        break;

        }
        
    }
})

document.addEventListener(`keydown`, (e)=> {
    if (e.key == " " && boy.contact(girl)) {
        switch(talking) {
            case 0: 
                isFirstDialog = true;
                firstDialogue();
                talking ++;
                
                        break;
            case 1: 
            console.log("second dialogue")
            isSecondDialog = true;
            imgCounter++;
            secondDialogue();
            context.clearRect(25, 313,450, 147)
            talking ++;
                
               
                        break;
            case 2: 
            isThirdDialog = true;
                imgCounter++;
                thirdDialogue();
                context.clearRect(25, 313,450, 147)
                talking ++;
               

                        break;
        }
        girl.y += 5;
        girl.x += 5;
        girl.draw();
        
    }
})*/