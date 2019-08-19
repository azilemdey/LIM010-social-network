// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';

// myFunction();

// Delimitar el tamaño del texto

const inputWritePost = document.getElementById('post');
const botonSavePost = document.getElementById('save-text');
const editBtn = document.getElementById('edit-text');
const deleteText = document.getElementById('delete-text');

let arrPost = [];
window.onload = () => {if(localStorage.getItem('post') !==null){const printer=JSON.parse(localStorage.getItem('post'));
const publico = document.getElementById("post1");
publico.innerHTML=printer[0];
publico.disabled=true}};

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
    inputWritePost.value = '';
    localStorage.setItem('post', JSON.stringify(arrPost));
    console.log(arrPost)
    //console.log(arr3);
      }
  else if(text !== ''){
      arrPost.push(text);
      localStorage.setItem('post', JSON.stringify(arrPost));
      const publico = document.getElementById("post1");
      publico.innerHTML=arrPost[0];
      inputWritePost.value = '';
      publico.disabled=true;
      console.log(arrPost)
    }
});

editBtn.addEventListener('click', () => {
  textarea.disabled = false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
});
// guardar el texto en variable


deleteText.addEventListener('click', () => {
  alert('Estas seguro que quiere eliminar');
  // localStorage.removeItem('saving');
});

tinymce.init({
  selector: 'textarea',
  plugins: 'lists media',
  toolbar: 'addcomment showcomments casechange checklist code formatpainter insertfile pageembed permanentpen',
  toolbar_drawer: 'floating',
  tinycomments_mode: 'embedded',
  tinycomments_author: 'Author name'
});





// const arr = ['lunes','martes','miercoles','jueves','viernes','sabado'];
// const arrObj = [{},{},{}];

// localStorage.setItem('propiedad1', JSON.stringify(arr));
// localStorage.setItem('propiedad2', JSON.stringify(arrObj));
// console.log(typeof localStorage.getItem('propiedad1'));
// console.log(localStorage.getItem(JSON.parse('propiedad2')))

// console.log(JSON.parse(localStorage.getItem('propiedad1')));
