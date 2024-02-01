const mobile = {
    brand: "SAMSUNG",
    price: 25000,
    color: 'Black',
    camera: '18MB',
    isNew: true
}
// for(const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){ // OF US USE IN ARRAY & IN IS USE IN OBJECT
    console.log(key, '-', mobile[key]);
}

const brands = {
    samsung: {
        name: 'Galaxy A 54',
        camera: '15MB',
        screen: '6.8 inch',

    }
}