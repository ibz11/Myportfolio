app.component('hero-section',{

data(){
return{
   role:"Developer",
   file_url:"./json_files/contactlinks.json",
   links:null,

   pages:[
    {
      "page":"Home",
      "link":"index.html"
    },
    {
      "page":"About",
      "link":"about.html"
    },

    {
        "page":"Projects",
        "link":"projects.html"
      },

      {
        "page":"Contact Me",
        "link":"contact.html"
      }
  ]


}
}
,

//getting data from local json file
mounted:function(){
    {

        axios.get(this.file_url).then((res)=>{
            console.log(res)
            this.links=res.data
        }).catch((err)=>{
            console.log(err)
        })
    
    }
},


template:
`
<section style="height:85vh; background:rgb(35, 34, 34);" id="home">
    <div class="hero-image">
        <div class="hero-text">
          <h1 id="text" style="font-size:68px;color:rgb(4, 235, 43);"></h1>
          <p style="font-size:28px;">{{ role }}</p>
          <button style="border-color:rgb(4, 235, 43);color:rgb(4, 235, 43);;border-radius:none;border-width:3px;" class=" m-3 btn btn-outline-success">Resume</button>
         

          <div  style="margin-top:22px;" class="text-center">
           <a v-for="item in pages"  style="font-size:15px; margin-right:10px;color:rgb(4, 235, 43);" class="badge bg-success" :href="item.link">{{item.page}}</a>
          
          </div>
        
          <div  style="margin-top:102px;" class="text-center">
            <a v-for="link of links"   :href="link.url">
            <i style="font-size:52px; margin-right:10px;color:rgb(4, 235, 43);" :class="link.icon"></i>
            </a>
           </div>

           
        
        </div>
       
      </div>

</section>





`






})