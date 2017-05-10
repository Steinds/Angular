export class ApplicationInfoController {
  constructor () {
    this.name = 'Burger2'
    this.version = '1.0.0'
    this.show = false
    this.toggle = 'Show Version'
    this.users = [
      { name: 'John', email: 'test@ici' },
      { name: 'lzkejflkez', email: 'sdfsd@ici' },
      { name: 'frezfezf', email: 'tedgfdgdst@ici' },
      { name: 'regergre', email: 'ouliu@ici' }
    ]
  }
  showVersion () {
    this.show = !this.show
    if (this.toggle === 'Show Version') {
      this.toggle = 'Hide Version'
    } else {
      this.toggle = 'Show Version'
    }
  }
}
