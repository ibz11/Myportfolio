app.component('contact-section',{
    data() {
        return {
          file_url:"./json_files/contactlinks.json",
          links:null,
          image:"./assets/images/hero.jpg",
          contacts:[
            {
              "name":"Github",
              "icon":"fa-brands fa-github",
              "url":"https://github.com/ibz11"
          },
          {
            "name":"ibramiabdi.ke@gmail.com",
            "icon":"fa-regular fa-envelope",
            "url":"#Contact"
        },
        {
            "name":"LinkedIn",
            "icon":"fa-brands fa-linkedin",
            "url":"https://www.linkedin.com/in/ibrahim-mohamed-abdi-958b6821b"
        },
        {
          "name":"0704736051",
          "icon":"fas fa-phone",
          "url":"https://www.linkedin.com/in/ibrahim-mohamed-abdi-958b6821b"
      },
          ]
        }
    },   
//getting data from local json file
mounted:
function(){
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
  <section style=""  id="Contact">
    
<div class="container">
<div style=" text-align:center">

  <h3 style="color:rgb(4, 235, 43);"class="title-a">
  Contact ME
</h3>
  <p >Leave me a message</p>
<div class="contact-items">
  <a v-for="item in contacts" style="margin:.4em;color:#26bf29;" :href="item.url"><i :class="item.icon"></i> {{item.name}}</a>
  </div>
</div>
<div class="row">
  <div class="column">
    <img :src="image" style="width:100%">
  </div>
  <div class="text-light column">
    <form action="https://formsubmit.co/fb8a599c78f7c3e33bb158bf1b161561"method="POST" >
    <input type="text" name="_honey" style="display:none">
    <input type="hidden" name="_next" value="https://ibzportfolio.netlify.app//thanks.html">
      <label for="fname">Your Names</label>
      <input type="text" id="fname" name="names" placeholder="Your names..">
      <label for="fname">Email</label>
      <input type="email" id="fname" name="email" placeholder="Your names..">
      <label for="lname">Subject</label>
      <input type="text" id="lname" name="subject" placeholder="Subject..">

      <label for="subject">Content</label>
      <textarea id="subject" name="content" placeholder="Write something.." style="height:170px"></textarea>
      <input type="submit" value="Submit">
    </form>
  </div>
</div>
</div>

    
    
    
    
    
    
    
    </section>`
   




























})






