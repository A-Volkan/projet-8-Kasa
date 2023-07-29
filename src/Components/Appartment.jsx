import React from 'react';
import './Appartment.scss';
import { Link } from "react-router-dom";

function Appartment({ datas }) {
    return (
        //permet d'afficher limage de couverture grace a lurl fourni par cover//
        // affiche le titre grace a la propriete tittle//
        <Link to={`/logements/${datas.id}`} className='appartment'>
            <img src={datas.cover} alt={datas.title} />
            <h3>{datas.title}</h3>	</Link>

    )
}

export default Appartment;