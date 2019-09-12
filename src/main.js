/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const loggin = document.getElementById('loggin');
const linkregistro = document.getElementById('linkregistro');
const registro = document.getElementById('registro');
const btnRegister = document.getElementById('register');
const inputFile = document.getElementById('input-file');
const mailRegisterInput = document.getElementById('register-email');
const inputWritePost = document.getElementById('post');
const printerPost = document.getElementById('printer-post');
const texto = document.getElementsByName('texto');
const sectionPost = document.getElementById('posts');
const preview = document.getElementById('posting-img');
const arrPost = [];

const validarEmail = (correo) => {
  const correoCorrecto = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  correoCorrecto.test(correo);
};

linkregistro.addEventListener('click', () => {
  loggin.classList.add('hide');
  registro.classList.remove('hide');
});

btnRegister.addEventListener('click', () => {
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
const getPosts = () => JSON.parse(localStorage.getItem('post'));
const setPosts=(arrayInLs)=>localStorage.setItem('post',JSON.stringify(arrayInLs));

const objPostTexto = {
  text: '',
  src: '',
  fecha: new Date(),
};
const pintarArray = (obj, ele) => {
  ele.innerHTML = ''
  let string = '';
  for (let indice = 0; indice < obj.length; indice++) {
    string += `<div class='card'><textArea class = 'template-posts'cols='40' rows='5' width='70%' name='texto' readOnly maxlength='151'>${obj[indice].text}</textArea> <img src= ${obj[indice].src} class= 'imagen'>
<div class='btn-edit'><div><img src='water-lily.png' class='pencil' id=${indice}></div><div><img src='descargar.png' class='pencil hide' name='save' id=${indice}><img src='editar.png' class='pencil' id=${indice} name='edit'><img src='borrar.png' class='pencil' id=${indice} name='delete'></div></div></div>`;
  }
  ele.innerHTML = string;
};

// Asociar el evento de click al padre
sectionPost.addEventListener('click', (e) => {
  const textInput = inputWritePost.value;
  if (e.target.id === 'save-text') {
    objPostTexto.text = textInput;

    if (localStorage.getItem('post') !== null && (textInput !== '' || inputFile !== '')) {
      const arrPostLocalStorage = getPosts();
      const arr3 = arrPostLocalStorage.slice();
      arr3.push(objPostTexto);
      setPosts(arr3);
      const arrPostLocalStorage1 = getPosts();
      pintarArray(arrPostLocalStorage1, printerPost);
      inputWritePost.value = '';
      inputFile.value = '';
      preview.src = '';
    } else if (textInput !== '' || inputFile !== '') {
      arrPost.push(objPostTexto);
      setPosts(arrPost);
      pintarArray(arrPost, printerPost);
    }
    inputWritePost.value = '';
    inputFile.value = '';
    preview.src = '';
  }
});

document.getElementById('input-file').addEventListener('change', () => {
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  reader.onloadend = () => { 
    preview.src = reader.result;
    objPostTexto.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
});

window.onload = () => {
  if (localStorage.getItem('post') !== null) {
    const printer = getPosts();
    pintarArray(printer, printerPost);
  }
};
printerPost.addEventListener('click', (event) => {
  const targetMethod = event.target;
  const arrayIndex = targetMethod.id;
  if (targetMethod.name === 'delete') {
    const arrayToDelete = getPosts();
    arrayToDelete.splice(arrayIndex, 1);
    setPosts(arrayToDelete);
    pintarArray(arrayToDelete, printerPost);
  } else if (targetMethod.name === 'edit') {
    texto[arrayIndex].removeAttribute('readOnly');
  } else if (targetMethod.name === 'save') {
    const arrayToEdit = getPosts();
    arrayToEdit[arrayIndex] = texto[arrayIndex].value;
    setPosts(arrayToEdit);
    pintarArray(arrayToEdit, printerPost);
  }
});