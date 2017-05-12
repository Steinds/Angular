export class BurgerService {
  constructor ($http) {
    this.$http = $http
    console.log('hey!')
  }

  getBurgers () {
    return this.$http.get('http://localhost:3000/burgers')
    .then(response => response.data)
  }
}
