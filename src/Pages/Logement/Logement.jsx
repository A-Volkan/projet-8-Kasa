import React from 'react';
import { useEffect, useState, useRef } from "react"
import { useParams, useNavigate } from "react-router-dom";
import './Logement.scss';
import Carroussel from '../../Components/Carroussel';
import datas from '../../Infos/Infos';
import Collapse from '../../Components/Collapse';
import Main from '../../Components/Main';
import Rating from '../../Components/Rating';




function Logement() {
    /* hook usestate pour créer une variable d'état image utilisée pour stocker les images à afficher dans le carrousel */
    const [image, setImage] = useState([]);
    const { id } = useParams(); /* hook useParams pour extraire l'ID de l'hébergement à partir des parametres de URL*/
    const navigate = useNavigate(); /* fonction  de navigation*/
    const CurrentLogement = datas.find(data => data.id === id);/*methode find dans le tableau datas pour trouver l'id correspondant au logement et la stocker dans la variable*/

    const hasFetchedData = useRef(false); /* permet au code dans useEffect de ne pas d'executer plusieur fois si les donnée on deja ete recuperer une premiere fois ,garde une trace de l'état de récupération des données*/


    useEffect(() => {
        if (!hasFetchedData.current) {
            const CurrentLogement = datas.find(data => data.id === id);


            if (CurrentLogement) {
                setImage(CurrentLogement.pictures);

            } else { //affiche la page d'erreur si l'id n'est pas la bonne//
                navigate('/ErrorPage');
                console.log("l'id de l'appartement ne correspond a rien.")
            }

            hasFetchedData.current = true;
        }
    }, [id, navigate]);




    const rating = CurrentLogement?.rating || 0;
    const equipments = CurrentLogement?.equipments || [];
    const description = CurrentLogement?.description || [];




    if (!CurrentLogement) {
        return null;
    }

    return (
        <Main>
            <Carroussel image={image} />
            <main className='logement'>
                <div className='logement__content'>
                    <div className='logement__content__infos'>



                        <h1>{CurrentLogement.title}</h1>
                        <p>{CurrentLogement.location}</p>
                        <div>
                            {CurrentLogement.tags.map((tag, index) => (
                                <button key={index}>{tag}</button>
                            ))}
                        </div>



                    </div>
                    <div className='logement__content__host'>
                        {CurrentLogement.host && (
                            <>

                                <div>
                                    <div className='logement__content__host__name'>
                                        {CurrentLogement.host.name.split(' ').map((namePart, index) => ( //methode split pour diviser en deux partie le nom prenom la chaine de caract .host.name//
                                            <span key={index}>{namePart}</span>
                                        ))}



                                    </div>
                                    <img src={CurrentLogement.host.picture} alt='host of the accomodation'></img>
                                </div></>
                        )}
                        <div className='logement__content__host__stars'>
                            <Rating rating={rating} />
                        </div>

                    </div>

                </div>
                <div className='logement__collapse'>
                    <div className='logement__collapse__content'>
                        <Collapse title={'description'} content={description} />
                    </div>
                    <div className='logement__collapse__content'>
                        <Collapse title={'Equipement'} content={equipments} /> </div>
                </div>
            </main>

        </Main>
    );
}

export default Logement;