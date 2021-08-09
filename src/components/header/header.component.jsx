import './header.styles.scss';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header = () => {
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
      </div>
    </div>
  );
};

export default Header;
