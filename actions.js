

document.addEventListener('DOMContentLoaded',function(event){
       
    
    var picture = document.querySelectorAll(".gallery_picture");


picture.forEach((element,index) => {
    element.addEventListener('click', ()=>{
        if (element.classList.contains("activada")) {
            element.classList.remove("activada");
          } else {
            element.classList.add("activada");
          }
    });
});


})