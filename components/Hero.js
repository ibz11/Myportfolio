app.component('hero-section',{

data(){
return{
   role:"Developer",
   file_url:"./json_files/contactlinks.json",
   links:null
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
          <a href="#Contact" style="border-color:rgb(224, 229, 225);color:rgb(4, 235, 43);;border-radius:none;border-width:3px;" class="btn btn-outline-light">Contact me</a>
        
          <div  style="margin-top:82px;" class="text-center">
            <a v-for="link of links"   :href="link.url">
            <i style="font-size:52px; margin-right:10px;color:rgb(4, 235, 43);" :class="link.icon"></i>
            </a>
           
        </div>
        
        </div>
       
      </div>

</section>





`






})