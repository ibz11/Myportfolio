var i=0,text;

text="I am,Ibrahim"

function typing(){
    if(i<text.length){
        document.getElementById("text").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}

typing()

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Introduction

let intro=document.querySelector('.intro')
let logo=document.querySelector('.logo-header')
let logoSpan=document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded',()=>{
   setTimeout(()=>{

    logoSpan.forEach((span,idx)=>{

      setTimeout(()=>{
        span.classList.add('active');
      },(idx +1)*400)
      
      
      setTimeout(()=>{
        span.classList.remove('active');
        span.classList.add('fade');
        
      },(idx +1)*500)



    },1000)


    setTimeout(()=>{
       intro.style.top='-100vh'
        
      },800)
   

}) 
})




//Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry)=>{

        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));