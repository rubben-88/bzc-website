import './Fotos.css';
import React, { useRef, useState, useEffect } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import Swiper from 'swiper';

const Fotos = () => {

    const [fotos, setFotos] = useState([]);
    const photosRef = ref(getStorage());
    const swiperRef = useRef(null);
    const [swiperSet, setSwiperSet] = useState(false);

    const [currentNum, setCurrentNum] = useState(null);
    const [totalNum, setTotalNum] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            let result = await listAll(photosRef);
            let urlPromises = result.items.map(imageRef => getDownloadURL(imageRef));
            return Promise.all(urlPromises);
        }

        const loadImages = async () => {
            const urls = await fetchImages();
            setFotos(urls);
            setSwiperSet(true);

            setCurrentNum(0)
            setTotalNum(urls.length)
        }

        loadImages();
    }, []);

    const handlePrevSlide = () => {
        swiperRef.current.swiper.slidePrev();
        setCurrentNum(currentNum-1);
    };
    const handleNextSlide = () => {
        swiperRef.current.swiper.slideNext();
        setCurrentNum(currentNum+1);
    };

    const swiper = new Swiper('.swiper', {
    });

    return (
        <div>
            {swiperSet ? 
                totalNum != 0 ?
                    <div>
                        <div className='navigation'>
                            <button className="slide-button nav-elem" onClick={handlePrevSlide} disabled={currentNum == 0}>vorige</button>
                            <a className="nav-text nav-elem">{(currentNum+1).toString() + "/" + totalNum.toString()}</a>
                            <button className="slide-button nav-elem2" onClick={handleNextSlide} disabled={currentNum == totalNum-1}>volgende</button>
                        </div>
                        <div className='photos-container'>
                            <swiper-container ref={swiperRef} allowSwipeToRight={false}>
                                {fotos.map((url, index) => (
                                    <swiper-slide key={index}>
                                        <img className="image" src={url} alt={url} loading="lazy"/>
                                    </swiper-slide>
                                ))}
                            </swiper-container>
                        </div>
                    </div>
                : 
                <div>
                    Nog geen foto's beschikbaar...
                </div>
            :
            <div>
                Loading...
            </div>}
        </div>
    );
}
 
export default Fotos;

