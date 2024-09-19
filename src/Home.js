import React, { useState } from 'react';
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import './Home.css';
import { ref, onValue } from "firebase/database";
import { db } from './firebase';

register();

const Home = () => {

    const members = [
        {
            alt: "Milan",
            image: "images/team/milan.jpg", 
            text: "Met zijn ervaring als leraar en het geven van talrijke zwemlessen heeft Milan de afgelopen jaren heel wat kennis en vaardigheden opgebouwd. Hij zal dit jaar de Bornemse Zwemclub leiden als hoofdtrainer, waarbij hij niet alleen verantwoordelijk zal zijn voor het aansturen van de trainingen, maar ook voor het coördineren van de dagelijkse activiteiten binnen de club. Milan zal zich richten op het ontwikkelen van een trainingsprogramma dat geschikt is voor zwemmers van alle niveaus. Milan is vastbesloten om dit jaar een positieve impact te hebben op de Bornemse Zwemclub en deze naar een nieuw niveau te tillen."
        },
        {
            alt: "Amélie",
            image: "images/team/amélie.jpg", 
            text: "Dit jaar keert Amélie terug als trainster van de Bornemse Zwemclub. Ze heeft haar hele leven al een passie voor zwemmen en heeft deze passie ontwikkeld bij de Bornemse Zwemclub. Als kind leerde ze er zwemmen en ook tijdens haar middelbare schooljaren was ze aangesloten bij de zwemclub. De club is dan ook zeer verheugd dat Amélie dit jaar terugkeert als trainster. We kijken uit naar haar bijdrage aan het team en hoe ze haar ervaring en enthousiasme zal delen met de zwemmers."
        },
        {
            alt: "Toon",
            image: "images/team/toon.jpg", 
            text: "Dit jaar hebben we het genoegen om Toon te verwelkomen in ons trainersteam. Toon is al enkele jaren actief bij onze club en vanaf dit jaar gaat hij aan de slag als trainer. Met zijn jarenlange ervaring in het zwemmen en zijn diploma als strandredder, beschikt hij over veel kennis en vaardigheden die hij kan delen met onze zwemmers. We zijn dan ook erg blij dat Toon de overstap maakt naar het geven van trainingen en we kijken uit naar een succesvolle samenwerking met hem."
        },
        {
            alt: "Stefan",
            image: "images/team/stefan.jpg", 
            text: "Onze veteraan zal dit jaar een rol spelen in het verzorgen van de bestuurszaken en de Start To Crawl lessen. Bovendien zal hij nauw samenwerken met andere trainers en ervoor zorgen dat de deelnemers een positieve ervaring hebben. Kortom, onze veteraan speelt dit jaar een cruciale rol bij het succes van de club en we zijn blij dat hij deel uitmaakt van ons team."
        },
        {
            alt: "Elsie",
            image: "images/team/elsie.jpg", 
            text: "Elsie is inmiddels een onmisbare kracht binnen de zwemclub geworden. Haar onuitputtelijke enthousiasme, behulpzaamheid en aanstekelijke lach hebben een enorme impact op de kinderen, jongeren en volwassenen die haar zwemlessen volgen. Haar vermogen om kinderen te motiveren en hun zelfvertrouwen te vergroten, is een ware gave en maakt haar lessen niet alleen nuttig, maar ook leuk en boeiend. Het is dan ook met veel vreugde en dankbaarheid dat we Elsie opnieuw mogen verwelkomen in ons team voor het komende jaar."
        },
        {
            alt: "Axelle",
            image: "images/team/axelle.jpg",
            text: "Axelle is al jaren verbonden aan de zwemclub en heeft daar veel ervaring opgedaan. Zo heeft zij bijvoorbeeld al een jaar lesgegeven aan beginnende zwemmers. Als studente lager onderwijs zal zij haar deskundigheid en enthousiasme inzetten om onze jongste leden op te leiden tot uitstekende zwemmers. Door haar ervaring, toewijding en vaardigheden is Axelle een waardevolle toevoeging aan ons team."
        },
        {
            alt: "Tiede",
            image: "images/team/tiede.jpg",
            text: "Tiede heeft al enkele jaren ervaring als trainer en is sinds zijn overgang naar trainer een onmisbare kracht geworden voor de club. Hij heeft een scherp oog voor detail en een passie voor het begeleiden van zwemlessen. Door zijn leergierige houding blijft hij zichzelf ontwikkelen en zoekt hij voortdurend naar manieren om de zwemlessen te verbeteren. Tiede is vastbesloten om de zwemlessen zo goed mogelijk te begeleiden en de leerlingen te helpen hun zwemvaardigheden te verbeteren."
        },
        {
            alt: "Maud",
            image: "images/team/maud.jpg",
            text: "Met haar constante inzet en enthousiasme zal Maud dit zwemseizoen het beste van zichzelf geven voor onze kleinste zwemmers. Ze zal zich voornamelijk toeleggen op onze jongste zwemmers de basisprincipes van een volledige zwemslag bij te brengen. Daarnaast zal ze hen ook begeleiden bij het ontwikkelen van hun zwemvaardigheden, hen aanmoedigen om hun grenzen te verleggen en hen helpen om hun zelfvertrouwen in het water op te bouwen. Maud zal er kortweg alles doen om ervoor te zorgen dat onze kleinste zwemmers een geweldige en leerzame ervaring hebben tijdens het zwemseizoen."
        }
    ]
    
    const swiperElRef = useRef(null);
    const [currentMember, setCurrentMember] = useState(0);

    useEffect(() => {
        /*
        swiperElRef.current.addEventListener('slidechange', (e) => {
            setCurrentMember(e.detail[0].realIndex);
        });
        */
    }, []);

    const [notification, setNotification] = useState("Loading...");
    const notificationRef = ref(db, 'notification');
    onValue(notificationRef, (snapshot) => {
        const data = snapshot.val();
        if( !!data ) {
            if (notification != data) {
                setNotification(data);
            }
        } else {
            const errorString = "Couldn't load the notification...";
            if (notification != errorString) {
                setNotification(errorString);
            }
            console.error("Couldn't load the notification!");
        }  
    });

    return ( 
        <div className="Home">
            <div className='item notification'>
                <img className="icon" src="images/notification.png" alt="notification" />
                <a className='text'>{notification}</a>
            </div>
            {/*
            <div className='item team'>
                <h4 className='meettheteam'>Meet the team!</h4>
                <div className="member-container">
                    <swiper-container navigation="true" pagination="true" loop="true" ref={swiperElRef}>
                        {members.map((member, index) => (
                            <swiper-slide key={index}>
                                <img src={member.image} alt={member.alt} />
                            </swiper-slide>
                        ))}
                    </swiper-container>
                    <p className='text'>{members[currentMember].text}</p>
                </div>
            </div>
            */}
        </div>
    );
}
 
export default Home;