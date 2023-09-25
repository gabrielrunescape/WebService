import Layout from './layout';

<Layout>
    <header className='container'>
        <div className='doc-header'>
            <section className='hero'>
                <div className='hero-body'>
                    <div className='container has-text-justified'>
                        <div className='content'>
                            <h1 className='title is-1'>WebService REST API</h1>
                            <h2 className='subtitle is-2'>Documentação da API do WebService</h2>
                        
                            <p>
                                Bem-vindo a página da de documentação da API. Aqui você pode obter 
                                todos os dados de acordo com a API para uso interno das informações 
                                necessárias para que você possa obter um melhor trabalho.
                            </p>

                            <p>
                                A API foi desenvolvida através da <i>screencast</i> 

                                <a href='https://youtu.be/jvNDM5e7TFo'>
                                    Aprenda - em pouco mais de 1 hora - a desenvolver web service 
                                    RESTful com NodeJS e Mongodb
                                </a>
                                
                                de Fábio Vedovelli. 
                            </p>
                        </div>

                        <h2 id='ideia' className='subtitle is-2'>Escolha o método e categoria a ser vista</h2>
                    
                        <div className='content'>
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
                                        <th><a href='/api/put' className='tag is-warning'>PUT</a></th>
                                    </tr>

                                    <tr>
                                        <th>DELETE</th>
                                        <th className='has-text-weight-normal'>/users/:id</th>
                                        <th className='has-text-weight-normal'>Apaga um usuário pela ID informada</th>
                                        <th><a href='/api/delete' className='tag is-danger'>DELETE</a></th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 id='recursos' className='subtitle is-2'>Recursos</h2>

                        <div className='content'>
                            <p>
                                Caso queira realizar alguma contribuição com o projeto, pode realizar 
                                o clone atraves do seguinte comando: <br />
                                
                                <code className='tile is-8 p-2 is-family-code notification has-text-black-ter has-background-grey-light'>
                                    git clone https://github.com/gabrielrunescape/WebService.git
                                </code>
                            </p>

                            <p>
                                Alguns ajustes iniciais são necessários serem realizados antes de 
                                iniciar o projeto: <br />
                                
                                <code className='tile is-8 p-2 is-family-code notification has-text-black-ter has-background-grey-light'>
                                    cd WebService
                                    <br /> npm install
                                    <br /> node app.js
                                </code>
                            </p>

                            <p>
                                Se preferir usar <i>em nodemon</i> ao invés do clássico <i>em node</i>, 
                                utilize esta linha de comando: <br />
                                <code className='tile is-8 p-2 is-family-code notification has-text-black-ter has-background-grey-light'>
                                    nodemon appp.js
                                </code>
                            </p>

                            <p>
                                Lembrando que, você deve ter instalado o MariaDB(MySQL) e alterar o 
                                endereço de acesso no arquivo <i>code db_config.js</i>.
                            </p> 
                        </div>

                        <h2 id='utilizacao' className='subtitle is-2'>Utilização</h2>

                        <div className='content'>
                            <p>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                                ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta 
                                sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, 
                                tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>

                            <p>
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur 
                                ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
                                venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras 
                                mattis consectetur purus sit amet fermentum.
                            </p>

                            <p>
                                Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur 
                                purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </header>
</Layout>