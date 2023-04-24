import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
export const useApiStore = defineStore('store',{
  state: ()=>({
    categories: [],
    category: [],
    limitedCategory:[],
    products: [],
    purchasedProducts: [],
    allProducts:[],
    users_info:[],
    user_info:[],
    amount: null,
    count: null,
    userId:null,
    userPosition: null,
    priceNonDiscount: null,
    priceWithDiscount: null,
    alert: false,
    done: false
  }),
  getters: {
    releatedProducts: state => state.allProducts.filter(el => el.is_important == true),
    productsForMens:state=> state.allProducts.filter(el=> el.product == 1681148665171),
    productsForWomen:state=>state.allProducts.filter(el=> el.product == 1681794800687),
    reversedCategory: state=>state.categories.reverse()
  },
  actions:{
    async getCategory(){
      let response = await axios.get('http://insofuzlast.pythonanywhere.com/category/', {mode: 'no-cors'})
      this.categories = response.data
    },
    async getProducts(id){
      try {
        let response = await axios.get(`http://insofuzlast.pythonanywhere.com/category/${id}/`, {mode: 'no-cors'})
        this.category = response.data
        this.products = this.category.product
        console.log(this.products);

      } catch (error) {
          // location.reload()
          console.log(error);
      }
    },
    async getAllProducts() {
      try {
        let response = await axios.get(`http://insofuzlast.pythonanywhere.com/product/`, {mode: 'no-cors'})
        this.allProducts = response.data
        console.log(this.allProducts);
      } catch (error) {
        // location.reload()
        console.log(error);
      }
    },
    setupId(variable, storageName) {
      const storageId = Date.now() + Math.floor(Math.random() * 10000);
      localStorage.setItem(storageName, storageId);
      variable.value = storageId;
    },
    isDone(){
      this.done = true
      setTimeout(() => {
        this.done = false
      }, 1000);
    },
    addPurchasedProducts(el, increment){

      this.purchasedProducts.push(el)
      increment
      this.purchasedProducts = [...new Set(this.purchasedProducts)]
      console.log(this.purchasedProducts);
    },
    deleteProduct(item, index) {
      const price = JSON.parse(item.price);
      const total = price * item.quantity;

      if (this.amount > 0) {
        this.amount -= total;
        this.purchasedProducts.splice(index, 1);
        item.quantity = 0;
      }
    },
    incrementAmount(item) {
      this.amount += Math.round(item.price);
      item.quantity = item.quantity === '' ? 1 : JSON.parse(item.quantity) + 1;
      this.priceNonDiscount = item.quantity * item.old_price;
      this.priceWithDiscount = item.quantity * item.price;
    },
    decrementAmount(item) {
      const price = JSON.parse(item.price);
      if (item.quantity > 1) {
        this.amount -= price;
        item.quantity--;
        this.priceNonDiscount = item.quantity * item.old_price;
        this.priceWithDiscount = item.quantity * item.price;
      }
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          this.userPosition = `${latitude},${longitude}`;
        });
      } else {
        console.log('error');
      }
    },
    async getUsersInfo(){
      let response = await axios.get('http://insofuzlast.pythonanywhere.com/user/')
      this.users_info = response.data.reverse()

    },
    async getUserInfo(id){
      let response = await axios.get('http://insofuzlast.pythonanywhere.com/user/'+id+'/')
      this.user_info = response.data

    },


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
