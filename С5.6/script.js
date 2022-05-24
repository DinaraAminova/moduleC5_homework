const resultNode = document.querySelector('.j-result');
const btnNode = document.querySelector('.j-btn-request');

const inputNode1 = document.querySelector('.input1');
const inputNode2 = document.querySelector('.input2');

function useRequest(url) {
  return fetch(url)
    .then((response) => {
      console.log('response', response);
      return response.url;
    })
    .catch(() => {
      console.log('error');
    });
}


btnNode.addEventListener('click', async () => {
  let n1 = Number(inputNode1.value);
  let n2 = Number(inputNode2.value);

  if (100 <= n1 && n1 <= 300 && 100 <= n2 && n2 <= 300) {
    const displayResult = await useRequest(`https://picsum.photos/${n1}/${n2}`);
    resultNode.innerHTML = `<img src="${displayResult}"/>`;
  }
  else {
    resultNode.innerHTML = '<div class="result j-result">Одно из чисел вне диапазона от 100 до 300!</div>';
  }
});