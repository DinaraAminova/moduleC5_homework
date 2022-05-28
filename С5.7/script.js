const cardJSON = localStorage.getItem('cardJSON');
console.log('cardJSON:', cardJSON);

const resultNode = document.querySelector('.j-result');
if (cardJSON) {
  resultNode.innerHTML = cardJSON;
}

const btnNode = document.querySelector('.j-btn-request');

const inputNode1 = document.querySelector('#input1');

const inputNode2 = document.querySelector('#input2');

function useRequest(url, callback) {
  return fetch(url)
    .then((response) => {
      console.log('response', response);
      return response.json();
    })
    .then((json) => {
      return callback(json);
    })
    .catch(() => {
      console.log('error');
    });
}

function displayResult(apiData) {
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
      <div class="card">
        <img
          src="${item.download_url}"
          class="card-image"
        />
        <p>${item.author}</p>
      </div>
    `;
    cards = cards + cardBlock;
  });
  localStorage.setItem('cardJSON', cards);
  resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', async () => {
  let page = Number(inputNode1.value);
  let limit = Number(inputNode2.value);
    if (page >= 1 && page <= 10 && limit >= 1 && limit <= 10) {
    
    await useRequest(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`, displayResult);
  }
    else {
     if (!(page >= 1 && page <= 10) && !(limit >= 1 && limit <= 10)) {
      resultNode.innerHTML = '<div class="result j-result">Номер страницы и лимит вне диапазона от 1 до 10!</div>';
    }
     else if (!(page >= 1 && page <= 10)) {
      resultNode.innerHTML = '<div class="result j-result">Номер страницы вне диапазона от 1 до 10!</div>';
    }
     else {
      resultNode.innerHTML = '<div class="result j-result">Лимит вне диапазона от 1 до 10!</div>';
    }
  }
});