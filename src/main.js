// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// Delimitar el tamaño del texto

const inputWritePost = document.getElementById('post');
const botonSavePost = document.getElementById('save-text');
const printerPost = document.getElementById("printer-post");
let arrPost = [];

window.onload = () => {
  if (localStorage.getItem('post') !== null) {
    const printer = JSON.parse(localStorage.getItem('post'));
    for (let i = 0; i < printer.length; i++) {

      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" id=${i} width="70%" name="texto" readOnly maxlength="151" class="post">${printer[i]}</textArea>
    <div class="btn-edit"><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div>`;
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
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" id=${i} width="70%" name="texto"  readOnly  maxlength="151" class="post">${arrPostLocalStorage1[i]}</textArea>
    <div class="btn-edit"><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div>`
    };
    inputWritePost.value = ''
  }
  else if (text !== '') {
    arrPost.push(text);
    localStorage.setItem('post', JSON.stringify(arrPost));
    printerPost.innerHTML = `<div class="card"> <textArea class = "template-posts"cols="40" rows="5" width="70%" id=${0} name="texto" readOnly  maxlength="151" class="post">${arrPost[0]}</textArea>
      <div class="btn-edit"><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${0} name="delete"></div></div>`;
  };
  inputWritePost.value = ''
});

printerPost.addEventListener('click', (event) => {
  const targetMethod = event.target;
   if (targetMethod.name == "delete"){
const arrayIndex= targetMethod.id; 
const arrayToDelete = JSON.parse(localStorage.getItem('post'));
arrayToDelete.splice(arrayIndex, 1);
localStorage.setItem('post',JSON.stringify(arrayToDelete));
printerPost.innerHTML='';
for(let i=0;i<arrayToDelete.length;i++){
printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" maxlength="151" class="post">${arrayToDelete[i]}</textArea>
<div class="btn-edit"><img src="editar.png" class="pencil" id=${i}><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div>`
}else if(targetMethod.name == "edit")

alert("jo")
  }
});


/* alert('¿Estas seguro de eliminar esta publicacion?');
const arrayToDelete = JSON.parse(localStorage.getItem('post'));
arrayToDelete.splice(arrayIndex, 1);
localStorage.setItem('post',JSON.stringify(arrayToDelete));
printerPost.readOnly = true;
printerPost.innerHTML='';
for(let i=0;i<arrayToDelete.length;i++){
printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" maxlength="151" class="post">${arrayToDelete[i]}</textArea>
<div class="btn-edit"><img src="editar.png" class="pencil"><img src="borrar.png" class="pencil" id=${i}></div></div>`
}; */


