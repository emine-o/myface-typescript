document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
  
});
function toggleMenu(x) {
  console.log('inside toggle');
  x.classList.toggle("change");
}

function changeColour(elem) {
  let postId = document.getElementById(elem);
  postId.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
 }
 
