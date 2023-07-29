import './Collapse.scss'
import arrow from '../img/up_arrow.png';
import React, { useState } from 'react';

function Collapse({ title, content }) {
    //declaration dune variable detat toggle , et une fonction setToggle//
    const [toggle, setToggle] = useState(false); //variable sur false , non depliée par defaut //

    return (
        // <> </> fragment permet d'envelopper des elements jsx sans avoir a ajouter de balise parent supplementaire//
        <>
            <div className="collapse" >
                <h3 className='collapse__title' onClick={() => setToggle(!toggle)} > {/*inverse la valeur de toggle au clique sur le titre*/}
                    {title}
                    <img
                        /*Determine en fonction de la varirable detat toggle quel fleche utiliser*/
                        className={toggle ? 'arrow arrow_up' : 'arrow arrow_down'}
                        src={arrow}
                        alt="show content"
                    />
                </h3>
                <div className={toggle ? 'collapse__content' : 'collapse__content__hidden'}>{/*Determine en fonction de letat de toggle si il affiche ou pas le contenu */}
                    {Array.isArray(content) ? content.map((item, index) =>
                    /*verifie si la propriete content est bien un tableau avant d'utiliser la methode map pour afficher les elem' du tableau dans des paragraphe <p> autrement il affiche simplement le contenu tel quel */
                    (
                        <p key={index}>{item}</p>
                    )
                    ) : content
                    }
                </div>
            </div>
        </>
    )
}

export default Collapse;