angular.module("exemplo3").factory("ProdutosService", ProdutosService);

function ProdutosService($http){
    return {
        buscarTodos:function(){
            return $http.get("http://localhost:8080/produto");
        },
        salvar:function(produto){
            return $http.post("http://localhost:8080/produto",produto);
        },
        excluir:function(id){
            return $http.delete("http://localhost:8080/produto/" + id);
        },
        atualizar:function(id, produto){
            return $http.put("http://localhost:8080/produto/" + id, produto);
        },
        buscarPorId:function(id){
            return $http.get("http://localhost:8080/produto/" + id);
        }
    }
}