import React from 'react'
import './Main.scss';
// composant main pour la marge inline des pages , englobe le contenu enfant des partie ou il est utiliser dans l'application//
function Main(props) {
    const { children } = props;
    return (
        <div className='main'>{children}</div>
    )
}

export default Main;