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
<button type="button" id=${i}  ><img src="borrar.png" class="pencil"></button></div>`
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

  if(localStorage.getItem('post') !== null ) {
    const text1 = JSON.parse(localStorage.getItem('post'));
    arrPost=text1.slice();
    arrPost.push(text);
    //arr3.push(text); 
    localStorage.setItem('post', JSON.stringify(arrPost));
    console.log(arrPost)
    //console.log(arr3);
      }
  else if(text !== ''){
      arrPost.push(text);
      localStorage.setItem('post', JSON.stringify(arrPost));
      for(let i=0;i<arrPost.length;i++){
      printerPost.innerHTML += `<textArea cols="40" rows="5" readonly name="texto" maxlength="151" class="post" id=${i}>${arrPost[i]}</textArea>`
      };
      inputWritePost.value = '';
      console.log(arrPost)
    }
});