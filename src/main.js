// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';

//myFunction();

//Delimitar el tamaño del texto
let contenido_textarea = "" 
const num_caracteres_permitidos = 10;
const textarea = document.getElementById("post");

textarea.addEventListener('keyup',()=>{
 const num_caracteres = textarea.value.length
   if (num_caracteres > num_caracteres_permitidos){ 
      textarea.value = contenido_textarea 
   }else{ 
      contenido_textarea = textarea.value	
   } 

   if (num_caracteres >= num_caracteres_permitidos){ 
      textarea.style.color="#ff0000"; 
   }else{ 
      textarea.style.color="#000000"; 
   } })

   //guardar el texto en variable
   const text = textarea.value;
   const saveText = localStorage.setItem('saving',text);
   console.log(saveText);

   //const saveBtn = document.getElementById('save-text');
  // saveBtn.addEventListener('click',()=)

 
 
   
