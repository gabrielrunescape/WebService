import React from 'react';
import Layout from "./layout";

<Layout>
    <div className='container'>
        <h1 className='title is-1'>REST API</h1>
        <p>
            Bem vindo a página da <a href='/'>REST API</a>. Aqui você pode obter todos os dados de acordo com a API para uso interno das informações necessárias para qual você deseja trabalhar.
        </p>
        <p>
            A API foi desenvolvivida através da <i>screencast</i> <a href='https://youtu.be/jvNDM5e7TFo'>Aprenda - em pouco mais de 1 hora - a desenvolver web service RESTful com NodeJS e Mongodb] de Fábio Vedovelli.</a>
        </p>

        <h2 className='subtitle is-2 mt-3'>Escolha o método e categoria para ser vista</h2>

        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>Metódo</th>
                    <th>URL</th>
                    <th>Descrição</th>
                    <th>Link</th>
                </tr>
            </thead>
            
            <tbody>
                <tr>
                    <th>GET</th>
                    <th className='has-text-weight-normal'>/users</th>
                    <th className='has-text-weight-normal'>Busca todos os usuários</th>
                    <th><a href='/api/get' className='tag is-success'>GET</a></th>
                </tr>

                <tr>
                    <th>GET</th>
                    <th className='has-text-weight-normal'>/users/:login/:senha</th>
                    <th className='has-text-weight-normal'>Busca usuário com parametro informado</th>
                    <th><a href='/api/get' className='tag is-success'>GET</a></th>
                </tr>

                <tr>
                    <th>POST</th>
                    <th className='has-text-weight-normal'>/users</th>
                    <th className='has-text-weight-normal'>Cria um novo usuário</th>
                    <th><a href='/api/post' className='tag is-warning'>POST</a></th>
                </tr>

                <tr>
                    <th>PUT</th>
                    <th className='has-text-weight-normal'>/users/:id</th>
                    <th className='has-text-weight-normal'>Altera um usuário através da ID informada</th>
                    <th><a href='/api/put' className='tag is-warning'>GET</a></th>
                </tr>

                <tr>
                    <th>DELETE</th>
                    <th className='has-text-weight-normal'>/users/:id</th>
                    <th className='has-text-weight-normal'>Apaga um usuário pela ID informada</th>
                    <th><a href='/api/delete' className='tag is-danger'>DELETE</a></th>
                </tr>
            </tbody>
        </table>

        <h3 className='subtitle is-3'>Instalação</h3>
        <p>
            Caso queira realizar alguma contribuição com o projeto, pode realizar o clone atraves do seguinte comando: <br />
            
            <code className='tile is-6 p-2 is-family-code notification has-text-black-ter has-background-grey-light'>
                git clone https://github.com/gabrielrunescape/WebService.git
            </code>
        </p>

        <p>
            Alguns ajustes iniciais são necessários serem realizados antes de iniciar o projeto: <br />
            
            <code className='tile is-6 p-2 is-family-code notification has-text-black-ter has-background-grey-light'>
                cd WebService
                <br /> npm install
                <br /> node app.js
            </code>
        </p>

        <p>
            Se preferir usar <i>em nodemon</i> ao invés do clássico <i>em node</i>, utilize esta linha de comando: <br />
            <code className='tile is-6 p-2 is-family-code notification has-text-black-ter has-background-grey-light'>
                nodemon appp.js
            </code>
        </p>

        <p>
            Lembrando que, você deve ter instalado o MariaDB(MySQL) e alterar o endereço de acesso no arquivo <i>code db_config.js</i>.
        </p>            
    </div>
</Layout>

/*

class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message) 
        }

        return body;
    };

    render() {
        return (
        <div className="App">
            <header className="App-header">
            [Logo]
            <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">{this.state.data}</p>
        </div>
        );
    }
}

export default App;*/