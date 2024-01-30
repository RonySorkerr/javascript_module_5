const subject = 'math';
const book = 'Math';
// the condition if the subject and the books is same.
if(subject === book){
    console.log('pore ekdom fatai detece.');
}
else{
    console.log('fapor baz ekta');
}

const fileName = 'generel file';
const look = 'Generel file';

// we can make the whole string into lowecase with this>>>
console.log(fileName);
console.log(fileName.toLowerCase());
// thus we can make it uppercase tooo>>>>>
console.log(look)
console.log(look.toUpperCase());

if(fileName === look){
    console.log('looking good');
}
else{
    console.log('your file is not here');
}

const email = 'youremailHerE';
const cave = 'YouremailheRe';
// if we make all the strings in lowerCase we can get the same result if the words are even not same.

if(email.toLowerCase() === cave.toLowerCase()){
    console.log('You are looged in');
}
else{
    console.log('You do not belong here');
}

// we can trim or remove the white space from a string>>>>>>>
// const country = 'Bang ladesh'; // it will not work here, cause it only works before and after
const country = 'Bangladesh   ';
console.log(country.length); // it is 13 characters in length
countryy = country.trim();
console.log(countryy.length); // and it is 10 characters in length.
console.log(country.trim());