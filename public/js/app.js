document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
  
});
function displayMobileMenu(obj) {
  console.log('inside toggle');
  let menuId=document.getElementById('mobileMenu');
 menuId.style.display ='block';
 menuId.classList.add("change");
}

function changeColour(elem) {
  let postId = document.getElementById(elem);
  postId.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
 }
 
