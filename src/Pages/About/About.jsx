import React from 'react';
import "./About.scss";
import Banner from '../../Components/Banner';
import Collapse from '../../Components/Collapse';
import Main from '../../Components/Main';



function about() {

    const datasCollapseContent = [
        {
            "id": "1",
            "title": "Fiabilité",
            "content": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        },
        {
            "id": "2",
            "title": "Respect",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id": "3",
            "title": "Service",
            "content": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        },
        {
            "id": "4",
            "title": "Sécurité",
            "content": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        }
    ]

    return (
        <Main>
            <Banner />
            <main className='about__main'>
                {/*methode map pour parcourir les elements du tableau datas*/}
                {datasCollapseContent.map(data =>
                (
                    <div key={data.id} className="about__main__collapse">
                        <Collapse title={data.title} content={data.content} />
                    </div>
                )

                )}

            </main>
        </Main>
    )
}
export default about; 