const api_url = `https://api.coincap.io/v2/assets`;
const fetchCripto = async () => {
  const response = await fetch(api_url);
  const data = await response.json();
  return data;
  
}

const cripto = async () => {
  const tagP = document.getElementById('container');
  const dataCripto = await fetchCripto();
  console.log(dataCripto);
  for (let elem of dataCripto.data) {
    tagP.innerText =  `${elem.name} (${elem.symbol}) : ${elem.priceUsd}`;

  }
  return dataCripto
}
cripto();
