let total = 0;
for(let i = 1; i <= 35; i++){
    if(i%3===0){
        console.log(i); // numbers that are divisible by 3 
        total = total + i; //total of the numbers that are divisible by 3
    }
}
console.log('the total is' , total);