//Display popup menu if clicked
const mobileMenu = document.querySelector('.mobileMenuBtn');
mobileMenu.addEventListener('click', popupToggle);
let initialPress = false;

function popupToggle(){
  const popupMenu = document.
  querySelector('.popupMenu');

  if (initialPress === false){
    popupMenu.style.display = 'block';
    initialPress = true;
  } else if (initialPress === true) {
    popupMenu.style.display = 'none';
    initialPress = false;
  }
  animateMenu();
}

//animate menu function
let animationUsed = false;
const menuLn =[
document.getElementById("menuLn1"),
document.getElementById("menuLn2"),
document.getElementById("menuLn3"),
]

const animateMenu = () =>{
    mobileMenu.classList.add('animate');
    menuToX();
    setTimeout(function(){ mobileMenu.classList.remove('animate'); }, 1000);
}

//Change mobile menu to an x if clicked
function menuToX(){
  if (animationUsed === false){
    menuLn[0].classList.add('dissappear');
    menuLn[1].classList.add('rotateDown45');   
    menuLn[2].classList.add('rotateUp45');
    animationUsed = true;
} else if (animationUsed === true){
    menuLn[0].classList.remove('dissappear');
    menuLn[1].classList.remove('rotateDown45');     
    menuLn[2].classList.remove('rotateUp45');
    animationUsed = false;
   }
}