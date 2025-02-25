document.addEventListener("DOMContentLoaded",function (){
    const images = document.querySelectorAll(".gallery img");
    images.forEach(img => {
        img.addEventListener("click", function(){
            alert("You clicked on " + this.alt);
        });
    });
});