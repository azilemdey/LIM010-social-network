// aqui exportaras las funciones que necesites
// export const textarea1 = (posts) => {
const textarea = document.getElementById('post')
export const textarea1 = (posts) => {
  if (posts.value.length > 150) {
    alert('Por Favor la descripción no debe exceder de 150 caracteres');
    posts.focus();
    return false;
  }
  return true;
};
