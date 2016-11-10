#WebService - API

Bem-vindo à pagina da [REST API] (https://github.com/gabrielrunescape/WebService). Aqui você pode obter todos os dados de acordo com a API para uso interno das informações necessárias para qual você deseja trabalhar.

A API foi desenvolvida através da *screencast* [Aprenda - em pouco mais de 1 hora - a desenvolver web service RESTful com NodeJS e Mongodb] (https://youtu.be/jvNDM5e7TFo) de Fábio Vedovelli.

### Instalação

Caso queira realizar alguma contribuição com o projeto, pode realizar o clone atraves do seguinte comando:
```
git clone https://github.com/gabrielrunescape/WebService.git
```

Alguns ajustes iniciais são necessários serem realizados antes de iniciar o projeto:
```
cd WebService
npm install
node app.js
```

Se preferir usar o nodemon ao invés do clássico node, utilize esta linha de comando:
```
nodemon appp.js
```
Caso queira trabalhar com a porta 80, deve ser alteradas as linhas para e iniciar seu gerenciador de arquivos NodeJS com privilégios de administrador.
```
# app.js
res.header('Access-Control-Allow-Origin', '127.0.0.1:80'); // Limita acesso somente para IP local interno
app.set('port', (process.env.PORT || 80)); // Define a porta local para aplicação
```

Lembrando que, você deve ter instalado o MongoDB e alterar o endereço de acesso no arquivo `db_config.js`.
