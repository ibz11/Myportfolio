app.component('nav-bar', {
    data() {
        return {
            links:[
              {
                "page":"Home",
                "link":"/index.html"
              },
              {
                "page":"About",
                "link":"/about.html"
              }
              ,
              {
                "page":"Projects",
                "link":"/projects.html"
              },
        
              {
                "page":"Contact Me",
                "link":"/contact.html"
              }
            ]
        
          }
    }, 
 

template:
 `<!-- Navbar -->

 <nav style="background:rgb(4, 4, 4);" class="navbar navbar-expand-lg fixed-top">
   <div   class="container-fluid">
     <a  style="color:rgb(4, 235, 43);" class="navbar-brand" href="index.html"><i class="fa-solid fa-laptop-code"></i> Ibrahim/ Portfolio</a>
     <button style="background:rgb(4, 235, 43);" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
       <span style="color:rgb(4, 235, 43);" class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarText">
       <ul  class="navbar-nav me-auto mb-2 mb-lg-0">

         <li v-for="item in links" class="nav-item">
           <a  style="color:rgb(4, 235, 43);"  aria-current="page" class="nav-link active" :href="item.link">{{item.page}}</a>
         </li>

      
       </ul>
      
     </div>
   </div>
 </nav>
 `



})