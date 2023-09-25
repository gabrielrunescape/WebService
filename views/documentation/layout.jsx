import Layout from '../layout';

<Layout>
    <div className='container'>
        <div className='columns'>
            <nav className='column is-2'>
                <aside className='menu mt-3'>
                    <ul className='menu-list'>
                        <li>
                            <a href='/documentation'>Introdução</a>
                            
                            <ul className={location === 'documentatioin' ? null : 'is-hidden'}>
                                <li><a href='#ideia'>Ideia</a></li>
                                <li><a href='#recursos'>Recursos</a></li>
                                <li><a href='#utilizacao'>Utilização</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href='/documentation/method'>Métodos</a>

                            <ul className={location === 'methods' ? null : 'is-hidden'}>
                                <li><a href='#get'>GET</a></li>
                                <li><a href='#post'>POST</a></li>
                                <li><a href='#put'>PUT</a></li>
                                <li><a href='#delete'>DELETE</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href='/documentation/pages'>Páginas</a>

                            <ul className={location === 'pages' ? null : 'is-hidden'}>
                                <li><a href='#usuarios'>Usuários</a></li>
                                <li><a href='#funcionarios'>Funcionários</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul className='menu-list'>
                    </ul>
                </aside>
            </nav>

            <main className='column is-10'>
                {children}
            </main>
        </div>
    </div>
</Layout>