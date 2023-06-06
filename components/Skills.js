app.component('skills',{

  data() {
    return {
      file_url:"./json_files/mySkills.json",
      skills:[

        {
        "name":"HTML",
        "category":"frontend",
        "icons":"fa-brands fa-html5"
        },
        
        {
        "name":"CSS",
        "category":"frontend",
        "icons":"fa-brands fa-css3-alt"
        },
        
        {
        "name":"JAVASCRIPT",
        "category":"frontend",
        "icons":"fa-brands fa-js"
        },
        
        {
        "name":"BOOTSTRAP",
        "category":"frontend",
        "icons":"fa-brands fa-js"
        }
        
        ,
        {
        "name":"Vue JS",
        "category":"frontend",
        "icons":"fa-brands fa-vuejs"
        }
        ,
        {
        "name":"PYTHON",
        "category":"backend",
        "icons":"fa-brands fa-python"
        }
        ,
        {
        "name":"PHP",
        "category":"backend",
        "icons":"fa-brands fa-php"
        }
        ,
        {
        "name":"SQL",
        "category":"backend",
        "icons":"fa-solid fa-database"
        }
         
        ,
        {
        "name":"LARAVEL",
        "category":"technologies",
        "icons":"fa-brands fa-laravel"
        }
        
        ,
        {
        "name":"FLASK",
        "category":"technologies",
        "icons":"fa-brands fa-python"
        }
        ,
        {
        "name":"DJANGO",
        "category":"technologies",
        "icons":"fa-brands fa-python"
        }
        ,
        {
        "name":"ANDROID-KOTLIN",
        "category":"technologies",
        "icons":"fa-brands fa-android"
        }
        
        ,
        {
        "name":"MS OFFICE",
        "category":"other",
        "icons":"fa-brands fa-microsoft"
        }
        
        ]

    }
},



//getting data from local json file
// mounted:
//   function(){
//     {
  
//         axios.get(this.file_url).then((res)=>{
//             console.log(res)
//             this.skills=res.data
//         }).catch((err)=>{
//             console.log(err)
//         })
    
//     }

//   },
  computed:{
  frontend() {
  return this.skills.filter(skill => skill.category === 'frontend');
}
,
backend() {
  return this.skills.filter(skill => skill.category === 'backend');
}
,
technologies() {
  return this.skills.filter(skill => skill.category === 'technologies');
}
,
other() {
  return this.skills.filter(skill => skill.category === 'other');
}
},


template:
`

<section id="skills" style="background:black;" class="services-mf pt-5 route">
 <div class="container">
   <div class="row">
     <div class="col-sm-12">
       <div class="title-box text-center">
         <h3 style="color:rgb(4, 235, 43);" class="title-a">
           My Skills
         </h3>
         <p style="color:white;" class="subtitle-a">
         This sections covers the skills I have learnt. Click the button below to check projects
         </p>
         <a href="projects.html"style="border-color:rgb(4, 235, 43);color:rgb(4, 235, 43);;border-radius:none;border-width:3px;" class=" m-3 btn btn-outline-success">My Projects</a>
         <div style="background:rgb(4, 235, 43);" class="line-mf"></div>
       </div>
     </div>
   </div>

   <div class="row">

     <div v-for="skill in skills" class="col-md-4">
       <div class="service-box">
         <div class="service-ico">
           <span class="ico-circle"><i :class="skill.icons"></i></span>
         </div>
         <div class="service-content">
           <h2 class="s-title">{{skill.name}}</h2>
           <p class="s-description text-center">
             {{skill.category}}
          
           </p>

         </div>
       </div>
     </div>
     
 </div>
</section>`

})