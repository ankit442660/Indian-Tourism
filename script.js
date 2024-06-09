
document.getElementById("lakbutton").addEventListener('click' ,()=>{
window.open("https://lakshadweep.gov.in/tourism/tourist-packages/");
});
document.getElementById("tajbutton").addEventListener('click', ()=>{
    window.open("https://www.makemytrip.com/tripideas/attractions/taj-mahal");
});

let right =document.querySelector(".imagecontainer");
let left=document.querySelector(".imagecontainer");



 scroll3=document.getElementById("scroll1").addEventListener('click',()=>{
    left.scrollBy(350,0);
})
 scroll2=document.getElementById("scroll2").addEventListener('click',()=>{
    right.scrollBy(-350,0);

})

const icon=document.querySelector(".styleicon");
const nav_header=document.querySelector('body');
const togglNavBar=()=>{
    nav_header.classList.toggle('active');
}

icon.addEventListener("click", ()=>togglNavBar());
   
