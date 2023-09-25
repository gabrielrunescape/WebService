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
                                Classes de metódos utilizados no 
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

                        <h2 id='get' className='subtitle is-2'>GET</h2>
                    
                        <div className='content'>
                            <p>
                                Quando solicitado uma uma requisição do servidor o método retorna dados referentes
                                a solicitação realizada.
                            </p>

                            <p>
                                Ao passar uma solicitação de requisição, tomar em consideração os parametros a a serem
                                passados em cada consulta realizada. Os parametros podem ser passsados de forma pública
                                ou privada desde que respeitando as chaves de cada argumento. Para saber quais as páginas
                                e quais parametros a serem usados consultar <a href='/documentation#ideia'>esta</a> página.                                
                            </p>
                        </div>

                        <h2 id='post' className='subtitle is-2'>POST</h2>

                        <div className='content'>
                            <p>
                                Quando é requisitado ao servidor a inserção de alguma informação e ele retorna alguma mensagem
                                a respeito da requisição solicitada.
                            </p>

                            <p>
                                Uma solicitação ao servidor através do método POST sempre deve conter os parametros devidos
                                para que se haja uma solicitação bem sucedida. Nenhum dado através do método POST deve ser 
                                mantida em cache para efeitos de segurança da informação. Respeite também o limite de informação
                                pois para que o mesmo seja eficaz.
                            </p>
                        </div>

                        <h2 id='put' className='subtitle is-2'>PUT</h2>

                        <div className='content'>
                            <p>
                                Quando é solicitado ao servidor alteração de algum dado já existente na base de dados e o servidor
                                retorna com uma mensagem.
                            </p>

                            <p>
                                Uma requisição é solicitada a espera de uma resposta do servidor para a mudança de uma informação já
                                existente na base de dados. Como resposta a solicitação é enviado uma mensagem informando o estado da
                                mesma.
                            </p>

                            <p>
                                A solicitação é enviada através de parametros previamente passados de forma privada através do método 
                                evitando qualquer injeção indevida de informações. De maneira eficaz, o próprio cliente valida as 
                                informações antes de serem armazenadas na base de dados para evitar quaisquer erros e duplicidade de dados.
                            </p>
                        </div>

                        <h2 id='delete' className='subtitle is-2'>DELETE</h2>

                        <div className='content'>
                            <p>
                                Quando é solicitado ao servidor a remoção de determinada informação da base de dados.
                            </p>

                            <p>
                                Uma solicitação é pedida para o servidor através de determinados parametros para realizar
                                a remoção de informações igual a passada nos parametros. Uma vez apagado, não é possível 
                                reverter a situação, pois assim ao ser solicitado, uma requisição é enviada ao cliente para
                                informar o estado em qual se encontra a solicitação.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </header>
</Layout>