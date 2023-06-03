const app=Vue.createApp({
    data(){
        return{
            cart:0,
            product:'Socks',
            image:'./assets/images/socks_green.jpg',
            url:'https://www.youtube.com/watch?v=bzlFvd0b65c',
            inStock:false,
            inventory:0,
            sale:true,
            details:['50% cotton','30% wool','20% polyester'],
            variants:[
                {id:2234,color:'green',image:'./assets/images/socks_green.jpg',},
                {id:2235,color:'blue',image:'./assets/images/socks_blue.jpg',},
            ],
            sizes:['small','medium','large','xl']

        }
    },
    methods:{
        addToCart(){
            this.cart += 1
        },
        updateImage(variantImage){
this.image=variantImage
        }
    }
})