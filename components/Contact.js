app.component('contact-section',{
    data() {
        return {
          file_url:"./json_files/contactlinks.json",
          links:null
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

    `  <section style="height:113vh; color:white;background:rgb(44, 43, 43);" id="Contact">
    <div class="wrapper">
    
      <div class="mt-5 text-center">
        <h1 style="font-size:42px;color:rgb(4, 235, 43);">Contact Me</h1>
    </div>
    <div style="margin-top:82px;"class="text-center">
    <a v-for="link of links"   :href="link.url">
            <i style="font-size:52px; margin-right:10px;color:rgb(4, 235, 43);" :class="link.icon"></i>
            </a>
    </div>
    <div class="flex">
    
    
    <div class="form">
    
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
     
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Message</label>
       </div>
       <div class="mb-3">
        <textarea name="" class="textarea" id="" cols="30" rows="10">
    
        </textarea>
      </div>
      <div class="flex">
      <button type="submit"  class="submit-btn m-3 btn btn-outline-success">Submit</button>
      </div>
    </form>
    </div>
    
    </div>
    
    
    
    
    </div>
    
    
    
    
    
    
    
    </section>`
   




























})






