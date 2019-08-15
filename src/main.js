// Este es el punto de entrada de tu aplicacion
//import { myFunction } from './lib/index.js';

//myFunction();

//Delimitar el tamaño del texto
const textarea = document.getElementById("post");

textarea.addEventListener('keyup',()=>{
 const num_caracteres = textarea.value.length
   if (num_caracteres >= 151 ){ 
      textarea.style.color="#ff0000"; 
   }else{ 
      textarea.style.color="#000000"; 
   }})

   //guardar el texto en variable
   

   const saveBtn = document.getElementById('save-text');
   saveBtn.addEventListener('click',()=>{
      const text = textarea.value;
      localStorage.setItem('saving',text);
      //textarea.disabled=true;
   })

 
 
   
