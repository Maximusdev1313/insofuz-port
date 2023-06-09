import { store } from 'quasar/wrappers'
import { createPinia, defineStore } from 'pinia'
import axios from 'axios'
export const useApiStore = defineStore('store', {
  state: () => ({
    categories: [],
    category: [],
    limitedCategory: [],
    products: [],
    purchasedProducts: [],
    allProducts: [],
    amount: null,
    count: null,
    userId: null,
    userPosition: null,
    priceNonDiscount: null,
    priceWithDiscount: null,
    alert: false,
    done: false,
    searchInput: '',
    findItems: null,
    prevGramAmount: 0,
    prevGram: 0

  }),
  getters: {
    releatedProducts: state => state.allProducts.filter(el => el.is_important == true),

    // productsForMens:state=> state.allProducts.filter(el=> el.product == 1681148665171).splice(0, 4),
    // productsForWomen:state=>state.allProducts.filter(el=> el.product == 1681794800687).splice(0, 4),
    reversedCategory: state => state.categories.reverse()
  },
  actions: {
    async getCategory() {
      let response = await axios.get('http://razzoquz.pythonanywhere.com/category/', { mode: 'no-cors' })
      this.categories = response.data
      console.log(this.categories);
    },
    async getProducts(id) {
      try {
        let response = await axios.get(`http://razzoquz.pythonanywhere.com/category/${id}/`, { mode: 'no-cors' })
        this.category = response.data
        this.products = this.category.product

      } catch (error) {
        // location.reload()
        console.log('Mahsulotni olib bo\'lmadi');
      }
    },
    async getAllProducts() {
      try {
        let response = await axios.get(`http://razzoquz.pythonanywhere.com//product/`, { mode: 'no-cors' })
        this.allProducts = response.data
      } catch (error) {
        // location.reload()
        console.log('Mahsulotlarno olib bo\'lmadi');
      }
    },
    setupId(variable, storageName) {
      const storageId = Date.now() + Math.floor(Math.random() * 10000);
      sessionStorage.setItem(storageName, storageId);
      variable.value = storageId;
    },
    isDone() {
      this.done = true
      setTimeout(() => {
        this.done = false
      }, 1000);
    },
    addPurchasedProducts(el, increment) {

      this.purchasedProducts.push(el)
      increment
      this.purchasedProducts = [...new Set(this.purchasedProducts)]
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
    incrementAmount(item, gram) {
      if (gram && item === item) {
        // Subtract previous gram amount from total
        // this.amount -= this.prevGramAmount;
        let decimalPart = item.quantity - Math.floor(item.quantity);

        item.quantity = Math.floor(item.quantity)
        this.amount -= decimalPart * item.price
        // Calculate new gram amount and update total
        const priceWithGram = item.price * gram;
        this.amount += priceWithGram;
        this.prevGram = gram
        console.log(gram, priceWithGram, 'pr');
        // Update previous gram amount

        this.prevGramAmount = priceWithGram;
        item.quantity += gram
        // Update other values
        this.priceNonDiscount = item.quantity * item.old_price;
        this.priceWithDiscount = item.quantity * item.price;
      }
      else if (gram === 0) {
        // Subtract previous gram amount from total
        let decimalPart = item.quantity - Math.floor(item.quantity);
        console.log(decimalPart, 'dec');
        item.quantity = item.quantity - decimalPart

        this.amount -= decimalPart * item.price
      }
      else {
        this.prevGramAmount = 0
        this.amount += Number(item.price);
        item.quantity = item.quantity === '' ? 1 : JSON.parse(item.quantity) + 1;
        this.priceNonDiscount = item.quantity * item.old_price;
        this.priceWithDiscount = item.quantity * item.price;
      }
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
    searchProduct() {
      this.findItems = this.allProducts.filter(item => item.name.toLowerCase().includes(this.searchInput.toLowerCase()));
    },
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
          this.userPosition = `${latitude},${longitude}`;
        });
      } else {
        console.log('Locatsiyani olib bo\'lmadi');
      }
    },
    // removes older product from user orders
    clearOlderProducts() {
      this.purchasedProducts.splice(0, this.purchasedProducts.length);
      this.amount = null;
    },
    // removed user-id and reload page
    clearStorage() {
      sessionStorage.removeItem("ordered");
      this.clearOlderProducts();
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
