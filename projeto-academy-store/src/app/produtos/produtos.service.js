angular.module("exemplo3").factory("ProdutosService", ProdutosService);

function ProdutosService($http){
    return {
        buscarTodos:function(){
            return $http.get("http://localhost:8080/produto");
        },
        salvar:function(produto){
            return $http.post("http://localhost:8080/produto",produto);
        }
    }
}