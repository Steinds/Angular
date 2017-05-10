import angular from 'angular'
import css from 'bootstrap/dist/css/bootstrap.css'
import { UserController } from './user.controller'
import { ApplicationInfoController } from './application-info.controller'
import { TabsController } from './tabs.controller'
import { reverse } from './reverse.filter.js'
// Création du module app (application)
angular.module('app', [])

.controller('UserController', UserController)
.controller('ApplicationInfoController', ApplicationInfoController)
.controller('TabsController', TabsController)
.filter('reverse', reverse)
.config(function () {
  console.log('CONFIG ANGULAR')
})

.run(function () {
  console.log('RUN ANGULAR')
})
