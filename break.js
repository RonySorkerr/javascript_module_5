let total = 0;
for(let i = 81; i <= 181; i++){
    if(i % 2 === 0){
        // console.log(i);
        total = total + i;
    }
}
    // console.log('the odds sum is : ' , total)

    // console.log(i);
    // total = total + i;

// console.log('the total is : ' , total);

// what is BREAK USE FOR.....?
// IF WE WANT TO BREAK SOME THING IN A CERTAIN PLACE OR TIME WE CAN USE IT
//HERE IS AN EXAPMLE

let n = 0;
for(let i = 0; i <= 25; i++){
    // console.log(i);
    if(i >= 9){
        break;
    }
}

let x = 55;
while(x > 30){
    if(x < 45){
        break;
    }
    console.log(x);
    x--;
}