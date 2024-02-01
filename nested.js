const computer = {
    brand: 'HP',
    ram: '16GB',
    hdd: '254GB',
    monitor: 'BENQ',
    goodSpeen: true,
    outDevices: {
        keyboard: 'imice',
        mouse: 'Imice',
    },
    inputDevices: {
        screen: 'Fantastic',
        panel: 'IPS'
    }
}
console.log(computer);
delete computer.inputDevices //deletes specific values
console.log(computer);
console.log(computer['brand']);
console.log(computer.outDevices.keyboard);
