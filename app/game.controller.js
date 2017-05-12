export class GameController {
  constructor (ToppingService) {
    this.ToppingService = ToppingService

    this.ToppingService.getToppings()
    .then(toppings => this.toppings = toppings)
  }
}
