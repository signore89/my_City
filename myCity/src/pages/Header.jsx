
import { Link } from 'react-router-dom';
import '../assets/css/Header.css';

function Header(){

    return(
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/home">Домашняя страница</Link>
          </li>
          <li>
            <Link to="/landmarks">Достопримичательносьти</Link>
          </li>
          <li>
            <Link to="/gallery">Галерея</Link>
          </li>
      </ul>
    </nav>
  </header>
    )
}

export default Header;