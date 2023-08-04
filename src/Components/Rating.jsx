import React from 'react';
import greyStar from '../img/rate2.png';
import redStar from '../img/rate1.png';

function Rating({ rating }) {
    const stars = Array.from({ length: 5 }, (_, index) => { //crée un nouveau tableau de longueur 5 avec un index pour les etoiles en parametre //
        const src = index + 1 <= rating ? redStar : greyStar; // verifie si la valeur i + 1 est inferieur ou egale a rating et lui attribu redstar ou dans le cas contriare greystar//
        return <img key={index} src={src} alt={`star-${index}`} />; // affiche l'img etoile determiné precedement//
    });
    return <div className='rating'>{stars}</div>;

}

export default Rating;