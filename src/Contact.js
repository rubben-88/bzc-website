import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

import './Contact.css';

const Contact = () => {

    const position = [51.09202164855617, 4.23736186902299];

    return (
        <div className="andere">
            <div className="item">
                <h1 className="title">Registratie</h1>
                <p className="item-content registratie">
                    Er zijn altijd 2 gratis proeflessen waarvoor u gewoon op één van de lesuren mag langskomen. Hier hoeft u niet voor te reserveren. Daarna is de inschrijvingskost €150 per jaar.
                </p>
            </div>
            <div className="item">
                <h1 className="title">Locatie</h1>
                <div className="item-content locatie">
                    <div className="zin">
                        <a>Barelstraat 111/B, 2880 Bornem</a>
                    </div>
                    <MapContainer center={position} zoom={15}>
                        <TileLayer 
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                Bornemse Zwemclub
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <div className="item">
                <h1 className="title">Contact</h1>
                <div className="contact-content">
                    <div className="contacts">
                        <div className="contact">
                            <img className="icon" src="images/contact/mail.svg" alt="mail" />
                            <a>zwemclubbornem@gmail.com</a>
                        </div>
                        <div className="contact">
                            <img className="icon" src="images/contact/phone.svg" alt="phone" />
                            <div className="rows">
                                <div className="row1">
                                    <a>Administratie:</a>
                                </div>
                                <div className="row1">
                                    <a>0483 20 16 62</a>
                                </div>
                                {/*<div className="row2">
                                    <a>Hoofdtrainer:</a>
                                </div>
                                <div className="row2">
                                    <a>0487 46 58 74</a>
                                </div>*/}
                            </div>
                            
                        </div>
                    </div>
                    <div className="icon-buttons">
                        <button 
                            className="icon-button-facebook icon-button" 
                            onClick={() => window.open("https://www.facebook.com/profile.php?id=61550679030068", "_blank")} />
                        <button 
                            className="icon-button-instagram icon-button" 
                            onClick={() => window.open("https://www.instagram.com/bornemse_zwemclub/", "_blank")} />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;