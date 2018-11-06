let collapseBtn = document.querySelector("#collapse-menu");
let navMenu = document.querySelector(".nav-menu");

collapseBtn.addEventListener("click", function(){
   this.classList.toggle("collapse-active");
    
    if(navMenu.style.display == "flex"){
        navMenu.style.display = "none";
    }else{
        navMenu.style.display = "flex";
    }
});

window.addEventListener('resize', function(){
     if(window.innerWidth >= 800){
         navMenu.style.display = "flex";
     }else{
         navMenu.style.display = "none";
         collapseBtn.classList.remove("collapse-active");
     }
});