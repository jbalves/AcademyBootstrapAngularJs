angular.module("exemplo3").controller("ProdutosCadastrarController", ProdutosCadastrarController);

function ProdutosCadastrarController($scope, toastr, ProdutosService) {
    var vm = this;
    $scope.produto = {
        "nome": "",
        "descricao": "",
        "codigo": "",
        "valor": "",
        "imagem": "",
        "quantidade": "",
        "descricao": ""
    };

    vm.init = function () {

    }

    vm.salvar = function () {
        console.log($scope.produto);
        //TODO: fazer validações
        ProdutosService.salvar($scope.produto).then(function (retorno) {
            console.log(retorno);
            toastr.success("Produto cadastrado com sucesso!");
        }).catch(function (erro) {
            toastr.error("Ocorreu ujm erro. tente novamente ou contate o suporte.");
            console.error(erro);
        });
    }

    vm.limparForm = function () {
        $scope.produto = {
            "nome": "",
            "descricao": "",
            "codigo": "",
            "valor": "",
            "imagem": "",
            "quantidade": "",
            "descricao": ""
        };
    }
}