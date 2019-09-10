// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// Delimitar el tamaño del texto
const loggin = document.getElementById('loggin');
const linkregistro = document.getElementById("linkregistro");
const registro = document.getElementById("registro");
const btnRegister = document.getElementById("register");
const inputFile = document.getElementById('input-file');
const mailRegisterInput = document.getElementById("register-email");
const inputWritePost = document.getElementById('post');
const botonSavePost = document.getElementById('save-text');
let printerPost = document.getElementById("printer-post");
const texto = document.getElementsByName("texto");
let arrPost = [];

const validarEmail = (correo) => {
  const correoCorrecto = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  if (correoCorrecto.test(correo)) {
    alert("La dirección de email " + mailRegisterInput + " es correcta.");
  } else {
    alert("La dirección de email es incorrecta.");
  }
}

const sectionPost = document.getElementById('posts');


linkregistro.addEventListener('click', () => {
  loggin.classList.add("hide");
  registro.classList.remove("hide");
});

btnRegister.addEventListener("click", (e) => {
  validarEmail(mailRegisterInput.value);
});

// addEventListener

inputWritePost.addEventListener('keyup', () => {
  const numCaracteres = inputWritePost.value.length;
  if (numCaracteres >= 151) {
    inputWritePost.style.color = '#ff0000';
  } else {
    inputWritePost.style.color = '#000000';
  }
});

const objPostTexto = {
  text: '',
  src: '',
  fecha: new Date()
}

const getPosts = () => JSON.parse(localStorage.getItem('post'));

/* Asociar el evento de click al padre*/
sectionPost.addEventListener('click', (e) => {
  const textInput = inputWritePost.value;

  if (e.target.id === 'save-text') {
    objPostTexto.text = textInput;

    if (localStorage.getItem('post') !== null && textInput !== '') {
      let arrPostLocalStorage = getPosts();
      console.log(arrPostLocalStorage);
      arr3 = arrPostLocalStorage.slice();
      arr3.push(objPostTexto);
      localStorage.setItem('post', JSON.stringify(arr3))
      const arrPostLocalStorage1 = getPosts();
      printerPost.innerHTML = '';
      for (let i = 0; i < arrPostLocalStorage1.length; i++) {
        printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" id=text${i} readonly="readonly"  maxlength="151">${arrPostLocalStorage1[i].text}</textArea>
      <img src= ${arrPostLocalStorage1[i].src} class= "imagen">
      <div class="btn-edit"><div><img src="water-lily.png" class="pencil" id=${i}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${i}><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div></div>`
      };
      inputWritePost.value = ''
    }
    else if (textInput !== '') {
      arrPost.push(objPostTexto);
      localStorage.setItem('post', JSON.stringify(arrPost));
      printerPost.innerHTML = `<div class="card"> <textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" id=text${0} readonly="readonly" maxlength="151">${arrPost[0].text}</textArea> <img src= ${arrPost[0].src} class= "imagen">
      <div class="btn-edit"><div><img src="water-lily.png" class="pencil" id=${0}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${0}><img src="editar.png" class="pencil" id=${0} name="edit"><img src="borrar.png" class="pencil" id=${0} name="delete"></div></div></div>`;
    };
    inputWritePost.value = ''
  }

  if (e.target.id === 'input-file') {
    return
  }

});

document.getElementById('input-file').addEventListener('change', () => {
  console.log('entre');

  const preview = document.getElementById('posting-img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  reader.onloadend = () => {
    preview.src = reader.result;
    objPostTexto.src = reader.result;
    arrPost.push(objPostTexto)
    console.log(arrPost)
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }

  console.log(objPostTexto)
});

window.onload = () => {
  if (localStorage.getItem('post') !== null) {
    const printer = getPosts();
    for (let i = 0; i < printer.length; i++) {
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readonly="readonly" maxlength="151">${printer[i].text}</textArea><img src= ${printer[i].src} class= "imagen">
      <div class="btn-edit"><div><img src="water-lily.png" class="pencil" id=${i}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${i}><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div><div>`;
      inputWritePost.value = '';
    }
  }
};



printerPost.addEventListener('click', (event) => {
  const targetMethod = event.target;
  const arrayIndex = targetMethod.id;
  if (targetMethod.name == "delete") {
    const arrayToDelete = getPosts();
    arrayToDelete.splice(arrayIndex, 1);
    localStorage.setItem('post', JSON.stringify(arrayToDelete));
    printerPost.innerHTML = '';
    for (let i = 0; i < arrayToDelete.length; i++) {
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readOnly maxlength="151">${arrayToDelete[i].text}</textArea> <img src= ${arrayToDelete[i].src} class= "imagen">
<div class="btn-edit"><div><img src="water-lily.png" class="pencil" id=${i}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${i}><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div></div>`
    }
  }
  else if (targetMethod.name == "edit") {
    texto[arrayIndex].removeAttribute('readOnly')
  }
  else if (targetMethod.name == "save") {
    const arrayToEdit = getPosts();
    arrayToEdit[arrayIndex] = texto[arrayIndex].value;
    localStorage.setItem('post', JSON.stringify(arrayToEdit));
    printerPost.innerHTML = '';
    for (let i = 0; i < arrayToEdit.length; i++) {
      printerPost.innerHTML += `<div class="card"><textArea class = "template-posts"cols="40" rows="5" width="70%" name="texto" readOnly maxlength="151">${arrayToEdit[i].text}</textArea><img src= ${arrayToEdit[i].src} class= "imagen">
<div class="btn-edit"><div><img src="water-lily.png" class="pencil" id=${i}></div><div><img src="descargar.png" class="pencil hide" name="save" id=${i}><img src="editar.png" class="pencil" id=${i} name="edit"><img src="borrar.png" class="pencil" id=${i} name="delete"></div></div></div>`
    }
  }
});
