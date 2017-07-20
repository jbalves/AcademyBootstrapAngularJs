angular.module("exemplo3").controller("PrincipalController", PrincipalController);

function PrincipalController($scope, ProdutosService, toastr, $state) {
    var vm = this;
    $scope.produtos = [];

    vm.buscarTodos = function() {
        $scope.produtos = [];
        ProdutosService.buscarTodos().then(function (retorno){
            $scope.produtos = retorno.data;
            $scope.produtos = $scope.produtos.filter(function(item, index){
                return index < 4;
            });
        }).catch(function (erro){
            toastr.error("Ocorreu um erro. Tente novamente.");
        });
    }
    
    vm.detalhar = function (idAtual) {
        $state.go("produtosDetalhar", { id: idAtual });
    }
    
    vm.init = function() {
        vm.buscarTodos();
    }

    vm.init();
}