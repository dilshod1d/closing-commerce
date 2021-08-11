import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <img src={Logo} alt='logo' className='logo' />
      </Link>
      <div className='options'>
        <Link to='/shop' className='option'>
          Do'kon
        </Link>
        <Link to='/contact' className='option'>
          Bog'lanish
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Chiqish
          </div>
        ) : (
          <Link to='/kirish' className='option'>
            Kirish
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
