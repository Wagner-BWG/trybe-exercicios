const API_url = 'https://api.coincap.io/v2/assets';

const appendData = (array) => {
    const table = document.getElementById('valores');
    table.innerText = array;
}

const fetchFakeCoins = () => {
    const request = {
        limit: 10,
    }

    fetch(API_url, request)
        .then(response => response.json())
        .then(data => {
            console.log(data.data[0]);
            const coins = [];
            for(let i = 0; i < 10; i += 1){
                const thisCoin = { };
                thisCoin[data.data[i].name] = data.data[i].priceUsd;
                coins.push(thisCoin);
            }
            appendData(coins);
        });
}

window.onload = () => fetchFakeCoins();