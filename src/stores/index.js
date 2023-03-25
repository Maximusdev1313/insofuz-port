import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
export const useApiStore = defineStore('store',{
  state: ()=>({
    categories: [],
    limitedCategory:[],
    products: [],
    purchasedProducts: [],
    allProducts:[],
    amount: null,
    count: null,
    userId:null,
    userPosition: '',

  }),
  getters: {
    
  },
  actions:{
    async getCategory(){
      let response = await axios.get('http://insofuzlast.pythonanywhere.com/category/')
      this.categories = response.data
      this.limitedCategory = [...this.categories]
      console.log(this.categories);
      if(this.limitedCategory.length > 4){
        this.limitedCategory.length = 4

      }

    },
    async getProducts(id){
      try {
        let response = await axios.get(`http://insofuzlast.pythonanywhere.com/category/${id}/`)
        this.products = response.data.product
        console.log(this.products);
        
      } catch (error) {
          // location.reload()
          console.log(error);
      }
    },
    async getAllProducts() {
      try {
        let response = await axios.get(`http://insofuzlast.pythonanywhere.com/product/`)
        this.allProducts = response.data
        console.log(this.allProducts);
      } catch (error) {
        // location.reload()
        console.log(error);
      }
    },
    
    addPurchasedProducts(el, increment){
      
      this.purchasedProducts.push(el)
      increment
      this.purchasedProducts = [...new Set(this.purchasedProducts)]
    },
    deleteProduct(item,index){
      let price = JSON.parse(item.price)
      let total = price * item.quantity

      if(this.amount > 0){
        this.amount = this.amount - total
        this.purchasedProducts.splice(index,1)
      }
      else{
        return
      }
      
      item.quantity = 0
    },
     
    
    
    incrementAmount(item){
      let price= JSON.parse(item.price)
      this.amount += price
      item.quantity ++
      console.log(item.quantity);
      console.log(this.products, 'soni');
      // localStorage.setItem('products', JSON.stringify( this.products))
    },  
    decrementAmount(item){
      let price= JSON.parse(item.price)
      this.amount -= price
      item.quantity --
      

    },
    getLocation(){
      let location = null;
      let latitude = null;
      let longitude = null;
      if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position =>{
              location = position;
              latitude = position.coords.latitude;
              longitude = position.coords.longitude;
              this.userPosition = latitude + "," + longitude
          })      
      }
      else{
          console.log('error');
      }
  }
   


  },
  

})
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})
