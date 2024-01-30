//  slicing
const address = 'shoshor bari jinda bad';
const short = address.slice(8,12);
console.log(short);

// spliting sentences or string into short variables.
const sentence = 'i love to have love with you in every possible way';
console.log(sentence.split(' ')) // what ever we pass in this split parameters it will separate them to the end of that parameter... if we do not use a space in there than, it will not make them as words.
console.log(sentence.split('l'));

const friends = 'kamal,jamal,fahim,rahim,kader,baksh';
console.log(friends.split(','));

const books = 'chemistry, math, bangla, english, religion, science';
const book = books.split(', ')
console.log(book);

// joinging 
const mySubj = ['chemistry, math, bangla, english, religion, science'];
console.log(mySubj.join('-'));