const baseUrl = "https://api.coinranking.com/v2/coins";
const proxyUrl = "https://cors-anywhere.herokuapp.com/"; 
const apiKey = "coinranking78f134fc6eebb51aef973cfed886d64e823355bbf2dd16c8";

const apiUrl = `${proxyUrl}${baseUrl}`;

console.log(apiUrl);

fetch(`${apiUrl}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': `${apiKey}`, 
  }   
})
.then(response => {
  if (response.ok) {
    return response.json();
  }
})
.then(json => {
  console.log(json.data);

  let coinsData = json.data.coins;

  if (coinsData.length > 0) {
    
    let cryptoCoins = "";
    
    coinsData.forEach(coin => {
      cryptoCoins += `
        <tr>
          <td>${coin.rank}</td>
          <td>${coin.name}</td>
          <td>${coin.symbol}</td>
          <td>$${Math.round(coin.price * 100) / 100}</td>  
          <td>${coin.btcPrice}</td>
        </tr>
      `;
    });

    document.getElementById("data").innerHTML = cryptoCoins;

  }
})
.catch(error => {
  console.log(error);
});