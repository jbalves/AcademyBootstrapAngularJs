angular.module("exemplo3").controller("ProdutosListarController", ProdutosListarController);

function ProdutosListarController($scope, ProdutosService, toastr, $state) {
    var vm = this;
    $scope.produtos = [];

    vm.buscarTodos = function() {
        $scope.produtos = [];
        ProdutosService.buscarTodos().then(function(retorno){
            $scope.produtos = retorno.data;
        }).catch(function(erro){
            toastr.error("Ocorreu um erro, tente novamente.");
        });
    }

    vm.excluir = function(id) {
        ProdutosService.excluir(id).then(function(retorno){
            toastr.success("Produto excluido com sucesso!");
            vm.buscarTodos();
        }).catch(function(erro){
            toastr.error("Ocorreu um erro, tente novamente.");
        });
    }

    vm.editar = function(idAtual){
        $state.go("produtosEditar", { id: idAtual})
    }
    
    vm.init = function() {
        vm.buscarTodos();
    }

    vm.init();
}