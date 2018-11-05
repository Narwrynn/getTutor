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

