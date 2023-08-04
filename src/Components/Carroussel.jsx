import React, { useState, useEffect } from 'react';
import "./Carroussel.scss";
import ArrowLeft from "../img/left_arrow.png";
import ArrowRight from "../img/right_arrow.png";


function Carroussel({ image }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const nextImage = () => {
        /*on verifie si l'index actu est egal a la longueur dimage slider -1(derniere img) on remet lindex a 0 pour revenir a la premiere*/
        if (currentIndex === image.length - 1) {
            setCurrentIndex(0);
            /*sinon on incremente l'index*/
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };
    const prevImage = () => {
        /* on verifie si lindex actu est egal a 0 ce qui veut dire 1ere image , si c le cas on reinitialise pour aller vers la derniere img*/
        if (currentIndex === 0) {
            setCurrentIndex(image.length - 1);
            /*sinon on decremente l'index*/
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const resize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', resize); /*appeler la fonction resize a chaque fois que la fenetre est redimensionnée */
    })

    return (
        <section style={{ backgroundImage: `url(${image[currentIndex]})` }} className='carroussel'>
            {image.length > 1 && (<>{/*verifie que la longueur du tableau est superieur a 1 
            (permet d'afficher les fleches et le compteur seulement si il ya + d'une phot dans le carroussel) */}
                <img
                    onClick={nextImage} className='carroussel__arrow carroussel__arrow_right' src={ArrowRight} alt="show the next pictures"

                />
                <img
                    onClick={prevImage} className='carroussel__arrow carroussel__arrow_left' src={ArrowLeft} alt="show the previous pictures"

                />
                {/*permet de cacher le counter sur le carroussel en version mobile */}
                {windowWidth > 480 && (
                    <p className='slideCounter'>{currentIndex + 1} / {image.length}</p>)}
            </>
            )}
        </section>
    );

};

export default Carroussel;