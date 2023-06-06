
app.component('project-section', {

    data() {
        return {
        url:"./json_files/projects.json",
       projects:null
    
        }
    },


    methods:{
//         async getuser(){
//          const res=await fetch(this.url)
//          const { results }=await res.json()
//          console.log(results)
        
//         this.projects=results[0].title
// }


        }
,
//getting data from local json file
mounted:function(){
    {

        axios.get(this.url).then((res)=>{
            console.log(res)
            this.projects=res.data
        }).catch((err)=>{
            console.log(err)
        })
    
    }
},



template:

`
<section id="projects" style="background:black;margin-top:2em;"class="portfolio-mf sect-pt4 route">




  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="title-box text-center">
          <h3 style="color:rgb(4, 235, 43);"class="title-a">
            Projects
          </h3>
          <p  style="color:white;" class="subtitle-a">
           These are my projects
          </p>
          <div style="background:rgb(4, 235, 43);" class="line-mf"></div>
        </div>
      </div>
    </div>
    
    <div class="row">

   
      <div v-for="item of projects" class="col-md-4">
   
        <div class="work-box">
          <a :href="item.image" data-gallery="portfolioGallery" class="portfolio-lightbox">
            <div class="work-img">
              <img :src="item.image" alt="" class="img-fluid">
            </div>
          </a>
          <div class="work-content">
            <div class="row">
              <div class="col-sm-8">
                <h2 class="w-title">{{item.title}}</h2>
                <div class="w-more">
                  <a :href="item.code " style="border-color:rgb(4, 235, 43);color:rgb(4, 235, 43);;border-radius:none;border-width:1px;" class="m-3 btn btn-outline-success">Code <i class="fa-sharp fa-regular fa-eye"></i></a>
                  <a v-if='item.deployed' :href="item.website " style="border-color:rgb(4, 235, 43);color:rgb(4, 235, 43);;border-radius:none;border-width:1px;" class="m-3 btn btn-outline-success">View <i class="fa-solid fa-regular fa-link"></i></a>
                  </div>
              </div>
              <div class="col-sm-4">
                <div class="w-like">
                  <a href="portfolio-details.html"> <span class="bi bi-plus-circle"></span></a>
                </div>
              </div>
            </div>
          </div>
    
      </div>    
      
      </div>


   </div>

      

    
  </div>




</section>`


})
