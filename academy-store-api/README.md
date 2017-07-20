# academy-store-api

Uma RESTFul API simples em Node JS, criada por [Luiz Franco](https://github.com/lmmfranco), para utiliza��o no curso [Desenvolvimento front-end com Bootstrap e Angular JS](http://academy.fpftech.com/produto/desenvolvimento-front-end-com-bootstrap-e-angular-js/).

---

1) Clone ou baixe este reposit�rio e, estando no diret�rio do projeto, abra o console: 
`npm install`

1) Para executar, estando no diret�rio do projeto, abra o console: 
`node index.js`

3) Para testar as requisi��es, utilize o software de sua prefer�ncia ([Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop), por exemplo) e acesse:
`http://localhost:8080`

## Exemplo de requisi��o (POST):

URL:
`localhost:8080/produto`

Body (JSON):
```
{
	"nome": "Nome do produto",
	"codigo": 1,
	"valor": 1,
	"imagem": "",
	"quantidade": 1,
	"descricao": "Descri��o do Produto"
}
```

	

