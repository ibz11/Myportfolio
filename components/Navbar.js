app.component('nav-bar', {
    data() {
        return {
            count: 0
        }
    }, 
 

template:
 `<!-- Navbar -->

 <nav style="background:rgb(4, 4, 4);" class="navbar navbar-expand-lg fixed-top">
   <div   class="container-fluid">
     <a  style="color:rgb(4, 235, 43);" class="navbar-brand" href="#"><i class="fa-solid fa-laptop-code"></i> Ibrahim/ Portfolio</a>
     <button style="background:rgb(4, 235, 43);" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
       <span style="color:rgb(4, 235, 43);" class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarText">
       <ul  class="navbar-nav me-auto mb-2 mb-lg-0">
         <li class="nav-item">
           <a  style="color:rgb(4, 235, 43);"  aria-current="page" class="nav-link active" href="#home">Home</a>
         </li>
         <li class="nav-item">
           <a  style="color:rgb(4, 235, 43);" class="nav-link" href="#about">About</a>
         </li>
         <li class="nav-item">
           <a  style="color:rgb(4, 235, 43);" class="nav-link" href="#skills">Skills</a>
         </li>
         <li class="nav-item">
           <a  style="color:rgb(4, 235, 43);" class="nav-link" href="#projects">My projects</a>
         </li>
       </ul>
      
     </div>
   </div>
 </nav>
 `



})