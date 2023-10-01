import Layout from './layout';

<Layout>
    <header className='container'>
        <div className='doc-header'>
            <section className='hero'>
                <div className='hero-body'>
                    <div className='container has-text-justified'>
                        <div className='content'>
                            <h1 className='title is-1'>WebService REST API</h1>
                            <h2 className='subtitle is-2'>Páginas da API do WebService</h2>
                        </div>

                        <h2 id='usuarios' className='subtitle is-2'>Usuários</h2>
                    
                        <div className='content'>
                            <p>
                                Durante o desenvolvimento da API, a consulta de cadastros de usuários, sempre é necessárias 
                                quando se trata de aplicações em que envolvam a autenticação do usuário. Entretando, deve-se 
                                tomar cuidado com quais informações são repassadas durante a consulta.

                                <br />

                                Vale lembrar que os parametros passados sempre são feitos através do <i>body</i> em 
                                formato <strong>x-www-urlencoded</strong> de maneira a evitar injeções por SQL. Além de, a
                                coluna Token ao ser criado um usuário novo tem validade de 7 dias.
                            </p>

                            <p>
                                O módulo de consulta <a href='/usuarios'><strong>usuario</strong></a><strong></strong> está 
                                disponivel para obter, inserir, alterar e apagar informações relacionadas ao usuário dentro 
                                da API. Cada um dos métodos abaixo, explica detalhadmente o seu funcionamento e exemplo de 
                                como devem ser utilizados.
                            </p>

                            <p>
                                Informações pessoais como senhas e documentos <strong>JAMAIS</strong> devem ser exibidas em 
                                uma <a href='/usuarios'>consulta pública</a>. Essas informações devem ser exibidas após a 
                                autenticação.
                            </p>

                            <p>
                                Em métodos de solicitação como POST e PUT algumas informações não devem ser passadas da URI. 
                                Boas práticas de programação, determinam que esses dados devem ser passados através de 
                                paramêtros de formulário do tipo <strong>x-form-urlencoded</strong>.
                            </p>
                        </div>

                        <div className='content'>
                            <table className='table is-striped is-fullwidth'>
                                <thead>
                                    <tr>
                                        <th>Método</th>
                                        <th>Descrição</th>
                                        <th>URL</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><a href='/documentation/methods#get' className='tag is-success'>GET</a></td>
                                        <td>Busca todos os usuários e exibe em um JSON</td>
                                        <td><a href='/usuarios'>/usuarios</a></td>
                                    </tr>

                                    <tr>
                                        <td><a href='/documentation/methods#post' className='tag is-warning'>POST</a></td>
                                        <td>Realiza autenticação através de login e senha</td>
                                        <td><a href='/usuarios'>/usuarios/:login/:senha</a></td>
                                    </tr>

                                    <tr>
                                        <td><a href='/documentation/methods#post' className='tag is-warning'>POST</a></td>
                                        <td>Cria um novo usuário por parametros internos</td>
                                        <td><a href='/usuarios'>/usuarios</a></td>
                                    </tr>

                                    <tr>
                                        <td><a href='/documentation/methods#put' className='tag is-primary'>PUT</a></td>
                                        <td>Altera um usuário através da ID parametrada</td>
                                        <td><a href='/usuarios'>/usuarios/:id</a></td>
                                    </tr>

                                    <tr>
                                        <td><a href='/documentation/methods#delete' className='tag is-danger'>DELETE</a></td>
                                        <td>Apaga um usuário através da ID</td>
                                        <td><a href='/usuarios'>/usuarios/:id</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </header>
</Layout>