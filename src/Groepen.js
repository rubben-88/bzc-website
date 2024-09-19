import React from "react";
import './Groepen.css';

const Groepen = () => {

    const groepen = [
        {
            name: "Nemo's",
            color: "#FFCC80",
            image: "images/groepen/nemos.png",
            vaardigheden: [
                "Drijven, hoofd onder water",
                "Pijlen",
                "Benen schoolslag, rug & crawl (begin)"
            ]
        },
        {
            name: "Waterschildpadjes",
            color: "#FFF59D",
            image: "images/groepen/waterschildpadjes.png",
            vaardigheden: [
                "Volledige schoolslag",
                "Verder benen crawl",
                "Duiken van kant (hurk)"
            ]
        },
        {
            name: "Kikkers",
            color:"#CCFF90",
            image: "images/groepen/kikkers.png",
            vaardigheden: [
                "Perfectioneren schoolslag",
                "Volledige crawl",
                "Duiken van kant"
            ]
        },
        {
            name: "Otters",
            color: "#D6B9A4",
            image: "images/groepen/otters.png",
            vaardigheden: [
                "Volledige rugslag",
                "Benen vlinderslag",
                "Duiken van blok",
                "Keerpunten"
            ]
        },
        {
            name: "Dolfijnen",
            color: "#82B1FF",
            image: "images/groepen/dolfijnen.png",
            vaardigheden: [
                "Volledige vlinderslag",
                "Startduik"
            ]
        },
        {
            name: "Sportzwemmers",
            color: "#E8ADFF",
            image: "images/groepen/sportzwemmers.png",
            vaardigheden: [
                "Voortbouwen op vorige"
            ]
        },
        {
            name: "Volwassenen",
            color: "#EEEEEE",
            image: "images/groepen/volwassenen.png",
            vaardigheden: [
                "Vraaggerichte begeleiding",
                "Eigen keuze"
            ]
        }
    ];

    return (
        <div className="groepen">
            <h1 className="title">Groepen</h1>
            <div className="groepen-container">
                {groepen.map((groep, index) => (
                    <div className="groep" key={index} style={{backgroundColor: groep.color}}>
                        <div className="title">
                            <img className="icon" src={groep.image} alt={groep.name} />
                            <h3>{groep.name}</h3>
                            <img className="icon" src={groep.image} alt={groep.name} />
                        </div>
                        <ul className="vaardigheden-lijst">
                            {groep.vaardigheden.map((vaardigheid, index) => (
                                <li className="vaardigheid" key={index}>
                                    {vaardigheid}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Groepen;