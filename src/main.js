// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// Delimitar el tamaño del texto
const inputWritePost = document.getElementById('post');
const botonSavePost = document.getElementById('save-text');
const editBtn = document.getElementById('edit-text');
const deleteText = document.getElementById('delete-text');
const printerPost=document.getElementById("printer-post");
let arrPost = [];

window.onload = () => {if(localStorage.getItem('post') !==null){const printer=JSON.parse(localStorage.getItem('post'));
for(let i=0;i<printer.length;i++){
printerPost.innerHTML += `<textArea cols="40" rows="5" readonly name="texto" maxlength="151" class="post" id=${i}>${printer[i]}</textArea><button id=${i}>x</button>`
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
      printerPost.innerHTML += `<div><textArea cols="40" rows="5" readonly name="texto" maxlength="151" class="post" id=${i}>${arrPost[i]}</textArea><button id=${i}>x</button></div>`
      };
      inputWritePost.value = '';
      console.log(arrPost)
    }
});


editBtn.addEventListener('click', () => {
  textarea.disabled = false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
});
// guardar el texto en variable

//const printerPost=document.getElementById("printer-post");
deleteText.addEventListener('click', () => {
  alert('Estas seguro que quiere eliminar');
localStorage.removeItem('saving');
//for(let i=0;i<arrPost.length;i++){
//printerPost.innerHTML += `<textArea cols="40" rows="5" readonly name="texto" maxlength="151" class="post" id=${i}>${arrPost[i]}</textArea><button id=${i}>x</button>`
//}
  // localStorage.removeItem('saving');
});






// const arr = ['lunes','martes','miercoles','jueves','viernes','sabado'];
// const arrObj = [{},{},{}];

// localStorage.setItem('propiedad1', JSON.stringify(arr));
// localStorage.setItem('propiedad2', JSON.stringify(arrObj));
// console.log(typeof localStorage.getItem('propiedad1'));
// console.log(localStorage.getItem(JSON.parse('propiedad2')))

// console.log(JSON.parse(localStorage.getItem('propiedad1')));
