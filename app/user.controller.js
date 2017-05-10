
export class UserController {
  constructor () {
    console.log('UserController')
    let $ctrl = this
    $ctrl.firstname = 'John'
    $ctrl.lastname = 'Doe'
  }

  getName () {
    return this.firstname + ' ' + this.lastname.toUpperCase()
  }
}
