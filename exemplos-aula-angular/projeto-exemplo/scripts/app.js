// Definição do módulo
var app = angular.module("meuAppChibata", ['toastr']);

// Configurações
app.config(function (toastrConfig) {

    angular.extend(toastrConfig, {
        allowHtml: false,
        closeButton: false,
        closeHtml: '<button>&times;</button>',
        extendedTimeOut: 1000,
        progressBar: false,
        tapToDismiss: true,
        timeOut: 5000
    });
});

app.controller("CadastroController", CadastroController);

function CadastroController($scope, toastr) {
    $scope.nome = '';
    $scope.email = '';
    $scope.pessoas = [];

    $scope.buscarPessoas = function () {
        var pessoas = localStorage.getItem("pessoas");
        if (pessoas) {
            $scope.pessoas = JSON.parse(pessoas);
        }
    };

    $scope.cadastrar = function () {
        //Preparando para salvar
        var pessoa = {};
        pessoa.nome = $scope.nome;
        pessoa.email = $scope.email;

        //Recuperando existentes
        var pessoas = localStorage.getItem("pessoas");
        if (pessoas) {
            pessoas = JSON.parse(pessoas);
        } else {
            pessoas = [];
        }

        //Salvando novos
        pessoa.id = new Date().getTime();
        pessoas.push(pessoa);

        var json = JSON.stringify(pessoas);
        localStorage.setItem("pessoas", json);
        toastr.success("Dados cadastrados com sucesso!");

        //Limpando formulário
        $scope.nome = '';
        $scope.email = '';
        $scope.buscarPessoas();
    };

    $scope.excluir = function (id) {
        //Recuperar a lista de pessoas
        $scope.buscarPessoas();
        //Percorrendo o array para achar e remover a pessoa
        $scope.pessoas.forEach(function (item, index) {
            if (item.id == id) {
                $scope.pessoas.splice(index, 1);
            }
        });
        //Salva a lista atualizada
        var json = JSON.stringify($scope.pessoas);
        localStorage.setItem("pessoas", json);
        //Busca a lista atualizada
        $scope.buscarPessoas();
    };

    $scope.atualizar = function (id) {
        //Recuperar a lista de pessoas
        $scope.buscarPessoas();
        //Percorrendo o array para achar e remover a pessoa
        var pessoa = $scope.pessoas.filter(function (item) {
            return item.id = id;
        });
        pessoa = pessoa[0];
        $scope.nome = pessoa.nome;
        $scope.email = pessoa.email;
        $scope.id = pessoa.id;
    };

    $scope.confirmarAtualizar = function() {
        //Recuperar os dados da pessoa do formulário
        var pessoa = {};
        pessoa.nome = $scope.nome;
        pessoa.email = $scope.email;
        pessoa.id = $scope.id;
        //Buscar a pessoa na lista para alterar os dados
        $scope.pessoas.forEach(function (item, index) {
            if (item.id == $scope.id) {
                item.nome = pessoa.nome;
                item.email = pessoa.email;
            }
        });
        //Remover o id do $scope
        delete $scope.id;
        //Limpando o formulário
        $scope.nome = '';
        $scope.email = '';
        //Salvar no localStorage
        var json = JSON.stringify($scope.pessoas);
        localStorage.setItem("pessoas", json);
        //Buscar a lista de pessoas atualizadas
        $scope.buscarPessoas();
    };
    //Busca os dados do local storage na inicializacao da View
    $scope.buscarPessoas();
};