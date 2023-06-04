function randomImageGenerator(num,className){
    if(num === 1){
        document.querySelector(className).setAttribute("src","./images/dice1.png");
    }else if(num === 2){
        document.querySelector(className).setAttribute("src","./images/dice2.png");
    }else if(num === 3){
        document.querySelector(className).setAttribute("src","./images/dice3.png");
    }else if(num === 4){
        document.querySelector(className).setAttribute("src","./images/dice4.png");
    }else if(num === 5){
        document.querySelector(className).setAttribute("src","./images/dice5.png");
    }else if(num === 6){
        document.querySelector(className).setAttribute("src","./images/dice6.png");
    }
}

function randomNumberGenerator(){
    var num = Math.random();
    num = parseInt(num*6,0)+1;
    return num;
}

var num2 = randomNumberGenerator();
console.log(num2);
var num1 = randomNumberGenerator();
console.log(num1);
randomImageGenerator(num1,".img1");
randomImageGenerator(num2,".img2"); 

if(num1<num2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}else if(num1>num2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if(num1===num2){
    document.querySelector("h1").innerHTML = "Players got Tie";
}

