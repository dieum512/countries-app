import { Link } from 'react-router-dom';
import backArrow from '../images/backArrow.png';
import settingsIcon from '../images/setting.png';
import micIcon from '../images/mic.png';
import './nav.css';

const Nav = () => (
  <>
    <nav>
      <Link to="/"><img src={backArrow} alt="back-arrow" /></Link>
      <h1>countries</h1>
      <ul className="ul-nav">
        <li><button type="button"><img src={micIcon} alt="microphone" /></button></li>
        <li><button type="button"><img src={settingsIcon} alt="settings" /></button></li>
      </ul>
    </nav>
  </>
);

export default Nav;
