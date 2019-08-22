// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// Delimitar el tamaño del texto

const inputWritePost = document.getElementById('post');
const botonSavePost = document.getElementById('save-text');
const printerPost=document.getElementById("printer-post");
let arrPost = [];

window.onload = () => {if(localStorage.getItem('post') !==null){const printer=JSON.parse(localStorage.getItem('post'));
for(let i=0;i<printer.length;i++){
printerPost.innerHTML += `<textArea class = "template-posts"cols="40" rows="5"  width="70%" readonly name="texto" maxlength="151" class="post" id=${i}>${printer[i]}</textArea>
<div class="btn-edit"><button type="button" id=${i}><img src="editar.png" class="pencil"></button>
<button type="button" id=${i}  ><img src="borrar.png" class="pencil"></button></div>`;
inputWritePost.value = '';
}}};

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

  if(localStorage.getItem('post') !== null && text !== '' ) {
    const arrPostLocalStorage = JSON.parse(localStorage.getItem('post'));
    arrPost=arrPostLocalStorage.slice();
    arrPost.push(text);
    localStorage.setItem('post', JSON.stringify(arrPost))
    printerPost.innerHTML='';
    for(let i=0;i<arrPostLocalStorage.length;i++){
    printerPost.innerHTML += `<textArea class = "template-posts"cols="40" rows="5"  width="70%" readonly name="texto" maxlength="151" class="post" id=${i}>${arrPostLocalStorage[i]}</textArea>
    <div class="btn-edit"><button type="button" id=${i}><img src="editar.png" class="pencil"></button>
    <button type="button" id=${i}  ><img src="borrar.png" class="pencil"></button></div>`;
    };
  }
  else if(text !== ''){
      arrPost.push(text);
      localStorage.setItem('post', JSON.stringify(arrPost));
      printerPost.innerHTML = `<textArea class = "template-posts"cols="40" rows="5"  width="70%" readonly name="texto" maxlength="151" class="post" id=${0}>${arrPost[0]}</textArea>
      <div class="btn-edit"><button type="button" id=${0}><img src="editar.png" class="pencil"></button>
      <button type="button" id=${0}  ><img src="borrar.png" class="pencil"></button>`;
  
      };
      inputWritePost.value = '';
});

