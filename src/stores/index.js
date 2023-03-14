import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
export const useApiStore = defineStore('store',{
  state: ()=>({
    categories: [],
    products: [],
    purchasedProducts: [],
    amount: null,
    count: null,
    userId:null,
    userPosition: '',
    

  }),
  actions:{
    async getCategory(){
      let apiData = await axios.get('http://insofuzlast.pythonanywhere.com/categoriya/')
      this.categories = apiData.data

    },
    async getProducts(id){
      try {
        let apiData = await axios.get(`http://insofuzlast.pythonanywhere.com/categoriya/${id}/`)
        let simpleCategory = apiData.data
        console.log(simpleCategory);
        this.products = [...simpleCategory.mahsulot]
        let time = Date.now()
        
      } catch (error) {
          // location.reload()
          error
      }
    },
    
    addPurchasedProducts(el, increment){
      this.purchasedProducts.push(el)
      increment
      this.purchasedProducts = [...new Set(this.purchasedProducts)]
    },
    deleteProduct(item,index){
      let price = JSON.parse(item.narx)
      let total = price * item.soni

      if(this.amount > 0){
        this.amount = this.amount - total
        this.purchasedProducts.splice(index,1)
      }
      else{
        return
      }
      
      item.soni = 0
    },
     
    
    
    incrementAmount(item){
      let narx= JSON.parse(item.narx)
      this.amount += narx
      item.soni ++
      console.log(item.soni);
      console.log(this.products, 'soni');
      // localStorage.setItem('products', JSON.stringify( this.products))
    },  
    decrementAmount(item){
      let narx= JSON.parse(item.narx)
      this.amount -= narx
      item.soni --
      

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
  getters:{
    
  }

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
