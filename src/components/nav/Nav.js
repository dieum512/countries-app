import { Link } from 'react-router-dom';
import backArrow from '../images/backArrow.png'
import settingsIcon from '../images/setting.png'
import micIcon from '../images/mic.png'
import './nav.css'
    
const Nav = () => {
    return (
        <>
            <nav>
                <Link to="/"><img src={backArrow} alt="back-arrow"/></Link>
                <h1>countries</h1>
                <ul className="ul-nav">
                    <li><a href="#"><img src={micIcon} alt="microphone"/></a></li>
                    <li><a href="#"><img src={settingsIcon} alt="settings"/></a></li>
                </ul>
            </nav>
        </>
    )
};

export default Nav;