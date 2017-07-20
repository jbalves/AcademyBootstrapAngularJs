angular.module("exemplo3").controller("ProdutosEditarController", ProdutosEditarController);

function ProdutosEditarController ($scope, toastr, ProdutosService, $state) {
    var vm = this;
    $scope.produto = {};
    $scope.id = 0;

    vm.init = function () {
        //Receber o ID da url
        $scope.id = $state.params.id;
        //Chama método para buscar o produto
        vm.buscarProduto($scope.id);
    }
    //Busca o produto na API
    vm.buscarProduto = function(id) {
        ProdutosService.buscarPorId(id).then(function(retorno){
            $scope.produto = retorno.data[0];
        }).catch(function(erro){
            toastr.error("Ocorreu um erro. tente novamente ou contate o suporte.");
        });
    }

    //Salvar o objeto atualizar
    vm.salvar = function(){
        ProdutosService.atualizar($scope.id, $scope.produto).then(function(retorno){
            toastr.success("Produto atualizado com sucesso!");
        }).catch(function(erro){
            toastr.error("Ocorreu um erro. tente novamente ou contate o suporte.");
        });
    }

    vm.init();
}