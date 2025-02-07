document.addEventListener("DOMContentLoaded", function () {
  // Add your JavaScript here.
  
});


function changeColour(elem) {
  let postId = document.getElementById(elem);
  postId.style.background = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
 }
 
 function displayMobileMenu(obj) {
  let menuId=document.getElementById('mobileMenu');
  menuId.style.display ==='block' ? menuId.style.display ='none' :menuId.style.display ='block';
  obj.classList.toggle("change");
}
