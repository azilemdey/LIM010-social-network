// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// Delimitar el tamaño del texto

const inputWritePost = document.getElementById('post');
const botonSavePost = document.getElementById('save-text');
let printerPost = document.getElementById("printer-post");
const texto = document.getElementsByName("texto");
let arrPost = [];

window.onload = () => {
  if (localStorage.getItem('post') !== null) {
    const printer = JSON.parse(localStorage.getItem('post'));
    for (let i = 0; i < printer.length; i++) {

      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readonly="readonly" maxlength="151">${printer[i]}</textArea>
    <div class="btn-edit"><img src="water-lily.png" class="pencil" id=${i} ><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div>`;
      inputWritePost.value = '';
    }
  }
};

inputWritePost.addEventListener('keyup', () => {
  const numCaracteres = inputWritePost.value.length;
  if (numCaracteres >= 151) {
    inputWritePost.style.color = '#ff0000';
  } else {
    inputWritePost.style.color = '#000000';
  }
});

botonSavePost.addEventListener('click', () => {
  const text = inputWritePost.value;

  if (localStorage.getItem('post') !== null && text !== '') {
    let arrPostLocalStorage = JSON.parse(localStorage.getItem('post'));
    arr3 = arrPostLocalStorage.slice();
    arr3.push(text);
    localStorage.setItem('post', JSON.stringify(arr3))
    const arrPostLocalStorage1 = JSON.parse(localStorage.getItem('post'));
    printerPost.innerHTML = '';
    for (let i = 0; i < arrPostLocalStorage1.length; i++) {
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" id=text${i} readonly="readonly"  maxlength="151">${arrPostLocalStorage1[i]}</textArea>
    <div class="btn-edit"><img src="water-lily.png" class="pencil" id=${i} ><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div>`
    };
    inputWritePost.value = ''
  }
  else if (text !== '') {
    arrPost.push(text);
    localStorage.setItem('post', JSON.stringify(arrPost));
    printerPost.innerHTML = `<div class="card"> <textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" id=text${0} readonly="readonly"  maxlength="151">${arrPost[0]}</textArea>
      <div class="btn-edit"><img src="water-lily.png" class="pencil" id=${i} ><img src="editar.png" class="pencil" id=${0} name="edit"><img src="borrar.png" class="pencil" id=${0} name="delete"></div></div>`;
  };
  inputWritePost.value = ''
});

printerPost.addEventListener('click', (event) => {
  const targetMethod = event.target;
  const arrayIndex = targetMethod.id;
  if (targetMethod.name == "delete") {
    const arrayToDelete = JSON.parse(localStorage.getItem('post'));
    arrayToDelete.splice(arrayIndex, 1);
    localStorage.setItem('post', JSON.stringify(arrayToDelete));
    printerPost.innerHTML = '';
    for (let i = 0; i < arrayToDelete.length; i++) {
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readOnly maxlength="151">${arrayToDelete[i]}</textArea>
<div class="btn-edit"><img src="water-lily.png" class="pencil" id=${i} ><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div>`
    }
  }
  else if (targetMethod.name == "edit") {
    const arrayToEdit = JSON.parse(localStorage.getItem('post'));
    arrayToEdit[arrayIndex] = texto[arrayIndex].value;
    localStorage.setItem('post', JSON.stringify(arrayToEdit));
    printerPost.innerHTML = '';
    for (let i = 0; i < arrayToEdit.length; i++) {
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readOnly maxlength="151">${arrayToEdit[i]}</textArea>
<div class="btn-edit"> <img src="water-lily.png" class="pencil" id=${i} ><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div>`
    }
    texto[arrayIndex].removeAttribute('readOnly');
  };
});


