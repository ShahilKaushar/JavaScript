// 1. break - stops the loop. 

for (let i = 1; i <=7; i++){
    if(i == 3){
        console.log("3 encountered.\nExiting...");
        break;
    }
    console.log(i);
}


// continue - skips an iteration.

for(let i = 1; i <= 7; i++){
    if (i == 5) continue;           // 5 is skipped
    console.log(i);
}