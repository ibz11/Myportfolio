app.component('about-me',{
data(){
  return{
aboutMe:[
{
  "details":"Hello! I'm Ibrahim, a passionate and  developer with a knack for problem-solving and a love for technology.  I have honed my skills in various programming languages and frameworks, including but not limited to PHP,Laravel Python and JavaScript. I am always eager to stay up-to-date with the latest industry trends and technologies, constantly seeking opportunities to expand my knowledge and refine my expertise."
}
]




  }
},



template:
`
<!--About section
<section style="height:110vh; color:white;background:black" class="about" id="about">
    
<div class="about-section">-->

<section id="skills" style="background:black;" class="services-mf pt-5 route">
 <div class="container">
<h1 style="font-size:35px;color:rgb(4, 235, 43);" >About Me</h1>
<!--<p>Some text about who we are and what we do.</p>-->
<p  style="color:white;font-size:17px;" v-for="item of aboutMe">{{ item.details}}</p>
</div>


<div style="margin-top:1em;"class="mt-5 text-center">
    <h1 style="font-size:35px;color:rgb(4, 235, 43);"> Timeline <i class="fa-solid fa-clock"></i> </h1>
</div>
</div>

           


<div class="mt-5 timeline">

  <div class="container-tl left">
    <div class="content">
      <h2>2010-2015</h2>
      <p class="text-dark">Got primary education at Nyali primary</p>
    </div>
  </div>

  <div class="container-tl right">
    <div class="content">
      <h2>2016-2019</h2>
      <p class="text-dark">Studied at Light Academy to get my Secondary education</p>
    </div>
  </div>

  <div class="container-tl left">
    <div class="content">
      <h2>2020 to now</h2>
      <p class="text-dark">Currently studying at Strathmore University</p>
    </div>
  </div>


</div>




</section>`















})