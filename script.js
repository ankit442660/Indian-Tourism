function scroll1(){
    let left=document.querySelector(".imagecontainer");
    left.scrollBy(350,0);
}
document.getElementById("scroll2").addEventListener('click',()=>{
    let right =document.querySelector(".imagecontainer");
    right.scrollBy(-350,0);
});
document.getElementById("lakbutton").addEventListener('click' ,()=>{
window.open("https://lakshadweep.gov.in/tourism/tourist-packages/");
});
document.getElementById("tajbutton").addEventListener('click', ()=>{
    window.open("https://www.makemytrip.com/tripideas/attractions/taj-mahal");
});