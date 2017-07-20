angular.module("exemplo3").controller("ProdutosDetalharController", ProdutosDetalharController);

function ProdutosDetalharController ($scope, ProdutosService, toastr, $state){
    var vm = this;
    $scope.produto = {};
    $scope.id = 0;

    vm.buscarTodos = function() {
        $scope.id = $state.params.id;
        vm.buscarProduto($scope.id);
    }

   vm.buscarProduto = function(id) {
        ProdutosService.buscarPorId(id).then(function(retorno){
            $scope.produto = retorno.data[0];
        }).catch(function(erro){
            toastr.error("Ocorreu um erro! Tente novamente.");
        });
    }

    vm.init = function() {
        vm.buscarTodos();
    }

    vm.init();
}