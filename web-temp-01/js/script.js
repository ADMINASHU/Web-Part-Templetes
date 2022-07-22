const list = document.querySelectorAll('.list');
function activeLink(){
     list.forEach((item) =>
     item.classList.remove('active'));
     this.classList.add('active');
 } 
list.forEach((item) =>
item.addEventListener('click',activeLink));

navigationmenu = document.querySelector('.navigationmenu')
navigation = document.querySelector('.navigation')

navigationmenu.addEventListener('click', () =>{
    navigation.classList.toggle('visible-action');
})