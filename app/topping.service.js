const API_URL = 'http://localhost:3000/toppings'

export class ToppingService {
  constructor ($http) {
    this.$http = $http
  }

    // return promise of toppings
  getToppings () {
    if (this.toppings) {
      return Promise.resolve(this.toppings)
    }

    return this.$http.get(API_URL)
        .then(response => response.data)
        .then(toppings => {
          this.toppings = toppings
          return toppings
        })
  }
}
