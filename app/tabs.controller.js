export class TabsController {
  constructor () {
    this.index = 0
    this.tabs = [
        { title: 'user', template: 'un' },
        { title: 'application', template: 'deux' },
        { title: 'contact', template: 'trois' }
    ]
  }
  changeTab (index) {
    this.index = index
  }
  rightTab () {
    this.index--
    if (this.index < 0) {
      this.index++
    }
    console.log(this.index)
  }
  leftTab () {
    this.index++
    if (this.index > this.tabs.length - 1) {
      this.index--
    }
    console.log(this.index)
  }
}
