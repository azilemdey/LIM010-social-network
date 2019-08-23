// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// Delimitar el tamaño del texto

const inputWritePost = document.getElementById('post');
const botonSavePost = document.getElementById('save-text');
const printerPost=document.getElementById("printer-post");
const divElement=document.getElementById("editar");
let arrPost = [];

window.onload = () => {if(localStorage.getItem('post') !==null){const printer=JSON.parse(localStorage.getItem('post'));
for(let i=0;i<printer.length;i++){
  printerPost.innerHTML += `<div ><textArea class = "template-posts"cols="40" rows="5" width="70%" readonly name="texto" maxlength="151" class="post" id=${i}>${printer[i]}</textArea>
    <div  id="editar"  class="btn-edit"><img src="editar.png" class="pencil"><img src="borrar.png" class="pencil" id=${i}></div></div>`;
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
    let arrPostLocalStorage = JSON.parse(localStorage.getItem('post'));
    arr3= arrPostLocalStorage.slice();
    arr3.push(text);
    localStorage.setItem('post', JSON.stringify(arr3))
    const arrPostLocalStorage1 = JSON.parse(localStorage.getItem('post'));
    printerPost.innerHTML='';
    for(let i=0;i<arrPostLocalStorage1.length;i++){
    printerPost.innerHTML += `<div><textArea class = "template-posts"cols="40" rows="5" width="70%" readonly name="texto" maxlength="151" class="post" id=${i}>${arrPostLocalStorage1[i]}</textArea>
    <div  id="editar"  class="btn-edit"><img src="editar.png" class="pencil"><img src="borrar.png" class="pencil" id=${i}></div></div>`
    };
    inputWritePost.value = ''
  }
  else if(text !== ''){
      arrPost.push(text);
      localStorage.setItem('post', JSON.stringify(arrPost));
      printerPost.innerHTML = `<div> <textArea class = "template-posts"cols="40" rows="5" width="70%" readonly name="texto" maxlength="151" class="post" id=${0}>${arrPost[0]}</textArea>
      <div id="editar" class="btn-edit"><img src="editar.png" class="pencil" ><img src="borrar.png" class="pencil" id=${0}></div></div>`;
      };
      inputWritePost.value = ''
});

divElement.addEventListener('click',(event)=>{
  const arrayIndex = event.target.id;
  console.log(arrayIndex);
  //const arrayDelete = JSON.parse(localStorage.getItem('post'));
  /* arrayDelete.splice(arrayIndex, 1);
  localStorage.setItem('post',JSON.stringify(arrayDelete))
  const ArrayLocalDelete = JSON.parse(localStorage.getItem('post'));
console.log(arrayDelete);
  for(let i=0;i<ArrayLocalDelete.length;i++){
  printerPost.innerHTML += `<div ><textArea class = "template-posts"cols="40" rows="5" width="70%" readonly name="texto" maxlength="151" class="post" id=${i}>${ArrayLocalDelete[i]}</textArea>
  <div class="btn-edit"><img src="editar.png" class="pencil"><img src="borrar.png" class="pencil" id=${i}></div></div>`
  }; */
  
});
