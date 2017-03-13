angular.module('miniRouting',['ui.router'])
.config(function ($stateProvider, $urlRouterProvider){

  $stateProvider
  .state('home', {
    templateUrl: 'home/homeTmpl.html',
    controller: 'home/homeCtrl.js',
    url: '/'
  })
  .state('settings', {
    templateUrl: 'settings/settingsTmpl.html',
    controller:'settings/settingsCtrl.js',
    url: '/settings'
  })
  .state('products', {
    templateUrl: 'products/productTmpl.html',
    controller: 'products/productsCtrl.js',
    url: '/products/:id'
  });
$urlRouterProvider.otherwise('/');
})
