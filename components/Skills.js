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
`<section style="height:153vh; margin-top:10em; color:white;background:rgb(44, 43, 43);" id="skills">
<div class="mt-5 text-center">
    <h1 style="font-size:72px;color:rgb(4, 235, 43);"> My Skills <i class="fa-solid fa-screwdriver-wrench"></i> </h1>
</div>

<div  class="mt-5 container text-center">
    <div class="mt-5 row">
  
      <div  class="col-12">
  
        <p style="font-size:25px;">This section will display languages learnt and frameworks learnt</p>
        
      </div>
</div>

<div  class="mt-5 container text-center">
    <div class="mt-5 row">

      <div  class=" col-6">
        <h1 style="font-size:32px;"><span style="color:rgb(4, 235, 43);">Front-end</span></h1>
        <ul :class="hidden" style="list-style:none;">
      <li v-for="skill in frontend" style="font-size:23px;"><i  :class="skill.icons"></i> {{skill.name}}</li>
   
    </ul>
        
      </div>
      <div  class=" col-6">
        <h1   style="font-size:32px;"> <span style="color:rgb(4, 235, 43);">Back-end</span></h1>
        <ul :class="hidden" style="list-style:none;">
        <li v-for="skill in backend" style="font-size:23px;"><i  :class="skill.icons"></i> {{skill.name}}</li>
          </ul>
        
      </div>
</div>


<div  class="mt-5 container text-center">
    <div class="mt-5 row">
   <!--style="border:1px solid;border-color:white;"-->     
      <div  class="col-6">
        <h1 style="font-size:32px;"><span style="color:rgb(4, 235, 43);">Technologies</span></h1>
      <ul :class="hidden" style="list-style:none;">
      
      <li v-for="skill in technologies" style="font-size:23px;"><i  :class="skill.icons"></i> {{skill.name}}</li>
     
     
    </ul>
        
      </div>
   
       <!--style="border:1px solid;border-color:white;"-->     
          <div  class="col-6">
            <h1 style="font-size:32px;"><span style="color:rgb(4, 235, 43);">Other skills</span></h1>
          <ul :class="hidden" style="list-style:none;">
          <li v-for="skill in other" style="font-size:23px;"><i  :class="skill.icons"></i> {{skill.name}}</li>
       
         
         
        </ul>
            
          </div>
          </div>

</section>
<!---End of skills section-->`

})