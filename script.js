document.addEventListener("DOMContentLoaded", function() {
     document.querySelectorAll("nav a").forEach(link => {
         link.addEventListener("click", function(event) {
             event.preventDefault(); 
             const page = this.getAttribute("data-page"); 
             if (page) {
                 window.location.href = page; 
             }
         });
     });
 });