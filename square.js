for (let i = 1; i <= 100; i++) {
    let square = i * i;

    console.log(i);

    if (square <= 100) {
        console.log(`Encountered the first square number: ${square}`);
        break;
    }
}
