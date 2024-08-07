import { Link } from 'react-router-dom';
import './HeaderMenu.css';

function HeaderMenu() {
  return (
    <div className='header-menu'>
      <div className='header-menu-item'>
        <Link to='/actor'>
          <span>Actor</span>
        </Link>
      </div>
      <div className='header-menu-item'>
        <span>Poster</span>
      </div>
      <div className='header-menu-item'>
        <span>Accessory</span>
      </div>
    </div>
  );
}

export default HeaderMenu;