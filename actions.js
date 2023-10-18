

document.addEventListener('DOMContentLoaded',function(event){
       
    
    var picture = document.querySelectorAll(".gallery_picture");
    var modal = document.getElementById("modal")

picture.forEach((element,index) => {
    element.addEventListener('click', ()=>{
        if (element.classList.contains("activada")) {
            element.classList.remove("activada");
            if (modal.classList.contains("modalSelected")) 
                modal.classList.remove("modalSelected");

          } else {
            element.classList.add("activada");
            modal.classList.add("modalSelected");
    
          
          }
    });
});


})