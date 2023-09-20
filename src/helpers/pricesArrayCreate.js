export const pricesArray = [];

for (let i = 30; i <= 500; i += 10) {
    pricesArray.push(i);
}

export const jsonPrices = JSON.stringify(pricesArray);