// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// Delimitar el tamaño del texto
const loggin=document.getElementById("loggin");
const linkregistro=document.getElementById("linkregistro");
const registro=document.getElementById("registro");
const btnRegister=document.getElementById("register");
const inputFile = document.getElementById('input-file');

linkregistro.addEventListener("click",()=>{
loggin.classList.add("hide");
registro.classList.remove("hide");
});

btnRegister.addEventListener("click",()=>{
 const validarEmail=(correo)=> {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}})


const inputWritePost = document.getElementById('post');
const botonSavePost = document.getElementById('save-text');
let printerPost = document.getElementById("printer-post");
const texto = document.getElementsByName("texto");
let arrPost = [];

window.onload = () => {
  if (localStorage.getItem('post') !== null) {
    const printer = JSON.parse(localStorage.getItem('post'));
    for (let i = 0; i < printer.length; i++) {
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readonly="readonly" maxlength="151">${printer[i].text}</textArea>
    <div class="btn-edit"><div><img src="water-lily.png" class="pencil" id=${i}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${i}><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div><div>`;
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
  const textInput = inputWritePost.value;
  const obj = {
    text: textInput,
    img: '',
    fecha: new Date()
  
  }
  if (localStorage.getItem('post') !== null && textInput !== '' ) {
    let arrPostLocalStorage = JSON.parse(localStorage.getItem('post'));
    arr3 = arrPostLocalStorage.slice();
    arr3.push(obj);
    localStorage.setItem('post', JSON.stringify(arr3))
    const arrPostLocalStorage1 = JSON.parse(localStorage.getItem('post'));
    printerPost.innerHTML = '';
    for (let i = 0; i < arrPostLocalStorage1.length; i++) {
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" id=text${i} readonly="readonly"  maxlength="151">${arrPostLocalStorage1[i].text}</textArea>
    <div class="btn-edit"><div><img src = "" ><img src="water-lily.png" class="pencil" id=${i}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${i}><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div></div>`
    };
    inputWritePost.value = ''
  }
  else if (textInput !== ''  ) {
    arrPost.push(obj);
    localStorage.setItem('post', JSON.stringify(arrPost));
    printerPost.innerHTML = `<div class="card"> <textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" id=text${0} readonly="readonly"  maxlength="151">${arrPost[0].text}</textArea>
    <div class="btn-edit"><div>
    <img src = "" ><img src="water-lily.png" class="pencil" id=${0}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${0}><img src="editar.png" class="pencil" id=${0} name="edit"><img src="borrar.png" class="pencil" id=${0} name="delete"></div></div></div>`;
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
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readOnly maxlength="151">${arrayToDelete[i].text}</textArea>
<div class="btn-edit"><div><img src="water-lily.png" class="pencil" id=${i}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${i}><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div></div>`
    }
  }
  else if (targetMethod.name == "edit") {
    texto[arrayIndex].removeAttribute('readOnly');
    texto[arrayIndex].style.cursor="[b]text[/b]"; // ?????
  }
  else if (targetMethod.name == "save"){
  const arrayToEdit = JSON.parse(localStorage.getItem('post'));
  arrayToEdit[arrayIndex] = texto[arrayIndex].value;
  localStorage.setItem('post', JSON.stringify(arrayToEdit));
  printerPost.innerHTML = '';
  for (let i = 0; i < arrayToEdit.length; i++) {
    printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readOnly maxlength="151">${arrayToEdit[i].text}</textArea>
<div class="btn-edit"><div><img src="water-lily.png" class="pencil" id=${i}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${i}><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div></div>`
  }}
});



inputFile.addEventListener('change', () => {
  const nameFile =inputFile.files[0].name;
  const templateSrc= `C:/Users/L-10/Downloads/${nameFile}`
  alert(templateSrc)});
  

// const newFunction = () => {
//   const previewFile = document.getElementById('input-file');
//   const url = previewFile.files[0].name;
//   previewFile.addEventListener('change', () => {
//     alert(url);
//     console.log(url)
// })}

    
  /*  

   const imgFile = () => {
 



   }



   const previewFile = document.getElementById('input-file')
    previewFile.addEventListener('change', () => {
      const holi =previewFile.files[0].name
      const reader = new FileReader();
      reader.onload = () => {
        const dataURL = reader.result;
        const preview = document.getElementById('posting-img');
       preview.src = dataURL;
       
       console.log(preview.src)
      };
      reader.readAsDataURL(previewFile.files[0]);

function getUrl(){
  var url = document.getElementById('inputFile').files[0].name;
  alert(url);
}
     
}) */
  
