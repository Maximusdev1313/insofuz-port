import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
export const useApiStore = defineStore('store',{
  state: ()=>({
    categories: [],
    products: [],
    purchasedProducts: [],
    amount: null,
    count: null

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
        console.log(this.products,'product');
      } catch (error) {
          console.log(error.message);
      }
    },
    addPurchasedProducts(el, increment){
      this.purchasedProducts.push(el)
      increment
      this.purchasedProducts = [...new Set(this.purchasedProducts)]

      console.log(this.purchasedProducts, 'pur');
    },
    incrementAmount(item){
      let narx= JSON.parse(item.narx)
      this.amount += narx
      item.soni ++
      // console.log(this.purchasedProducts, 'pruchas');
    },  
   


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
