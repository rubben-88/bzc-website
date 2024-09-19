import './Lesuren.css';

const Lesuren = () => {
    return (
        <div className="lesuren">
            <h1 className="title">Lesuren</h1>
            <div className="dates">
                <div className="date maandag">
                    <h3>Maandag</h3>
                    <div className="time">
                        <h4>19u-20u</h4>
                        <ul>
                            <li>Nemo's</li>
                            <li>Waterschildpadjes</li>
                            <li>Kikkers</li>
                        </ul>
                    </div>
                    <div className="time">
                        <h4>20u-21u</h4>
                        <ul>
                            <li>Otters</li>
                            <li>Dolfijnen</li>
                            <li>Sportzwemmers</li>
                            <li>Volwassenen</li>
                        </ul>
                    </div>
                </div>
                <div className="spacer" />
                <div className="date zaterdag">
                    <h3>Zaterdag</h3>
                    <div className="time">
                        <h4>11u-12u</h4>
                        <ul>
                            <li>Sportzwemmers</li>
                            <li>Volwassenen</li>
                        </ul>
                    </div>
                    <div className="time">
                        <h4>12u-13u</h4>
                        <ul>
                            <li>Nemo's</li>
                            <li>Waterschildpadjes</li>
                            <li>Kikkers</li>
                            <li>Otters</li>
                            <li>Dolfijnen</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Lesuren;