import React from 'react';
import "./AppartmentGrid.scss";
import Appartment from "./Appartment";
import datas from "../Infos/Infos"; //on recup la datas des appartements dans le fichier json//



function AppartmentGrid() {
    return (
        <div className='grid'>
            {datas.map(data => {//methode map pour creer plusieur composants appartment avec leurs propres données, en fonction des donnée dans le tableau datas//
                return (
                    <Appartment
                        key={data.id}
                        datas={data}
                    //id={data.id}//
                    //title={data.title}//
                    //cover={data.cover}//
                    />
                )
            })}
        </div>
    )
}

export default AppartmentGrid;