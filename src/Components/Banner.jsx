import React from 'react';
import { useLocation } from 'react-router-dom';
import "./Banner.scss";

function Banner() {


    const location = useLocation(); //hook uselocation pour recup lobjet location (lurl)//


    return (

        <section>
            {location.pathname === '/about' ? ( //verifie si le chemin de lurl est about afin dafficher la bonne banniere//
                <div className='Banner__about'></div>
            ) : (
                <div className='Banner'>
                    <p className='Banner__p'>Chez vous, partout et ailleurs</p>
                </div>
            )}
        </section>
    );
}
export default Banner;