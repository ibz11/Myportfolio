app.component('footer-section',{

    data() {
        return{
            file_url:"./json_files/contactlinks.json",
            links:null
        }
    },

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
<footer class="footer"style="height:15vh;">
    <div class="text-center">
      <a href="index.html" style="text-decoration:none;font-size:26px;color:rgb(9, 179, 52);">Ibrahim's portfolio 2023&copy </p></a>
    </div>
    <div class="text-center">
      <a v-for="link of links"  class=" icon"  :href="link.url" ><i style="font-size:32px; margin-right:10px;color:rgb(4, 235, 43);" :class="link.icon" ></i></a>
     
   

    </div>
</footer>`










})