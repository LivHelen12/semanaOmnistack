const express = require('express'); 
const cors = require('cors'); 
const { errors } = require('celebrate');
const routes = require('./routes');

//criar variavel para armazenar a aplicação (toda a parte de funcionalidade)
const app = express();

//JSON para o corpo das requisições

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

//está "ouvindo" esta porta
app.listen(3333);

/**ROTA / RECURSO
criando a ROTA principal
ROTA conjunto completo
RECURSO é o final (associado a alguma entidade)
*/

//app.get --- > significa que ela é acessivel

/**Metódos HTTP:
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/ 

/** TIPOS DE PARÂMETRO:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar resursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 * Request: Guarda todos os dados que vem através da requisição do usuário
 * 
 */

 /**
  * SQL: MySql, SQLite, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, couchDB, etc.
  */

  /**
   * Driver: SELECT * FROM users
   * Query builder: table('users').select('*').where()
   */



