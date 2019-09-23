## Explicação sobre o projeto :smiley:

Então essa é uma ideia que eu tive quando estava conversando com um colega. Será um sistema de cadastro de itens no supermecado, onde será pedido vários dados entre eles a data de validade do produto. Sendo assim a API terá a funcionalidade de avisar quando o produto está próximo a vencer, avisará na data que o produto estiver vencendo e também quantos dias aquele produto, se ainda estiver em estoque,está vencido.

## Contando sobre a estrutura do projeto 

Nesse projeto vou utilizar o sequelize com o banco de dados relacional postgres. Para lidar com as datas e validações das mesmas utilizarei o date-fns para solidificar o conhecimento. 

### Estrutura do banco 

O banco terá três tabelas, users, categories e products. 

| Users | Categories | Products | 
|-------|------------|----------|
| name | padaria | ...          |
| cargo | hortifruiti | ...     |
| senha | limpeza | ...         |
| email | alimentos | ...       |
|        |  bebidas | ...       |
|        | papelaria | ...      |

### Regras de negócios

* Apenas o gerente pode cadastrar produtos
* Não pode cadastrar produtos iguais 
* Não pode cadastrar produtos que a data de validade já passou
* Quando tiver perto da data de validade avisar
* Quando passar a data de validade avisar

## To Do List 

- [ ] Fazer a conexão com o banco de dados
- [ ] Criar as migrations 
- [ ] Criar os models 
- [ ] Criar os controllers 
- [ ] Aplicar as regras de négocio

## Qualquer contribuição é bem vinda, e eu agradeço :heart_eyes: :heartbeat:

<h2 align="center">
  Acessem a He4rt :purple_heart:
</h2>

<h3 align="center">
  <img src="https://heartdevs.com/wp-content/uploads/2018/12/logo.png" width="215"><br>
    Visite nosso discord, vamo codar junto!! :godmode:
	<a href="https://discord.io/He4rt" target="_blank">
	<img src="https://discordapp.com/api/guilds/452926217558163456/embed.png" alt="Discord server"/></a><br>
</h3>

[Twitter He4rt](https://twitter.com/He4rtDevs)

[Meu Twitter](https://twitter.com/m7AeiHe4rt)
