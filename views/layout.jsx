<html lang="pt_BR">
    <head>
        <meta charset="UTF-8"/>
        <title>{title}</title>

        <link rel='stylesheet' href='/stylesheet/styles.css' />
        <link rel='icon' href='/favicon.ico' />
    </head>

    <body>
        <div className='navbar is-dark' role='navigation'>
            <div className="container">
                <div className='navbar-brand'>
                    <h3 className="title is-3"><a href='/' className='navbar-item has-text-white'>WebService - API</a></h3>
                </div>

                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <a className='button is-primary' href="/documentation">
                                Documentação
                            </a>

                            <a className='button is-light'>
                                Fala aí
                            </a>
                        </div>
                    </div>
                </div>
            </div>            
        </div>

        {children}

        <footer class="footer has-background-grey-lighter">
            <div className="content has-text-centered">
                <p>
                    Tema do <strong><a href="/">WebService</a></strong> criado por <a href="https://github.com/gabrielrunescape">GabrielRuneScape</a>
                </p>

                <p>
                    <a href="#">Voltar ao topo</a>
                </p>
            </div>
        </footer>
    </body>
</html>
