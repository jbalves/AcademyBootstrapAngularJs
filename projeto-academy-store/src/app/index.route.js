(function() {
  'use strict';

  angular
    .module('exemplo3')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('principal', {
        url: '/',
        templateUrl: 'app/principal/principal.html',
        controller: '',
        controllerAs: ''
      })
      .state('produtosDetalhar', {
        url: '/produtos-detalhar',
        templateUrl: 'app/produtos-detalhar/produtos-detalhar.html',
        controller: '',
        controllerAs: ''
      })
      .state('produtosListar', {
        url: '/produtos-listar',
        templateUrl: 'app/produtos-listar/produtos-listar.html',
        controller: 'ProdutosListarController',
        controllerAs: 'controller'
      })
      .state('produtosCadastrar', {
        url: '/produtos-cadastrar',
        templateUrl: 'app/produtos-cadastrar/produtos-cadastrar.html',
        controller: 'ProdutosCadastrarController',
        controllerAs: 'controller'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
