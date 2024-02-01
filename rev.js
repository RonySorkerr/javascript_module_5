var sentence = 'this is a sentence';
var revers = '';
for (let i = sentence.length - 1; i >= 0; i--){
    revers += sentence[i];
}
console.log(revers);