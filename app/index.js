import angular from 'angular'
import 'bootstrap/dist/css/bootstrap.css'

import { BurgersController } from './burgers.controller'
import { GameController } from './game.controller'
import { TabsController } from './tabs.controller'
import { ReverseFilter } from './reverse.filter'
import { BurgerService } from './burger.service'
import { ToppingService } from './topping.service'

// Création du module app (application)
angular.module('app', [])

.controller('BurgersController', BurgersController)
.controller('GameController', GameController)
.controller('TabsController', TabsController)

.filter('reverse', ReverseFilter)

.service('BurgerService', BurgerService)
.service('ToppingService', ToppingService)

// .config(function () {
//     console.log('CONFIG ANGULAR');
// })

// .run(function () {
//     console.log('RUN ANGULAR');
// })
