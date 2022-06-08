const API_URL = `https://api.coincap.io/v2/assets`;

const fetchCrypto = () => {
  const cryptoCoins = fetch(API_URL).then(response => response.json())
  .then(data => data.data)
  .catch(error => error.toString());
  return cryptoCoins;
}

const showCoins = async () => {
  try{
    const coins = await fetchCrypto();
    const ul = document.getElementById('crypto-container');
    coins.forEach((coin, index) => {
      if (index < 10) {
        const li = document.createElement('li');
        const price = Number(coin.priceUsd);
        li.innerText = `${coin.name} (${coin.symbol}): ${price.toFixed(2)}`;
        ul.appendChild(li);
      }
    });
  } catch (erro) {
    console.log(`Deu ruim aqui!! ${erro}`);
  }
}

showCoins();

window.onload = fetchCrypto;

//.filter((dados, index) => index < 10)