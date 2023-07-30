import React from 'react';
import './ErrorPage.scss';
import { Link } from 'react-router-dom';



function ErrorPage() {
    return (

        <div className='ErrorPage'>

            <div className='ErrorPage__infos'>
                <h1 className='ErrorPage__infos__title'>404</h1>
                <p className='ErrorPage__infos__content'>Oups! La page que vous demandez n'existe pas.</p>

                <Link className='ErrorPage__infos__return' to='/'>Retourner sur la page d'accueil</Link>
            </div>
        </div>

    )
}

export default ErrorPage;