app.component('about-me',{
data(){
  return{
aboutMe:[
{
  "details":"Hello! I'm Ibrahim, a passionate and  developer with a knack for problem-solving and a love for technology. I thrive in turning complex concepts into elegant and efficient solutions. Whether it's building web applications or designing intuitive user interfaces, I am driven by the desire to create meaningful and impactful experiences for users. Throughout my career, I have honed my skills in various programming languages and frameworks, including but not limited to PHP,Laravel Python and JavaScript. I am always eager to stay up-to-date with the latest industry trends and technologies, constantly seeking opportunities to expand my knowledge and refine my expertise."
}
]
  }
},



template:
`
<!--About section-->
<section style="height:135vh; color:white;background:rgb(35, 34, 34);" class="about" id="about">
    
    <div  class="mt-5 container text-center">
        <div class="row">
 
          <div style="height:19vh; " class="col">
            <img style="border-radius:6px;" height="145%" width="55%" src="assets/images/about.jpg" alt="">
          </div>
        
        </div>
          </div>
    
      


      <div  class="mt-5 container text-center">
      <div class="mt-5 row">
     <!--style="border:1px solid;border-color:white;"-->     
        <div  class="col-12">
          <h1  style="font-size:36px;"> <span style="color:rgb(4, 235, 43);">About me</span></h1>
          <p v-for="item of aboutMe" style="font-size:21px;">{{item.details }}</p>
          
        </div>
</div>

<div class="mt-5 text-center">
    <h1 style="font-size:35px;color:rgb(4, 235, 43);"> Timeline <i class="fa-solid fa-clock"></i> </h1>
</div>


          <div  class="mt-1 container text-center">
          
             </div>
                </div>
                <div class="flex">
                
                <div class="col-9">
                <div  :class="hidden ">
  
            
                  <h2 style="font-size:22px;color:rgb(4, 235, 43);"> 2020 to Current</h2>
                  <p style="font-size:30px">Currently Studying <br> BBIT at Strathmore University</p>
                </div>
              </div>
              <div>
</div>
                </div>
              

</section>`















})